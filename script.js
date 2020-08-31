


// create our questions
let g1_questions = [
    {
        question : "How many ‘IRINDW’ words can you find in this house?",
        imgsrc: "img/irindw.png",
        choiceA : "5",
        choiceB : "9",
        choiceC : "3",
        correct : ["A"]
    },{
    question : "Find the two use cases that demonstrates the benefits of UDP?",
    imgsrc: "img/udp.png",
    choiceA : "unstructured_text & dashboards",
    choiceB : "analytics & retrievals",
    choiceC : "self-service & emails",
    correct : ["A"]
}
]
let g3_questions = [
    {
        question : "STAGE 1: </br>Remove the duplicates!",
        choiceA : "Age",
        choiceB : "Age",
        choiceC : "Name",
        correct : ["A", "B"]
    },{
        question : "STAGE 1: </br>Remove the duplicates!",
        choiceA : "Date_commenced",
        choiceB : "Date_ceased",
        choiceC : "Date_start",
        correct : ["A", "C"]
    },{
        question : "STAGE 2: </br>Standardize the data!",
        choiceA : "$1,241",
        choiceB : "$9,080",
        choiceC : "18003",
        correct : ["C"]
    }
    ,{
        question : "STAGE 2: </br>Standardize the data!",
        choiceA : "23 Oct 2020",
        choiceB : "23-Oct-2020",
        choiceC : "1-Jan-2020",
        correct : ["A"]
    },{
        question : "STAGE 3: </br>Fill up the missing values with the average! </br>Age: 43, 40, 46, null, 42, 41",
        choiceA : "41",
        choiceB : "40",
        choiceC : "43",
        correct : ["C"]
    }
    ,{
        question : "STAGE 3: </br>Fill up the missing values with the most common value! </br>Enquiry Type: Waiver, Waiver, Correction, null, Waiver",
        choiceA : "Waiver",
        choiceB : "Correction",
        choiceC : "IT Issue",
        correct : ["A"]
    }
    
];
// create our questions
let g5_questions = [
    {
        question : "Which two divisions have call volume achieved between 5000 to 6000 in the month of Oct?",
        choiceA : "CTD and GSTD",
        choiceB : "CTD and ENFD",
        choiceC : "CTD and PTD",
        choiceD : "CTD and PTD",
        correct : ["A"]
    }
]

const gamecontainer = document.getElementById("game-container");
const gametitle = document.getElementById("gametitle");
const gameintro = document.getElementById("gameintro");
const introspeech = document.getElementById("introspeech");
const game = document.getElementById("game");
const question = document.getElementById("question");

const totalscoredisplay = document.getElementById("totalscoredisplay");

let totalscore =0;
let score1 = 0;
let score2= 0;
let score3= 0;
let score4= 0;
let score5= 0;
let TIMER;

// start quiz
function startQuiz(g){

    global_g = g;
    console.log(global_g);
    menu.style.display = "none";
    gamecontainer.style.display = "block";
    
    if(g == "game1"){ // Find the source
        gametitle.innerHTML = "GAME 1: FIND THE SOURCE";
        introspeech.innerHTML = "Let's find the words!"
        questions = g1_questions;
        questionTime = 100; // 100s
		
    } else if (g == "game2"){ // Spot the "dealbreakers"
        gametitle.innerHTML = "GAME 2: SPOT THE DEALBREAKERS";
        introspeech.innerHTML = "Using your X-ray eyes, identify what is wrong with this set of data!"
		window.location.href="./game2_1/index.html"
		
		
    } else if (g == "game3"){ // Cleaning up
        gametitle.innerHTML = "GAME 3: CLEANING UP";
        introspeech.innerHTML = "With speed and diligence, I need your help to clean up the mess!"
        questions = g3_questions;
        questionTime = 10; // 10s
        window.location.href="./game3/index.html"
        
    } else if (g == "game4"){ // Tell a Data Story
        gametitle.innerHTML = "GAME 4: TELL A DATA STORY";
        introspeech.innerHTML = "Let's look at what story the data is trying to tell us!"
    } else if (g == "game5"){ // Dashboarding
        gametitle.innerHTML = "GAME 5: DASHBOARDING";
        introspeech.innerHTML = "Let's head over to your desktop PC for a guided tour on dashboarding!"
        questions = g5_questions;
        questionTime = 120; // 120s
    }
}
function playGame(){
    gameintro.style.display = "none";
    game.style.display = "block";
    score = 0;
    lastQuestion = questions.length - 1;
    runningQuestion = 0;
    count = 0;
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/questionTime)));
    renderQuestion(runningQuestion);
    renderProgress();
    renderCounter(questions);
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render a question
function renderQuestion(runningQuestion){
    let q = questions[runningQuestion];
    let q_no = runningQuestion+1;

    if(global_g == "game1"){ // Find the source
        console.log(q.imgsrc)
        question.innerHTML = "<div id='question'>" + q.question + "</div></br>"
        question.innerHTML += "<img src="+ q.imgsrc + " alt='cloud'>"
        question.innerHTML += "<div class='row-fluid'>"
        question.innerHTML += "<div class='span text-left'><div class='button' id='A' onclick='checkAnswer(\"A\")'>"+q.choiceA+"</div></div>"
        question.innerHTML += "<div class='span text-centre'><div class='button' id='B' onclick='checkAnswer(\"B\")'>"+q.choiceB+"</div></div>"
        question.innerHTML += "<div class='span text-right'><div class='button' id='C' onclick='checkAnswer(\"C\")'>"+q.choiceC+"</div></div>"
        question.innerHTML += "<div>"
    } else if (global_g == "game2"){ // Spot the "dealbreakers"


    } else if (global_g == "game3"){ // Cleaning up
        question.innerHTML = "<div id='question'>" + q.question + "</div></br>"
        question.innerHTML += "<div id='choices'>"
        question.innerHTML += "<div class='button' id='A' onclick='checkAnswer(\"A\")'>"+q.choiceA+"</div>"
        question.innerHTML += "<div class='button' id='B' onclick='checkAnswer(\"B\")'>"+q.choiceB+"</div>"
        question.innerHTML += "<div class='button' id='C' onclick='checkAnswer(\"C\")'>"+q.choiceC+"</div>"
        question.innerHTML += "<div>"
    } else if (global_g == "game4"){ // Tell a Data Story

    } else if (global_g == "game5"){ // Dashboarding
        question.innerHTML = "<div id='question'>" + q.question + "</div></br>"
        question.innerHTML += "<div id='choices'>"
        question.innerHTML += "<div class='button' id='A' onclick='checkAnswer(\"A\")'>"+q.choiceA+"</div>"
        question.innerHTML += "<div class='button' id='B' onclick='checkAnswer(\"B\")'>"+q.choiceB+"</div>"
        question.innerHTML += "<div class='button' id='C' onclick='checkAnswer(\"C\")'>"+q.choiceC+"</div>"
        question.innerHTML += "<div class='button' id='D' onclick='checkAnswer(\"D\")'>"+q.choiceD+"</div>"
        question.innerHTML += "<div>"
}
}
// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
var countdownNumber = document.getElementById('countdown-number');
var initialOffset = '200';
// counter render
function renderCounter(){
    if(count <= questionTime){
        countdownNumber.innerHTML = questionTime - count;
        $('.circle_animation').css('stroke-dashoffset', initialOffset-(count*(initialOffset/questionTime)));
        count++
    }else{
        count = 0;
        $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/questionTime)));
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion(runningQuestion);
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            game.style.display = "none";
            scoreRender();
        }
    }
}
// checkAnwer
function checkAnswer(answer){
    if(questions[runningQuestion].correct.includes(answer)){
        // answer is correct
        score = score + 100;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion(runningQuestion);
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);              
        game.style.display = "none";
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#117A65";
}
// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#A04000";
}


const ending = document.getElementById("ending");
const gamescore = document.getElementById("gamescore");
const endspeech = document.getElementById("endspeech");

// score render
function scoreRender(){
    runningQuestion = 0;
    progress.innerHTML = "";
    ending.style.display = "block";
    console.log(global_g);
    console.log(score);
    console.log(score1);

    if(global_g == "game1"){ // Find the source
        endspeech.innerHTML = "All cleaned up!"
        if(score1 >= score){ 
            endgamescoreing.innerHTML = "<p>You scored "+ score +" points! But it is lower than your previous score of " +score1+ "points. Try again? </p>";
        } else if (score1 < score){ 
            gamescore.innerHTML = "<p>You scored "+ score +" points! Higher than before! </p>";
            score1 = score;
        }
    } else if (global_g == "game2"){ // Spot the "dealbreakers"
    endspeech.innerHTML = "All cleaned up!"
    if(score2 >= score){ 
        gamescore.innerHTML = "<p>You scored "+ score +" points! But it is lower than your previous score of " +score2+ "points. Try again? </p>";
    } else if (score2 < score){ 
        gamescore.innerHTML = "<p>You scored "+ score +" points! Higher than before! </p>";
        score2 = score;
    }
    } else if (global_g == "game3"){ // Cleaning up
        endspeech.innerHTML = "All cleaned up!"
        if(score3 >= score){ 
            gamescore.innerHTML = "<p>You scored "+ score +" points! But it is lower than your previous score of " +score3+ "points. Try again? </p>";
        } else if (score3 < score){ 
            gamescore.innerHTML = "<p>You scored "+ score +" points! Higher than before! </p>";
            score3 = score;
        }
    } else if (global_g == "game4"){ // Tell a Data Story
        endspeech.innerHTML = "All cleaned up!"
        if(score4 >= score){ 
            gamescore.innerHTML = "<p>You scored "+ score +" points! But it is lower than your previous score of " +score4+ "points. Try again? </p>";
        } else if (score4 < score){ 
            gamescore.innerHTML = "<p>You scored "+ score +" points! Higher than before! </p>";
            score4 = score;
        }
    } else if (global_g == "game5"){ // Dashboarding
        endspeech.innerHTML = "All cleaned up!"
        if(score5 >= score){ 
            gamescore.innerHTML = "<p>You scored "+ score +" points! But it is lower than your previous score of " +score5+ "points. Try again? </p>";
        } else if (score5 < score){ 
            gamescore.innerHTML = "<p>You scored "+ score +" points! Higher than before! </p>";
            score5 = score;
        }
    } 
    totalscore = score1 + score2 + score3 + score4 + score5;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "submitExplode/"+totalscore+location.search, true);
    httpRequest.send(null);
}

 // load menu
function loadMenu(){
    ending.style.display = "none";
    gamecontainer.style.display = "none";
    gameintro.style.display = "block";
    menu.style.display = "block";
    totalscoredisplay.innerHTML = "<p>Your total score: "+score1 + "+" + score2 + "+" +score3 + "+" +score4 + "+" +score5 + "=" +totalscore+"</p>";
}
