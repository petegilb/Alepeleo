var player = {
    currentEventIndex = 0;
    quest: "",
    get getQuest() {        
        "use strict";
        if (quest === "") {
            return "There are currently no quests to complete!";    
        } else {
            return quest;
        }
    },                      
    
    get speech() {   
        return map[xCord][yCord].hint;
    },
    
    
    
    items: {
            
    }
};

var verbs {
    go: {
        
    }
    
};




