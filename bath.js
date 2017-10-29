//THE BAAAAATH
//
//name is the name of the event
//news is an int of the place in the array, or a string telling why you can't go that way.
//nouns is an array of strings that contains the keywords
//story is a string saying what is happening when they get to that event
function Event(name, n, e, w, s, nouns, story, hint){
	this.name = name;
	this.n = n;
	this.e = e;
	this.w = w;
	this.s = s;
	this.nouns = nouns;
	this.story = story;
	this.info = function(){
		return "I am at" + this.name;
	}
	this.repeat = function(){
		return story;
	}
}

//the first event filled in
var event0 = new Event("start", "", 1, "", "", ["sun", "trees", "grass", "ground"], "You wake up in a field with tall grass all around you, naked. The sun is starting to rise. You see some trees in the direction of the sun in the distance.", "temp");