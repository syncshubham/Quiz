const mcq = [
    {
        question:"What is the name of our Galaxy",
        a:"Andromeda",
        b:"White Dwarf",
        c:"Milky Way",
        d:"Black Hole",
        correct:"c",
    },
    {
        question:"Who is richest person on Earth",
        a:"Elon Musk",
        b:"Jeff Bezos",
        c:"Larry Page",
        d:"Bill Gates",
        correct:"a",
    },
    {
        question:"Which freedom fighter said the quote \"INQUILAB ZINDABAD\"",
        a:"Subash Chandra Bose",
        b:"Chandra Sekhar Azad",
        c:"Sardar Vallabh Bhai Patel",
        d:"Bhagat Singh",
        correct:"d",
    },
    {
        question:"Who written Harry Potter Book",
        a:"Virginia Woolves",
        b:"J.K Rowling",
        c:"Charles Darwin",
        d:"Oscar Wilde",
        correct:"b",
    },
    {
        question:"Who scored the 100 centuries in Cricket history",
        a:"Virat Kohli",
        b:"Adam Gilchrist",
        c:"Sachin Tendulkar",
        d:"Andrew Symonds",
        correct:"c",
    },
]

const question1 = document.getElementById("questions");
const a_ques = document.getElementById("a_ques");
const b_ques = document.getElementById("b_ques");
const c_ques = document.getElementById("c_ques");
const d_ques = document.getElementById("d_ques");
const myButton = document.getElementById("myButton");
const quiz = document.getElementById("quiz");


let currentMcq = 0;
let score = 0;
const solution = document.querySelectorAll(".solutions");

function runMcq(){
    deselectAnswers();
const currentMcqData = mcq[currentMcq];
question1.innerText = currentMcqData.question;
a_ques.innerText = currentMcqData.a;
b_ques.innerText = currentMcqData.b;
c_ques.innerText = currentMcqData.c;
d_ques.innerText = currentMcqData.d;
}

runMcq();

let getSelected = ()=>{   

let answer =  undefined;

solution.forEach((solutions1) => {
    if(solutions1.checked){
        answer =  solutions1.id;
    }    
});
console.log(answer);
return answer;
}

function deselectAnswers(){
    solution.forEach((solutions1) => {
solutions1.checked = false;
});
}

myButton.addEventListener("click", () => {
    const answer = getSelected();
    
if(answer){
    if(answer === mcq[currentMcq].correct){
        score++;
    }
        currentMcq++;
        if (currentMcq < mcq.length){
            runMcq();
        }else{
            alert("Quiz Completed \"Press OK to Check your Result\"")
            quiz.innerHTML = `<h2>You Scored ${score}/${mcq.length}</h2>`;         
        }
    }    
});

