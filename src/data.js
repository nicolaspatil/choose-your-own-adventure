export const story = {
    "a":{
        "prompt":"You awake to black - darkness so thick, you can't see your own hands. The air is frigid and dry. Each breath stings as you sit up. The only sound is a periodic 'drip', followed by a slight echo.",
        "choices":[
            {
                "text": "You decide to stay here for a bit and try to figure out where you are from the environment around you.",
                "destination":"aa"
            },
            {
                "text": "You decide to take initiative and find your way out of this place.",
                "destination":"ab"
            }
        ],
        "color": "#181818",
        "textColor": "#FFFFFF"
    },
    "aa":{
        "prompt":"Sitting in silence for what seems like hours, your hope for some clues is waning. You notice the barely audible sound of voices echoing. They seem to be getting closer, and you make out a few words: '...cave...dangerous...prisoner...god...', and the edge of the darkness is pierced by the reflections of torchlight on rocky walls.",
        "choices":[
            {
                "text": "You get up, prepared to fight your way out of the cave.",
                "destination":"aa"
            },
            {
                "text": "You decide to act like you're still unconscious and learn more about your situation.",
                "destination":"ab"
            }
        ],
        "color": "#800080",
        "textColor": "FFFFFF"
    },
    "ab":{
        "prompt":"You get up and begin to stumble through the darkness with your hands stretched out before you. After a few feet, you come in contact with cold, craggy stone. Hand trailing the wall of what you assume is a cave, you venture forward until you begin to see glimpses of torchlight. In a stealthy crouch, you approach the light silently to find a group of men in armor conversing.",
        "choices":[
            {
                "text": "You play it carefully: waiting and listening to what the men are talking about.",
                "destination": "aba"
            },
            {
                "text": "You want to figure out what's going on now - you confidently approach the group, no longer concealing your presence.",
                "destination": "abb"
            }
        ],
        "color": "#800080",
        "textColor": "FFFFFF"
    }
}

