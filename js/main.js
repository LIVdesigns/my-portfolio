gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 5,
    effects: true
});

// Select all the navigation links
const navLinks = document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // Prevent the default anchor link behavior
        e.preventDefault();

        // Get the target section's id from the href attribute
        const targetId = link.getAttribute("href").substring(1); // Removes the '#' character
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to the target section
        smoother.scrollTo(targetSection, true, "center center");
    });
});
