function start() {
    var starttime = new Date().getTime
    do {
        var username = prompt("What is your name?");
    }
    while (username === '' || username.length > 15)

    alert("Hello " + username + ", welcome to Voided Earth!!\nYou are in a dystopian sci-fi world in the year 3069. \nGlobal warming and pollution has gotten a thousand times worse. One side effect of this is extreme versions of natural disaters.");

    alert("Over the years, plastics thrown into the ocean or landfills have mutated for strange unknown reasons and evolved into sentient golems with a hate for organic life. \nThere has been a rapid production of many greenhouse gases due to burning millions of tonnes of fossil fuels and natural gasses.");

    alert("The temperature can drop below -53°C in winter and rise up to 69°C in the summer.\nAir pollution has been attributed to more than 19% of deaths due to choking and asthma. \nThe ocean was also affected badly, with a destructive 500,000 tonnes of plastic waste escaping into the ocean every single day.");

    alert("About 700 species of animals have gone extinct due to the amount of toxins and microplastics released into the oceans, the amount of land cleared and the dirty air.\nSome parts of the ocean are filled with so much toxic waste that it is corrosive. Smaller sources of water have been contaminated and are not suitable for consumption.");

    alert("There is now a lack of natural resources, causing the rich to enjoy living in the hands of The Society and the poor to starve away to death in slums. \nYou are a member of The Rebellion, and your goal is to try and save what is left of this world from the Society.");

    var A = 'A';
    var B = 'B';
    var C = 'C';

    var Q1 = prompt("You need to pick an equipment pack provided by The Rebellion.\nYou get to choose one of three packs.\nDo u pick:\nA)A neon yellow pack with a PathFinder tool attatched to it.\nB)A dull green pack with a PathFinder tool inside a waterproof pouch\nC)A red pack with a PathFinder tool attatched to it.").toUpperCase();

    do {
        if (Q1 === null) {
            return;
        } else if (Q1 === A) {
            alert("You picked up the pack and went to the hanger for further instructions.");
            break;
        } else if (Q1 === B || Q1 === C) {
            alert("You felt that something about the pack wasn't right but you still went to the hanger for further instructions.");
            break;
        } else {
            var Q1 = prompt("You need to pick an equipment pack provided by The Rebellion.\nYou get to choose one of three packs.\nDo u pick:\nA)A neon yellow pack with a PathFinder tool attatched to it.\nB)A dull green pack with a PathFinder tool inside a waterproof pouch\nC)A red pack with a PathFinder tool attatched to it.").toUpperCase();
        }
    }
    while (Q1 != "A" || Q1 != "B" || Q1 != "C")

    var Q2 = prompt("You proceed to the hanger as instructed.\nYou meet the Shipyard guard and was recommended to choose a vehicle built for high speed and resilience. Do you choose: \n A) An ATV with jet boosters\n B) A jet\n C) T.A.S.L.V.").toUpperCase();

    do {
        if (Q2 === null) {
            return;
        } else if (Q2 === C) {
            alert("You chose the T.A.S.L.V. which stood for Transfomable Air Sea Land Vehicle");
            break;
        } else if (Q2 === A) {
            alert("You love going fast, and obviously chose the fastest-looking vehicle you saw.");
            break;
        } else if (Q2 === B){
            alert("You chose the jet as you felt it was the wisest choice of the three.");
            break;
        } else {
            var Q2 = prompt("You proceed to the hanger as instructed.\nYou meet the Shipyard guard and was recommended to choose a vehicle built for high speed and resilience. Do you choose: \n A) An ATV with jet boosters\n B) A jet\n C) T.A.S.L.V.").toUpperCase();
        }
    }
    while (Q2 != "A" || Q2 != "B" || Q2 != "C")

    var Q3 = prompt("You were told to visit the weaponsmith to choose a weapon for the trip.\nYou arrive at the weaponsmith and were given 3 choices.\nDo you choose:\nA) Heroshots. Description: It has a high firing rate, with a medium shooting range. It requires a liquid to fire. It can turn into a sword for close-combat.\nB) Charger Rifle. Description: A single-fire laser that gathers power when the trigger is held. 4 shots can be fired before it needs to be reloaded.\nC) Weird Red Glove. Description: They said it was found outside in the scrapyard just a few days ago. There was a strange aura to it... how about you test it?").toUpperCase();

    do {
        if (Q3 === null) {
            return;
        } else if (Q3 === C) {
            alert("You picked up the glove and felt stronger for some reason......");
            break;
        } else if (Q3 === B) {
            alert("You picked up the Charger Rifle. It looks brand new.");
            break;
        } else if (Q3 === A) {
            alert("You picked up the Heroshots and the cans of liquid beside it.");
            break;
        } else {
            var Q3 = prompt("You were told to visit the weaponsmith to choose a weapon for the trip.\nYou arrive at the weaponsmith and were given 3 choices.\nDo you choose:\nA) Heroshots. Description: It has a high firing rate, with a medium shooting range. It requires a liquid to fire. It can turn into a sword for close-combat.\nB) Charger Rifle. Description: A single-fire laser that gathers power when the trigger is held. 4 shots can be fired before it needs to be reloaded.\nC) Weird Red Glove. Description: They said it was found outside in the scrapyard just a few days ago. There was a strange aura to it... how about you test it?").toUpperCase();
        }
    }
    while (Q3 != "A" || Q3 != "B" || Q3 != "C")

    alert("You moved on to the launch pad to begin your journey");

    let rite4 = "B";
    let rite4_1 = "C";

    if (Q2 === C) {
        alert("You enter the vehicle in Air mode and take off.\n5 hours later......\nYou arrive at the site of the natural disaster.");

        Q4 = prompt("As you wonder what disaster might strike, the ground starts to rumble. What do you do now?\nA) Run to the bunker for shelter.\nB) Run into the site and try to evacuate as many people as you can.\nC) Take a holo-vid of the situation for mission control to record and save for future reference");
    } else if (Q2 === A) {
        alert("You activated the jet boosters and rush to the site of the first natural disaster.\n2 hours later......\nYou just arrived at the site when mission control called and alerted you of an earthquake imminent in around 3 hours. You were instructed to evacuate as many citizens as possible.");

        Q4 = prompt("2 hours later, you finally evacuated the last citizen and had time to kill. What do you do?\nA)Nothing, take a break.\nB)Enquire the citizens about the earthquakes.\nc)Go search the area to find anything out of the ordinary.");
    } else {
        Q4 = alert("You enter the jet and takeoff safely.\n5 hours later......");
        alert("You were about to arrive at the site of the first disaster when an alert states that you were out of fuel. As the jet came crashing down, you pulled the emergency lever and were launched out safely.");
        alert("As you stare at the crash site of your jet, you notice the strange rumbling around you. You realized it was an earthquake and helplessly watch buildings and rubble fall onto you.\nTry Again, you got crushed like a pancake.");
        throw new Error();
    }

    if (Q4 === rite4 && Q2 === C) {
        alert("The civilians did not believe you, as they thought you were trying to cause mass panic. Just then, the earthquake strikes. You watch helplessly as buildings start to fall and everyone gets crushed.\nGame Over.");
        throw new Error();
    } else if (Q4 === rite4_1 && Q2 === C) {
        alert("You stood oustside in the middle of the earthquake for as long as possible, trying to film as much as possible. A piece of debris fell on top of you while you were filming. Although you died, it was not in vain as the collected data was used to help future survivors.\nGame Over, hero.");
        throw new Error();
    } else if (Q4 === rite4 && Q2 === A) {
        alert("You asked the citizens of the village if they had regular earthquakes, when they started and why. From what you can gather, these earthquakes strted just last month, and can happen at least one week after the last one.")
        alert("The village chief informed you that his grandfather said these powerful earthquakes started in different parts of the world back in 2079, as for why, no one knew. This was shocking information as the rise of the Society was also in 2079.")
        alert("After enquiring all the villagers, mission control alerted you that the earthquake was due in roughtly 20 minutes. With that, you follow the last of the villagers into the bunker to wait out the earthquake.")
    } else if (Q4 === rite4_1 && Q2 === A) {
        alert("You comb the surrounding areas to look out for anything out of the ordinary. You find nothing and head to the bunker to wait out the earthquake.")
    } else if (Q2 === A) {
        alert("You doze off in the middle of the village to rest your tired body.\nYou wake up to rumbling to realise the earthquake had begun.You breathed your final breath as debris fell around you.(Try Again, you got flattened like prata)")
        throw new Error();
    } else {
        alert("You rush into the bunker to hide.")
    }
        let rite5 = "B";
        let rite5_1 = "A";
        if (Q4 === rite4 && Q3 === B || Q2 === C && Q3 === B) {
            Q5 = prompt("You step into the bunker and are immediately knocked off your feet by a tripwire. As you look up you see a man wearing a cloak which covered his face and body. As you pull out your charge rifle, you see three obvious choices. Do you:\nA) Run towrds the man?\nB) Hide behind some rubble?\n or... ...C) Charge up your rifle?")
        } else if (Q4 === rite4 && Q3 === C || Q2 === C && Q3 === C) {
            Q5 = prompt("You step into the bunker and are immediately knocked off your feet by a tripwire. As you look up you see a man wearing a cloak which covered his face and body. As you quickly slip on the red gloves, you see three obvious choices. Do you:\nA) Charge head-on blindly.\nB) Hide behind rubble and launch a sneak attack.\nOr... ...C) Stand there menacingly.")
        } else {
            Q5 = prompt("You step into the bunker and are immediately knocked off your feet by a tripwire. As you look up you see a man wearing a cloak which covered his face and body. You whip out your Heroshots and load in the ammo. What do you do now? Do you:\nA) Fire at the man while running at him?\nB) Hide behind rubble until the man comes into range?\nOr... ...C) Throw your gun at the man.")
        }

        if (Q4 === rite4 && Q2 === A && Q3 === B && Q5 === rite5 || Q2 === C && Q3 === B && Q5 === rite5) {
            alert("You hid behind some rubble and stayed silent. You did not realise the man had a headset which allowed him to see through the rubble. He took out a gun, before blasting the rubble away with and killing you. (You just got blown away, Try Again)")
            throw new Error();
        } else if (Q4 === rite4 && Q2 === A && Q3 === B && Q5 === rite5_1 || Q2 === C && Q3 === B && Q5 === rite5_1) {
            alert("You run towards the man and hold down on the trigger. Before the charger rifle was fully charged, you were shot by the man with a gun. (Your reaction time was too slow, Try Again)")
            throw new Error();
        } else if (Q4 === rite4 && Q2 === A && Qu3 === B || Q2 === C && Q3 === B) {
            alert("Before the man could react, you fire a charged shot at him. The force of the shot knocks him against the opposite wall and rubble falls on him.")
        } else if (Q4 === rite4 && Q2 === A && Q3 === C && Q5 === rite5 || Q2 === C && Q3 === C && Q5 === rite5) {
            alert("You hid behind some rubble and stayed silent. You did not realise the man had a headset which allowed him to see through the rubble. He took out a gun, before blasting the rubble away.")
            alert("As the smoke dissipitates, you realize you were completely fine. You walk towards the man. He begins to panic as he tries to pull the trigger, only to realise that was jammed. You throw a punch at the man and the force sends him flying to the wall. You stare astonished at your hands.")
        } else if (Q4 === rite4 && Q2 === A && Q3 === C && Q5 === rite5_1 || Q2 === C && Q3 === C && Q5 === rite5_1) {
            alert("You charge at the man blindly. As you rush towards the man, he tries to shoot you with his gun, but it was jammed. You rush out of the smoke and punched him upwards. The force was so strong it sent him flying to the roof. He then falls back down.")
        } else if (Q4 === rite4 && Q2 === A && Q3 === C || Q2 === C && Q3 === C) {
            alert("You stood there menacingly. The man exclaims “ You're just standing there menacingly! Are you going to make your move?”, while distracted, you punch him and send him flying to the wall. ")
        } else if (Q4 === rite4 && Q2 === A && Q5 === rite5 || Q2 === C && Q5 === rite5) {
            alert("You hid behind some rubble and stayed silent. You did not realise he had a headset which allowed him to see through the rubble. He blasted the rubble away with his gun. He then shoots you and you die. (You just got blown away, Try Again)")
            throw new Error();
        } else if (Q4 === rite4 && Q2 === A && Q5 === rite5_1 || Q2 === C && Q5 === rite5_1) {
            alert("You rapidly fire at the man but run out of bullets as it is powered by water. You change the heroshot into a sword and kill the man before he can react.")
        } else {
            alert("The heroshots hits the man. He stands there, confused. Then, angered by the action, he shoots you. (You just got blown away, Try Again)")
            throw new Error();
        }

        alert("You search the man’s body. You find an insignia on his body, which was relatively burnt off like someone tried to remove it. The only thing that remained was the letter “S” that looked like it was wrapped in vines, leaving behind a sense of speculation as to what it spelt out. You open the bunker door, blinding you with the sudden burst of light.");
        alert("Everything is still, signalling that the earthquake is over. You trudge towards the T.A.S.L.V. that remained unscathed due to the Rebellions’s high-tech updates and drive off back to the hangar.");

        alert("You fly back to the hanger to await further orders.");

        alert("You get an update from your superiors that there has been news about not only a volcano about to erupt, but the rise of an epidemic too. The world is already facing so many threats, they cannot afford to have another worldwide emergency with so many things that are already on their plate. You get ready to head out as you go to the garage. You get in your vehicle and you speed off.");

        if (Q2 === A) {
            alert("The road to the city is oddly flat and slippery, the ATV travels at high speeds, you suddenly lose control of the vehicle and swerve due to the high speeds and died on impact. 2 FAST 4 U. Try Again, Vin Diesel.");
            throw new Error();
        } else {
            alert("In air mode, you travel as fast as possible and arrived smoothly.");
        }
        let rite6 = "A";
        let rite6_1 = "B";
        alert("As you walk around the city, you hear many  people coughing and sneezing. You get closer to them and realise that many of the civilians have caught some sort of virus. You immediately walk away from the crowded areas, when you bump into someone who was dressed in black. He releases chloroform gas and knocks you out.");
        alert("When you wake up, you see a bright light shining directly at your eyes. You blink repeatedly and see a shadow in front of you. You try to get up but realise that you are tied to a chair. Suddenly, you hear a voice cut through the silence like a knife, “I’m only going to ask once. Do you have a mask?”");
        let Q6 = prompt("You slowly retrieve your mask from your storage. “This is my last one and it's for emergencies!” “He pulls out a knife and threatens you. “Hand over the mask! HAND IT OVER OR DIE! Do you...\nA) Say no because you need.\nB) Give him the mask as you still have your protective suit.\nC) Take out your knife and stab him.");

        if (Q6 === rite6) {
            alert("The man gets angry but gives you a second chance to answer. You still disagree. He shoots you, it leaves a fatal wound and you die. Try Again.");
            throw new Error();
        } else if (Q6 === rite6_1) {
            alert("He thanks you and releases you. You knew that the mask was for the worst case scenario where your suit stops functioning but it won't happen. You leave and turn on your protective suit’s respiratory function.");
        } else {
            alert("You stabbed him. You leave the building filled with regret. However, you knew that in this time, everyone fights for survival, and he was going to die anyways.");
        }

        let rite7 = "A";
        let rite7_1 = "B";

        alert("Just then, you see a puff of smoke in the distance. This was followed by sounds of screaming and running. Right after that, there was a reddish-orange glow, hot steaming lava rushes towards you. You start running with all your might, as far as possible. The lava was gushing towards you and was catching up soon.");
        alert("As you run, you see many people shutting their windows and doors, 'quarantining' themselves. You immediately rush into an abandoned building as you try to recover, and some survivors follow you in. You all start to wander around, trying to find another way out.");
        alert("There is nothing on the ground floor as well as the upper floor so you head down to the basement. It is extremely dark and all the switches are spoilt.");
        let Q7 = prompt("However there is a door at the end of the hallway. You all go closer to it and the door creaked. You switch on your flashlight that came with your pack. Do you…\nA) Decide to explore the place.\nB) Try and blast a hole in the wall.\nC) Trip over a rock").toUpperCase();

        if (Q7 === A) {
            alert("You find a secret door that's open, so you enter it to investigate. You point your flashlight to the ground, only to see that there is a big hole in the ground. You and the other survivors share whatever materials you have to create a makeshift harness to get down the hole safely. You go down first. Halfway down the hole, the rope snaps. You fall down, dragging the other survivors down with you.")
        } else if (Q7 === rite7_1) {
            alert("Lava seeps in and starts burning part of the floor. Pieces of debris and rubble fall on you and pins you down, rendering you immobile. You sigh in regret as you and your companions burn to death. Try Again.");
            throw new Error();
        } else {
            alert("You stumble and fall down a hole. You desperately grip onto the edge of the hole, but your hands loosens due to how tired you are, and you fall down…. The impact from the impact kills you as you didn’t activate your protective gear in time. Try Again.");
            throw new Error();
        }

        let rite8 = "A";
        let rite8_1 = "B";

        alert("As you feel yourself hit the ground surrounded by spider webs with a huge thud. The protective gear that you activated saves you from too much damage, but you twisted your ankle from landing on your feet. The other survivors were not so lucky. They fell down, only for them to die on impact.");
        alert("As you slowly recover from the pain, you pile up their corpses to bring back to the hangar to use as fertiliser. It would be quite a haul for the people to collect later as they are worth 6 sacks of fertilizer. ");
        alert("Suddenly, you see a light shining in the midst of all the darkness and walk towards it. You realise that it's a tunnel and the light at the end is either the surface or a way out. As you get closer, you hear an eerie sound coming from the tunnel.");
        let Q8 = prompt("You follow the sound and it leads you to a dark hollow chamber with a black cat on a table. As you go near it, it snarls at you ferociously, and someone suddenly shouts, “Hey! Who’s there!”Do you\nA) Hide\nB) Confront the unknown person\nC) Stay silent and explore the place").toUpperCase();

        if (Q8 === rite8) {
            alert("You quickly hide behind your invisi-shield and wait for the owner of the voice to appear. You trigger a trap by accident. Try Again.")
            throw new Error();
        } else if (Q8 === rite8_1) {
            alert("You shout, “Come out! I’m not scared of you!” Suddenly, toxic water flows into the room. You see a figure run into a seperate room. You jump up onto your holoboard that is in your pack and watch as torrents of water gush out. Some of the rushing water splashes on you, corroding a few parts of your suit and already injured body. You pass out from the pain…");
        } else {
            alert("You explore the place and find a room with a bed that looks like someone recently stayed in it. You investigate the room to try to find clues of who was living there. You opened the drawer, which triggered a trap that killed you. Game Over.");
            throw new Error();
        }

        let rite9 = "A"
        let rite9_1 = "B"
        alert("You groggily try to understand the situation you're in. You are trapped in a huge holojail in the shape of a cube. You calm your rapidly beating heart and tried to think rationally. The owner of the voice appears after a few minutes of waiting. He is a tall and muscular man, with an unkempt beard and dirty clothes.");

        let Q9 = prompt("You wait for the man to start talking to see what he was going to do. 'Who are you?' He asks, 'What are you doing here? Are you on my side?' Do you...\nA) Be apprehensive about who the man is.\nB) Tell him the partial truth.\nC) Trust him.").toUpperCase();

        if (Q9 === rite9) {
            alert("You give a fake name.'I am Riley, I'm good.' He seemed doubtful of your second statement. He pulls you over and finds a Rebellion insignia on your pack. 'You're not.' He then stabs you. Game Over.");
            throw new Error();
        } else if (Q9 === rite9_1) {
            alert("'I'm" + username + ", I'm on your side.'The man responds with his name - Matt and says 'It's rare to find someone from our side.'. He releases you from the holo-prison. You then charge at him and knock him out…");
        } else {
            alert("'I'm" + username + ", I'm from the Rebellion, I'm good, you can trust me.'. The man snarls menacingly and says: 'Those who dare to defy them deserves a deathly dose of divine destruction!' He takes out his knife and stabs you. Try Again.");
            throw new Error();
        }

        let rite10 = "A";
        let rite10_1 = "B";

        alert("You contact Headquarters to come collect Matt while you try to explore more of the place. You find another door in the basement and open it. Inside is a room filled with many chests and weird paintings hanging on the walls. You open one of the chests and inside is a scroll. You unroll it and on it is written");
        alert("This room has many chests and paintings,\nThere is another door that will lead you to where the master is waiting\nThe master will help you\nFind the key in one of the many few\nChests and accomplish a feat\nThen the master you are able to meet\nYou open all the chests, but nothing is to be found in them. You look at the paintings, each quite similar except for one.");
        alert("All are faces of unknown people that strikes a sense of apprehension, however, one of the people in the paintings has a missing eye. You unhook the painting and behind it was a hole in the wall.");
        alert("You see a box inside and open it to find a silver key, grab the key and unlock the door.\nJust then, you heard footsteps coming from outside. You immediately scramble towards the door and are brought to a tall and snowy mountain.");

        alert("You look behind you and realise the door is missing. It is freezing cold so you equip your snowsuit which was inside your pack. After you have worn your snowsuit, you see a sign in front of you which says:\n'Follow the signs\nWhich will lead you to this abode of mine\nThe place that lacks luster\nwhere the master\nis waiting for you\nSo start making haste as the master wants to give you a clue'");
        alert("You follow the signs which brought you to a deep dark cave. When you enter, you felt so much warmer. You take off your snowsuit and start exploring the cave.");
        alert("Just then, you hear a strange voice 'Whoever has entered, I have been waiting anxiously for your arrival. ")
        let Q10 = prompt("I'm an environmentalist and maybe a poet. Can you help me?' Do you…\nA) Rush towards the holy voice\nB) Press the big red button on the wall\nC) You press a green button on the wall").toUpperCase();

        if (Q10 === rite10) {
            alert("You step on the multiple pressure plates that triggers the many traps set around the room. The walls start to close in, acid water starts raining down, poison arrows start to spring out, homing in on their target-You. One arrow hits your face and you feel it going numb. Despite the pain, you still ran towards this voice. It was like a siren, and you were a sailor. You end up coughing out blood, struggling to stay alive, but it was too late. Game Over.");
            throw new Error();
        } else if (Q10 === rite10_1) {
            alert("You heard what sounds like macheinery powering down. You suspected some traps were disabled. You walk forward and encounter the holovid of an aged man, 'It's been quite a while since a person has come here. If you're seeing this, I'm probably dead by now. Its 2068, and there is an evil group that is trying to dominate the world. Their actions are harming everyone and destroying the world! Please, stop them! There is an exit further down the hall, there you will be rewarded with something, use it for the greater good!' Somewhere down the cave,a door opens...");
        } else {
            alert("Nothing happens. You think that everything is fine. Suddenly, a bunch of ravage parasytes rushes out from nowhere, and enter your body. These parasytes were mostly hungry after staying in this cave for so long... Game Over.");
            throw new Error();
        }

        let rite11 = "A";

        alert("You walk down the hallway and towards the exit. You find a machine that had the same font of insignia on the man's body, but instead of a 'S' it was an 'O'.There are more letters but they faded away with time. You dismantled the machine, only to find that the machine was actually an ancient computer that dated back to 2020. 'Oh, how primitive their technology was back then,' you think to yourself.\nHowever, these sorts of things have no value to the rich. After all, you didn't really care for the importance of these items, as long as The Rebellion needed it.");
        alert("You were too busy dealing with disasters and monsters to have time for this, even when you're off, your horrible luck always lands you into some form of trouble. Chuckling bitterly to yourself, you haul yourself and the machine all they way back into the T.A.S.L.V and drive back to the hangar to interrogate Matt, the man you captured.");

        alert("You reach the hangar and enter the interrogation room. He was chained and bound to a chair. You start interrogating him, asking him basic questions such as his age and faction, about why he was doing this and if anyone ordered him to do so. All he does is laugh maniacally and says 'This is their will! Those who defy shall die!");
        alert("He smashed his head against the back of the chair and committed suicide in the defence of “them”. A few seconds later, he was pronounced dead. All of a sudden, you see 2 tiny worm-like creatures crawling out of his eye sockets, you instinctively knew from experience that those were parasytes.");
        let Q11 = prompt("On his neck had a word that was fading away, you only got a glimpse of the letter 'C', also in the same font as the machine. You could not help but to quizzically wonder what the letters meant. The parasytes then start crawling down to find a new host to control. Do you…\nA) Squish them\nB) Capture them").toUpperCase();

        if (Q11 === rite11) {
            alert("You squat down to get a closer look. They look disgusting. You squish them with your hand. Suddenly, you felt a flash of pain from your palm. You lift up your hand and realize both the parasytes were piercing your hand and crawling into your bloodstream. You scream in terror and disgust, as you were once told that once they enter a host there is no way to save them. You sit down, shocked, waiting for the imminent loss of control.");

            alert("Suddenly, you feel dizzy and start to lose consciousness. You didn't die, but your body was just left to be a puppet while you have utterly no control over what you rightfully own. Other members of The Rebellion killed you to stop the parasytes. Game Over.");
            throw new Error();
        } else {
            alert("You reach into your pack and take out a small container and lure the parasytes into the container by putting a rat in it. You shut it tightly once the parasyte was in. You then go to the laboratory and  pass it to the scientists who thank you for providing a new research subject to observe.");
        }

        let rite12 = "A"

        let Q12 = prompt("You were given a promotion and you are promoted to a tier-5 survivor! You get a week-long break. Do you…\nA) Take it\nB) Leave it").toUpperCase();

        if (Q12 === rite12) {
            alert("Your week-long break begins. Yay!!!");
        } else {
            alert("They are suspicious as to why you rejected them, was it because you are a spy? There is a confidential meeting going on in the two weeks, are you going to infitrate it?. They took out their laser guns and gunned you to death. (That was a horrible way to die, Try Again)");
            throw new Error();
        }

        let rite13 = "A"
        let rite13_1 = "B"

        alert("-1 week later-\nYou have been well rested. Your superiors tell you that you have to go on a new mission-to go to what used to be Australia.")

        alert("Coastal flooding that happened over the years has made it sink into the ocean. There has been a strange occurrence in this underwater island, where there has been sightings of an ignisdo. (Yes, a fire tornado in water).")

        alert("HQ scientists think that it is due to some kind of man-made machine. Your mission is to find out the cause of this man-made maritime monstrosity.")

        alert("You ride the T.A.S.L.V. into the sea. You see the sunken land of Australia. A once bustling city has now been reduced to a desolated underwater island. You traveled down and landed in a neighbourhood. This had been the place that the ignisdo has been circling around.")

        alert("The experts at HQ say that there might be something there. As you go out into the sea in your protective underwater gear, you see a hammer-head shark.")

        if (Q3 === C) {
            Q13 = prompt("A normal hammer-head shark might have been ok for you, but this hammer-head shark had plastic spikes protruding out of its head and had plastic-like growths on its skin. It looks like it has been enslaved by parasytes! Do you… \nA) Uppercut the shark\nB) Hide in the T.A.S.L.V\nC) Smoulder").toUpperCase();
        } else if (Q3 === B) {
            Q13 = prompt("A normal hammer-head shark might have been ok for you, but this hammer-head shark had plastic spikes protruding out of its head and had plastic-like growths on its skin. It looks like it has been enslaved by parasytes! Do you… \nA) Charge the rifle\nB) Hide in the T.A.S.L.V\nC) Throw the rifle on the shark").toUpperCase();
        } else {
            Q13 = prompt("A normal hammer-head shark might have been ok for you, but this hammer-head shark had plastic spikes protruding out of its head and had plastic-like growths on its skin. It looks like it has been enslaved by parasytes! Do you… \nA) Shoot the shark\nB) Hide in the T.A.S.L.V\nC) Change it into a sword").toUpperCase();
        }

        if (Q13 === rite13 && Q3 === C) {
            alert("You uppercut the shark and it flies out of the water. The shark rushes down and back into the water at top speeds, dying on impact. You collect the parasytes for research purposes.");
        } else if (Q13 === rite13_1 && Q3 === C) {
            alert("You hide in the T.A.S.L.V. It keeps crashing into the T.A.S.L.V. You exit and punch it hard in its stomach. Blood spews out of the shark, you grab a container and collect the parasytes that were punched out.");
        } else if (Q3 === C) {
            alert("You give the shark a smouldering look. The shark was so frightened from that menacing smoulder and swam away.");
        } else if (Q3 === B && Q13 === rite13) {
            alert("As you are charging the rifle, the shark bites you. Parasytes start crawling out of its mouth and taking over your body. Try Again.");
            throw new Error();
        } else if (Qn3 === B && Q13 === rite13_1) {
            alert("You hide in the T.A.S.L.V and start charging your rifle. The shark keeps trying to bump into the T.A.S.L.V. You exit the vehicle and start shooting it with your rifle. You kill the shark, and then quickly grab a container and trap as many parasytes that come out as possible.");
        } else if (Q3 === B) {
            alert("The gun bounces harmlessly off the shark. It then proceeds to devour its next meal - you. Try Again.");
            throw new Error();
        } else if (Q13 === rite13) {
            alert("In the water, the heroshots is extremely powerful. You shoot the shark, causing a water torpedo to be shot. It hurtles the shark far far away,smashing it into jagged rocks.");
        } else if (Q13 === rite13_1) {
            alert("The shark keeps trying to crash into the T.A.S.L.V. You exit the vehicle, change the heroshots into a sword and stab the shark. The shark dies and you collect the parasytes");
        } else {
            alert("You change the heroshots into a sword. You attack the shark. The shark sees you and rips away the sword from you using its jaws. The shark then devours you. Try Again.");
            throw new Error();
        }

        alert("You then swim into the sunken neighbourhood to find the machine. After a period of searching, you find a strange looking contraption stuck underneath a table. You open it and eat the thing that was inside it. It tasted like a chocolate, strawberry and vanilla sundae with colourful chocolate sprinkles topped with a chocolate covered cherry with cool Hershey’s chocolate sauce drizzled around it with a delicious piece of chocolate coated crunchy wafer, added with a dollop of whipped cream.");

        let rite14 = "A"
        let rite14_1 = "B"

        let Q14 = prompt("Then you realise it is a chocolate, strawberry and vanilla sundae with colourful chocolate sprinkles topped with a chocolate covered cherry with cool Hershey’s chocolate sauce drizzled around it with a delicious piece of chocolate coated crunchy wafer, added with a dollop of whipped cream that have been left since the 21 century. (HOW IS IT NOT EXPIRED YOU ASK? THE ART OF PRESERVATION!) You look inside and find an even stranger contraption that had a look of a bomb but it was made with much more advanced technology. You see three wires. Do you cut the…\nA) Red wire\nB) Green wire\nC) Orange wire").toUpperCase();

        if (Q14 === rite14) {
            alert("You died from an explosion");
            throw new Error();
        } else if (Q14 === rite14_1) {
            alert("The bomb defuses");
        } else {
            alert("You see an unholy fire erupt from the machine, one that was not immediately extinguished by the water, but you quickly contain it by putting it out early with a fireproof blanket.");
        }

        alert("As you munch on your sundae, you see the strangest contraption beside the stranger contraption inside the strange contraption which is a letter. on the front says, “All case studies are case studies.” You open it and read it. On it wrote:");

        alert("“To whoever is reading it, this about 2016, when Cupuacu  as a trend, if you d n't to know of  t, tr   earching it up on google  r whatever search engine you use now. I researched it when I was alive and fou    ut that the man that made the song actually discovered this fru   that c n cure all diseases. Ho e  r, I do not know if it is still av     le in your time. All I know is th t now, in 206 , a group was try  g to obtain it when I was still alive, I do not k    what the situation is like in your ti e. However, please stop the group, destroy them and retrieve the Cupuacu seed fro    e clutches of the     I   ”");

        alert("You try to read on further but due to time, the words had already faded away. All that was left were the letters “I”. You get curious due to the fact that you are finding letters on your way. You try gathering all the letters and compile them. You get “SOCI” “SOCI? What does that mean?” You ask yourself. You take it down on your armband and head out.")

        let rite15 = "A"
        let rite15_1 = "B"

        let Q15 = prompt("All of a sudden, you hear a loud rumbling sound, you rush out to take a look. You look up and see a huge whirlpool but upon greater inspection realise that it wasn’t just a whirlpool but it was an ignisdo. You quickly head back into the water and look at the machine, there was a letter “E” on it. You quickly wrote it down and then tried to find a way to stop the ignisdo. Do you\nA) Look at the dangerously beautiful display of fire\nB) Try to destroy the machine by ripping it apart\nC) Calmly study the buttons on the machine").toUpperCase();

        if (Q15 === rite15) {
            alert("You get enveloped by the ignisdo, you died without any reason and didn’t even do anything useful. (Try Again)");
            throw new Error();
        } else if (Q15 === rite15_1) {
            alert("You rip apart the metal plates on the machine, the machine stops functioning. The ignisdo continues to head towards you, it envelops you and you died. At least you destroyed the machine so no more ignisdos will ever happen again. (Try Again Hero)");
        } else {
            alert("You find a button that says “Stop operation” and press it, everything goes back to being calm. You press the self-destruct button and save everyone from ever having to deal with an ignisdo again.");
        }

        alert("You leave in your T.A.S.L.V and head back to the hangar for further orders. You leave your T.A.S.L.V in the vehicle garage to get upgraded and fixed from you ordeals as you head to your superior’s office to hand in your mission report. Your superior commends you for saving so many people as well as finding a link, “SOCIE”. He gives you a 2 day break and you gladly accept.");

        alert("Over the break, you decide to go to the city area to relax. You are walking around the town square when you see someone snooping around the unauthorised area only meant for the Survivors. You decide to apprehend him as he does not have the chip that was inserted into the Survivors when they join the Rebellion. He decides to fight back when you try to apprehend him. You hit him in the temple, knocking him out. ");

        alert("You bring him to the HQ after releasing an electric net on him that would shock him with 80 Volts of electricity if he struggled. While carrying him, you think “Why does this have to happen when I’m on my break?” You sigh deeply as you lug him into the interrogation room. You splash him with water to wake him up.");

        alert("You rapidly hit him with torrents of questions, “Who are you? What are you doing here? Are you a spy? Who sent you?” “Hahaha” The man chuckled manically. 'You already know, don’t you have déjà vu? This has happened before!'Or do you not remember who you caused to die? Bwahahahaha! You are no different from us, you’ve become the very thing you swore to destroy!”");

        alert("“The name is Matthew, Matt’s brother, you caused him to kill himself! Don’t you dare try to deny it! You aren’t going to get anything out of me! Those who dare to defy shall die!” You know that he is going to try to kill himself, so you inject him with a paralysis poison that deemed him unable to move.");

        alert("You inspect his numb body and see the same insignia as on the other machines and people, the letter “T” was visible while the rest were burnt off. You touch the insignia and it feels hot. Before you can register what was happening, Matthew’s body bursts into flames, leaving no evidence behind. At least you were one step closer to solving the mystery.");

        alert("The next day, your break ends. You report back to work and is tasked with the mission of going to the city of Metropolis that is in the state of Illinois to investigate the case of toxicus inundatios (Toxic floods) turning up in different places of the city. You decide to go to the previous sites of the floods to see if you can find any clues there.");

        let rite16 = "A";
        let rite16_1 = "B";

        let Q16 = prompt("You go down the sewers to see if anything is going on, but not before putting on your protective gear to avoid corrosion of your body. As you go down into the sewers, you notice weird numbered pipes that look different from the normal pipes that were installed by the head officers. Do you\nA) Follow the pipes to where they lead\nB) Investigate the pipe\nC) Swim in the water").toUpperCase();

        if (Q16 === rite16) {
            alert("You found a machine that makes the reservoir overflow…");
        } else if (Q16 === rite16_1) {
            alert("You find a button, press it and release all the toxic water, killing yourself. However, you release all the water that was meant to kill the residents of Metropolis. (Try Again Hero)");
            throw new Error();
        } else {
            alert("You die, duh.(Try Again)");
            throw new Error();
        }

        alert("You decide to inspect the machine. You finally find out that the machine has the letter “Y”on it. You compile all the letters together and get the word “SOCIETY”. Ï should have known it was them! This must have all been part of The Uprising!” You hurriedly send a message back to your superior telling him that you have found out about who was behind everything. After that, you get back to the problem at hand, the machine. You blow up the machine and sped back to the HQ, preparing to gear up for the war to come.");
        alert("Every single one of the Survivors geared up and equipped their ideal weapon of choice, before getting into their vehicles and driving off to the Society’s base.");
        alert("You get into the T.A.S.L.V and catch up with the group. Everyone was thinking that was time to get revenge for their comrades and the innocent civilians that were harmed because of the Society's selfish dreams!”");

        alert("Upon reaching their base, you can see the huge difference between The Rebellion and The Society. The Society was huge and and grand while The Rebellion was small, compact and rundown.");
        alert("This struck anger in many of the Survivors since it was pure discrimination against the poor and the rich, as if there was a fine line that separated them. The Survivors rushed in protest and broke down the wall after a 30 minute siege.");

        alert("Just then, the alarm sounded. The ground rumbled as 10 100m tall plastic golems arose from the ground");

        let rite17 = "A";
        let rite17_1 = "B";

        if (Q3 === C) {
            Q17 = prompt("The ground trembled with every step they took, striking fear in everyone. One golem approaches you… Do you\nA) Punch the golem\nB) Stand there and look menacing\nC) Remove the parasyte").toUpperCase();
        } else if (Q3 === B) {
            Q17 = prompt("The ground trembled with every step they took, striking fear in everyone. One golem approaches you… Do you\nA) Stand there and look menacing\nB) Charge the rifle\nC) Try to loop around the golem and infiltrate the base").toUpperCase();
        } else {
            Q17 = prompt("The ground trembled with every step they took, striking fear in everyone. One golem approaches you… Do you\nA) Try to shoot the golem\nB) Stand there and look menacing\nC) Throw your gun at the golem").toUpperCase();
        }

        if (Q3 === C && Q17 === rite17) {
            alert("The golem dies in a single punch. You continue to kill all the other golems that your comrades are fighting.");
        } else if (Q3 === C && Q17 === rite17_1) {
            alert("You get captured and pounded into dust by the golem. You die (You became baby golem powder, Try Again)");
            throw new Error();
        } else if (Q3 === C) {
            alert("Lightly punch the weak point of the golem. That kills the parasyte and stops the golem. You go ahead to kill the other golems");
        } else if (Q3 === B && Q17 === rite17) {
            alert("Get squashed by the golem and died (You became a human pancake, Try Again)");
            throw new Error();
        } else if (Q17 === rite17_1 && Q3 === B) {
            alert("Wait 5 seconds as the golem arrives, you shoot it and wound it critically. You charge again and then shoot at weak spot which kills golems. You then recharge your rifle to kill the other golems.");
        } else if (Q3 === B) {
            alert("You go around the golem and infiltrate the enemy base. Many people die. It's too hard to overthrow the whole base but you died trying (You don't have any cloning techniques from the looks of it, Try Again)");
            throw new Error();
        } else if (Q17 === rite17) {
            alert("You try to shoot the golem but you run out of water, so you decided to transform it into its sword mode. The sword is unable to penetrate the golem’s thick plastic layer.");
            alert("The golem flicks you off and you died.");
            alert("What was that? A fly? - Golem \nTry Again");
            throw new Error();
        } else if (Q17 === rite17_1) {
            alert("Stand there and look menacing. You get squashed by the golem and died (Try Again. Why did you think it would work?.)");
            throw new Error();
        } else {
            alert("You throw your gun at the golem. The golem crushes it into powder, just like in that one Revengers movie, where Spooderboy turned to dust. Then it crushed you. (Try Again, Revengers!)");
            throw new Error();
        }

        alert("You rush past the dead golems, and see a huge plain of acid water. You use your bionic contact lenses to zoom into the distance and see a huge fortress that is built on an a huge island. You get a daunting feeling that there is a fearsome enemy to come. You transform your T.A.S.L.V into its boat form before you set off towards the fortress.");

        let rite18 = "A";
        let rite18_1 = "B";

        let Q18 = prompt("You charge towards the fortress. As you get off your T.A.S L.V, you scourge the area to find a contraption to allow entry into the fortress. Do you……\nA) Jump into the water\nB) Walk around, find a button and press it\nC) Try to strike the door").toUpperCase();

        if (Q18 === rite18) {
            alert("You drown and die in the acid water. (Wow, Try Again)");
            throw new Error();
        } else if (Q18 === rite18_1) {
            alert("The daunting main gate opens and you rush in with your weapon, preparing yourself for any surprise attacks");
        } else {
            alert("You fall down the trap, and got pierced by a spike, thus dying, but not after injuring your hand. (Try Again, you holy human");
            throw new Error();
        }

        alert("You tiptoe through a dark and long hallway when you hear a sound coming from a room that had a plague labelled 'Meeting Room'.");

        alert("You eavesdrop and hear them say 'The Rebellion won’t know what will hit them. The battle will be over very soon.' You bust into the meeting room and shout 'I KNOW YOU'RE IN HERE SAUCY SOCIETY!' A wave a shock went through them and they draw their weapons.\nTHE BATTLE BEGINS");

        alert("The two brothers looks familiar to you as they arm themselves and one of them blasts you. You do a forward roll and punch him but it barely injures him, signs of pain show up on both their faces. You think 'I only struck the blonde-haired one, why did the ginger-haired also show that he was in pain?'");

        alert("You decide to strike the blonde once again and the same thing happens. You realise that they are interconnected and if one is struck, the other will be injured as well.");

        let rite19 = "A";

        let Q19 = prompt("You focus your attacks on the blonde-haired man when the ginger presses a button. Do you……\nA) Open the door and head to the top of the fortress\nB) Stay in the room and continue to fight").toUpperCase();

        if (Q19 === rite19) {
            alert("You rush up the fortress and rush towards the roof.");
        } else {
            alert("A trap door opens, dropping yu down a 24 ft hole, you die from the impact (Looks like you fell straight down to your doom, Try Again)");
            throw new Error();
        }

        alert("You and the two brothers continue to fight as you approach the roof. It then comes to the point where you and the two brothers fight on an overhang, directly underneath was the acidic water.");
        alert("The edge was very close behind one of the brothers now, yet you continue to retreat. The two brothers continued advancing. You then broke all the lights and counter with the PathFinder that was in your pack…");

        if (Q1 === A) {
            alert("It works, thankfully, you've heard of instances where the PathFinder is faulty. You decide to focus on the fight and you attack him from the dark.");
        } else {
            alert("It’s faulty, you've heard of instances where the PathFinder is faulty, who would've thought you would be one of the unlucky few? You had grabbed the wrong pack. The two brothers found you and killed you. (Try Again, try and pick the right pack this time.)");

            throw new Error();
        }

        let rite21 = "A"

        alert("You furiously attack both of them in the dark and push one of them off the edge. You hear him scream before he crashes into the lake. His last moment, was suffered with acid corroding his body, causing the other brother to scream in pain.");
        let Q21 = prompt("As the dark mist clears, you notice the ginger still standing there, laughing maniacally. “Didn’t you know that when one of us dies, we join together in the surviving body!”Do you\nA) Punch the guy and then strike him\nB) Stand there dramatically and menacingly with the wind blowing on you and say “I'm not scared! I will fight!”").toUpperCase();

        if (Q21 === rite21) {
            alert("The guy gets sent flying into the air, and dies.");
        } else {
            alert("The guy strikes you, you stumble back, falling off the cliff and into the water, causing death (Try Again, that was a bad time to die.)");
            throw new Error();
        }

        alert("He has died, you confirm this by decapitating him. You decide to explore the fortress when you find a room labelled “Top Secret”. You enter and see a tree caged up behind a glass wall.");

        alert("It is labelled the Cupuacu fruit and remember what the letter once stated “The Cupuacu fruit is the holy fruit that can cure all diseases.” You jump for joy as you realise that you have found the key to saving the entire world from the deadly pandemic.");

        alert("You quickly inform your superior and dash back to HQ. After a few months, the lab synthesizes a cure for SER-COVLaN1. It is ready to be distributed worldwide and you are regarded as a hero.");

        alert("All of a sudden, you hear a beeping sound, is it a bomb?");

        alert("You quickly dive and try to save those around you.");
        alert("");

        alert("");

        alert("You jolt awake and realise that it was all just a bad dream. It felt too real to be one though. After all, you are notorious for being a huge waster and not caring for the environment.");

        alert("You take this as a sign that you need to start being more environmentally friendly and start to inform your friends about being more eco-friendly and try changing your lifestyle as well, for fear of the dream coming true.");

        alert("As you promise to do so, your two brothers outside your window smile......");
    
        alert('You win!')

        var endtime = new Date().getTime();

        var timetaken = starttime - endtime

        alert('You took' + timetaken + 'to complete the game')
}