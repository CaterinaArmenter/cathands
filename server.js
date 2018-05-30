 var Twitter = require('twitter');

 
 var client = new Twitter({
  consumer_key: 'IBx8oZVjUxhxBDZsfdMp7HIQG',
  consumer_secret: '3DjD3C2UmXCMf3tYwgKtoJVo1o6NOu9p0cDDFl9EeHPnGsnQog',
  access_token_key: '490762241-BqM6f8a95nYf95JzvDOJvrggvYOyNrpQeFpYKmfj',
  access_token_secret: 'JErgKowU00lupACAcO7UA9DujFm73CpJSHytoXBbVNWrp'
});
let TIMELIMIT = 1000;

var firstCounter = 0;
var secondCounter = 0;
var thirdCounter = 0;
var searchTime;
var stream1;
var stream2;
var stream3;


function startStream(){

  var stream = client.stream('statuses/filter', {track: 'kanye'});
  stream1 = stream;
  stream1.on('data', function(event) {
    firstCounter++; 
    if (firstCounter==100){
      firstCounter=0;
    }
    console.log("first steam " + firstCounter + "second stream " + secondCounter + "third stream " + thirdCounter );
  });
   
  var stream = client.stream('statuses/filter', {track: 'trump'});
  stream2 = stream;
  stream2.on('data', function(event) {
    secondCounter++;
    if (secondCounter==100){
      secondCounter=0;
    }
    console.log("first steam " + firstCounter + "second stream " + secondCounter + "third stream " + thirdCounter );
  });
   
 var stream = client.stream('statuses/filter', {track: 'cats'});
  stream3 = stream;
  stream3.on('data', function(event) {
   thirdCounter++;
   if (thirdCounter==100){
      thirdCounter=0;
    }
    console.log("first steam " + firstCounter + "second stream " + secondCounter + "third stream " + thirdCounter );
  });
}



// function reset(){
//   firstCounter = 0;
//   secondCounter = 0;
//   thirdCounter = 0;

//   stream1.destroy();
//   stream2.destroy();
//   stream3.destroy();
// }


var PUSSPOLL1 = 1000;
var PUSSPOLL2 = 2000;
var PUSSPOLL3 = 2500;


var pussTime1;
var pussTime2;
var pussTime3;

function pussStarter(){
  pussTime1 = Date.now();
  pussTime2 = Date.now();
  pussTime3 = Date.now();
}

function timeCheck(){
  while (true) { //main runn loop here
    var current = Date.now();
    if (current >= pussTime1 + PUSSPOLL1){
      console.log('call pussycat 1');
      pussTime1 = Date.now();
    }

    if (current >= pussTime2 + PUSSPOLL2){
      console.log('call pussycat 2');
      pussTime2 = Date.now();
    }

    if (current >= pussTime3 + PUSSPOLL3){
      console.log('call pussycat 3');
      pussTime3 = Date.now();
    }
    // here we need to poll for each puss #pusspoll
  }

}
 


//below here is where things will be run

pussStarter();
// startStream();

timeCheck();
