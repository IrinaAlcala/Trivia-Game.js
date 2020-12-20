const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    //for each question
    myQuestions.forEach(
       (currentQuestion, questionNumber)  => {

        //variable to store the list of possible answers
        const answers = [];

        //and for each available answer
        for(letter in currentQuestion.answers) {

            //add HTML radio button
            answers.push(
                <label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                </label>
            );
        }

       
        

        output.push(
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')}</div>
        );
        }
        );

        //combine our output list into one string of HTML

        quizContainer.innerHTML = output.join('')

}
</label>

function showResults() {}


//display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);


const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            A: "Douglas Crockford",
            B: "Sheryl Sandberg",
            C: "Brendan Eich"
        },
        correctAnswer: "C"
    },
];

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
