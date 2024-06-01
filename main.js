function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;
}
function saveScore()
{
    localStorage.setItem("score", score);
}
function nextPage(){
    window.location = "activity_2.html";
}
function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location.replace("game_page.html");
}
function back(){
    window.location = "activity_1.html";
}
function getScore()
{
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score: " + score +"<.h1>";
}
function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word.inlowerCase = " + word);

    charAt1 = word.charAt1(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt2(lenght_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAT(length_minus_1);
    console.log(charAt3);}

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.eplace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_buton = "<br><br><button class=''btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML =player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Answer Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn ="player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn-"+player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer"),innerHTML ="Answer Turn -" +player1_name;
    }
    document.getElementById("output").innerHTML = "";
}