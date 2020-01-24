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
        $(".hour").each(function() {
            // console.log(i);
        var description = $(".hour").length;
        console.log(description);
        hourEl = parseInt($(this).attr("id"));
        console.log(hourEl);
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
    var hourStore = $(this).attr("id");
    var descriptStore = JSON.stringify($(".description").val());// need to do Jason stingify and parse to make this work. 


    // console.log("hourStore " + hourStore);
    // console.log("descriptStore " + descriptStore);
    // save(hourStore, descriptStore);
    save(hourStore, descriptStore);

// function for save button to add content to local storage 
function save(hStore, dStore) {
    event.preventDefault();

    console.log(hStore, dStore);

    //localStorage.setItem(blwh);
    // localStorage.setItem("this is a test", "this is only a test");
    localStorage.setItem(hStore , dStore);
    // localStorage.setItem("9", "should say 9");
 };
});


// // this will print the items saved in local storage back to the screen 
$(document).ready(function(){
    $(".hour").each(function() {
        $(".description").innerHTML = localStorage.getItem("9");
        $(".description").innerHTML = localStorage.getItem("10");
        $(".description").innerHTML = localStorage.getItem("11");
        $(".description").innerHTML = localStorage.getItem("12");
        $(".description").innerHTML = localStorage.getItem("13");
        $(".description").innerHTML = localStorage.getItem("14");
        $(".description").innerHTML = localStorage.getItem("15");
        $(".description").innerHTML = localStorage.getItem("16");
        $(".description").innerHTML = localStorage.getItem("17");
});
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
