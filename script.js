// Declare global variables
var currentDay = document.getElementById("currentDay");
var todaysDate = moment().format('MMMM Do YYYY'); 
var hourEl = $("#hour").data("time");
var saveButton = $(".saveBtn");
var description = $(".description");
var descriptionEl = $(".description").val();
var timeNow = moment().format('H');// this is in military time
var table = $("#table");

console.log("this should be the current hour " + timeNow);
console.log("this is the hour element " + hourEl);



//function to turn hours colors based on time 
function timePassing (){
    // for(var i = 0; i < $(".hour").length + 1; i++){ // cycle thorugh all the elements on the page
        $(".row").each(function() {
            // console.log(i);
        var description = $(".row").length;
        console.log(description);
        hourEl = parseInt($(this).attr("id"));
        console.log(hourEl);
        console.log(this);
        if(hourEl < timeNow){
            $(this).addClass("past");
            console.log("past");
        } else if (hourEl === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
            console.log("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            console.log("future");
        };
     });
    };
    // save button listener
$(".saveBtn").on("click", function(){
    console.log("register the click");
    var hourStore = parseInt($(this).parents("div").attr("id"));
    // parent to grab ID sibling to get everything on the same line, dont forget to remove dform the button on the HTML
    var descriptStore = $(this).siblings("textarea").val();
    console.log(hourStore);
    console.log(descriptStore);
    save(hourStore, descriptStore);

// function for save button to add content to local storage 
function save(hStore, dStore) {
    event.preventDefault();
    localStorage.setItem(hStore , dStore);

 };
});


// // this will print the items saved in local storage back to the screen 
$(document).ready(function(){
    $(".hour").each(function() {
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
});
});

// current time
console.log("this is the current time", moment().format('LTS'));

// set the date at the top of the page
currentDay.innerHTML = todaysDate;

// run function 
timePassing();
