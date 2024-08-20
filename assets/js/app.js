/*Teaminfo Json opgave*/

const app = {};

app.init = () => {
  const team = document.querySelector(".team");

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

  fetch("/data/team.json")
    .then((response) => response.json())
    .then((teamdata) => {
      teamdata.forEach((element) => {
        team.insertAdjacentHTML("beforeend", profileTmpl(element));
      });
    });
};

app.init();

/* Farvesortering af køn */
let teamImg = document.querySelectorAll(".team-img");

profile.forEach((team, index) => {
  if (team.teamGender === "male") {
    teamImg[index].style.border = "solid 4px lightblue";
  } else if (team.teamGender === "female") {
    teamImg[index].style.border = "solid 4px pink";
  }
});
