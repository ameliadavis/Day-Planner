// Declare global variables
var currentDay = document.getElementById("currentDay");
var todaysDate = moment().format('MMMM Do YYYY'); 
var hourEl = document.getElementById("hour");
var hourDataEl = $("#hour").attr("data-time");
var saveButton = document.getElementById("saveBtn");
var descriptionEl = document.getElementById("description");
var timeNow = moment().format('LTS');
console.log("this should be the data on time " + hourDataEl);

// function for save button to add content to local storage 
function save() {

    // var currentDescription = descriptionEl(this);
    console.log("this",this);
    localStorage.setItem("to do",currentDescription);// need to grab this input text and date, 
}
//function to turn hours colors based on time 
function timePassing (){
    for(var i = 0; i < $(".textarea").length ;i++){ 
        // not sure how to get this to cycle through all the hour elements on the page. 
        console.log(i);
        if(hourEl[i] < timeNow){
            $(".textarea").addClass("past");
            console.log("past");
        } else if (hourEl[i] = timeNow) {
            $(".textarea").addClass("present");
            console.log("present");
        } else {
            $(".textarea").addClass("future");
            console.log("future");
        };
    };
}





//set date code will go at the end of the script to load when page loads
console.log("todays date variable",todaysDate);
currentDay.innerHTML = todaysDate;

// event listener for save button
$(saveButton).on("click",".data-value", save);

// current time
console.log("this is the current time", moment().format('LTS'));
timePassing();