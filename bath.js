//THE BAAAAATH
//
//index is the index of the event
//news is an int of the place in the array, or a string telling why you can't go that way.
//nouns is an array of strings that contains the keywords
//story is a string saying what is happening when they get to that event
function Event(index, n, e, w, s, nouns, story, hint){
	this.index = index;
	this.n = n;
	this.e = e;
	this.w = w;
	this.s = s;
	this.nouns = nouns;
	this.story = story;
	this.repeat = function(){
		return story;
	}
}

//the first event filled in
var event0 = new Event(0, "Nah you probably shouldn't go that way", 1, "Nah you probably shouldn't go that way", "Nah you probably shouldn't go that way", ["sun", "trees", "grass", "ground"], "You wake up in a field with tall grass all around you, naked. The sun is starting to rise. You see some trees in the direction of the sun in the distance.", "If I remember correctly does the sun rise in the east?");
//second event
var event1 = new Event(1, 3, "You're blocked by a wall of trees.", 0, 2, ["tree", "axe", "path"], "You walk into the forest and you see some cut down trees around you. There’s a rusty axe stuck in a stump that looks as if it has been there for years. There’s a dirt path that is heading north and south. There’s some footprints on the path moving to the south.", "Go down the path in the direction of your choice! Anything stick out in the scene that you should get?")