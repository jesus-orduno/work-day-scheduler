// Setting variable to store the current date
var currentDate = $("#currentDay");
var saveBtn = $(".saveBtn");

function updateDate() {
  setInterval(() => {
    $(currentDate).text(moment().format("MMMM Do, YYYY, hh:mm:ss a"));
  }, 0);
}

function checkTime() {
  var currentTime = moment().set({
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  console.log(currentTime);
}