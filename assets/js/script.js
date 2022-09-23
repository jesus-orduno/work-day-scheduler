// Setting variable to store the current date
var currentDate = $("#currentDay");
var saveBtn = $(".saveBtn");

function updateDate() {
  setInterval(() => {
    $(currentDate).text(moment().format("MMMM Do, YYYY, hh:mm:ss a"));
  }, 0);
};

function checkTime() {
  var currentTime = moment().set({
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  console.log(currentTime);

  $(".row").each(function () {
    var blockText = $(this).children(".hour").text();

    var timeBlock = moment(timeBlockText, "hA");
    
    if (timeBlock.isBefore(currentTime)) {
      $(this).children(".time-block").addClass("past");
    } else if (timeBlock.isAfter(currentTime)) {
      $(this).children(".time-block").addClass("future");
    } else {
      $(this).children(".time-block").addClass("present");
    }
  })
};


