document.addEventListener("DOMContentLoaded", function() {
    const projectsSection = document.querySelector(".projects-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectsSection.classList.add("visible");
                observer.unobserve(projectsSection); // Stop observing once it's visible
            }
        });
    });

    observer.observe(projectsSection);
});
