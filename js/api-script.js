import premierLeague from "./info-sport.js";
let homeTeam = document.querySelector(".club-name-home");
let awayTeam = document.querySelector(".club-name-away");
let logoAwayTeam = document.querySelector(".logo-away-team");
let logoHomeTeam = document.querySelector(".logo-home-team");
let startMatch = document.querySelector(".start-match");
const matchElement = document.querySelector(".league");

// homeTeam.innerHTML = premierLeague["fixtures"]["matchday16"][7]["homeTeam"];
// awayTeam.innerHTML = premierLeague["fixtures"]["matchday16"][7]["awayTeam"];
// startMatch.innerHTML = premierLeague["fixtures"]["matchday16"][7]["startMatch"];

// console.log(premierLeague["fixtures"]["matchday16"]);
// let size = Object.keys(premierLeague["fixtures"]["matchday16"]).length;
// console.log(size)

for (
  let i = 1;
  i <= Object.keys(premierLeague["fixtures"]["matchday16"]).length;
  i++
) {
  function showMatches() {
    const matchPremierLeague = document.createElement("div");
    matchPremierLeague.classList.add("match");
    matchPremierLeague.innerHTML = `<div class="premier-league-match">
                <div class="favourites-match">
                  <i class="fa-regular fa-star"></i>
                </div>
                <div class="match">
                  <div class="home">
                    <img
                      class="logo-home-team"
                      src="${premierLeague['fixtures']['matchday16'][i]['logoHomeTeam']}"
                      alt=""
                    />
                    <p class="club-name-home">${premierLeague["fixtures"]["matchday16"][i]["homeTeam"]}</p>
                  </div>
                  <div class="away">
                    <img
                      class="logo-away-team"
                      src="${premierLeague['fixtures']['matchday16'][i]['logoAwayTeam']}"
                      alt=""
                    />
                    <p class="club-name-away">${premierLeague["fixtures"]["matchday16"][i]["awayTeam"]}</p>
                  </div>
                </div>
                <div class="info-match">
                  <p class="start-match">${premierLeague["fixtures"]["matchday16"][i]["startMatch"]}</p>
                </div>
              </div>`;
              matchElement.appendChild(matchPremierLeague);
  }
  showMatches(i * Object.keys(premierLeague["fixtures"]["matchday16"]).length);
}
