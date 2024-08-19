/*Teaminfo Json opgave*/

let profile = [
  {
    profileImg: "https://picsum.photos/300/300?random=1 ",
    teamName: "Jens Hansen",
    teamGender: "male",
    teamUsername: "jhansen1963",
    teamMail: "jenshansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=2 ",
    teamName: "Julie Hansen",
    teamGender: "female",
    teamUsername: "jhansen1963",
    teamMail: "juliehansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=3 ",
    teamName: "Mogens Hansen",
    teamGender: "male",
    teamUsername: "mhansen1963",
    teamMail: "mogenshansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=4 ",
    teamName: "Karl Hansen",
    teamGender: "male",
    teamUsername: "khansen1963",
    teamMail: "karlhansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=5 ",
    teamName: "Emilie Hansen",
    teamGender: "female",
    teamUsername: "ehansen1963",
    teamMail: "emiliehansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=6 ",
    teamName: "Josefine Hansen",
    teamGender: "female",
    teamUsername: "jhansen1963",
    teamMail: "josefinehansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },
];

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

  profile.forEach((element) => {
    team.insertAdjacentHTML("beforeend", profileTmpl(element));
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
