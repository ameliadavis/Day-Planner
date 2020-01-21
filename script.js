// Declare global variables
var currentDay = document.getElementById("currentDay");
var todaysDate = moment().format('MMMM Do YYYY'); 
var hourEl = $("#hour").data("time");
var saveButton = document.getElementById("saveBtn");
// var descriptionEl = document.getElementById("description");
var description = $(".description");
var descriptionEl = $(".description").val();
var timeNow = moment().format('H');// this is in military time
var table = $("#table");

console.log("this should be the current hour " + timeNow);
console.log("this is the hour element " + hourEl);

//function to turn hours colors based on time 
function timePassing (){
    // for(var i = 0; i < $(".hour").length + 1; i++){ // cycle thorugh all the elements on the page
        $(".hour").each(function() {
            // console.log(i);
        var description = $(".hour").length;
        console.log(description);
        hourEl = parseInt($(this).attr("id"));
        console.log(hourEl);
        if(hourEl < timeNow){
            $(this).addClass("past");
            console.log("past");
            console.log(this);
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
$("#saveBtn").on("click", function(){
    console.log("register the click");
    var descriptionEl = $("input").val();
    console.log(this);

    save();

// function for save button to add content to local storage 
function save() {
    event.preventDefault();
    localStorage.setItem("this is a test", "this is only a test");
    localStorage.setItem("this is the description", descriptionEl );
 };
});

// this will print the items saved in local storage back to the screen 
$(document).ready(function(){
document.getElementsByClassName("hour").innerHTML = localStorage.getItem("this is the description");
});

// from solution 
// $(document).ready(function() {  // listen for save button clicks  $(".saveBtn").on("click", function() {    // get nearby values    var value = $(this).siblings(".description").val();    var time = $(this).parent().attr("id");
    // save in localStorage    localStorage.setItem(time, value);  });

// current time
console.log("this is the current time", moment().format('LTS'));

// set the date at the top of the page
currentDay.innerHTML = todaysDate;

// run function 
timePassing();
