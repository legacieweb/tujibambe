// Backend Server for Tujibambe Booking System
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const PDFDocument = require('pdfkit');

// Load environment variables
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://iyonicorp:iyonicorp@iyonicweb.ypgpsxv.mongodb.net/?retryWrites=true&w=majority&appName=iyonicweb';

mongoose.connect(mongoURI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Booking Model
const bookingSchema = new mongoose.Schema({
    tripId: { type: String, required: true },
    tripName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    participants: { type: Number, required: true },
    startDate: { type: Date, required: true },
    bookingType: { type: String, enum: ['individual', 'group'], default: 'individual' },
    specialRequests: { type: String },
    vehicle: { type: String },
    seats: { type: [Number] },
    totalPrice: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    accountCreated: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Booking = mongoose.model('Booking', bookingSchema);

// User Model for optional account creation
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String },
    name: { type: String },
    phone: { type: String },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date }
});

const User = mongoose.model('User', userSchema);

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-email-password'
    }
});

// Email template for booking confirmation
function sendBookingConfirmation(booking) {
    const mailOptions = {
        from: 'Tujibambe <bookings@tujibambe.com>',
        to: booking.email,
        subject: 'Your Tujibambe Adventure Booking Confirmation',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2d5a27;">🎉 Your Adventure Awaits!</h2>
                <p>Dear ${booking.name},</p>
                <p>Thank you for booking your Kenyan adventure with Tujibambe! We're thrilled to have you join us.</p>
                
                <h3>Booking Details:</h3>
                <ul>
                    <li><strong>Adventure:</strong> ${booking.tripName}</li>
                    <li><strong>Participants:</strong> ${booking.participants}</li>
                    <li><strong>Start Date:</strong> ${new Date(booking.startDate).toLocaleDateString()}</li>
                    <li><strong>Total Price:</strong> $${booking.totalPrice}</li>
                </ul>
                
                <p>Your booking is currently <strong>${booking.status}</strong>. We'll contact you shortly to finalize the details.</p>
                
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard.html?booking=${booking._id}" 
                   style="display: inline-block; background: #2d5a27; color: white; padding: 12px 24px; 
                          text-decoration: none; border-radius: 6px; margin: 20px 0;">
                    View Your Booking Dashboard
                </a>
                
                <p>Optional: Create an account to manage all your bookings in one place and get exclusive benefits!</p>
                
                <p>If you have any questions, please reply to this email or contact us at +254 700 123 456.</p>
                
                <p>Get ready for an unforgettable adventure!</p>
                <p>The Tujibambe Team</p>
            </div>
        `
    };
    
    return transporter.sendMail(mailOptions);
}

// API Routes
app.post('/api/bookings', async (req, res) => {
    try {
        const bookingData = req.body;
        
        // Create booking
        const booking = new Booking(bookingData);
        await booking.save();
        
        // Send confirmation email
        await sendBookingConfirmation(booking);
        
        res.status(201).json({
            success: true,
            bookingId: booking._id,
            message: 'Booking created successfully! Check your email for confirmation.'
        });
        
    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating booking',
            error: error.message
        });
    }
});

// Generate PDF confirmation
app.get('/api/bookings/:id/confirmation', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found' });
        }
        
        // Create PDF document
        const doc = new PDFDocument();
        
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=booking-${booking._id}.pdf`);
        
        // Pipe PDF to response
        doc.pipe(res);
        
        // Add content to PDF
        doc.fontSize(25).text('Tujibambe Adventure Booking Confirmation', { align: 'center' });
        doc.moveDown();
        
        doc.fontSize(18).text(`Booking ID: ${booking._id}`, { align: 'left' });
        doc.fontSize(18).text(`Status: ${booking.status}`, { align: 'right' });
        doc.moveDown();
        
        doc.fontSize(20).text('Adventure Details:', { underline: true });
        doc.moveDown();
        
        doc.fontSize(14).text(`Adventure: ${booking.tripName}`);
        doc.fontSize(14).text(`Participants: ${booking.participants}`);
        doc.fontSize(14).text(`Start Date: ${new Date(booking.startDate).toLocaleDateString()}`);
        doc.fontSize(14).text(`Total Price: $${booking.totalPrice}`);
        
        if (booking.vehicle) {
            doc.fontSize(14).text(`Vehicle: ${booking.vehicle}`);
        }
        
        if (booking.seats && booking.seats.length > 0) {
            doc.fontSize(14).text(`Seats: ${booking.seats.join(', ')}`);
        }
        
        doc.moveDown();
        doc.fontSize(20).text('Customer Information:', { underline: true });
        doc.moveDown();
        
        doc.fontSize(14).text(`Name: ${booking.name}`);
        doc.fontSize(14).text(`Email: ${booking.email}`);
        doc.fontSize(14).text(`Phone: ${booking.phone}`);
        
        if (booking.specialRequests) {
            doc.moveDown();
            doc.fontSize(20).text('Special Requests:', { underline: true });
            doc.moveDown();
            doc.fontSize(14).text(booking.specialRequests);
        }
        
        doc.moveDown();
        doc.fontSize(12).text('Thank you for choosing Tujibambe! Get ready for an unforgettable adventure.', { align: 'center' });
        doc.fontSize(10).text('For any questions, please contact us at info@tujibambe.com or +254 700 123 456', { align: 'center' });
        
        doc.end();
        
    } catch (error) {
        console.error('PDF generation error:', error);
        res.status(500).json({ success: false, message: 'Error generating PDF' });
    }
});

// Get booking by ID
app.get('/api/bookings/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found' });
        }
        res.json({ success: true, booking });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching booking' });
    }
});

// Optional account creation
app.post('/api/users', async (req, res) => {
    try {
        const { email, password, name, phone, bookingId } = req.body;
        
        // Check if user already exists
        let user = await User.findOne({ email });
        
        if (user) {
            // Update existing user
            user.name = name || user.name;
            user.phone = phone || user.phone;
            if (password) user.password = password; // In production, hash this!
            if (bookingId && !user.bookings.includes(bookingId)) {
                user.bookings.push(bookingId);
            }
        } else {
            // Create new user
            user = new User({
                email,
                password, // In production, hash this!
                name,
                phone,
                bookings: bookingId ? [bookingId] : []
            });
        }
        
        await user.save();
        
        // Update booking with user reference
        if (bookingId) {
            await Booking.findByIdAndUpdate(bookingId, {
                userId: user._id,
                accountCreated: true
            });
        }
        
        res.status(201).json({
            success: true,
            userId: user._id,
            message: user ? 'Account updated successfully' : 'Account created successfully'
        });
        
    } catch (error) {
        console.error('Account creation error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating account',
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;