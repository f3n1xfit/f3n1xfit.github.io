function currentDate() {
  var date = new Date();
  var weekday = getDayByIndex(date.getDay());
  var today = getSuffix(date.getDate());
  var month = getMonthByIndex(date.getMonth());
  var year = date.getFullYear();
  document.getElementById("date").innerText = `${weekday}, ${month} ${today} ${year}`;
}
function getDayByIndex(index) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return weekdays[index];
}
function getMonthByIndex(index) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[index];
}
function getSuffix(today) {
  if (today % 10 == 1 && today != 11) {
    return today + "st";
  } else if (today % 10 == 2 && today != 12) {
    return today + "nd";
  } else if (today % 10 == 3 && today != 13) {
    return `${today}rd`;
  } else {
    return `${today}th`;
  }
}

currentDate();
