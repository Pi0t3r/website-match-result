import premierLeague from "./info-sport.js";
const matchElement = document.querySelector(".list-matches");
const pickDate = document.querySelectorAll(".pick-day");
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
                    <p>${premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]["day"]}/${premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]["month"]} </p>
                  </div>
                  <div class="home">
                    <p class="club-name-home">${premierLeague["fixtures"]["currentMatchDays"][i]["homeTeam"]}</p>
                  </div>
                  <div class="info-match">
                    <p class="start-match">${premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]["hour"]}</p>
                    <p class="result">${premierLeague["lastMatchDays"]["LastmatchDay"][i]["homeTeamScore"]}:${premierLeague["lastMatchDays"]["LastmatchDay"][i]["awayTeamScore"]}</p>
                  </div>
                  <div class="away">
                    <p class="club-name-away">${premierLeague["fixtures"]["currentMatchDays"][i]["awayTeam"]}</p>
                  </div>
                  <div class="show-this-match">
                    <p><i class="fa-solid fa-eye"></i></p>
                  </div>
                </div>
                
              </div>`;
    matchElement.appendChild(matchPremierLeague);
  }
  pickDate.forEach((btn) => {
    btn.addEventListener("click", () => {
      let child = document.querySelectorAll(".today-match");
      for (let i of child) {
        if (
          i.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerHTML.slice(
            0,
            2
          ) == inputDay.innerHTML.slice(0, 2)
        ) {
          i.childNodes[0].style.display = "block";
        } else {
          i.childNodes[0].style.display = "none";
        }
      }
    });
  });

  function showCurrentMatch() {
    for (let i of child) {
      if (
        i.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerHTML.slice(
          0,
          2
        ) == inputDay.innerHTML.slice(0, 2)
      ) {
        i.childNodes[0].style.display = "block";
      } else {
        i.childNodes[0].style.display = "none";
      }
    }
  }
  addEventListener("load", showCurrentMatch);

  showMatches(
    i * Object.keys(premierLeague["fixtures"]["currentMatchDays"]).length
  );
}
let child = document.querySelectorAll(".today-match");
const matchEndAllNext = [
  document.querySelector("#next"),
  document.querySelector("#ended"),
  document.querySelector("#all"),
];
let day = new Date();
let currentHours = day.getHours();
function showHours() {
  document.querySelectorAll(".start-match").forEach((hours) => {
    hours.style.display = "block";
  });
}
function hideResult() {
  document.querySelectorAll(".result").forEach((results) => {
    results.style.display = "none";
  });
}
function hideHours() {
  document.querySelectorAll(".start-match").forEach((hours) => {
    hours.style.display = "none";
  });
}
function showResult() {
  document.querySelectorAll(".result").forEach((results) => {
    results.style.display = "block";
  });
}
function showEndedMatch() {
  if (document.querySelector("#ended").classList.contains("active")) {
    child.forEach((item) => {
      if (
        item.children[0].children[0].children[2].children[0].innerHTML.slice(
          0,
          2
        ) < currentHours
      ) {
        item.style.display = "block";
        document.querySelectorAll(".start-match").forEach((hours) => {
          hours.style.display = "none";
        });
        document.querySelectorAll(".result").forEach((results) => {
          results.style.display = "block";
        });
      } else {
        item.style.display = "none";
        showHours();
        hideResult();
      }
    });
  }

  if (document.querySelector("#next").classList.contains("active")) {
    child.forEach((item) => {
      if (
        item.children[0].children[0].children[2].children[0].innerHTML.slice(
          0,
          2
        ) > currentHours
      ) {
        item.style.display = "block";
        showHours();
      } else {
        item.style.display = "none";
        hideResult();
      }
    });
  }
  if (document.querySelector("#all").classList.contains("active")) {
    child.forEach((item) => {
      item.style.display = "block";
      if (
        item.children[0].children[0].children[2].children[0].innerHTML.slice(
          0,
          2
        ) > currentHours
      ) {
        console.log("jest większe niż obecna godzina");
        hideHours();
        showResult();
      } else {
        console.log("jest mniejsze niż obecna godzina");
        hideResult();
        showHours();
      }
    });
  }
}

matchEndAllNext.forEach((btn) => {
  btn.addEventListener("click", showEndedMatch);
});
