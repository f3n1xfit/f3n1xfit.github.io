function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM";
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
  document.getElementById("clock").innerText = `${hour} : ${min} : ${sec} ${midday}`;
  var t = setTimeout(function () { currentTime() }, 1000);
}

function updateTime(i) {
  if (i < 10) {
    return "0" + i;
  }
  else {
    return i;
  }
}

currentTime();

