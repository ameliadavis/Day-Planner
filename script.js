// Declare global variables
var currentDay = document.getElementById("currentDay");
var todaysDate = moment().format('MMMM Do YYYY'); 
// var hourEl = document.getElementById("hour");
var hourEl = $("#hour");
// var hourDataEl = $("#hour").attr("data-time");
var saveButton = document.getElementById("saveBtn");
// var descriptionEl = $("#description").val();
var timeNow = moment().format('LTS');
// console.log("this should be the data on time " + hourDataEl);

$("#saveBtn").on("click", function(){
    console.log("register the click");
    var descriptionEl = $("input").val();
   
    console.log(descriptionEl);
    save();


// function for save button to add content to local storage 
function save() {
    event.preventDefault();
    localStorage.setItem("this is a test", "this is only a test");
    localStorage.setItem("this is the description", descriptionEl);
 };
});

//function to turn hours colors based on time 
function timePassing (){
    for(var i = 0; i < $("#description").length ;i++){ // cycle thorugh all the elements on the page
        console.log(i);
        if(hourEl[i] < timeNow){
            $("#description").addClass("past");
            console.log("past");
        } else if (hourEl[i] = timeNow) {
            $("#description").addClass("present");
            console.log("present");
        } else {
            $("#description").addClass("future");
            console.log("future");
        };
    };
    };


// $(document).ready(function(){
// document.getElementById("description1").innerHTML = localStorage.getItem("lastname");
// });

// $("input").keyup("click",function(){
//     var value = $(this).val();
//     $("div").text(value);
//     console.log(value);
// } )


// current time
console.log("this is the current time", moment().format('LTS'));

//set date code will go at the end of the script to load when page loads
// console.log("todays date variable",todaysDate);
currentDay.innerHTML = todaysDate;
timePassing();
