const questions=[
    {
        question: "Anna saves $75 every month. How much will she save in 16 months? ",
        answers:[
            {text:"$91",correct :false},
            {text:"$450",correct :false},
            {text:"$900",correct :false},
            {text:"$1200",correct :true},
        ]
    },
    {
        question: "LaTina is saving $60 a month for a vacation. She needs to save $540 dollars. How long will it take her to save enough for her vacation? ",
        answers:[
            {text:"6 months",correct :false},
            {text:"9 months",correct :true},
            {text:"12 months",correct :false},
            {text:"18 months",correct :false},
        ]

    },
    {
        question: "Ron wrote a check $37.80. Before he wrote the check, his balance was $137.75. What is his new balance? ",
        answers:[
            {text:"100.15",correct :false},
            {text:"100.00",correct :false},
            {text:"99.95",correct :true},
            {text:"175.55",correct :false},
        ]

    },
    {
        question: "Jason's average hits per game for the last three months are: 3.6, 4.5, and 6.2. What are his averages, rounded to the nearest whole number? ",
        answers:[
            {text:"3,4amd 6",correct :false},
            {text:"4,4 and 6",correct :false},
            {text:"4,5 and 7",correct :false},
            {text:"4,5 and 6",correct :true},
        ]

    },
    {
        question: "Which of these decimals when rounded to the nearest whole number is 54? ",
        answers:[
            {text:"54.81",correct :false},
            {text:"52.65",correct :false},
            {text:"53.85",correct :true},
            {text:"53.40",correct :false},
        ]

    }
];
const questionElement =document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);


    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innnerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length ){
        showQuestion();

    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
