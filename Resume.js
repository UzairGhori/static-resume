document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const toggleSkillsBtn = document.getElementById("toggle-skills-btn");

    toggleSkillsBtn.addEventListener("click", () => {
        skillsSection.classList.toggle("hidden");
        toggleSkillsBtn.textContent = skillsSection.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});
