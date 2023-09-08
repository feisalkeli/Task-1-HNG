// Get Current Day Of The Week

const currentDay = new Date().toLocaleDateString("default", {
  weekday: "long",
});

// Set the current day in the HTML element with data-testid="currentDayOfTheWeek"
document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day Of The Week: ${currentDay}`;

///Get UTC Time

const currentDate = new Date();
const currentUTCTime = currentDate.toUTCString();
document.getElementById(
  "currentUTCTime"
).textContent = `Current UTC Time: ${currentUTCTime}`;
