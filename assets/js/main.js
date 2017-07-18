//===========================================
//Define all our Data Here
//===========================================
var dataObject = [
  {
  	question: "EBS Snapshots are backed up to S3 in what manner?", 
  	answers: ["Incrementally", "Exponentially", "Decreasingly", "EBS Snapshots are not stored on S3"], 
  	rightAnswer: "Incrementally" 
  },

  {
  	question: "Do Amazon EBS volumes persist independently from the life of an Amazon EC2 instance, for example, if I terminated an EC2 instance, would that EBS volume remain?", 
  	answers: ["Yes", "No", "Only if instructed to do so", "Pineapples are yummy"], 
  	rightAnswer: "Only if instructed to do so" 
	},
  {
  	question: "A placement group can be deployed across multiple Availability Zones.", 
  	answers: ["Yes", "No", "Only if I am located in N Virgina", "Only if my instances is a G type instance"], 
  	rightAnswer: "No" 
	},

  {
  	question: "Can I delete a snapshot of an EBS Volume that is used as the root device of a registered AMI?", 
  	answers: ["Yes", "No", "Only via CLI", "Only via API"], 
  	rightAnswer: "Incrementally" 
	},
  {
  	question: "Can you attach an EBS volume to more than one EC2 instance at the same time?", 
  	answers: ["Yes", "No", "If that EC2 volume is part of an AMI", "Depends on the region"], 
  	rightAnswer: "Read after write consistency" 
	},
]
https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple

// var triviaOptions = ["Sports", "Psychiatry", "Sports"];
var triviaOptions = [
{
	option: "Sports",
	results: [
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which of the following sports is not part of the triathlon?",
		"correct_answer": "Horse-Riding",
		"incorrect_answers": [
		"Cycling",
		"Swimming",
		"Running"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "How many soccer players should be on the field at the same time?",
		"correct_answer": "22",
		"incorrect_answers": [
		"20",
		"24",
		"26"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "In what sport is a &quot;shuttlecock&quot; used?",
		"correct_answer": "Badminton",
		"incorrect_answers": [
		"Table Tennis",
		"Rugby",
		"Cricket"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "In baseball, how many fouls are an out?",
		"correct_answer": "0",
		"incorrect_answers": [
		"5",
		"3",
		"2"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?",
		"correct_answer": "August 21",
		"incorrect_answers": [
		"August 23",
		"August 19",
		"August 17"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Who won the 2015 Formula 1 World Championship?",
		"correct_answer": "Lewis Hamilton",
		"incorrect_answers": [
		"Nico Rosberg",
		"Sebastian Vettel",
		"Jenson Button"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which driver has been the Formula 1 world champion for a record 7 times?",
		"correct_answer": "Michael Schumacher",
		"incorrect_answers": [
		"Ayrton Senna",
		"Fernando Alonso",
		"Jim Clark"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
		"correct_answer": "7 - 1",
		"incorrect_answers": [
		"0 - 1",
		"3 - 4",
		"16 - 0"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which city did the former NHL team &quot;The Nordiques&quot; originiate from?",
		"correct_answer": "Quebec City",
		"incorrect_answers": [
		"Houston",
		"Montreal",
		"New York"
		]
		},
		{
		"category": "Sports",
		"type": "multiple",
		"difficulty": "easy",
		"question": "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
		"correct_answer": "Don Cherry",
		"incorrect_answers": [
		"Don McKellar",
		"Don Taylor ",
		"Donald Sutherland"
		]
		}
	]
},
{
	option: "Geography",
	results: [
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "What is the capital of the American state of Arizona?",
		"correct_answer": "Phoenix",
		"incorrect_answers": [
		"Montgomery",
		"Tallahassee",
		"Raleigh"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "What state is the largest state of the United States of America?",
		"correct_answer": "Alaska",
		"incorrect_answers": [
		"California",
		"Texas",
		"Washington"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which of these is NOT an Australian state or territory?",
		"correct_answer": "Alberta",
		"incorrect_answers": [
		"New South Wales",
		"Victoria",
		"Queensland"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "How many federal states does Germany have?",
		"correct_answer": "16",
		"incorrect_answers": [
		"13",
		"32",
		"25"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "What is the official language of Costa Rica?",
		"correct_answer": "Spanish",
		"incorrect_answers": [
		"English",
		"Portuguese",
		"Creole"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
		"correct_answer": "Qatar",
		"incorrect_answers": [
		"Kuwait",
		"United Arab Emirates",
		"Jordan"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which of these is the name of the largest city in the US state Tennessee?",
		"correct_answer": "Memphis",
		"incorrect_answers": [
		"Thebes",
		"Alexandria",
		"Luxor"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which UK country features a dragon on their flag?",
		"correct_answer": "Wales",
		"incorrect_answers": [
		"England",
		"North Ireland",
		"Scotland"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "What is the capital of the US State of New York?",
		"correct_answer": "Albany",
		"incorrect_answers": [
		"Buffalo",
		"New York",
		"Rochester"
		]
		},
		{
		"category": "Geography",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which country is the home of the largest Japanese population outside of Japan?",
		"correct_answer": "Brazil",
		"incorrect_answers": [
		"China",
		"Russia",
		"The United States"
		]
		}
	]
},
{
	option: "Computers",
	results: [
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "What five letter word is the motto of the IBM Computer company?",
		"correct_answer": "Think",
		"incorrect_answers": [
		"Click",
		"Logic",
		"Pixel"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "What did the name of the Tor Anonymity Network orignially stand for?",
		"correct_answer": "The Onion Router",
		"incorrect_answers": [
		"The Only Router",
		"The Orange Router",
		"The Ominous Router"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "How many cores does the Intel i7-6950X have?",
		"correct_answer": "10",
		"incorrect_answers": [
		"12",
		"8",
		"4"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
		"correct_answer": "Heat Sink",
		"incorrect_answers": [
		"CPU Vent",
		"Temperature Decipator",
		"Heat Vent"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "Internet Protocol Version 4 (IPv4) is what bit addressing?",
		"correct_answer": "32-bit",
		"incorrect_answers": [
		"16-bit",
		"64-bit",
		"128-bit"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "What does &quot;LCD&quot; stand for?",
		"correct_answer": "Liquid Crystal Display",
		"incorrect_answers": [
		"Language Control Design",
		"Last Common Difference",
		"Long Continuous Design"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": ".rs is the top-level domain for what country?",
		"correct_answer": "Serbia",
		"incorrect_answers": [
		"Romania",
		"Russia",
		"Rwanda"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "What does the term GPU stand for?",
		"correct_answer": "Graphics Processing Unit",
		"incorrect_answers": [
		"Gaming Processor Unit",
		"Graphite Producing Unit",
		"Graphical Proprietary Unit"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
		"correct_answer": "Motorola 68000",
		"incorrect_answers": [
		"Zilog Z80",
		"Yamaha YM2612",
		"Intel 8088"
		]
		},
		{
		"category": "Science: Computers",
		"type": "multiple",
		"difficulty": "medium",
		"question": "When did the online streaming service &quot;Mixer&quot; launch?",
		"correct_answer": "2016",
		"incorrect_answers": [
		"2013",
		"2009",
		"2011"
		]
		}
	]
},
{
	option: "Music",
	results: [
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?",
		"correct_answer": "Justin Bieber",
		"incorrect_answers": [
		"Selena Gomez",
		"Ellie Goulding",
		"The Weeknd"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Who is the frontman of the band 30 Seconds to Mars?",
		"correct_answer": "Jared Leto",
		"incorrect_answers": [
		"Gerard Way",
		"Matthew Bellamy",
		"Mike Shinoda"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "The Red Hot Chili Pepper song &quot;Give It Away&quot; is from what album?",
		"correct_answer": "Blood Sugar Sex Magik",
		"incorrect_answers": [
		"One Hot Minute",
		"By the Way",
		"Stadium Arcadium"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "What is the best selling album of all time?",
		"correct_answer": "Thriller",
		"incorrect_answers": [
		"Back in Black",
		"Abbey Road",
		"The Dark Side of the Moon"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which famous rapper is featured in Jack &Uuml; (Skrillex and Diplo)&#039;s 2015 single called &quot;Febreze&quot;?",
		"correct_answer": "2 Chainz",
		"incorrect_answers": [
		"Kendrick Lamar",
		"Future",
		"Fatman Scoop"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Finish these lyrics from the 2016 song &quot;Panda&quot; by Desiigner: &quot;I got broads in _______&quot;.",
		"correct_answer": "Atlanta",
		"incorrect_answers": [
		"Savannah",
		"Augusta",
		"Marietta"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "The 2016 song &quot;Starboy&quot; by Canadian singer The Weeknd features which prominent electronic artist?",
		"correct_answer": "Daft Punk",
		"incorrect_answers": [
		"deadmau5",
		"Disclosure",
		"DJ Shadow"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "From which country did the song &quot;Gangnam Style&quot; originate from?",
		"correct_answer": "South Korea",
		"incorrect_answers": [
		"Japan",
		"North Korea",
		"China"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Who is the lead singer of Green Day?",
		"correct_answer": "Billie Joe Armstrong",
		"incorrect_answers": [
		"Mike Dirnt",
		"Sean Hughes",
		"Tr&eacute; Cool"
		]
		},
		{
		"category": "Entertainment: Music",
		"type": "multiple",
		"difficulty": "easy",
		"question": "Which classical composer wrote the &quot;Moonlight Sonata&quot;?",
		"correct_answer": "Ludvig Van Beethoven",
		"incorrect_answers": [
		"Chief Keef",
		"Wolfgang Amadeus Mozart",
		"Johannes Brahms"
		]
		}
	]
}
]

var mainbox ;
var questiondiv;
var answerdiv;
var questionIndex = 0;
var timeup = 30
var countdown;
var correctAnswer=0;
var wrongAnswer = 0;
var  scoreBoard ;
var wins;
var losses;


//===========================================
//Setup the page and define logic
//===========================================
var timeConverter =  function(t) {
//  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
	var minutes = Math.floor(t / 60);
	var seconds = t - (minutes * 60);

	if (seconds < 10) {
	  seconds = "0" + seconds;
	}

	if (minutes === 0) {
	  minutes = "00";
	}

	else if (minutes < 10) {
	  minutes = "0" + minutes;
	}

	return minutes + ":" + seconds;
}

//===========================================
//Shuffle array based on knuth-shuffle
//===========================================
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//===========================================
//Initial trivia box setup question based on category input
//===========================================

var setupTriviabox = function(category) {
	for (var i = 0 ; i < triviaOptions.length;i++) {
		if (triviaOptions[i].option === category){
			dataObject = triviaOptions[i].results;
		}
	}


	// Setup the page for questions

	//clear out old stuff
	mainbox.empty();

	//add the question
	questiondiv = $("<div>", {
		id: "question",
	})
	questiondiv.html(dataObject[questionIndex].question);
	mainbox.append(questiondiv);

	//setup the clock and timer
	var timer = $("<div>", {
		id: "timer"
	})
	timer.html("00:30");
	mainbox.append(timer);
	countdown = setInterval(startCount, 1000);
	mainbox.append("<br>");

	//add the answer options
	var choiceArray = dataObject[questionIndex].incorrect_answers;
	// console.log("Unshuffled array is : " + choiceArray)
	choiceArray.push(dataObject[questionIndex].correct_answer);
	var choiceArrayShuffled = shuffle(choiceArray);
	// console.log ("Shuffled array is : " + choiceArrayShuffled);

	for (var j = 0 ; j < choiceArrayShuffled.length;j++){

		answerdiv = $("<div>", {
			class: "answerbox",
			id: choiceArrayShuffled[j],
		});

		answerdiv.html(choiceArrayShuffled[j]);
		mainbox.append(answerdiv);
	}


	//setup the scoreboard
	scoreBoard  = $("<div>", {
		id: "score",
		class: "boxes"
	})

	wins = $("<div>",  {
		id: "correctAnswer"
	})

	losses = $("<div>",  {
		id: "wrongAnswer"
	})

	wins.html("<h2>Correct answers : " + correctAnswer+ "</h2>");
	losses.html("<h2>Incorrect anwers : " + wrongAnswer+ "</h2>");

	scoreBoard.append(wins);
	scoreBoard.append(losses);

	$("body").append(scoreBoard);

}

//===========================================
//Review user selection and provide info on answer
//===========================================
var answerTime = function (answer) {
	clearInterval(countdown);
	timeup = 30;

	$(".answerdiv").fadeOut();
	$("#question").fadeOut();
	// console.log ("The Answer selected is : " + answer);
	// console.log("The correct answer is : " + dataObject[questionIndex].correct_answer + " The questionIndex is : " + questionIndex)
	if (answer === dataObject[questionIndex].correct_answer) {
		correctAnswer++;
		wins.fadeOut();
		wins.empty();	
		wins.html("<h2>Correct Answer : " + correctAnswer+ "</h2>");
		wins.fadeIn();

	}else {
		wrongAnswer++;
		losses.fadeOut();
		losses.empty();
		losses.html("<h2>Incorrect Answer : " + wrongAnswer + "</h2>");
		losses.fadeIn();
		console.log("<h2>Incorrect Answer : " + wrongAnswer + "</h2>");
	}

	//Clear out the box and provide answer details
	mainbox.empty();
	mainbox.append("<h2> The correct answer is : " + dataObject[questionIndex].correct_answer + " </h2>");
	// mainbox.append ("<h2> More information about the answer can be found <a href='https://aws.amazon.com/ec2/'>here</a></h2>")

	questionIndex++;
	console.log("We are at index : " + questionIndex);
	console.log("dataObject.length is " + dataObject.length);


	if (questionIndex === dataObject.length) {
		showResetGame();
	}else {
		var nextQuestion = $("<div>", {
			id: "nextbox",
		})

		nextQuestion.html("Next Question");

		mainbox.append(nextQuestion);

	}


}


var showResetGame = function () {
	mainbox.empty();
	scoreBoard.remove();
	mainbox.append("<h2> This quiz has come to an end :( ! </h2>");
	if (correctAnswer > wrongAnswer) {
		mainbox.append("<h2> You Won!</h2>");
	}else if (correctAnswer === wrongAnswer) {
		mainbox.append("<h2> You Tied!</h2>");
	}else {
		mainbox.append("<h2> You Lost, its OK!</h2>");
	}

	var resetgamebox =  $("<div>", {
		id: "resetgamebox",
	})

	resetgamebox.html("Reset Game");

	mainbox.append(resetgamebox);
}
//===========================================
//Timer start function
//===========================================

var startCount = function () {
	if(timeup>0){
		timeup--;
		$("#timer").html(timeConverter(timeup));
	}
	else {
		clearInterval(countdown);
		answerTime("timedout")
	}
}




//===========================================
//Transition to next question
//===========================================
var nextQuesitonFunct = function () {
	
	clearInterval(countdown);
	timeup = 30;
	
	//clear out old stuff
	mainbox.empty();

	//add the question
	questiondiv = $("<div>", {
		id: "question",
	})
	questiondiv.html(dataObject[questionIndex].question);
	mainbox.append(questiondiv);

	//setup the clock and timer
	var timer = $("<div>", {
		id: "timer"
	})
	timer.html("00:30");
	mainbox.append(timer);
	countdown = setInterval(startCount, 1000);
	mainbox.append("<br>");

	//add the answer options
	var choiceArray = dataObject[questionIndex].incorrect_answers;
	// console.log("Unshuffled array is : " + choiceArray)
	choiceArray.push(dataObject[questionIndex].correct_answer);
	var choiceArrayShuffled = shuffle(choiceArray);
	// console.log ("Shuffled array is : " + choiceArrayShuffled);

	for (var j = 0 ; j < choiceArrayShuffled.length;j++){

		answerdiv = $("<div>", {
			class: "answerbox",
			id: choiceArrayShuffled[j],
		});

		answerdiv.html(choiceArrayShuffled[j]);
		mainbox.append(answerdiv);
	}

}


//===========================================
//Reset game when questions are completed
//===========================================
var resetGame = function () {
	questionIndex = 0;
	timeup = 30
	correctAnswer=0;
	wrongAnswer = 0;
	mainbox = $("#mainbox");
	console.log("Restting game");
	mainbox.empty();

	mainbox.prepend("<h2> Please select one of the below categories :  </h2>")
	var choicediv
	for (var i = 0 ; i<triviaOptions.length;i++){
		var choice=triviaOptions[i].option;
		choicediv = $("<div>", {
			class: "categorybox",
		})

		choicediv.html(choice);
		mainbox.append(choicediv);

	}
}


//Setup the page : 
resetGame();

// $(document).ready(function (){
// 	$(".categorybox").click(setupTriviabox(this.innerHTML));
// 	$(".answerbox").click(answerTime(this.html));
// 	$("#nextQuesiton").click(nextQuesitonFunct());
// 	})


$(document).ready(function (){
	$(document).on("click",".categorybox",function (){
		// console.log(this.innerHTML);
		setupTriviabox(this.innerHTML);
		// console.log("something is hapenning")
	})

	$(document).on("click",".answerbox",function(){
		// debugger;
		// console.log("answer box clicked!!! ")
		var value = this.id;
		answerTime(value);
	})

	$(document).on("click","#nextbox",function(){
		nextQuesitonFunct();
	})

	$(document).on("click","#resetgamebox",function(){
		resetGame();
	})

})