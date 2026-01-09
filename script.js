// ===============================
// Bus Ticket Booking System JS
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully");

    const form = document.querySelector("form");

    // Run only if booking form exists
    if (form) {
        form.addEventListener("submit", function (event) {

            const name = document.querySelector("input[name='name']");
            const email = document.querySelector("input[name='email']");
            const phone = document.querySelector("input[name='phone']");
            const source = document.querySelector("input[name='source']");
            const destination = document.querySelector("input[name='destination']");
            const date = document.querySelector("input[name='date']");
            const seats = document.querySelector("input[name='seats']");

            // ===== BASIC VALIDATION =====
            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                phone.value.trim() === "" ||
                source.value.trim() === "" ||
                destination.value.trim() === "" ||
                date.value === "" ||
                seats.value === ""
            ) {
                alert("Please fill all fields");
                event.preventDefault();
                return;
            }

            // Phone number validation (basic)
            if (!/^[0-9]{10}$/.test(phone.value)) {
                alert("Enter a valid 10-digit phone number");
                event.preventDefault();
                return;
            }

            // Seats validation
            if (parseInt(seats.value) <= 0) {
                alert("Seats must be greater than 0");
                event.preventDefault();
                return;
            }

            // Source and destination should not be same
            if (source.value.toLowerCase() === destination.value.toLowerCase()) {
                alert("Source and Destination cannot be the same");
                event.preventDefault();
                return;
            }

            // Success message (does NOT stop submission)
            alert("Booking submitted successfully!");
        });
    }
});
