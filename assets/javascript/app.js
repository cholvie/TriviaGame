
var panel = $("#questions");

var questions = [{
	question: "1.   What the longest country in South American?",
	choices: ["Peru", "Chile", "Brazil", "Columbia"],
	correctAnswer: "Chile"
}, {	
	question: "2.   What part of a bird of prey is known as a talon?",
	choices: ["Back", "wing", "neck", "claw"],
	correctAnswer: "claw"
}, {
	question: "3.   Which one of the following numbers is a prime number: 12, 15, 17, 21, 27",
	choices: ["27", "17", "21", "12"],
	correctAnswer: "17"
}, {
	question: "4.   On which Hawaiian Island did the 1941 attack on Pearl Harbour occur?",
	choices: [ "Kauai", "Oahu", "Molokai", "Lanai", "Maui"],
	correctAnswer: "Oahu"
}, {
	question: "5.   What color would you get if you mixed red with blue?",
	choices: ["green", "orange", "purple", "teal"],
	correctAnswer: "purple"
}];

$(document).on("click", "#start", function(event){
    game.start();
  });
  
  $(document).on("click", "#done", function(event){
    game.done();
  });

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();
  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#container').prepend('<h2>Quiz Timer: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='finish'>FINISH</button>");
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}
  		});

  		this.results();
  	},

  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#container h2").remove();
        panel.html("<h2>Quiz Over!</h2>");
        panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>"); 
  	    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
  	    panel.append("<h3>Wrong Answers: " + this.incorrect + "</h3>");
  	  }

  };
