function theBeatlesPlay(musicians, instruments){
   var array = [];
   for ( let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
   }
 
 return array; }
 

function johnLennonFacts(facts) {
let johnFacts = [];
let counter = 0;
while (counter < facts.length) {
johnFacts.push(facts[counter] + "!!!");
counter ++
}

  return johnFacts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
  while   (num < 15) ;
    }
    return array;
  }