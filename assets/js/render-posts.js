import { fetchPosts } from "./fetch-data.js";
import {
  profileGridTmpl,
  profileListTmpl,
  teamContactTmpl,
} from "./templates.js";

let team = document.querySelector(".team");

let listIcon = document.querySelector(".fa-bars");
let gitterIcon = document.querySelector(".fa-grip");

let teamContact = document.querySelector(".team-contact");
let teamInfo = document.querySelector(".team-info");
let teamWebsiteBtn = document.querySelector(".team-website-btn");

/* Array med brugere */
let posts = await fetchPosts();

/* Udskriver listen af brugere */
export function renderPosts() {
  posts.forEach((post) => {
    team.insertAdjacentHTML("beforeend", profileGridTmpl(post));
  });

  /* Click event gitter */
  gitterIcon.addEventListener("click", () => {
    team.classList.remove("list-view");
    team.classList.add("grid-view");
    team.innerHTML = "";
    posts.forEach((post) => {
      team.insertAdjacentHTML("beforeend", profileGridTmpl(post));
    });
  });

  /* Click event list */
  listIcon.addEventListener("click", () => {
    team.classList.remove("grid-view");
    team.classList.add("list-view");
    team.innerHTML = "";
    posts.forEach((post) => {
      team.insertAdjacentHTML("beforeend", profileListTmpl(post));
    });
  });

  teamWebsiteBtn.addEventListener("click", () => {
    posts.forEach((post) => {
      teamContact.insertAdjacentHTML("beforeend", teamContactTmpl(post));
    });
  });
}
