// Trip data for booking details
const tripData = {
    'coastal-drive': {
        name: 'Mombasa to Lamu Coastal Drive',
        duration: '7 days',
        price: '$1,200',
        description: '7 days of pristine beaches, Swahili culture, and Indian Ocean sunsets.',
        vehicle: 'Toyota Land Cruiser 4x4',
        vehicleFeatures: ['Reclining leather seats', 'Panoramic roof for coastal views', 'Onboard cooler stocked with refreshments'],
        tripHighlights: ['Sunset dhow cruise in Lamu', 'Guided exploration of the Gedi Ruins', 'Private beach bonfire with live taarab music'],
        inclusions: ['All meals', 'Accommodation in beach resorts', 'Guided tours', 'Swahili cultural experiences'],
        itinerary: [
            'Day 1: Arrival in Mombasa, beach relaxation',
            'Day 2-3: Coastal drive to Malindi, snorkeling',
            'Day 4-5: Lamu Island exploration, dhow sailing',
            'Day 6: Return drive, cultural village visit',
            'Day 7: Departure from Mombasa'
        ]
    },
    'mount-kenya': {
        name: 'Mount Kenya Circuit',
        duration: '5 days',
        price: '$950',
        description: 'Circumnavigate Africa\'s second-highest peak through forests and wildlife reserves.',
        vehicle: 'Toyota Prado 4x4',
        vehicleFeatures: ['All-terrain suspension tuned for mountain roads', 'Heated seats for alpine mornings', 'Roof rack for gear and luggage'],
        tripHighlights: ['Summit sunrise over Lenana Peak', 'Lunch with ranger naturalist in Mt Kenya forest', 'Private stargazing session above the clouds'],
        inclusions: ['All meals', 'Mountain lodge accommodation', 'Park fees', 'Guided hikes'],
        itinerary: [
            'Day 1: Nairobi to Nanyuki, Sirimon Gate',
            'Day 2: Trek to Old Moses camp',
            'Day 3: Summit attempt, descend to Shipton\'s camp',
            'Day 4: Chogoria route descent',
            'Day 5: Return to Nairobi'
        ]
    },
    'rift-valley': {
        name: 'Rift Valley Explorer',
        duration: '6 days',
        price: '$1,050',
        description: 'Traverse the Great Rift Valley, visiting lakes, craters, and Maasai communities.',
        vehicle: 'Land Rover Discovery',
        vehicleFeatures: ['Independent terrain response system', 'USB charging ports at every seat', 'Onboard Wi-Fi for sharing those Rift selfies'],
        tripHighlights: ['Sunrise canoe on Lake Naivasha', 'Lunch in a suspended cliff restaurant overlooking the valley', 'Drone photography masterclass above Lake Elementaita'],
        inclusions: ['All meals', 'Lodge accommodation', 'Boat safaris', 'Maasai village visits'],
        itinerary: [
            'Day 1: Nairobi to Lake Naivasha',
            'Day 2: Hell\'s Gate National Park',
            'Day 3: Maasai Mara game drive',
            'Day 4: Lake Magadi and hot springs',
            'Day 5: Amboseli National Park',
            'Day 6: Return to Nairobi'
        ]
    },
    'northern-frontier': {
        name: 'Northern Frontier Safari Drive',
        duration: '8 days',
        price: '$1,400',
        description: 'Venture into Kenya\'s northern regions, home to Samburu and Turkana cultures.',
        vehicle: 'Toyota Hilux 4x4',
        vehicleFeatures: ['Long-range auxiliary fuel tanks', 'Satellite communication system', 'All-weather rooftop tent for overnight stops'],
        tripHighlights: ['Sundowner with Samburu warriors on Mt Ololokwe', 'Camel caravan escort through Chalbi Desert', 'Stargazing under pristine Turkana skies'],
        inclusions: ['All meals', 'Camping and lodge stays', 'Cultural experiences', 'Wildlife viewing'],
        itinerary: [
            'Day 1: Nairobi to Isiolo',
            'Day 2-3: Samburu National Reserve',
            'Day 4: Marsabit Mountain',
            'Day 5-6: Chalbi Desert and Lake Turkana',
            'Day 7: Return drive',
            'Day 8: Arrival in Nairobi'
        ]
    },
    'safari-run': {
        name: 'Ultimate Safari Run',
        duration: '3 days',
        price: '$800',
        description: 'Run with the wildebeest migration in the Maasai Mara. Experience the raw power of nature up close.',
        vehicle: 'Toyota Hilux 4x4',
        vehicleFeatures: ['Custom hydration stations in cargo bed', 'High-beam LED light bar for dawn runs', 'Emergency medical kit with wilderness EMT'],
        tripHighlights: ['Sunrise warm-up jog alongside Maasai scouts', 'Finish-line brunch overlooking the Mara River', 'Professional photographer capturing your run'],
        inclusions: ['All meals', 'Camp accommodation', 'Running guides', 'Wildlife tracking'],
        itinerary: [
            'Day 1: Nairobi to Maasai Mara, evening game drive',
            'Day 2: Dawn migration run, full day safari',
            'Day 3: Morning run, return to Nairobi'
        ]
    },
    'mountain-biking': {
        name: 'Extreme Mountain Biking in the Aberdares',
        duration: '2 days',
        price: '$450',
        description: 'Conquer rugged trails and steep descents through Kenya\'s misty forests and bamboo zones.',
        vehicle: 'Mountain bike support vehicle',
        inclusions: ['All meals', 'Mountain lodge', 'Bike rental', 'Professional guides'],
        itinerary: [
            'Day 1: Nairobi to Aberdares, easy trails',
            'Day 2: Challenging descents, return to Nairobi'
        ]
    },
    'hot-air-balloon': {
        name: 'Hot Air Balloon Safari at Dawn',
        duration: '1 day',
        price: '$350',
        description: 'Soar above the savanna at sunrise, witnessing the awakening of the wild in serene silence.',
        vehicle: 'Hot air balloon (transported by truck)',
        inclusions: ['Champagne breakfast', 'Certificate', 'Transfer to/from Nairobi'],
        itinerary: [
            'Early morning pickup, balloon ride over Maasai Mara',
            'Champagne breakfast on landing',
            'Return to Nairobi by afternoon'
        ]
    },
    'white-water-rafting': {
        name: 'White Water Rafting on the Tana River',
        duration: '2 days',
        price: '$550',
        description: 'Navigate Class IV rapids through dramatic gorges and lush river valleys.',
        vehicle: 'Rafting support vehicle',
        inclusions: ['All meals', 'Camp accommodation', 'Rafting equipment', 'Professional guides'],
        itinerary: [
            'Day 1: Nairobi to Sagana, rafting training',
            'Day 2: Full day rafting, return to Nairobi'
        ]
    },
    'scuba-diving': {
        name: 'Scuba Diving in the Indian Ocean',
        duration: '3 days',
        price: '$700',
        description: 'Explore vibrant coral reefs and encounter marine life in Kenya\'s coastal waters.',
        vehicle: 'Diving boat',
        inclusions: ['All meals', 'Beach resort', 'Diving equipment', 'PADI certified instructors'],
        itinerary: [
            'Day 1: Mombasa arrival, pool training',
            'Day 2: Reef dives, marine life spotting',
            'Day 3: Advanced dives, departure'
        ]
    },
    'rock-climbing': {
        name: 'Rock Climbing in Tsavo National Park',
        duration: '4 days',
        price: '$900',
        description: 'Scale ancient volcanic rocks amidst elephant herds and breathtaking vistas.',
        vehicle: '4x4 support vehicle',
        inclusions: ['All meals', 'Camp accommodation', 'Climbing gear', 'Professional climbers'],
        itinerary: [
            'Day 1: Nairobi to Tsavo, base camp setup',
            'Day 2-3: Climbing various routes',
            'Day 4: Final climbs, return to Nairobi'
        ]
    },
    'maasai-cultural': {
        name: 'Maasai Cultural Immersion',
        duration: '3 days',
        price: '$600',
        description: 'Live with Maasai warriors, learn their traditions, and participate in age-old ceremonies.',
        vehicle: 'Toyota Land Cruiser',
        inclusions: ['All meals', 'Maasai homestead stay', 'Cultural activities', 'Traditional ceremonies'],
        itinerary: [
            'Day 1: Nairobi to Maasai village, welcome ceremony',
            'Day 2: Daily life activities, cattle herding',
            'Day 3: Traditional dance, return to Nairobi'
        ]
    },
    'fort-jesus': {
        name: 'Historical Fort Jesus Tour',
        duration: '1 day',
        price: '$150',
        description: 'Explore Mombasa\'s 16th-century Portuguese fort and learn about Kenya\'s colonial history.',
        vehicle: 'Private minibus',
        inclusions: ['Guided tour', 'Museum entry', 'Lunch', 'Transfers'],
        itinerary: [
            'Morning pickup, fort exploration',
            'Afternoon museum and old town walk',
            'Evening return to hotel'
        ]
    },
    'tea-plantation': {
        name: 'Tea Plantation Experience',
        duration: '2 days',
        price: '$300',
        description: 'Walk through Kenya\'s famous tea estates, learn about tea production, and enjoy traditional lunches.',
        vehicle: 'Private vehicle',
        inclusions: ['All meals', 'Tea estate accommodation', 'Factory tour', 'Tea tasting'],
        itinerary: [
            'Day 1: Nairobi to Kericho, estate walk',
            'Day 2: Factory tour, tea picking, return'
        ]
    },
    'swahili-cooking': {
        name: 'Swahili Cooking Class',
        duration: '1 day',
        price: '$120',
        description: 'Master the art of Swahili cuisine with local chefs in a coastal village setting.',
        vehicle: 'Private transfer',
        inclusions: ['Cooking class', 'Traditional lunch', 'Recipe booklet', 'Market visit'],
        itinerary: [
            'Morning pickup, spice market tour',
            'Afternoon cooking class and meal',
            'Evening return'
        ]
    },
    'wildlife-photography': {
        name: 'Wildlife Photography Workshop',
        duration: '4 days',
        price: '$850',
        description: 'Learn professional photography techniques while capturing Kenya\'s incredible wildlife.',
        vehicle: 'Safari vehicle with pop-up roof',
        inclusions: ['All meals', 'Lodge accommodation', 'Photography instruction', 'Editing session'],
        itinerary: [
            'Day 1: Nairobi to Maasai Mara, camera setup',
            'Day 2-3: Guided photography sessions',
            'Day 4: Editing workshop, return to Nairobi'
        ]
    },
    'beach-yoga': {
        name: 'Beach Yoga Retreat',
        duration: '5 days',
        price: '$750',
        description: 'Find inner peace with sunrise yoga sessions on pristine Kenyan beaches.',
        vehicle: 'Not applicable (beach-based)',
        inclusions: ['All meals', 'Beach bungalow', 'Daily yoga', 'Meditation sessions'],
        itinerary: [
            'Day 1: Arrival, welcome yoga',
            'Day 2-4: Morning yoga, afternoon activities',
            'Day 5: Farewell session, departure'
        ]
    }
};

// Particle system for futuristic effects
class ParticleSystem {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particle-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle(x, y) {
        return {
            x: x || Math.random() * this.canvas.width,
            y: y || Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            life: Math.random() * 100 + 50,
            maxLife: Math.random() * 100 + 50,
            color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Add new particles occasionally
        if (Math.random() < 0.1) {
            this.particles.push(this.createParticle());
        }

        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life--;

            if (p.life <= 0 || p.x < 0 || p.x > this.canvas.width || p.y < 0 || p.y > this.canvas.height) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.life / p.maxLife;
            this.ctx.fill();
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Interactive carousel for trip cards
class TripCarousel {
    constructor(container) {
        this.container = container;
        this.cards = Array.from(container.querySelectorAll('.trip-card'));
        this.currentIndex = 0;
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.cards.forEach((card, index) => {
            card.style.transform = `translateX(${index * 100}%)`;
            card.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto-play
        setInterval(() => {
            if (!this.isAnimating) {
                this.nextSlide();
            }
        }, 5000);
    }

    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        this.isAnimating = true;

        const direction = index > this.currentIndex ? -1 : 1;
        const distance = Math.abs(index - this.currentIndex);

        this.cards.forEach((card, i) => {
            const newPosition = (i - index) * 100;
            card.style.transition = 'transform 0.5s ease-in-out';
            card.style.transform = `translateX(${newPosition}%)`;
        });

        setTimeout(() => {
            this.currentIndex = index;
            this.isAnimating = false;
        }, 500);
    }

    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.goToSlide(nextIndex);
    }
}

// Scroll-triggered animations
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in-scroll');
        this.init();
    }

    init() {
        this.checkVisibility();
        window.addEventListener('scroll', () => this.checkVisibility());
    }

    checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        this.elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('in-view');
            }
        });
    }
}

// Modal system for trip details
class ModalSystem {
    constructor() {
        this.modal = null;
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn') && e.target.closest('.trip-card')) {
                e.preventDefault();
                const tripCard = e.target.closest('.trip-card');
                const tripLink = tripCard.querySelector('a[href*="booking.html"]');
                if (tripLink) {
                    const tripId = tripLink.href.split('trip=')[1];
                    this.showTripModal(tripId);
                }
            }
        });
    }

    showTripModal(tripId) {
        const trip = tripData[tripId];
        if (!trip) return;

        this.modal = document.createElement('div');
        this.modal.className = 'modal-overlay';
        this.modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${trip.name}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="${trip.name}">
                    </div>
                    <div class="modal-details">
                        <p><strong>Duration:</strong> ${trip.duration}</p>
                        <p><strong>Price:</strong> ${trip.price}</p>
                        <p>${trip.description}</p>
                        <h3>Vehicle</h3>
                        <p>${trip.vehicle}</p>
                        <h3>What's Included</h3>
                        <ul>
                            ${trip.inclusions.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        <h3>Itinerary</h3>
                        <ol>
                            ${trip.itinerary.map(day => `<li>${day}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="booking.html?trip=${tripId}" class="btn">Book Now</a>
                </div>
            </div>
        `;

        document.body.appendChild(this.modal);

        // Animate modal in
        setTimeout(() => {
            this.modal.classList.add('active');
        }, 10);

        // Close modal events
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal || e.target.classList.contains('modal-close')) {
                this.closeModal();
            }
        });
    }

    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(this.modal);
                this.modal = null;
            }, 300);
        }
    }
}

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to display trip details
function displayTripDetails(tripId) {
    const trip = tripData[tripId];
    if (trip) {
        const detailsDiv = document.getElementById('trip-details');
        detailsDiv.innerHTML = `
            <h2>${trip.name}</h2>
            <p><strong>Duration:</strong> ${trip.duration}</p>
            <p><strong>Price:</strong> ${trip.price}</p>
            <p>${trip.description}</p>
            <h3>Vehicle</h3>
            <p>${trip.vehicle}</p>
            <h3>What's Included</h3>
            <ul>
                ${trip.inclusions.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Itinerary</h3>
            <ol>
                ${trip.itinerary.map(day => `<li>${day}</li>`).join('')}
            </ol>
        `;
    }
}

// Single-page booking form functionality
class BookingForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.selectedTrip = null;
        this.init();
    }

    init() {
        // Get selected trip from URL
        const tripId = getUrlParameter('trip');
        if (tripId && tripData[tripId]) {
            this.selectedTrip = tripData[tripId];
            this.displaySelectedTrip();
        } else {
            // If no trip selected, show message and redirect
            const summaryDiv = document.getElementById('selected-trip-summary');
            if (summaryDiv) {
                summaryDiv.innerHTML = `
                    <div style="text-align: center; color: #ff6b6b; padding: 20px;">
                        <p style="font-size: 1.1rem; margin-bottom: 15px;">No trip selected.</p>
                        <p>Please go back and select a trip to book.</p>
                        <button onclick="window.history.back()" style="margin-top: 15px; padding: 10px 20px; background: #00ffff; border: none; border-radius: 5px; color: #000; cursor: pointer; font-weight: bold;">Back to Trips</button>
                    </div>
                `;
            }
        }

        // Add real-time validation and summary updates
        this.form.addEventListener('input', (e) => {
            if (e.target.id === 'participants' || e.target.id === 'start-date') {
                this.updateBookingSummary();
            }
        });

        this.form.addEventListener('submit', (e) => this.submitBooking(e));
    }

    displaySelectedTrip() {
        const summaryDiv = document.getElementById('selected-trip-summary');
        if (this.selectedTrip) {
            summaryDiv.innerHTML = `
                <div class="trip-summary-header">
                    <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" alt="${this.selectedTrip.name}">
                    <div>
                        <h4>${this.selectedTrip.name}</h4>
                        <p>${this.selectedTrip.description}</p>
                    </div>
                </div>
                <div class="trip-summary-details">
                    <p><strong>Duration:</strong> ${this.selectedTrip.duration}</p>
                    <p><strong>Price per person:</strong> ${this.selectedTrip.price}</p>
                    <p><strong>Vehicle:</strong> ${this.selectedTrip.vehicle}</p>
                </div>
            `;
            this.updateBookingSummary();
        }
    }

    updateBookingSummary() {
        const confirmationDiv = document.getElementById('booking-confirmation');
        const participants = document.getElementById('participants').value || 1;
        const startDate = document.getElementById('start-date').value;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!this.selectedTrip) return;

        const pricePerPerson = parseInt(this.selectedTrip.price.replace('$', '').replace(',', ''));
        const totalPrice = pricePerPerson * parseInt(participants);

        confirmationDiv.innerHTML = `
            <div class="confirmation-item">
                <span class="confirmation-label">Trip:</span>
                <span class="confirmation-value">${this.selectedTrip.name}</span>
            </div>
            <div class="confirmation-item">
                <span class="confirmation-label">Duration:</span>
                <span class="confirmation-value">${this.selectedTrip.duration}</span>
            </div>
            ${startDate ? `
            <div class="confirmation-item">
                <span class="confirmation-label">Start Date:</span>
                <span class="confirmation-value">${new Date(startDate).toLocaleDateString()}</span>
            </div>
            ` : ''}
            <div class="confirmation-item">
                <span class="confirmation-label">Participants:</span>
                <span class="confirmation-value">${participants}</span>
            </div>
            <div class="confirmation-item">
                <span class="confirmation-label">Price per person:</span>
                <span class="confirmation-value">$${pricePerPerson}</span>
            </div>
            <div class="confirmation-item">
                <span class="confirmation-label total-price">Total Price:</span>
                <span class="confirmation-value total-price">$${totalPrice}</span>
            </div>
            ${name ? `
            <div class="confirmation-item">
                <span class="confirmation-label">Name:</span>
                <span class="confirmation-value">${name}</span>
            </div>
            ` : ''}
            ${email ? `
            <div class="confirmation-item">
                <span class="confirmation-label">Email:</span>
                <span class="confirmation-value">${email}</span>
            </div>
            ` : ''}
            ${phone ? `
            <div class="confirmation-item">
                <span class="confirmation-label">Phone:</span>
                <span class="confirmation-value">${phone}</span>
            </div>
            ` : ''}
        `;
    }

    validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const participants = document.getElementById('participants').value;
        const startDate = document.getElementById('start-date').value;

        if (!name || !email || !phone || !participants || !startDate) {
            alert('Please fill in all required fields.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('Please enter a valid phone number.');
            return false;
        }

        const today = new Date();
        const selectedDate = new Date(startDate);
        if (selectedDate <= today) {
            alert('Please select a start date in the future.');
            return false;
        }

        return true;
    }

    submitBooking(event) {
        event.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        const termsAccepted = document.getElementById('terms').checked;
        if (!termsAccepted) {
            alert('Please accept the Terms and Conditions to proceed.');
            return;
        }

        // In a real application, this would send data to a server
        alert('🎉 Booking submitted successfully! We will contact you soon with confirmation details.');
        // Reset form and redirect to home
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

// Form validation and submission (legacy function for compatibility)
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const participants = document.getElementById('participants').value;
    const startDate = document.getElementById('start-date').value;

    if (!name || !email || !phone || !participants || !startDate) {
        alert('Please fill in all required fields.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        alert('Please enter a valid phone number.');
        return false;
    }

    const today = new Date();
    const selectedDate = new Date(startDate);
    if (selectedDate <= today) {
        alert('Please select a start date in the future.');
        return false;
    }

    return true;
}

function submitBooking(event) {
    event.preventDefault();
    if (validateForm()) {
        // In a real application, this would send data to a server
        alert('Booking submitted successfully! We will contact you soon with confirmation details.');
        document.getElementById('booking-form').reset();
    }
}

// Typing effect for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animated counter for stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
function initStatsAnimation() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(animateCounter);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

// Footer Interactive Features
function initFooterInteractions() {
    // Add interactive hover effects to footer links
    const footerLinks = document.querySelectorAll('.footer-link, .social-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
        
        // Add click ripple effect
        link.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            // Position ripple at click location
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // Add ripple to link
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add footer section hover animations
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add ripple effect styles dynamically
    const style = document.createElement('style');
    style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(74, 124, 89, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        width: 20px;
        height: 20px;
        z-index: 1000;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const isBookingPage = document.body.classList.contains('booking-page');

    if (!isBookingPage) {
        const particles = new ParticleSystem();
        const scrollAnimations = new ScrollAnimations();
        const modalSystem = new ModalSystem();
        const tripGrids = document.querySelectorAll('.trips-grid');
        tripGrids.forEach(grid => {
            new TripCarousel(grid);
        });
        initStatsAnimation();
        const fadeElements = document.querySelectorAll('.category-card, .trip-card, .booking-form, .trip-details');
        fadeElements.forEach(el => el.classList.add('fade-in-scroll'));
        const heroText = document.querySelector('.hero p');
        if (heroText) {
            setTimeout(() => {
                typeWriter(heroText, heroText.textContent, 30);
            }, 1000);
        }
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.animation = 'pulse 0.3s ease-in-out';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.animation = '';
            });
        });
        
        // Initialize footer interactions
        initFooterInteractions();
    }

    const tripId = getUrlParameter('trip');
    if (tripId && tripData[tripId]) {
        displayTripDetails(tripId);
    }

    // Only initialize BookingForm on non-booking pages
    if (!isBookingPage && document.getElementById('booking-form')) {
        new BookingForm('booking-form');
    }
});