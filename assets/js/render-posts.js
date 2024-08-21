import { fetchPosts } from "./fetch-data.js";
import { profileGridTmpl, profileListTmpl } from "./templates.js";

let team = document.querySelector(".team");
let listIcon = document.querySelector(".fa-bars");
let gitterIcon = document.querySelector(".fa-grip");

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
}
