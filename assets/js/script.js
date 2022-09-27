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
    "minute": "0",
    "second": "0",
    "millisecond": "0"
  });

  console.log(currentTime);

  $(".row").each(function () {
    var blockText = $(this).children(".hour").text();
    console.log(blockText);

    var timeBlock = moment(blockText, "hA");
    console.log(timeBlock);
    
    if (timeBlock.isBefore(currentTime)) {
      $(this).children(".time-block").addClass("past");
    } else if (timeBlock.isAfter(currentTime)) {
      $(this).children(".time-block").addClass("future");
    } else {
      $(this).children(".time-block").addClass("present");
    }
  })
};

function getStorage() {
  $(".time-block").each(function () {
    var textBoxId = $(this).attr("id");
    var textBoxValue = localStorage.getItem(textBoxId);
    $(this).val(textBoxValue);
  })
};

saveBtn.on("click", function () {
  var textBoxId = $(this).siblings(".time-block").attr("id");
  var textBoxValue = $(this).siblings(".time-block").val();
  localStorage.setItem(textBoxId, textBoxValue);
});

getStorage();
updateDate();
checkTime();