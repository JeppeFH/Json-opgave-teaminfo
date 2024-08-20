/*Teaminfo Json opgave*/
const app = {};

app.init = async () => {
  let team = document.querySelector(".team");
  let listIcon = document.querySelector(".fa-bars");
  let gitterIcon = document.querySelector(".fa-grip");

  /* Gitter visning */
  const profileGridTmpl = (element) =>
    ` <section class="team">
    <div class="team-profile ${element.teamGender}">
        <div class="team-header">
        <div class="team-img"><img src="${element.profileImg}" alt=""> </div></div>
        <div class="team-name"><p> ${element.teamName}</p></div>
        <div class="team-username"><p> ${element.teamUsername}</p></div>
        <div class="team-mail"><p> ${element.teamMail}</p></div>
        <div class="team-website-btn"><a href="#"> ${element.teamWebsiteBtn}</a></div>
      </div>
      </section>
`;

  /* liste visning */
  const profileListTmpl = (element) =>
    ` <section class="team-list">
    <div class="team-profile ${element.teamGender}">
        <div class="team-header">
        <div class="team-img"><img src="${element.profileImg}" alt=""> </div></div>
        <div class="team-name"><p> ${element.teamName}</p></div>
        <div class="team-username"><p> ${element.teamUsername}</p></div>
        <div class="team-mail"><p> ${element.teamMail}</p></div>
        <div class="team-website-btn"><a href="#"> ${element.teamWebsiteBtn}</a></div>
      </div>
      </section>
`;

  /*Async funktion der henter data  */
  async function fetchPosts() {
    try {
      const response = await fetch("../data/team.json");
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }

  /* Array med brugere */
  let posts = await fetchPosts();

  /* Udskriver listen af brugere */
  function renderPosts() {
    posts.forEach((post) => {
      team.insertAdjacentHTML("beforeend", profileGridTmpl(post));
    });

    /* Click event gitter */
    gitterIcon.addEventListener("click", () => {
      team.innerHTML = "";
      posts.forEach((post) => {
        team.insertAdjacentHTML("beforeend", profileGridTmpl(post));
      });
    });

    /* Click event list */
    listIcon.addEventListener("click", () => {
      team.innerHTML = "";
      posts.forEach((post) => {
        team.insertAdjacentHTML("beforeend", profileListTmpl(post));
      });
    });
  }

  renderPosts();
};

app.init();

/* farvetildeling af køn */
profile.forEach((team, index) => {
  if (team.teamGender === "male") {
    teamImg[index].style.border = "solid 4px lightblue";
  } else if (team.teamGender === "female") {
    teamImg[index].style.border = "solid 4px pink";
  }
});
