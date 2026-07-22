const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const profileCard = document.getElementById("profile-card");

toggleThemeBtn.addEventListener("click", function () {
    profileCard.classList.toggle("dark-theme");
});

const addSkillBtn = document.getElementById("add-skill-btn");
const skillInput = document.getElementById("skill-input");
const skillsList = document.getElementById("skills-list");

addSkillBtn.addEventListener("click", function () {
    const skill = skillInput.value.trim();

    if (skill !== "") {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
        skillInput.value = "";
    }
});