const createSocialIconsList = (socialIcons) =>
  socialIcons.map(
    ({ path, link }) =>
      `<li class="social-links__item">
      <a href=${link} target="_blank" class="social-link">
        <img src="images/social/${path}" alt="" class="link__icon" />
      </a>
    </li>`
  );

const createMainInfoList = (mainInfo) =>
  mainInfo.map(
    ({ title, value }) =>
      `<li class="main-info__item">
      <h4 class="title">${title}</h4>
      <p class="value">${value}</p>
    </li>`
  );

const createSkillsList = (skills) =>
  skills.map(
    ({ name, level }) =>
      `<li class="skills__list__item">
      <div class="skill-desc">
        <h4 class="skill-name">${name}</h4>
        <p class="skill-percentage">${level}%</p>
      </div>
      <progress class="skill-progress" max="100" value=${level} />
    </li>`
  );

const createExtraSkillsList = (extraSkills) =>
  extraSkills.map(
    (skill) =>
      `<li class="extra-skills__list__item">
      <img src="images/skill.png" alt="" class="extra-skill-icon" />
      <p class="extra-skill-title">${skill}</p>
    </li>`
  );

const createMyWorksList = (myWorks) =>
  myWorks.map(
    ({ link, logo }) =>
      `<li class="my-works__item">
      <a
        href=${link}
        target="_blank"
        class="my-works__link"
      >
        <img
          src="images/works-previews/${logo}"
          alt=""
          class="my-works__logo"
        />
      </a>
    </li>`
  );
