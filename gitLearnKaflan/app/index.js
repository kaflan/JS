var JQ = jQuery;
var hour = JQ('#hour').val();
var minute = JQ('#minute').val();
var second = JQ('#second').val();
var inputs = JQ('.inputs');
var timer = {
    time: null,
    start: null,
    run: function(hour, min, sec) {
        this.time = (hour * 3600000 || 0) + (sec * 1000 || 0) + (min * 60000 || 0);
        this.start = setInterval(function() {
            this.time--;
            console.log('milisecond');
        }, 1);
    },
    pause: function() {
      this.stop();
      this.run();
      if(this.time < 0){
        return;
      }
    },
    printTime: function() {

    },
    stop: function() {
        var stop = function() {
            clearInterval(this.start);
        }
        setTimeout(stop.bind(this), 0);
    }
};
var run = JQ('#run').click(function() {
    inputs.toggle();
});
var pause = JQ('#pause').click(function() {

});
var stop = JQ('#stop').click(function() {
    inputs.toggle();
});
