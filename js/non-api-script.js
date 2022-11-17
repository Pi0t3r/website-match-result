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
                  <p class="day-match">${premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]["day"]}
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

  // pickDate.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     if (
  //       premierLeague["fixtures"]["currentMatchDays"][i]["dateMatch"]["day"] ===
  //       Number(inputDay.innerHTML.slice(0, 2))
  //     ) {
  //       console.log("równa się");
  //     } else {
  //       console.log("nie równa się");
  //     }
  //   });
  // });
  showMatches(
    i * Object.keys(premierLeague["fixtures"]["currentMatchDays"]).length
  );
}


let child = document.querySelectorAll('.today-match')

// function showCurrentMatch() {
//   for(let entry of child.entries()){
//     // console.log(entry[1].childNodes[0].childNodes[1].childNodes[5].childNodes[3].innerHTML)
//     // console.log(entry)
//     if(entry[1].childNodes[0].childNodes[1].childNodes[5].childNodes[3].innerHTML == Number(inputDay.innerHTML.slice(0,2))){
//       console.log('równa się')
//       child.classList.add('none')
//     }else{
//       console.log('nie równa się')
//     }
//   }
// }
// pickDate.forEach((btn) =>{
//   btn.addEventListener("click", showCurrentMatch)})
