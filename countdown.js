const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const tenure = document.querySelector(".tenure");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tenuredate = new Date(2023, 4, 29, 9, 0, 0);

const year = tenuredate.getFullYear();
const hours = tenuredate.getHours();
let month = tenuredate.getMonth();
month = months[month];
const date = tenuredate.getDate();
const weekday = weekdays[tenuredate.getDay()];

//tenure end in milliseconds
const tenure_end = tenuredate.getTime();

// tenure.textContent = `The President tenure ends $`

function getremainingTime() {
  const today = new Date().getTime();
  const t = tenure_end - today;
  /* Time calculation
  1s = 1000ms
  60s = 1min
  60min = 1hr
  1 day = 24hrs
  */
  // Values in ms
  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;
  // calculate values
  let days = Math.floor(t / oneday);
  let hours = Math.floor((t % oneday) / onehour);
  let minutes = Math.floor((t % onehour) / oneminute);
  let seconds = Math.floor((t % oneminute) / 1000);

  //set values array;
  const values = [days, hours, minutes, seconds];

  function format(items) {
    if (items < 10) {
      return (items = `0${items}`);
    }
    return items;
  }

  items.forEach(function (items, index) {
    items.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `
      <h2>Baba, suppose don leave by now, e never leave?</h2>`;
  }
}

// Countdown
let countdown = setInterval(getremainingTime, 1000);
getremainingTime();
