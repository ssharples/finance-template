




        <div id="blosm-step-2" class="blosm-popup-step" style="display: none;">
            <button class="blosm-popup-back" onclick="blosmPopup.prevStep()">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
                Back
            </button>

            <h2 class="blosm-popup-title">Schedule Your Call</h2>
            <p class="blosm-popup-subtitle">Pick a time that works best for you</p>

            <form id="blosm-booking-form" class="blosm-booking-form">
                <!-- Hidden fields - Pre-populated from Notion -->
                <input type="hidden" id="business-id" name="business_id" value="">

                <div class="blosm-form-group">
                    <label for="contact-name">Your Name</label>
                    <input type="text" id="contact-name" name="name" placeholder="John Smith" required>
                </div>

                <div class="blosm-form-group">
                    <label for="contact-email">Email Address</label>
                    <input type="email" id="contact-email" name="email" placeholder="john@example.com" required>
                </div>

                <div class="blosm-form-group">
                    <label for="contact-phone">Phone Number (Optional)</label>
                    <input type="tel" id="contact-phone" name="phone" placeholder="01772 491302">
                </div>

                <div class="blosm-form-group">
                    <label for="company-name">Company Name</label>
                    <input type="text" id="company-name" name="company" placeholder="ABC Dental Practice" required>
                </div>

                <div class="blosm-form-row">
                    <div class="blosm-form-group">
                        <label for="booking-date">Preferred Date</label>
                        <input type="date" id="booking-date" name="date" required>
                    </div>

                    <div class="blosm-form-group">
                        <label for="booking-time">Preferred Time</label>
                        <select id="booking-time" name="time" required>
                            <option value="">Select time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="09:30">9:30 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="10:30">10:30 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="15:30">3:30 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="16:30">4:30 PM</option>
                        </select>
                    </div>
                </div>

                <div class="blosm-form-group">
                    <label for="booking-timezone">Timezone</label>
                    <select id="booking-timezone" name="timezone" required>
                        <option value="America/New_York">Eastern Time (ET)</option>
                        <option value="America/Chicago">Central Time (CT)</option>
                        <option value="America/Denver">Mountain Time (MT)</option>
                        <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        <option value="America/Anchorage">Alaska Time (AKT)</option>
                        <option value="Pacific/Honolulu">Hawaii Time (HT)</option>
                        <option value="Europe/London">London (GMT)</option>
                        <option value="Europe/Paris">Paris (CET)</option>
                        <option value="Asia/Tokyo">Tokyo (JST)</option>
                        <option value="Australia/Sydney">Sydney (AEDT)</option>
                    </select>
                </div>

                <div class="blosm-form-group">
                    <label for="booking-notes">Additional Notes (Optional)</label>
                    <textarea id="booking-notes" name="notes" placeholder="Any specific topics you'd like to discuss?"></textarea>
                </div>

                <button type="submit" class="blosm-form-submit" id="blosm-submit-btn">
                    Confirm Booking
                </button>
            </form>
        </div>

        <!-- Step 3: Confirmation -->
        <div id="blosm-step-3" class="blosm-popup-step" style="display: none;">
            <div class="blosm-confirmation-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
            </div>

            <h2 class="blosm-popup-title" style="text-align: center;">You're All Set! 🎉</h2>
            <p class="blosm-popup-subtitle" style="text-align: center;">Your consultation has been booked successfully.</p>

            <div class="blosm-confirmation-details">
                <div class="blosm-confirmation-row">
                    <span class="blosm-confirmation-label">📅 Date & Time:</span>
                    <span class="blosm-confirmation-value" id="confirm-datetime">-</span>
                </div>
                <div class="blosm-confirmation-row">
                    <span class="blosm-confirmation-label">👤 With:</span>
                    <span class="blosm-confirmation-value">Scott Sharples</span>
                </div>
                <div class="blosm-confirmation-row">
                    <span class="blosm-confirmation-label">📧 Confirmation:</span>
                    <span class="blosm-confirmation-value">Sent to <span id="confirm-email">-</span></span>
                </div>
                <div class="blosm-confirmation-row">
                    <span class="blosm-confirmation-label">🎥 Meeting Link:</span>
                    <span class="blosm-confirmation-value"><a href="#" id="confirm-meet-link" target="_blank">Join via Google Meet</a></span>
                </div>
            </div>

            <button class="blosm-popup-cta" onclick="blosmPopup.close()">
                Close
            </button>

            <p class="blosm-popup-footer-text">A calendar invite has been sent to your email with all the details.</p>
        </div>
    </div>
</div>

<!-- Floating Button to Reopen Popup -->
<button id="blosm-floating-button" class="blosm-floating-btn" onclick="blosmPopup.show()" style="display: none;">
    <img src="assets/images/blosm-logo-2.svg" alt="Blosm" class="blosm-floating-logo">
</button>

<!-- Popup JavaScript -->
<script>
const blosmPopup = {
    currentStep: 1,
    triggered: false,
    businessData: null,

    init() {
        // Load business data from meta tags
        this.loadBusinessData();

        // Set up scroll listener
        window.addEventListener('scroll', () => this.checkScroll());

        // Set up form submission
        const form = document.getElementById('blosm-booking-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        // Set minimum date to tomorrow
        const dateInput = document.getElementById('booking-date');
        if (dateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = tomorrow.toISOString().split('T')[0];
        }

        // Auto-detect timezone
        const timezoneSelect = document.getElementById('booking-timezone');
        if (timezoneSelect) {
            const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const option = Array.from(timezoneSelect.options).find(opt => opt.value === userTimezone);
            if (option) {
                timezoneSelect.value = userTimezone;
            }
        }
    },

    loadBusinessData() {
        // First, try to get data from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const urlEmail = urlParams.get('email');
        const urlName = urlParams.get('name');
        const urlCompany = urlParams.get('company');
        const urlBusinessId = urlParams.get('business_id');
        const urlPhone = urlParams.get('phone');

        // Then, fetch business data from meta tags injected by template engine
        const businessIdMeta = document.querySelector('meta[name="blosm-business-id"]');
        const businessNameMeta = document.querySelector('meta[name="blosm-business-name"]');
        const contactEmailMeta = document.querySelector('meta[name="blosm-contact-email"]');
        const contactNameMeta = document.querySelector('meta[name="blosm-contact-name"]');

        // Priority: URL params > Meta tags
        this.businessData = {
            id: urlBusinessId || businessIdMeta?.content || '',
            name: urlCompany || businessNameMeta?.content || '',
            email: urlEmail || contactEmailMeta?.content || '',
            contact: urlName || contactNameMeta?.content || '',
            phone: urlPhone || ''
        };

        // Pre-populate form fields
        if (this.businessData.id) {
            document.getElementById('business-id').value = this.businessData.id;
        }
        if (this.businessData.name) {
            document.getElementById('company-name').value = this.businessData.name;
        }
        if (this.businessData.email) {
            document.getElementById('contact-email').value = this.businessData.email;
        }
        if (this.businessData.contact) {
            document.getElementById('contact-name').value = this.businessData.contact;
        }
        if (this.businessData.phone) {
            document.getElementById('contact-phone').value = this.businessData.phone;
        }
    },

    checkScroll() {
        if (this.triggered) return;

        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent >= 80) {
            this.triggered = true;
            setTimeout(() => this.show(), 500);
        }
    },




    nextStep() {
        this.currentStep++;
        this.updateSteps();
    },

    prevStep() {
        this.currentStep--;
        this.updateSteps();
    },

    updateSteps() {
        for (let i = 1; i <= 3; i++) {
            const step = document.getElementById(`blosm-step-${i}`);
            if (step) {
                step.style.display = i === this.currentStep ? 'block' : 'none';
            }
        }
    },

    async handleSubmit(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('blosm-submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="blosm-loading"></span> Booking...';

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('https://blosm.dev/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                // Update confirmation details
                const date = new Date(data.date + 'T' + data.time);
                const formattedDate = date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                const formattedTime = date.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit'
                });

                document.getElementById('confirm-datetime').textContent = `${formattedDate} at ${formattedTime}`;
                document.getElementById('confirm-email').textContent = data.email;

                if (result.data.meetingLink) {
                    document.getElementById('confirm-meet-link').href = result.data.meetingLink;
                }

                // Move to confirmation step
                this.nextStep();
            } else {
                alert('Booking failed: ' + (result.message || result.error));
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert('Failed to create booking. Please try again or contact scott@blosm.dev');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }
};

// Initialize popup when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => blosmPopup.init());
} else {
    blosmPopup.init();
}
</script>
