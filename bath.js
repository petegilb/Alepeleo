//THE BAAAAATH
//
//index is the index of the event
//news is an int of the place in the array, or a string telling why you can't go that way.
//nouns is an array of strings that contains the keywords
//story is a string saying what is happening when they get to that event
function Event(index, n, e, w, s, nouns, story,hint,pickable,itemsPos,response){
	this.index = index;
	this.n = n;
	this.e = e;
	this.w = w;
	this.s = s;
    this.pickable = pickable;
    this.itemsPos = itemsPos;
	this.nouns = nouns;
	this.story = story; 
    this.hint = hint;
    if(response === null) {
        response = hint;
    }
	this.repeat = function(){
		return story;
	}
}

//the first event filled in
var event0 = new Event(0, "Nah you probably shouldn't go that way", 1, "Nah you probably shouldn't go that way", "Nah you probably shouldn't go that way", ["sun", "trees", "grass", "ground"], "You wake up in a field with tall grass all around you, naked. The sun is starting to rise. You see some trees in the direction of the sun in the distance.", "If I remember correctly does the sun rise in the east?",null,null,null);
//second event
var event1 = new Event(1, 3, "You're blocked by a wall of trees.", 0, 2, ["tree", "axe", "path"], "You walk into the forest and you see some cut down trees around you. There’s a rusty axe stuck in a stump that looks as if it has been there for years. There’s a dirt path that is heading north and south. There’s some footprints on the path moving to the south.", "Go down the path in the direction of your choice! Anything stick out in the scene that you should get?","axe",null,null);
//third event
var event2 = new Event(2, 1, "There's no reason to go this way", "There's no reason to go this way", 4, ["woman","lady","person","widow"], "clothes", "You exit the forest and find yourself on the outskirts of a small village. You walk a bit closer and an old lady asks you, \"You crazy? Why are you running around naked this early in the morning?\"", "Talk to her!",["clothing"],null,["You don’t know??? Jesus, a young man like you is running around naked in the morning without a clue where you are? *mutters* must’ve been drinking… *. Let me at least grab you some clothes leftover from my dead husband.","Well you are in Kreskoh in the great country of Alepeleo, we’re the only village for many miles. If you want to go to Grave, the biggest city around here, it’s over the mountain. Although, you’ll need some serious gear for the trek, it’s cold as hell.”,“There’s no reason for you to go South of here, you’ll reach a vast forest filled with the most dangerous creatures you’ll ever see. The mountain is to the North through the forest on the path that you just came from. Now get out of my face and let me live my miserable life!"]);
//fourth event
var event3 = new Event(3, 7, 6, 5, 1, ["mountain"], "You arrive at the base of a mountain. You feel the temperature dropping and it looks even colder on the mountain to the north. There’s a thick forest to the west that looks ominous. To the East you see a small clearing in the distance. What should you do?", "Go get clothes!",null,null,null);
//fifth event
var event4 = new Event(4, "You're dead", "You're dead", "You're dead", "You're dead", [""], "You enter a dense and dark forest with trees taller than the sky. You walk in until you can’t see the light behind you, until the trees are covering so much that it is dark around you. You hear constant rustling around you, and you think you hear the sound of an animal screeching in agony in the distance. You see a pair of eyes in front of you in between the branches of a bush. Then, all of a sudden there are eyes all around you and you feel yourself start to be torn apart by a pack of huge wolves. You scream in agony but no one is there to hear you die. Your body is left there in the dark with almost nothing left. *YOU DIE*","rip",null,null,null);
//sixth event
var event5 = new Event(5, "You're dead", "You're dead", "You're dead", "You're dead", [""], "You enter a dense and dark forest with trees taller than the sky. You walk in until you can’t see the light behind you, until the trees are covering so much that it is dark around you. You hear constant rustling around you, and you think you hear the sound of an animal screeching in agony in the distance. You see a pair of eyes in front of you in between the branches of a bush. Then, all of a sudden there are eyes all around you and you feel yourself start to be torn apart by a pack of huge wolves. You scream in agony but no one is there to hear you die. Your body is left there in the dark with almost nothing left. *YOU DIE*","rip",null,null,null);
//seventh event
var event6 = new Event(6, "Can't go that way!", "Why would you go that way?", 3, "Bearly the right choice", ["bear", "bow", "trap", "man", "axe"],"You see a man crouching next to a tree looking around the trunk at something in the distance. You walk up behind him and see that he has a bow and arrows strapped to his back. He whips around in surprise with a shocked look on his face, eyes wide, he says, \“Whoa! where the hell did you come from!? Just shut up and be quiet, I’m trying to hunt this bear. I need the meat to feed my village.\”","Attack that bear!","pelt",["clothing","axe"],null);
//eigth event
var event7 = new Event(7, 8, "You'll fall off!", "You'll fall off!", 3, ["mountain"], "", "Keep treking on if you have the right equipment!",null,["clothing","pelt"],null);
//ninth event
var event8 = new Event(8, 9,9,9,7, ["mountain", "view", "city", "summit"], "", "Keep goin!",null,["pelt"],null);
//tenth event
var event9 = new Event(9, "You can't do that!", "You can't do that!", "You can't do that!", "You can't do that!", ["sleep","sky","sun","city"], "You’ve reached the base of the mountain, but you have lost all sense of direction. The sky is too cloudy to tell where the sun is. You remember that you saw the city to the north, but you’re not sure which way that is.", "When will the sun be out in the sky again?",null,null,null);
//eleventh event
var event10 = new Event(10, 11, 13, 12, "Why would you want to go back?", ["sunrise", "forest", "scream"], "You wake up to the sunrise. You look around you and see forest, but now the sun is reflecting off of some object in the West. To the East you hear a scream. What should you do?", "Go look around!",null,null,null);
//twelth event
var event11 = new Event(11, "You can't go into the River!", 14, 15, 10, ["river", "water"], "You’ve gone north in the direction of the city that you saw from the top of the mountain, but there’s a giant river in the way in front of you. The water is moving so fast that you feel scared to even get a drink. To your right you see a group huddling around a fire, and to the left you see a tent in the distance on the edge of the river. What should you do?", "Go West or East!",null,null,null);
//thirteenth event
var event12 = new Event(12, 15, 10, "The forest is in the way!", "That's a dumb idea.", ["scream", "clearing", "river"], "You go to where you heard the scream but you find nothing. It’s just an empty clearing in a forest. You hear the sounds of a river to the North. What should you do?", "Go somewhere else you idiot!",null,null,null);
//fourteenth event
var event13 = new Event(13, 14, "You have absolutely no reason to go that way you imbecile.", 10, "Really?", ["medallion", "sun", "river"], "You go to the shiny object and you find the sun reflecting off of a silver medallion with some kind of noble family’s crest on it. You look around for its owner but see nobody. You hear the sounds of a river to the North. What should you do?", "Figure it out this time!","medallion",null,null);
//fifteenth event
var event14 = new Event(14, "Into the river?", "That's real dumb dude.", 11, 13, ["river", "fire", "group"], " You find yourself next to a river and being greeted by a group, huddling around a fire. You see that they have a raft behind them. \“Hey buddy! You looking to cross the river!?\”, exclaims a very loud and energetic kid (probably around 10 years old).", "I'd go with them if I were you.",null,null,null);
//sixteenth event
var event15 = new Event(15, "Into the river? Water you doing?", 11, "No you can't do that d00d.", 12, ["tent", "book", "river", "group"], "You find an empty tent next to a rushing river. You see a group of people far to the east. What should you do?", "What's in the tent?",null,null,null);
//seventeenth event
var event16 = new Event(16, 17, "Why would you turn back you numbskull!?", "Why would you turn back you numbskull!?", "Why would you turn back you numbskull!?", ["friends", "gates"], "You’ve made friends with the group on your journey and moved with them closer to the city. You can see the giant gates in the distance to the North. You’ve decided to try to enter the city since you’ve made it all this way.", "Go North.",null,null,null);
//eighteenth event
var event17 = new Event(17, "You can't do that right now", "You can't do that right now", "You can't do that right now", "You can't do that right now", ["orc", "guard", "kid", "medallion", "friend"], "You and your group have made it closer to the gates but didn’t make it before nightfall. You all decide to stop and camp for the night. During the middle of the night you hear a muffled scream from across the campsite. You see the kid that helped you earlier being lifted up by the orc as you see the orcs hand wrap around the kid’s neck. What should you do?", "Did you read the orc book?","orcium",null,null);
//nineteenth event
var event18 = new Event(18, "Nope.", "Nope.", "Nope.", "Nope.", ["guard"], "You reach the gates with your group but aren’t allowed entry. The guard says, \“You really think I’m going to let all of you peasants in? Show me what you have and I might.\”", "What did you get from the Orc?",null,null,null);
//List of all the Events
var eventList = [event0, event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13, event14, event15, event16, event17, event18];