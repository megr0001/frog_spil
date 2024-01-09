window.addEventListener("load", sidenVises);

let point = 0;
let liv = 3;

function sidenVises() {
  console.log("sidenVises");  
//Skjul andre skærme
document.querySelector("#level_complete").classList.add("hide");
document.querySelector("#game_over").classList.add("hide");

  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");
  //Klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", startGame);

  // Her er pointene
  point = 0;
  console.log("point:", point);  
  document.querySelector("#point").textContent = "Point: " + point + "";

  let tal = Math.floor(1 + Math.random() * 10);
  console.log("Tilfældigt tal: ", tal);
// det her er min flue der gør den kan flyve
  document.querySelector("#flue_container1").classList.add("flyv", "pos");
  document.querySelector("#flue_container1").addEventListener("mousedown", clickFlue);
  document.querySelector("#bi_container1").classList.add("flyv", "pos");
  document.querySelector("#bi_container1").addEventListener("mousedown", clickBi);
}

function startGame() {
  console.log("startGame");
  //Skjul andre skærme
document.querySelector("#level_complete").classList.add("hide");
document.querySelector("#game_over").classList.add("hide");
document.querySelector("#start").classList.add("hide");
  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#score_board").innerHTML = points;

  //reset liv til 3
  liv = 3;
  document.querySelector("#liv").innerHTML = liv;

  //reset speed
  speed = 1;

  //Start timer
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);
}

function clickFlue() {
  console.log("clickFlue");
// Her får man point når man klikker på fluen
  point ++;
  console.log("point:", point);  
  document.querySelector("#point").textContent = "Point: " + point + "";

  document.querySelector("#flue_container1").classList.add("frys");
  document.querySelector("#flue_sprite1").classList.add("forsvind");
  document.querySelector("#flue_container1").addEventListener("animationend", flueReset);
}

function flueReset() {
  console. log("FlueReset");
  document.querySelector("#flue_container1").classList = "";
  document.querySelector("#flue_sprite1").classList = "";
  document.querySelector("#flue_container1").offsetLeft;

  let randomNum = Math.floor(1 + Math.random() * 5)
  console.log(randomNum)
  document.querySelector("#flue_container1").classList.add("flyv", "pos" + randomNum);
}

function clickBi() {
  console.log("clickBi");
  document.querySelector("#bi_container1").classList.add("frys");
  document.querySelector("#bi_sprite1").classList.add("forsvind");
  document.querySelector("#bi_container1").addEventListener("animationend", biReset);
  //ryd op, så man ikke kan kilkke på den samme flere gange
  // this.removeEventListener("mousedown", clickBi);

  //Tilføj grå til det liv man er nået til, der efter tæller 1 ned på liv
  liv--;
  document.querySelector("#liv").innerHTML = liv;

  if (liv <= 0) {
    stopSpillet();
  }
}
function biReset() {
  console.log("biReset");
  document.querySelector("#bi_container1").classList = "";
  document.querySelector("#bi_sprite1").classList = "";
  document.querySelector("#bi_container1").offsetLeft;
  let randomNum = Math.floor(1 + Math.random() * 5)
  console.log(randomNum)
  document.querySelector("#bi_container1").classList.add("flyv", "pos" + randomNum);
}

function stopSpillet() {
  console.log("stopSpillet");

  //Stop timer
  document.querySelector("#time_sprite").classList.remove("time");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);

  if (liv <= 0) {
    gameover();
  } else if (points >= 5) {
    levelComplete();
  } else {
    gameover();
  }
}

function gameover() {
  console.log("GAMEOVER loser L");

  //Vis gameover skærm
  document.querySelector("#game_over").classList.remove("hide");
if (liv ==0) {
  document.querySelector("#game_over_points").textContent = "Are you stupid? You're not supposed to eat the bees " + points + " points";
} else {
  document.querySelector("#game_over_points").textContent = "LOSER: flutter is still hungry.. You only got " + points + " points";
}
  //Klik på genstart1
  document.querySelector("#start_knap").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("Hurra du vandt");

  //Vis levelComplete skærm
document.querySelector("#level_complete").classList.remove("hide");
if (points >=20) {
  // meget god
} else if (points >=15) {
// rimelig god
} else {
  // du er okay
}

  //Klik på genstart2
}






// her skal frøen hoppe, men pt virker det ikke
function frogHop() {
  console.log("frogHop");
  document.querySelector("#frog_container").classList.add("hop");
  document.querySelector("#frog_container").addEventListener("mousedown", pinkClickHan);
}

function pinkClickHan() {
  console.log("pinkClickHan");
  document.querySelector("#frog_sprite").classList.add("hop");
  document.querySelector("#frog_container").addEventListener("animationend", hopDone);
}
