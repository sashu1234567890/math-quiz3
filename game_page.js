number1_name=localStorage.getItem("number1_name");
number2_name=localStorage.getItem("number2_name");

number1_score="0";
number2_score="0";

document.getElementById("player1_name").innerHTML= number1_name + " : ";
document.getElementById("player2_name").innerHTML= number2_name + " : ";

document.getElementById("player1_score").innerHTML= number1_score;
document.getElementById("player2_score").innerHTML= number2_score;

document.getElementById("player_question").innerHTML= "question turn : " + number1_name;
document.getElementById("player_answer").innerHTML= "answer turn : " + number2_name;

function send(){
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
actual_answer = parseInt(number1) * parseInt(number2);

question_number ="<h4>" + number1 + " X "+ number2 +"</h4>";
input_box ="<br>Answer : <input type ='text' id= 'input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("text_input_1").value= "" ;
document.getElementById("text_input_2").value= "" ;
}