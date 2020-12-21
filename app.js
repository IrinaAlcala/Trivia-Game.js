const quizData = [
	{quiz: '1. What is North America\'s oldest national park?',
		a: 'a. Yellowstone National Park',
		b: 'b. Great Smoky Mountains National Park',
		c: 'c. Grand Canyon National Park',
		d: 'd. Yosemite National Park' ,
		correct: 'a'
	},
	{quiz: '2. What is The Most Beautiful Gardens In Canada? You Have seen?',
		a: 'a. Annapolis Historic Gardens. NS' ,
		b: 'b. Butchart Gardens. BC' ,
		c: 'c. Royal Botanical Gardens. ON' ,
		d: 'd. Kingsbrae Garden. NB' ,
		correct: 'b'
	},
	{quiz: '3 Which park has the highest tides in the world?',
		a: 'a. Cape Breton Highlands National Park NS',
		b: 'b. Prince Edward Island National Park PEI',
		c: 'c. Hopewell Rocks Rocks Provincial Park NB',
		d: 'd. Glacier National Park BC',
		correct: 'c'
	},
	{quiz: '4. What is the most southerly national park in Canada?',
		a: 'a. Bruce Peninsula',
		b: 'b. St Lawrence Islands',
		c: 'c. Gwaii Haanas',
		d: 'd. Point Pelee',
		correct: 'd'
	},
	{quiz: '5. Of all Canada’s Great Lakes, which is the largest?',
		a: 'a. Lake Erie',
		b: 'b. Lake Ontario',
		c: 'c. Lake Superior',
		d: 'd. Lake Huron',
		correct: 'c'	
	},
	{quiz: '6. Where do fish keep their money?',
		a: 'a. In a river-basin',
		b: 'b. In a waterbed',
		c: 'c. In a river-mouth',
		d: 'd. In a river-bank',
		correct: 'd'	
	},
	{quiz: '7. What did the dad say after dropping his son off at Yellowstone National Park?',
		a: 'a. Bear!',
		b: 'b. Wolf!',
		c: 'c. Bison!',
		d: 'd. Trout!',
		correct: 'c'	
	},
	{quiz: '8.What is a tornado’s favorite game?',
		a: 'a. Scrables',
		b: 'b. Chess',
		c: 'c. Monopoly',
		d: 'd. Twister',
		correct: 'd'	
	},
	{quiz: '9. What is the strongest creature in the ocean?',
		a: 'a. Whale',
		b: 'b. Seahorse',
		c: 'c. Star fish',
		d: 'd. Mussel',
		correct: 'd'	
	},
	{quiz: '10. What trees can sew?',
		a: 'a. Palm tree',
		b: 'b. Maple tree',
		c: 'c. Josua tree',
		d: 'd. Pine tree',
		correct: 'd'	
	}
]; 

//load first quiz
const questions = document.getElementById('question');
const aAnswer = document.getElementById('a_answer');
const bAnswer = document.getElementById('b_answer');
const cAnswer = document.getElementById('c_answer');
const dAnswer = document.getElementById('d_answer');
let currentQuiz = 0;
quizLoad();
function quizLoad(){	
	questions.innerHTML = quizData[currentQuiz].quiz;
	aAnswer.innerHTML = quizData[currentQuiz].a;
	bAnswer.innerHTML = quizData[currentQuiz].b;
	cAnswer.innerHTML = quizData[currentQuiz].c;
	dAnswer.innerHTML = quizData[currentQuiz].d;
	};
function nextQuiz(){
	currentQuiz++;
	deselect();
	document.getElementById('demo').innerHTML = '';
	if(currentQuiz >= quizData.length){
		const nextBtn = document.getElementById('next');
		document.getElementById('demo').innerHTML = 
		'Score' + ': ' + count + ' ' + 'out of' + ' ' + quizData.length;
		nextBtn.innerHTML = 'You finished! Go hiking!';
		} else {
		quizLoad();
		
		}
};

//submit Answer and check
let count = 0;
function submitAnswer(){
	const userAnswer = document.querySelector(('input[type="radio"]:checked')|| {}).value;
	console.log(userAnswer);
	if (userAnswer == quizData[currentQuiz].correct){
		document.getElementById('demo').innerHTML = 'Correct!';
		count++;
		console.log(count);
	} else {
		document.getElementById('demo').innerHTML = 
		'Incorrect!' + ' ' + quizData[currentQuiz].correct + ' ' + 
		'is correct answer';
	}
};
//deselect 
function deselect(){
	const answerChecked = document.querySelectorAll('.answer');
	for(let i=0; i<4 ; i++){
		answerChecked[i].checked = false;
	}
};