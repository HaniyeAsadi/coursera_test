var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++) {
  var firstChar = names[i].charAt(0);
  if (firstChar == "j" || firstChar == "J") {
    byeSpeaker.speak(names[i]);
    
  } else {
    helloSpeaker.speak(names[i]);
  }
}
