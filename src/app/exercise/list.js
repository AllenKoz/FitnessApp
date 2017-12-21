var exercises = [];
var number = [];
var p = [];
function myJsFunction(){

    var x = document.getElementById("input6").value;
    exercises.push(x);
    var y = document.getElementById("input7").value;
    number.push(y);
    var o = document.getElementById("input1").value;
    p.push("Jumping Jacks: " + document.getElementById("input1").value + "<br >"+ 
    "Sit ups: " + document.getElementById("input2").value + "<br >"+
    "Running: " + document.getElementById("input3").value + "<br >"+
    "Swimming: " + document.getElementById("input4").value + "<br >"+
    "Rowing: " + document.getElementById("input5").value + "<br >"+   
    x + " " + y + "<br >");
    console.log(p);
    document.getElementById("outputList").innerHTML = p;

}