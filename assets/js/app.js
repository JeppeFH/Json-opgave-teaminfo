/*Teaminfo Json opgave*/
const app = {};

// app.init = () => { /* Udkommenteret. Denne del anvendes kun hvis fetch metode benyttes */
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
// }; /* Udkommenteret. Denne del anvendes kun hvis fetch metode benyttes */

// Fetch metode (sættes ind i bund af app.init() //
/* fetch("/data/team.json")
    .then((response) => response.json())
    .then((teamdata) => {
      teamdata.forEach((element) => {
        teamFetch.insertAdjacentHTML("beforeend", profileTmpl(element));
      });
    });
};

app.init(); */

// Async metode //
/* Nedenstående kode er en nyere - og for de fleste en mere letlæselig 
måde at fetche .json data. */
async function fetchPosts() {
  try {
    const response = await fetch("../data/team.json");
    const posts = await response.json();

    posts.forEach((post) => {
      team.insertAdjacentHTML("beforeend", profileTmpl(post));
    });
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

fetchPosts();

/* Farvesortering af køn */
let teamImg = document.querySelectorAll(".team-img");

profile.forEach((team, index) => {
  if (team.teamGender === "male") {
    teamImg[index].style.border = "solid 4px lightblue";
  } else if (team.teamGender === "female") {
    teamImg[index].style.border = "solid 4px pink";
  }
});
