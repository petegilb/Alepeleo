//name is the name of the event
//locations are the x and y coordinates
//nouns is an array of strings that contains the keywords
//story is a string saying what is happening when they get to that event
	this.name = name;
	this.locationx = locationx;
	this.locationy = locationy;
	this.keywords = keywords;
	this.story = story;
	this.info = function(){
		return "I am " + this.name + " and I am located at coordinates "
		+ this.locationx + this.locationy;
	}
}

//the first event filled in
var Event0 = new Event("start", 1, 1, ["sun", "trees", "grass", "ground"], "You wake up in a field with tall grass all around you, naked. The sun is starting to rise. You see some trees in the direction of the sun in the distance.");