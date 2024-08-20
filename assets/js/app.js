/*Teaminfo Json opgave*/
const app = {};

const team = document.querySelector(".team");
const teamList = document.querySelector(".team-list");

/* Gittervisning */
const profileTmpl = (element) =>
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

// Async metode //
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

/* Click event */
const listIcon = document.querySelector(".fa-bars");
const gitterIcon = document.querySelector(".fa-grip");

listIcon.addEventListener("click", () => {
  teamList.classList.add("active");
  team.classList.add("active");
});

gitterIcon.addEventListener("click", () => {
  teamList.classList.remove("active");
  team.classList.remove("active");
});

/* farveopdeling af køn */
profile.forEach((team, index) => {
  if (team.teamGender === "male") {
    teamImg[index].style.border = "solid 4px lightblue";
  } else if (team.teamGender === "female") {
    teamImg[index].style.border = "solid 4px pink";
  }
});
