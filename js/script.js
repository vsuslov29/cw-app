const socialIconsList = document.getElementById("social-links");
const mainInfoList = document.getElementById("main-info");
const skillsList = document.getElementById("skills-list");
const extraSkillsList = document.getElementById("extra-skills__list");
const myWorksList = document.getElementById("my-works__list");

socialIconsList.innerHTML = createSocialIconsList(socialIcons).join("");
mainInfoList.innerHTML = createMainInfoList(mainInfo).join("");
skillsList.innerHTML = createSkillsList(skills).join("");
extraSkillsList.innerHTML = createExtraSkillsList(extraSkills).join("");
myWorksList.innerHTML = createMyWorksList(myWorks).join("");
