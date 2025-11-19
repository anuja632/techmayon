const scrollBtn = document.getElementById("scroll-top");

// Show / Hide on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// Smooth scroll to top
scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent default form submission

        // Submit the form data using FormSubmit
        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you for contacting us! Your message has been sent.");
                form.reset(); // Reset form fields
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("Oops! Something went wrong. Please try again.");
            console.error(error);
        });
    });
        const form2 = document.getElementById('contactForm2');

    form2.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        fetch(form2.action, {
            method: form2.method,
            body: new FormData(form2)
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your message has been sent.");
                form2.reset(); // Reset form fields
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("Oops! Something went wrong. Please try again.");
            console.error(error);
        });
    });