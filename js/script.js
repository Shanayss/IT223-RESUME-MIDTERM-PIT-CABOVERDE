
// Feature 1: Personalized Welcome Popup
// - Uses prompt() for user input
// - Displays custom message based on input
function showPopup(message) {
    const popup = document.getElementById("popup");
    document.getElementById("popupMessage").textContent = message;
    popup.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
    let userName = prompt("Enter your name:");

    let message = "Welcome to my web-based resume.";
    if (userName && userName.trim()) {
        message = "Hello, " + userName.trim() + "! " + message;
    }

    showPopup(message);
});

// Feature 2: Hire Me Popup and Form Handling
// - Opens modal on button click
// - Validates and submits form
const hireMeBtn = document.getElementById("hireMeBtn");
const hireMePopup = document.getElementById("hireMePopup");
const hireMeForm = document.getElementById("hireMeForm");

hireMeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    hireMePopup.style.display = "flex";
});

hireMeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("hireName").value.trim();
    const email = document.getElementById("hireEmail").value.trim();
    const project = document.getElementById("hireProject").value.trim();

    if (!name || !email || !project) {
        showPopup("Please fill out all fields before sending.");
        return;
    }

    showPopup("Thank you! I’ll review your message and reply soon.");
    hireMeForm.reset();
    closeHirePopup();
});

// Feature 3: Contact Form Validation
// - Prevents submission if fields are empty
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = form.querySelector("input[type='text']").value.trim();
    let email = form.querySelector("input[type='email']").value.trim();
    let message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
        showPopup("Please fill out all fields!");
        return;
    }

    showPopup("Thank you for submitting your message!");
    form.reset();
});

// Utility: Close popups
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function closeHirePopup() {
    hireMePopup.style.display = "none";
}

// Feature 4: Skills Section Toggle
// - Shows/hides additional skills
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const moreSkills = document.getElementById("moreSkills");

if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener("click", function () {
        moreSkills.classList.toggle("hidden");
        toggleSkillsBtn.classList.toggle("active");
        
        if (moreSkills.classList.contains("hidden")) {
            toggleSkillsBtn.textContent = "View More";
        } else {
            toggleSkillsBtn.textContent = "View Less";
        }
    });
}

// Feature 5: Projects Section Toggle
// - Shows/hides additional projects
const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
const moreProjects = document.getElementById("moreProjects");

if (toggleProjectsBtn) {
    toggleProjectsBtn.addEventListener("click", function () {
        moreProjects.classList.toggle("hidden");
        toggleProjectsBtn.classList.toggle("active");
        
        if (moreProjects.classList.contains("hidden")) {
            toggleProjectsBtn.textContent = "View More";
        } else {
            toggleProjectsBtn.textContent = "View Less";
        }
    });
}


// JQUERY FEATURES  //


$(document).ready(function () {
    // Feature 1: Dark Mode Toggle
    // - Toggles dark mode class on body
    // - Changes button icon
    $("#darkModeToggle").on("click", function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(this).text(" ☀️ ");
        } else {
            $(this).text("🌙 ");
        }
    });

    // Feature 2: Smooth Scrolling for Navigation
    // - Animates scroll to sections
    $(".navbar a").on("click", function (event) {
        event.preventDefault();
        const target = $(this).attr("href");
        const offset = $(target).offset().top - 100; // Adjust for fixed header
        $("html, body").animate({
            scrollTop: offset
        }, 800);
    });
});



