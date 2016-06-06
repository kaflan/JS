var JQ = jQuery;
var hour = JQ('#hour').val();
var minute = JQ('#minute').val();
var second = JQ('#second').val();
var inputs = JQ('.inputs');
var timer = {
    time: null,
    start: null,
    run: function(hour, min, sec) {
      if(this.time){
        this.start = setInterval(function () {
          console.log('second pass');
           }, this.time);
      }
      var hour = hour * 3600000|| 0;
      var sec = sec * 1000 || 0;
      var min = min * 60000 || 0;
      this.time = hour + sec + min;
      this.start =  setInterval(function () {
        console.log('second pass');
         }, this.time);
    },
    pause: function(){
      
    },
    stop: function () {
      var stop = function () { clearInterval(this.start); }
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
