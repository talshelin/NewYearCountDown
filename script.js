const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const newYearDate = new Date("January 1, 2026 00:00:00").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const difference = newYearDate - currentDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const d = Math.floor(difference / days);
  const h = Math.floor((difference % days) / hours);
  const m = Math.floor((difference % hours) / minutes);
  const s = Math.floor((difference % minutes) / seconds);

  day.innerText = d;
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  setTimeout(updateCountdown, 1000);
}
updateCountdown();
