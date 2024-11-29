// JavaScript for Scoreboard
let homeScore = 0;
let guestScore = 0;

function updateScore(team, points) {
  if (team === 'home') {
    homeScore += points;
    document.getElementById('home-score').textContent = homeScore;
  } else if (team === 'away') {
    guestScore += points;
    document.getElementById('away-score').textContent = guestScore;
  }
}

function ResetScore() {
  homeScore = 0
  guestScore = 0
  document.getElementById('home-score').textContent = homeScore;
  document.getElementById('away-score').textContent = guestScore;
}