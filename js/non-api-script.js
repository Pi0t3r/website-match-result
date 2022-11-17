import premierLeague from "./info-sport.js";
const matchElement = document.querySelector(".league");

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
                  <div class="date">
                    <p>${premierLeague['fixtures']['currentMatchDays'][i]['dateMatch']['day']}/${premierLeague['fixtures']['currentMatchDays'][i]['dateMatch']['month']} </p>
                  </div>
                  <div class="home">
                    <p class="club-name-home">${premierLeague["fixtures"]["currentMatchDays"][i]["homeTeam"]}</p>
                  </div>
                  <div class="info-match">
                  <p class="start-match">${premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]["hour"]}</p>
                  <p class="day-match">${premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]["day"]}
                  </div>
                  <div class="away">
                    <p class="club-name-away">${premierLeague["fixtures"]["currentMatchDays"][i]["awayTeam"]}</p>
                  </div>
                </div>
                
              </div>`;

    matchElement.appendChild(matchPremierLeague);
  }
  let AllMatches = document.querySelectorAll(".match");
  function showMatch() {
    AllMatches.forEach((item) => {
      console.log(item.childNodes[3].childNodes[3].innerHTML);
      if (
        item.childNodes[3].childNodes[3].innerHTML !=
        inputDay.innerHTML.slice(0, 2)
      ) {
        document.querySelector(".match").style.display = "none";

      } else {
        document.querySelector(".match").style.display = "block";
        console.log("nie jest różne");

      }

    });
  }
  document.querySelector("#previous-day").addEventListener("click", showMatch);
  document.querySelector("#next-day").addEventListener("click", showMatch);
  showMatches(
    i * Object.keys(premierLeague["fixtures"]["currentMatchDays"]).length
  );
}


//  at the moment i cannot solve this problem about showing and hiding match if his dayMatch is equal to current day so for now I will make a big IF that will make the program work as it should and in the future will solve this problem in an easier way
