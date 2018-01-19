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
}

  return johnFacts;
}