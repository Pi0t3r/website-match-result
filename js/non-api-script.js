import premierLeague from "./info-sport.js";
const matchElement = document.querySelector(".league");
let childrenElementMatch = matchElement.childNodes;

for (
  let i = 1;
  i <= Object.keys(premierLeague["fixtures"]["currentMatchDays"]).length;
  i++
) {
  function showMatches() {
    const matchPremierLeague = document.createElement("div");
    matchPremierLeague.classList.add("today-match");
    matchPremierLeague.innerHTML = `<div class="premier-league-match">
                <div class="match">
                  <div class="home">
                    <img
                      class="logo-home-team"
                      src="${premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"]}"
                      alt=""
                    />
                    <p class="club-name-home">${premierLeague["fixtures"]["currentMatchDays"][i]["homeTeam"]}</p>
                  </div>
                  <div class="info-match">
                  <p class="start-match">${premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]['hour']}</p>
                  </div>
                  <div class="away">
                    <img
                      class="logo-away-team"
                      src="${premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"]}"
                      alt=""
                    />
                    <p class="club-name-away">${premierLeague["fixtures"]["currentMatchDays"][i]["awayTeam"]}</p>
                  </div>
                </div>
                
              </div>`;

    matchElement.appendChild(matchPremierLeague);
  }
  let awayTeam = premierLeague["fixtures"]["currentMatchDays"][i]["awayTeam"];
  let homeTeam = premierLeague["fixtures"]["currentMatchDays"][i]["homeTeam"];
  switch (awayTeam) {
    case "Arsenal":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["arsenal"]["logo"];
      break;
    case "Tottenham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["tottenham"]["logo"];
      break;
    case "Brendford":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["brendford"]["logo"];
      break;
    case "Everton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["everton"]["logo"];
      break;
    case "Southampton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["southampton"]["logo"];
      break;
    case "Manchester City":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["manCity"]["logo"];
      break;
    case "Manchester United":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["manUtd"]["logo"];
      break;
    case "Fullham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["fulham"]["logo"];
      break;
    case "Crystal Palace":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["crystalPal"]["logo"];
      break;
    case "Leeds":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["leeds"]["logo"];
      break;
    case "Leicester":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["leicester"]["logo"];
      break;
    case "Chelsea":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["chelsea"]["logo"];
      break;
    case "Aston Villa":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["astonVilla"]["logo"];
      break;
    case "Bournemouth":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["bournemouth"]["logo"];
      break;
    case "Liverpool":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["liverpool"]["logo"];
      break;
    case "Nottingham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["nottingham"]["logo"];
      break;
    case "West Ham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["westHam"]["logo"];
      break;
    case "Wolverhampton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["wolverhampton"]["logo"];
      break;
    case "Brighton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["brighton"]["logo"];
      break;
    case "Newcastle":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoAwayTeam"] =
        premierLeague["teams"]["newcastle"]["logo"];
      break;
  }

  switch (homeTeam) {
    case "Arsenal":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["arsenal"]["logo"];
      break;
    case "Tottenham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] = "chujnik";
      break;
    case "Brendford":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["brendford"]["logo"];
      break;
    case "Everton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["everton"]["logo"];
      break;
    case "Southampton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["southampton"]["logo"];
      break;
    case "Manchester City":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["manCity"]["logo"];
      break;
    case "Manchester United":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["manUtd"]["logo"];
      break;
    case "Fullham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["fulham"]["logo"];
      break;
    case "Crystal Palace":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["crystalPal"]["logo"];
      break;
    case "Leeds":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["leeds"]["logo"];
      break;
    case "Leicester":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["leicester"]["logo"];
      break;
    case "Chelsea":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["chelsea"]["logo"];
      break;
    case "Aston Villa":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["astonVilla"]["logo"];
      break;
    case "Bournemouth":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["bournemouth"]["logo"];
      break;
    case "Liverpool":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["liverpool"]["logo"];
      break;
    case "Nottingham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["nottingham"]["logo"];
      break;
    case "West Ham":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["westHam"]["logo"];
      break;
    case "Wolverhampton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["wolverhamton"]["logo"];
      break;
    case "Brighton":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["brighton"]["logo"];
      break;
    case "Newcastle":
      premierLeague["fixtures"]["currentMatchDays"][i]["logoHomeTeam"] =
        premierLeague["teams"]["newcastle"]["logo"];
      break;
  }
  let dayPremierLeagueMatch = premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]['day'];
  // console.log(dayPremierLeagueMatch);
  let currentMatches = premierLeague["fixtures"]["currentMatchDays"][i];
  function showCurrentMatch() {
    if(dayPremierLeagueMatch == day.getDate()){
      // Object.assign(currentMatches.style,{
      //   display:'none'
      // })
  
    }
  }
  showCurrentMatch()

  showMatches(i * Object.keys(premierLeague["fixtures"]["currentMatchDays"]).length);
  // console.log(Object.values(premierLeague['fixtures']['currentMatchDays'][1]['dateMatch']))
}

