import premierLeague from "./info-sport.js";
for (
  let i = 1;
  i <= Object.keys(premierLeague["fixtures"]["matchday16"]).length;
  i++
) {
  function showMatches() {
    const matchPremierLeague = document.createElement("div");
    matchPremierLeague.classList.add("match");
    matchPremierLeague.innerHTML = `<div class="premier-league-match">
                <div class="match">
                  <div class="home">
                    <img
                      class="logo-home-team"
                      src="${premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"]}"
                      alt=""
                    />
                    <p class="club-name-home">${premierLeague["fixtures"]["matchday16"][i]["homeTeam"]}</p>
                  </div>
                  <div class="info-match">
                  <p class="start-match">${premierLeague["fixtures"]["matchday16"][i]["startMatch"]}</p>
                  </div>
                  <div class="away">
                    <img
                      class="logo-away-team"
                      src="${premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"]}"
                      alt=""
                    />
                    <p class="club-name-away">${premierLeague["fixtures"]["matchday16"][i]["awayTeam"]}</p>
                  </div>
                </div>
                
              </div>`;
    matchElement.appendChild(matchPremierLeague);
  }
  switch (premierLeague["fixtures"]["matchday16"][i]["awayTeam"]) {
    case "Arsenal":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["arsenal"]["logo"];
      break;
    case "Tottenham":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["tottenham"]["logo"];
      break;
    case "Brendford":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["brendford"]["logo"];
      break;
    case "Everton":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["everton"]["logo"];
      break;
    case "Southampton":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["southampton"]["logo"];
      break;
    case "Manchester City":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["manCity"]["logo"];
      break;
    case "Manchester United":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["manUtd"]["logo"];
      break;
    case "Fullham":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["fulham"]["logo"];
      break;
    case "Crystal Palace":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["crystalPal"]["logo"];
      break;
    case "Leeds":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["leeds"]["logo"];
      break;
    case "Leicester":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["leicester"]["logo"];
      break;
    case "Chelsea":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["chelsea"]["logo"];
      break;
    case "Aston Villa":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["astonVilla"]["logo"];
      break;
    case "Bournemouth":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["bournemouth"]["logo"];
      break;
    case "Liverpool":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["liverpool"]["logo"];
      break;
    case "Nottingham":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["nottingham"]["logo"];
      break;
    case "West Ham":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["westHam"]["logo"];
      break;
    case "Wolverhampton":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["wolverhampton"]["logo"];
      break;
    case "Brighton":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["brighton"]["logo"];
      break;
    case "Newcastle":
      premierLeague["fixtures"]["matchday16"][i]["logoAwayTeam"] =
        premierLeague["teams"]["newcastle"]["logo"];
      break;
  }

  switch (premierLeague["fixtures"]["matchday16"][i]["homeTeam"]) {
    case "Arsenal":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["arsenal"]["logo"];
      break;
    case "Tottenham":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] = "chujnik";
      break;
    case "Brendford":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["brendford"]["logo"];
      break;
    case "Everton":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["everton"]["logo"];
      break;
    case "Southampton":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["southampton"]["logo"];
      break;
    case "Manchester City":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["manCity"]["logo"];
      break;
    case "Manchester United":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["manUtd"]["logo"];
      break;
    case "Fullham":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["fulham"]["logo"];
      break;
    case "Crystal Palace":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["crystalPal"]["logo"];
      break;
    case "Leeds":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["leeds"]["logo"];
      break;
    case "Leicester":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["leicester"]["logo"];
      break;
    case "Chelsea":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["chelsea"]["logo"];
      break;
    case "Aston Villa":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["astonVilla"]["logo"];
      break;
    case "Bournemouth":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["bournemouth"]["logo"];
      break;
    case "Liverpool":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["liverpool"]["logo"];
      break;
    case "Nottingham":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["nottingham"]["logo"];
      break;
    case "West Ham":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["westHam"]["logo"];
      break;
    case "Wolverhampton":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["wolverhamton"]["logo"];
      break;
    case "Brighton":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["brighton"]["logo"];
      break;
    case "Newcastle":
      premierLeague["fixtures"]["matchday16"][i]["logoHomeTeam"] =
        premierLeague["teams"]["newcastle"]["logo"];
      break;
  }
  showMatches(i * Object.keys(premierLeague["fixtures"]["matchday16"]).length);
}
