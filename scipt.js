quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore =quesJSON.length;
// Accessing all the element 

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
showQuestion();

nextEl.addEventListener('click',()=>{
    nextQuestion();
    scoreEl.textContent = `Score : ${score} / ${totalScore}`;

})
prev.addEventListener('click',()=>{
    if(currentQuestion>1){
        prevQuestion();
    }
  
    scoreEl.textContent = `Score : ${score} / ${totalScore}`;

})

function showQuestion() {
  //   destructuring
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  // setting question tect content
  questionEl.textContent = question;
  const shuffleOption = shuffleOptions(options);

  // populating the option div with the buttons
  shuffleOption.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    // event handeling on the button

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        if (score > 0) {
          score = score - 0.25;
        }
      }
      console.log(score);
      scoreEl.textContent = `Score : ${score} / ${totalScore}`;
   
      nextQuestion();
    
    });
  });
}

function nextQuestion(){
    currentQuestion++;
    optionEl.textContent = " ";
    if(currentQuestion>=quesJSON.length){
          questionEl.textContent = "Quiz completed!!";
        nextEl.remove();
        prevEl.remove();
    }else{
        showQuestion();
    }
    console.log(currentQuestion)
}

function prevQuestion(){
    
        currentQuestion--;
    
   
    optionEl.textContent = " ";
    if(currentQuestion>=quesJSON.length){
          questionEl.textContent = "Quiz completed!!";
      
    }else{
        showQuestion();
    }
    console.log(currentQuestion)
}
// shuffling the options

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

// shuffleOptions([1,2,3,4,5])
