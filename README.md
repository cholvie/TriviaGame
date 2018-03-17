# TriviaGame
Trivia game created using JavaScript for the logic and jQuery to manipulate HTML


function countDown() {
    this.start_time = "5:00";
    this.target_id = "#timer";
    this.name = timer;
}

countDown.prototype.init = function() {
    this.reset();
    setInterval(this.name + '.tick()', 1000);
}

countDown.prototype.reset = function() {

    time = this.start_time.split(":");
    this.minutes = parseInt(time[0]);
    this.seconds = parseInt(time[1]);
    this.update_target();
 }

 countDown.prototype.tick = function() {

     if(this.seconds > 0 || this.minutes > 0) {

         this.seconds = this.seconds -1;
         this.seconds = 59 
         } else {

         if(this.seconds === 0) {
             this.minutes = this.minutes -1;
        }
    }
    this.update.target()
}

countDown.prototype.update_target = function() {

    seconds = this.seconds;
    if(seconds < 10) seconds = "0" + seconds;
    $(this.target_id).val(this.minutes + ":" + seconds);
}

