
function theBeatlesPlay(musicians, instruments) {
  var arr = []
  
  for(var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i])
  }
  
  return arr
}

function johnLennonFacts(facts){
  var result = []
  for(var counter = 0; counter < facts.length; counter++){
    result.push(facts[counter] + "!!!")
  }
  return result
}
function iLoveTheBeatles (x){
  const arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (x < 15)
  
  return arr
}