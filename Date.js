const timerWrap = document.getElementsByClassName("timer-wrap")[0];
const div = document.createElement("div");
function timer() {
  let date = new Date();
  var monthDate = date.toLocaleString("default", { month: "long" });
  let dayDate = date.getDay();
  let yearDate = date.getFullYear();
  let hourDate = date.getHours();
  let minDate = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hourDate >= 12 ? "pm" : "am";
  let fixedMin = minDate <= 9 ? "0" : "";
  let fixHour = hourDate <= 9 ? "0" : "";
  let daySuffix;
  if (dayDate === 1 || dayDate === 21 || dayDate === 31) {
    daySuffix = "st";
  } else if (dayDate === 2 || dayDate === 22) {
    daySuffix = "nd";
  } else if (dayDate === 3 || dayDate === 23) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  let secondsFixed = seconds <= 9 ? "0" : "";

  div.innerHTML = `<p class='timer'>${monthDate} ${dayDate}${daySuffix} ${yearDate}, ${fixHour}${hourDate}:${fixedMin}${minDate} ${secondsFixed}${seconds}  ${ampm} </p>`;
}

window.addEventListener("load", timerFunc());

function timerFunc() {
  timerWrap.appendChild(div);
}
setInterval(timer, 1000);
