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
	url: "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
}
{
	option: "Geography",
	url: "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
}
{
	option: "Computers",
	url: "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
}
{
	option: "Art",
	url: "https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple"
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
//Initial trivia box setup question based on category input
//===========================================

var setupTriviabox = function(category) {
	switch (category) {
		case "AWS":
			var ourObject = dataObject;
			break;
		case "Psychiatry":
			console.log("Psyc selected");
			var ourObject = dataObject;
			break;
		case "Sports":
			console.log("Sports selected");
			var ourObject = dataObject;
			break;
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
	for (var j = 0 ; j < dataObject[questionIndex].answers.length;j++){

		answerdiv = $("<div>", {
			class: "answerbox",
		});

		answerdiv.html(dataObject[questionIndex].answers[j]);
		mainbox.append(answerdiv);
	}

	// ramp up the question index so the next question is set to be picked
	questionIndex++

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

	wins.html("Correct answers : " + correctAnswer);
	losses.html("Incorrect anwers : " + wrongAnswer);

	scoreBoard.append(wins);
	scoreBoard.append(losses);

	$("body").append(scoreBoard);

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
	

	if (questionIndex === dataObject.length) {
		resetGame();
	} else {
		questionIndex++
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

		//add the answer options
		for (var j = 0 ; j < dataObject[questionIndex].answers.length;j++){
			answerdiv = $("<div>", {
			class: "answerbox"
			});
			answerdiv.html(dataObject[questionIndex].answers[j]);
			mainbox.append(answerdiv);
		}
	}
}


//===========================================
//Review user selection and provide info on answer
//===========================================
var answerTime = function (answer) {
	clearInterval(countdown);
	timeup = 30;

	$(".answerdiv").fadeOut();
	$("#question").fadeOut();
	console.log ("The Answer selected is : " + answer);
	if (answer === dataObject[questionIndex].rightAnswer) {
		correctAnswer++;
		wins.fadeOut();
		wins.empty();	
		wins.html("Correct Answer : " + correctAnswer);
		wins.fadeIn();

	}else {
		wrongAnswer++;
		losses.fadeOut();
		losses.empty();
		losses.html("Incorrect Answer : " + wrongAnswer);
		wrongAnswer++;
		losses.fadeIn();
		console.log("Incorrect Answer : " + wrongAnswer);
	}

	mainbox.empty();

	mainbox.append("<h2> The correct answer is : " + dataObject[questionIndex].rightAnswer + " </h2>");
	mainbox.append ("<h2> More information about the answer can be found <a href='https://aws.amazon.com/ec2/'>here</a></h2>")
	var nextQuestion = $("<div>", {
		id: "nextbox",
	})

	nextQuestion.html("Next Question");

	mainbox.append(nextQuestion);


}

//===========================================
//Reset game when questions are completed
//===========================================
var resetGame = function () {
	console.log("Restting game");
}


//Setup the page : 
mainbox = $("#mainbox");
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

// $(document).ready(function (){
// 	$(".categorybox").click(setupTriviabox(this.innerHTML));
// 	$(".answerbox").click(answerTime(this.html));
// 	$("#nextQuesiton").click(nextQuesitonFunct());
// 	})


$(document).ready(function (){
	$(document).on("click",".categorybox",function (){
		// console.log(this.innerHTML);
		setupTriviabox(this.innerHTML);
		console.log("something is hapenning")
	})

	$(document).on("click",".answerbox",function(){
		// debugger;
		console.log("answer box clicked!!!")
		answerTime(this.html);
	})

	$(document).on("click","#nextbox",function(){
		console.log("Next wuestion was clicked")
		nextQuesitonFunct();
	})

})
