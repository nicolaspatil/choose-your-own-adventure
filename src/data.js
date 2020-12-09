export const story = {
    //Intro
    "introa":{
        "prompt":"You awake to black - darkness so thick, you can't see your own hands. The air is frigid and dry. Each breath stings as you sit up. The only sound is a periodic 'drip', followed by a slight echo.",
        "choices":[
            {
                "text": "You decide to stay here for a bit and try to figure out where you are from the environment around you.",
                "destination":"introaa"
            },
            {
                "text": "You decide to take initiative and find your way out of this place.",
                "destination":"introab"
            }
        ],
        "backgroundColor": "#181818",
    },
    "introaa":{
        "prompt":"Sitting in silence for what seems like hours, your hope for some clues is waning. You notice the barely audible sound of voices echoing. They seem to be getting closer, and you make out a few words: '...cave...dangerous...prisoner...god...', and the edge of the darkness is pierced by the reflections of torchlight on rocky walls.",
        "choices":[
            {
                "text": "You get up, prepared to fight your way out of the cave.",
                "destination":"introaaa"
            },
            {
                "text": "You decide to act like you're still unconscious and learn more about your situation.",
                "destination":"introaab"
            }
        ],
        "backgroundColor": "#df9743",
    },
    "introab":{
        "prompt":"You get up and begin to stumble through the darkness with your hands stretched out before you. After a few feet, you come in contact with cold, craggy stone. Hand trailing the wall of what you assume is a cave, you venture forward until you begin to see glimpses of torchlight. In a stealthy crouch, you approach the light silently to find a group of men in armor conversing.",
        "choices":[
            {
                "text": "You play it carefully: waiting and listening to what the men are talking about.",
                "destination": "introaba"
            },
            {
                "text": "You want to figure out what's going on now - you confidently approach the group, no longer concealing your presence.",
                "destination": "introabb"
            }
        ],
        "backgroundColor": "#df9743",
    },
    "introaaa":{
        "prompt":"You stand up just as three armor-clad men turn the corner. Their faces erupt into surprise, and they take a fighting stance. As they got closer, you see that one has a spear, one a trident, and the last only holds a shield. A swift, but powerful kick to the shield knocks the bearer into the trident holder. You dodge a stab of the spear and knock the last of the men to the ground, the weapons all clattering to the ground.",
        "choices":[
            {
                "text": "You feel oddly drawn to the trident...",
                "destination": "trident",
            },
            {
                "text": "You feel oddly drawn to the spear...",
                "destination": "spear",
            }
        ],
        "backgroundColor":"#eb3734",
    },
    "introaab":{
        "prompt":"Three armor-clad men turn the corner. The light from their torch revealed they held two weapons - a spear and a trident - and a shield. As they approach, you can make out their full conversation. '...needs to be killed. We can't risk their father learning of their existence.' The spear-bearer approaches, poising to strike. As the spear stabs down, you roll out of the way of the strike. The attacker jumps back in surprise, and by instinct you charge the group. Unprepared for resistance, they are all knocked down in one go and their weapons clatter to the ground.",
        "choices":[
            {
                "text": "You feel oddly drawn to the trident...",
                "destination": "trident",
            },
            {
                "text": "You feel oddly drawn to the spear...",
                "destination": "spear",
            }
        ],
        "backgroundColor":"#eb3734"
    },
    "trident":{
        "prompt":"As you pick up the trident, a vague memory flashes before your eyes. You see a deep, deep blue, and the sound of crashing waves grows louder and louder. The waves coalesce into a voice as old as time, 'My child. Escape your captors, and take your rightful place in Olympus.'",
        "choices":[
            {
                "text":"Confused, but with no other choice, you walk towards the exit of the cave.",
                "destination": "tridenta"
            },
            {
                "text":"Invigorated and intrigued, you eagerly make your way out of the cave.",
                "destination":"tridenta"
            }
        ],
        "backgroundColor":"#0039b5"
    },
    "tridenta":{
        "prompt":"After a few minutes of walking, you reach the mouth of the cave. It seems to be the middle of the night, and in the distance you see an encampment surrounded by torches. As you exit the cave, you see a torch-bearing guard leave the encampment towards you.",
        "choices":[
            {
                "text":"You hide behind a boulder and let him pass - hopefully you can sneak out of this place.",
                "destination": "tridentaa",
            },
            {
                "text":"You ambush the guard, taking his armor and disguising yourself so you can enter the encampment.",
                "destination": "tridentab",
            }
        ],
        "backgroundColor": "#181818"
    },
    "tridentaa":{
        "prompt":"The guard approaches the cave and enters. You realize it won't be long until he finds the guards you took out, so you need to make your move now.",
        "choices":[
            {
                "text":"You need to make a run for it - the tree line is not far.",
                "destination":"tridentaaa",
            },
            {
                "text":"You need to stop him: go into the cave and take him out.",
                "destination":"tridentab"
            }
        ],
        "backgroundColor": "#181818"
    },
    "tridentaaa":{
        "prompt":"As soon as the guard is out of sight, you get out from behind the boulder and begin sprinting for the treeline. You hear a loud 'HEY' coming from the encampment, and you glance back to see a wall of torches beginning to follow you. Arrows whizz by your ear as the tree line gets closer and closer, and one grazes your cheek just as you enter the forest. With every step the forest becomes thicker, and the yelling of the guards becomes quieter.",
        "choices":[
            {
                "text":"Keep trekking into the forest, it won't be safe until you're far away from those guards.",
                "destination":"tridentaaaa",
            },
            {
                "text":"Get a little further into the forest and make camp - it should be safe with how thick the forest is.",
                "destination":"tconc"
            }
        ],
        "backgroundColor":"#330140"
    },
    "tridentaaaa":{
        "prompt":"You continue into the forest, with each step harder than the last. The wound where the arrow grazed your cheek burns more than such a small cut should, and your vision grows hazy. The trees seem to warp around you, and you stumble and trip.",
        "choices":[
            {
                "text":"Unable to stand up, you fade out of consciousness...",
                "destination":"tconc"
            }
        ],
        "backgroundColor":"#1a1a1a"
    },
    "tridentab":{
        "prompt":"You approach the guard from behind in a stealthy crouch. With the guard only a few feet in front of you, you lunge and wrap your arm around his neck. As you choke the guard out of consciousness, you lower him to the ground silently. You take his armor off and put it on yourself, ready to enter the camp. You walk confidently into the well lit area, surrounded by tents and men sitting by fires, cooking and drinking together. You hear someone call to you, 'Hey! Come drink with us!'",
        "choices":[
            {
                "text":"Afraid of raising suspicion, you join the man and the group around him for drinks and food.",
                "destination":"tridentaba"
            },
            {
                "text":"Joining them is more danger than it's worth - you keep walking towards the edge of the camp.",
                "destination":"tridentabb"
            }
        ],
        "backgroundColor":"#10014f"
    },
    "tridentaba":{
        "prompt":"You take a seat next to the one who called you. 'Have a drink, relax!' says the man, handing you a pitcher full of what seems to be ale. Realizing you're parched, you take the drink and gulp it down in one go. You look back up, and the man is standing above you, smiling.",
        "choices":[
           { 
                "text":"Your vision slowly turns hazy, and the laughs of the men fade into nothingness...",
                "destination":"tconc"
            }
        ],
        "backgroundColor":"#1a1a1a"
    },
    "tridentabb":{
        "prompt":"You walk past the man. He calls again, 'Hey! Come over here!' You quicken your step. NOt turning back, you hear footsteps behind you. As the number of footsteps grew, you break into a sprint. You hear arrows whizzing by as you sprint to the treeline, one grazing your cheek. Your steps feel heavier as you get further into the forest.",
        "choices":[
            {
            "text":"Your vision slowly turns hazy, and the rustle of the leaves turns into nothingness...",
            "destination":"tconc"
            }
        ],
        "backgroundColor":"#1a1a1a"
    },
    //Spear (Zeus)
    "spear":{
        "prompt":"As you pick up the spear, a vague memory flashes before your eyes. You see a grey, turmulous clouds and the sound of thunder grows louder and louder. The thunder coalesce into a voice as old as time, 'My child. Escape your captors, and take your rightful place in Olympus.'",
        "choices":[
            {
                "text":"Invigorated and intrigued, you eagerly make your way out of the cave.",
                "destination":"speara"
            },
            {
                "text":"Confused, but with no other choice, you walk towards the exit of the cave.",
                "destination": "speara"
            }
        ],
        "backgroundColor":"#4d4d4d"
    },
    "speara":{
        "prompt":"After a few minutes of walking, you reach the mouth of the cave. It seems to be the middle of the night, and in the distance you see an encampment surrounded by torches. As you exit the cave, you see a torch-bearing guard leave the encampment towards you.",
        "choices":[
            {
                "text":"You hide behind a boulder and let him pass - hopefully you can sneak out of this place.",
                "destination": "spearaa",
            },
            {
                "text":"You ambush the guard, taking his armor and disguising yourself so you can enter the encampment.",
                "destination": "spearab",
            }
        ],
        "backgroundColor": "#181818"
    },
    "spearaa":{
        "prompt":"The guard approaches the cave and enters. You realize it won't be long until he finds the guards you took out, so you need to make your move now.",
        "choices":[
            {
                "text":"You need to make a run for it - the tree line is not far.",
                "destination":"spearaaa",
            },
            {
                "text":"You need to stop him: go into the cave and take him out.",
                "destination":"spearab"
            }
        ],
        "backgroundColor": "#181818"
    },
    "spearaaa":{
        "prompt":"As soon as the guard is out of sight, you get out from behind the boulder and begin sprinting for the treeline. You hear a loud 'HEY' coming from the encampment, and you glance back to see a wall of torches beginning to follow you. Arrows whizz by your ear as the tree line gets closer and closer, and one grazes your cheek just as you enter the forest. With every step the forest becomes thicker, and the yelling of the guards becomes quieter.",
        "choices":[
            {
                "text":"Keep trekking into the forest, it won't be safe until you're far away from those guards.",
                "destination":"spearaaaa",
            },
            {
                "text":"Get a little further into the forest and make camp - it should be safe with how thick the forest is.",
                "destination":"sconc"
            }
        ],
        "backgroundColor":"#330140"
    },
    "spearaaaa":{
        "prompt":"You continue into the forest, with each step harder than the last. The wound where the arrow grazed your cheek burns more than such a small cut should, and your vision grows hazy. The trees seem to warp around you, and you stumble and trip.",
        "choices":[
            {
                "text":"Unable to stand up, you fade out of consciousness...",
                "destination":"sconc"
            }
        ],
        "backgroundColor":"#1a1a1a"
    },
    "spearab":{
        "prompt":"You approach the guard from behind in a stealthy crouch. With the guard only a few feet in front of you, you lunge and wrap your arm around his neck. As you choke the guard out of consciousness, you lower him to the ground silently. You take his armor off and put it on yourself, ready to enter the camp. You walk confidently into the well lit area, surrounded by tents and men sitting by fires, cooking and drinking together. You hear someone call to you, 'Hey! Come drink with us!'",
        "choices":[
            {
                "text":"Afraid of raising suspicion, you join the man and the group around him for drinks and food.",
                "destination":"spearaba"
            },
            {
                "text":"Joining them is more danger than it's worth - you keep walking towards the edge of the camp.",
                "destination":"spearabb"
            }
        ],
        "backgroundColor":"#053601"
    },
    "spearaba":{
        "prompt":"You take a seat next to the one who called you. 'Have a drink, relax!' says the man, handing you a pitcher full of what seems to be ale. Realizing you're parched, you take the drink and gulp it down in one go. You look back up, and the man is standing above you, smiling.",
        "choices":[
           { 
                "text":"Your vision slowly turns hazy, and the laughs of the men fade into nothingness...",
                "destination":"sconc"
            }
        ],
        "backgroundColor":"#1a1a1a"
    },
    "spearabb":{
        "prompt":"You walk past the man. He calls again, 'Hey! Come over here!' You quicken your step. NOt turning back, you hear footsteps behind you. As the number of footsteps grew, you break into a sprint. You hear arrows whizzing by as you sprint to the treeline, one grazing your cheek. Your steps feel heavier as you get further into the forest.",
        "choices":[
            {
            "text":"Your vision slowly turns hazy, and the rustle of the leaves turns into nothingness...",
            "destination":"sconc"
            }
        ],
        "backgroundColor":"#1a1a1a"
    },
    //Conclusion
    "sconc":{
        "prompt":"You awaken on the cold ground once again. You open your eyes to a dagger inches away from your head. Your eyes focus upon the wielder, who snarls, 'Your time is up, demigod.' You look around for help, but only see more guards surround you with spears and shields. The man in front of you slowly poises to stab you with the dagger, and you close your eyes in defeat. A sudden, loud clap of thunder makes your ears ring. You open your eyes to see all of the guards on the floor, and a spear through the dagger-wielders chest. A lone, muscular figure stands before you, hand outstretched. 'Join me, my child,' says the robe-clad man, with kind eyes. You grab his hand, and when you next blink you are in a grand, marble hall. The man looks down at you and explains, 'You see, the gods have many enemies. Unfortunately, you became the target of one of mine. You're safe now. Welcome to Olympus.'",
        "choices":[
            {
                "text":"Thanks for getting through my project! I hope you enjoyed. Click here to start from the beginning again.",
                "destination":"introa"
            }
        ],
        "backgroundColor":"#00497d"
    },
    "tconc":{
        "prompt":"You awaken on the cold ground once again. You open your eyes to a dagger inches away from your head. Your eyes focus upon the wielder, who snarls, 'Your time is up, demigod.' You look around for help, but only see more guards surround you with spears and shields. The man in front of you slowly poises to stab you with the dagger, and you close your eyes in defeat. A sudden torrent of water barrels down upon you. You wipe your eyes to see all of the guards on the floor, and a spear through the dagger-wielders chest. A lone, muscular figure stands before you, hand outstretched. 'Join me, my child,' says the robe-clad man, with kind eyes. You grab his hand, and when you next blink you are in a grand, marble hall. The man looks down at you and explains, 'You see, the gods have many enemies. Unfortunately, you became the target of one of mine. You're safe now. Welcome to Olympus.'",
        "choices":[
            {
                "text":"Thanks for getting through my project! I hope you enjoyed. Click here to start from the beginning again.",
                "destination":"introa"
            }
        ],
        "backgroundColor":"#00497d"
    }
}

