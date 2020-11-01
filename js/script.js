/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Class_Day": "Classroom_Day.png",
	"Dorm_Day": "Dorm_Day.png",
	"Hall_Day": "Hall_Day.png",
	"Lib": "Library.png",
	"Lob_Day": "Lobby_Day.png",
	"Lob_Night": "Lobby_Night.png",
	"Room_Day": "Room_Day.png",
	"Room_Night": "Room_Night.png",
	"Room_Dark": "Room_Dark.png",
	"School_Day": "School_Day.png",
	"Courtyard": "Courtyard.png",
	"Station": "Station.png",
	"Road": "Road.png",
	"Boat": "Boat.png",
	"Back": "Backyard.png",
	"Dining": "Dining_Day.png",
	"Campus_Night": "Campus_Night.png"
});


// Define the Characters
monogatari.characters ({

	'p': {
		name: '{{p.f}}',
		color: '#ff3300'
	},

	'n': {
		name: ' ',
		color: '#5bcaff'
	},

	//Main Characters
	'l': {
		name: 'Lisa',
		color: '#ff99ff',
		directory: 'Lisa', 
        sprites: {
            normal: 'Normal.png',
            sly: 'Sly.png',
            smile: 'Smile.png',
			angry: 'Angry.png',
			doubt: 'Doubt.png',
            surprise: 'Surprise.png'
        }
	},
	'm': {
		name: 'Mafuyu',
		color: '#3399ff',
		directory: 'Mafuyu', 
        sprites: {
            normal: 'Normal.png',
            neutral: 'Neutral.png',
            smile: 'Smile.png',
			pout: 'Pout.png',
			argue: 'Argue.png',
            think: 'Think.png'
        }
	},
	'g': {
		name: 'Genevieve',
		color: '#cc66ff',
		directory: 'Genevieve', 
        sprites: {
            normal: 'Normal.png',
            sigh: 'Sigh.png',
            happy: 'Happy.png',
            surprise: 'Surprise.png'
        }
	},
	'i': {
		name: 'Iris',
		color: '#ffcc00',
		directory: 'Iris', 
        sprites: {
            normal: 'Normal.png',
            happy: 'Happy.png',
            eager: 'Eager.png',
			sweat: 'Sweat.png',
			upset: 'Upset.png',
			tear: 'Tear.png'
        }
	},
	't': {
		name: 'Tania',
		color: '#66ff66',
		directory: 'Tania', 
        sprites: {
            normal: 'Normal.png',
            serious: 'Serious.png',
            sigh: 'Sigh.png',
			surprise: 'Surprise.png',
			avoid: 'Avoid.png'
        }
	},
	'b': {
		name: 'Brook',
		color: '#66ffcc',
		directory: 'Brook', 
        sprites: {
            normal: 'Normal.png',
            smirk: 'Smirk.png',
            grin: 'Grin.png',
			serious: 'Serious.png',
            surprise: 'Surprise.png'
        }
	},


	//Other
	'q': {
		name: '???',
		color: '#5bcaff'
	}
});

monogatari.script ({
	// The game starts here.

	'Start': [
		//Prologue
		'show scene rgb(0,0,0)',
		'wait 1000',
		"centered Mystery is born from ignorance.",
		"nvl It is no secret that ignorance is bliss.",
		"nvl We all remember a time where the world seemed more magical. When our puny child brains were unable to comprehend the complexities of reality and took it all for granted.",
		"nvl Why is the sky blue? Where do babies come from? What is love? The joy of such miracles can only be appreciated with infantile ignorance.",
		"nvl And yet, we learn. With time and experience, we grow up and understand that what we once considered miracles are merely the results of plain science.",
		"nvl The sky is blue due to Rayleight Scattering. Babies are born from the fertilization of an egg with sperm. Love is a release of oxytocin in the brain. When explained like that, the world quickly becomes dull.",
		"clear",
		"nvl The fish in the sea knows not the land.",
		"nvl To gain such wisdom is no different than to invite its own death.",
		"nvl It is even more ridiculous for man to reach the stars than it is for fish to live ashore.",
		"nvl And yet, here we are. Exploring the cosmos, the deepest depths, and the human body as if it were a walk in the park.",
		"nvl How amazing.",
		"nvl How commendable.",
		"nvl How terrifying.",
		"clear",
		"nvl I'm no expert on the matter and this is hardly a profound philosophy, but I honestly find it difficult to whole-heartedly cheer on such progress.",
		"nvl From what I can see, with every advancement we make, us humans seem to only get closer to our own destruction.",
		"nvl The Large Hadron Collider didn't end up destroying the world, but could you imagine if it did? Killed by our own creation. How ironic.",
		"nvl And don't even get me started on Climate Change.",
		"clear",
		"nvl Have we learned nothing from Icarus? There are places that man was never meant to reach. We'd be better off if we never tried.",
		"nvl So why can't we be satisfied with that? Why can't we know our place and just stay in our lane where our safety is assured?",
		"nvl What is it about humanity that makes it so eager to reach outside the world?",
		"clear",
		"nvl To be honest...",
		"nvl Humans scare me.",
		"clear",
		"jump Sea"

	],

	'Sea': [
		"show scene Boat with fadeIn duration 2s",
		"wait 2000",
		"centered 9:23 AM, August 30th, 2025",
		"n A cool sea breeze blows through the deck, bringing with it a brisk, salty comfort.",
		"n The morning sun is blazing down fiercely as if trying to deny the end of summer, but the temperature's not too bad thanks to the sea.",
		"n To be honest, this is my first time on a ferry, so I'm a little giddy. I lean against the railing, enjoying the bumping of the deck beneath my feet.",
		"show character i normal with fadeIn",
		"clear",
		"wait 500",
		"i Hey. The intercom said we'll be arriving soon. Let's go back into the ship.",
		"A bead of sweat slowly slides down my chin and falls into the ocean. Perhaps it's a little hotter than I thought after all.",
		"show character i upset",
		"i Hey, are you listening to me? I said, let's head inside.",
		"n Ignoring the obnoxious girl, I gaze into the distance and see the quickly approaching shore. It seems we've reached our destination at last.",
		"i Hey! I know you can hear me. You... you...",
		"show character i sweat",
		"i uh, what's your name again?",
		"n Seriously? I know we just met a few days ago, but how bad can her memory get?",
		"n With a final sigh, I push off the railing and answer the girl at last.",

		//Name Choice

		{
			'Input': {
				'Text': 'What is your first name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						p: {
							f: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						p: {
							f: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},

		{
			'Input': {
				'Text': 'What is your last name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						p: {
							l: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						p: {
							l: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},

		//Continue Scene

		"p {{p.f}} {{p.l}}. Remember it this time. I shouldn't have to repeat my name more than twice.",
		"i Sorry, sorry. I'm just bad with names.",
		"show character i eager",
		"i I'm really good with faces, though. Don't worry about that!",
		"p I wasn't. Though I would be miffed, if you didn't even recognize me the next time we meet.",
		"show character i normal",
		"n Iris Loveridge. This overly-friendly girl has been my travel companion for the past day or so against my wishes.",
		"n Though we've only known each other for a few days, she's begun treating me as if we were already friends, much to my dissatisfaction.",
		"n They say people who make friends quickly lose them quickly as well, so I hope she'll leave me alone once we reach our destination.",
		"p ... we're almost there, huh?",
		"show character i happy",
		"i What, are you getting impatient?",
		"i Well, honestly, I'm pretty excited too. We'll be here for the next four years of our life, after all.",
		"i I wonder what the other students are like. Think they'll be nice?",
		"p I don't think niceness is the first trait that comes to mind when talking about magi.",
		"p It wasn't exactly friendship and rainbows back at the Millenium Castle either.",
		"show character i normal",
		"i Ahem. New Millenium Castle.",
		"p Does it matter?",
		"i It did to them.",
		"p Hmmm... whatever.",
		"n Tired of the conversation, I go back to gazing off at the horizon.",
		"n Contemplating the weight of the coming four years, I watch listlessly as the boat reaches the shore.",
		"jump Pick-up"

	],

	'Pick-up': [
		//"show scene rgb(0,0,0)",
		//"wait 1000",
		"hide character i with fadeOut",
		"nvl This may be a little sudden, but I am a Magus.",
		"nvl What that means goes without saying. Making fire at the snap of a finger. Turning lead to gold or talking to ghosts. Those unbelievable fantasies that border on the line of dumb jokes are what we call magic. And someone who can perform such things is a Magus.",
		"nvl There's no need to go crazy over it though. It's not that impressive. The ability to do magic is just something you're born with. Doing something you were able to do at birth isn't impressive at all.",
		"nvl One's true worth depends on how they use the gifts that they were born with. Unfortunately, magi have a tendency to use their talents for really stupid things.",
		"clear",
		"nvl Y'see, there's this thing called the Root. The ultimate goal of all magi is to reach it and they pour generations worth of effort, time, and resources towards this goal.",
		"nvl Even with centuries or millenia of dedication, the chance of reaching it is still one-in-a-billion at best. All that grinding and money and you still have a worse chance than rolling a five star in a mobage. It's nothing more than a fool's errand.",
		"nvl But, at the end of the day, all magi are basically just super powered dunces. Even though it would be much easier to live a normal life and attain a normal happiness, they strive towards something they will never achieve.",
		"nvl Naturally, as a magus myself, I too am one hell of an idiot.",
		"clear",

		"show scene Station with fadeIn",
		"wait 2000",
		"centered 10:00 AM, August 30th, 2025",
		"n Stepping off the boat and through the docks, we find ourselves at the arranged meeting spot.",
		"n Almost on the dot, a car pulls up and a young woman steps out to greet us.",
		"show character g normal with fadeIn",
		"clear",
		"wait 500",
		"q Good day. {{p.f}} and Iris, right? I'm here to pick you two up.",
		"g My name is Genevieve Gimlé. I'm a third-year at Haven. It's so good to finally meet you.",
		"hide character g with fadeOut",
		"wait 500",
		"show character i happy with fadeIn",
		"i Nice to meet you, Miss Gimlé! It's so nice of you to come pick us up!",
		"show character i sweat",
		"i Hmm, Gimlé? Why does that name sound familiar...?",
		"p Do you actually have brain damage or something? We met Lord Gimlé at Millenium Castle, remember?",
		"p The Gimlé family are the current leaders of the Yggdmillennia clan. In other words, she's the princess of the clan.",
		"show character i sweat with shake duration 1s",
		"i Ehhhhhhhhh!? I-I'm so sorry for not recognizing you, princess! Please forgive me!",
		"show character i sweat at rightish with fadeIn",
		"show character g normal at leftish with fadeIn",
		"g Now, now, there's no need to bow your head. I don't really care about that sort of the stuff.",
		"g It's true that my mom is the leader of the clan, but that's all. I'm no different from you guys.",
		"show character g happy",
		"g Sure, I get preferential treatment, am immune from almost all liability, and one day, you'll both have to do everything I say, even lick my shoes if I so desire, but other than that, there's no real difference between you and me.",
		"p Sounds like a lot of difference to me...",
		"g I'm kidding, I was just kidding. None of that's true.",
		"g At least personally, I don't want to elevate myself above anyone else. Stuff like lineage or wealth don't matter too much to me. So please just treat me like any other classmate.",
		"i Well, if that's what you want...",
		"show character i normal",
		"i Then it's nice to meet you, Genevieve. Let's be friends from now on!",
		"show character g normal",
		"g Yes, I would like nothing more.",
		"g Now then, let's not stand out in the sun. We can talk in the car.",
		"hide character g with fadeOut",
		"hide character i with fadeOut",
		"n Not eager to disobey our future boss, we hurriedly load our luggage and pile into her BMW. Seconds later, we hit the road and we're off to our new home.",
		"jump Car"

	],

	'Car': [
		"show scene Road with fadeIn duration 1s",
		"wait 1000",
		"n Leaving the harbour behind us, we leisurely drive into the city. It seems that our destination is a while's off from the docks.",
		"show character i normal at rightish with fadeIn",
		"show character g normal at leftish with fadeIn",
		"g Are you two comfortable? Let me know if you need anything.",
		"g Once we arrive, I'll give you two a tour of the school building first and then I'll drop you off at the dorms so you can get settled in. Is that fine?",
		"i Sounds good to me. I'm looking forward to it!",
		"show character i happy",
		"i This is gonna be my first time studying at a school for magi. I can hardly even imagine it.",
		"hide character i",
		"hide character g",
		"show character g normal with fadeIn",
		"g Is that so? I don't think it's as glamorous as you might be expecting, but it's certainly different from taking instruction solely from your master.",
		"g Most of our students who had only had learnt magecraft from their parents for their entire lives take a while to adjust to it.",
		"g That shouldn't be a problem for you though, right {{p.f}}? You were studying at the Clock Tower before this, correct?",
		"p ... you already know that?",
		"show character g surprise",
		"g Ah. Sorry, I've read both of your profiles before hand. I hope you don't mind.",
		"p I wasn't really planning on hiding it anyways, so it's fine.",
		"show character g normal",
		"g Well, in any case, there shouldn't be too many problems. We do things a bit differently here, but this too is a school. I'm sure you'll both feel right at home soon enough.",
		"p Well, I wouldn't mind it if it were more different...",

		"hide character g with fadeOut",
		"n Staring out the window onto the passing by greenery, I reflect a bit on the Museum I had escaped and pray that this place will be different.",
		"show character g normal at leftish with fadeIn",
		"show character i normal at rightish with fadeIn",
		"g Do you have any other questions before we arrive?",
		"i Oooh, I do! How many other new students are there besides us?",
		"show character g sigh",
		"g Actually, truth is, you two are our only new students this year.",
		"show character i sweat",
		"i Eh? Just us?",
		"g That's just how it is...",
		"show character g normal",
		"g On the bright size, it means we have small class sizes! And everyone knows each other, so we're very tight-knit.",
		"i Right...",
		"n Both Iris and I trade uneasy looks as we suddenly feel uncertain about our future...",
		"jump Tour"

	],

	'Tour': [
		"show scene School_Day with fadeIn duration 2s",
		"wait 2500",
		"show character g normal with fadeIn",
		"g We're here. Welcome to Haven!",
		"g Very nice, isn't it? It's the newest building in the area.",
		"p Hmmm... For a new building, it sure looks old.",
		"n That wasn't a complaint either. In fact, I'm impressed. In our trade, older things tend to be better and this building emanates history despite a supposed lack of any.",
		"hide character g with fadeOut",
		"n The facility we arrived at is a gated campus, not too different from what you'd expect for a small college. There were a couple of buildings, but the main one in the center had to be the school.",
		"n A four-story building with a couple of detached wings, far too large for the handful of students actually attending it. The owner must've either gotten carried away with construction or vastly overestimated his student base.",
		"show character g normal with fadeIn",
		"g On paper, we're supposed to be a regular private university that just opened a few years back. Because of that, we have to at least look like we're equipped to accomodate an actual normal student base.",
		"g Well, that's just talk. Why don't we go in and have a look?",
		"hide character g with fadeOut",
		"wait 500",

		//Yggdmillenia Explain
		"nvl Leading us into the school building, Genevieve begins the complete school tour. Iris and I had already been given a brief synopsis beforehand, but Genevieve still gives us the full explanation to be thorough.",
		"nvl Typically speaking, most magi in the western world are families that pass on a Magic Crest through their heirs and spend generations building up their single power with everything they have.",
		"nvl In contrast to this method is the Yggdmillenia Clan which is actually comprised of many different families each with their own Crest. Focusing on quantity over quality, they absorb other lesser families into themselves and build their family power in that way.",
		"nvl Apparently, about 20 years ago, the Clan seceded from the Mage's Association and went to war with them. They ended up losing big time and were disbanded after the war.",
		"clear",
		"nvl But a few years later, the remnants of the destroyed Clan got together again and reformed again as the New Yggdmillenia Clan, an organization completely opposed to the Association.",
		"nvl Calling out flaws in the Association's system such as an injust hierarchy, racial prejudice, lack of class mobility, or moral bankruptcy, they convinced a bunch of other families to secede and then created their own organization to house those who are similarly dissatisfied.",
		"nvl Nowadays, the Yggdmillennia are made primarily of magi families that have chosen to defect from the Association for varying reasons. Outcasts, delinquents, young families, dying families, and weak families, such losers have gathered together in hopes of strength in unity. That is New Yggdmillenia.",
		"nvl Needless to say that every single person here is a member as is everyone in this school, including me.",
		"clear",

		//Hallway Demonstration
		"show scene Hall_Day with fadeIn duration 1s",
		"wait 1000",
		"show character g normal with fadeIn",
		"g As you two may be aware, Haven is an academic institution dedicated to the education and training of young magi. It is owned by the New Yggdmillennia Clan and enrollment is open to all members of the Clan.",
		"g Haven was created in hopes of nurturing the bright minds of our clan's heirs and providing a safe environment for them to study and research magecraft.", 
		"g Construction was finalized just a few years ago, so we're still just starting out, but we'll grow with time. We believe that within 300 years we'll be able to rival the Association's Clock Tower.",
		"n 300 years, huh? It's hard to tell if they're being ambitious or not with that kind of timeframe.",
		"g As I mentioned, we heavily stress safety and peace here. Killing and violence are strictly prohibited. This isn't the Clock Tower. We don't do that here.",
		"g If you have an altercation with someone, please settle it diplomatically. Sparring is allowed, but will be heavily regulated to ensure the survival of everyone involved. Understood?",
		"p Got it.",
		"i R-right!",
		"n Honestly, it's kind of refreshing to see such a strict safety policy. A nice change of pace from the Association's sleep-with-your-eyes-open culture where nonviolence was an unwritten, often-ignored rule more than anything.",

		//Class Demonstration
		"show scene Class_Day with fadeIn duration 1s",
		"wait 1000",
		"show character g normal with fadeIn",
		"g This is one of the classrooms you'll be studying in. Most of the classrooms look like this.",
		"p Looks pretty... mundane. Are all the workshops underground?",
		"show character g sigh",
		"g Unfortunately, we can't really afford any special equipment at the moment. We have some basic lab spaces in another building, but please don't expect anything like Albion.",
		"show character g normal at leftish with fadeIn",
		"show character i normal at rightish with fadeInRight",
		"i Um, can I ask a question? How are the classes seperated?",
		"g Good question, Iris. The curriculum is divided among four specializations and departments. Each student will take the core classes with the students from other departments, but also have classes exclusive to their own department.",
		"g Since we have such a small student population, we're more flexible with your curriculum and you should be able to have an individualized mentorship track in your third year onwards.",
		"p Wait a sec, I never selected a specialization. Heck, I don't even know what they are. What's up with that?",
		"show character g happy",
		"g Don't worry, you have until 5 PM tomorrow to decide. There should be a pamphlet with the information and forms in your rooms already. Just look it over and hand it to me or a Faculty member by then and you'll be fine.",
		"g Shall we move on?",

		//Library Demonstration
		"show scene Lib with fadeIn duration 1s",
		"wait 1000",
		"n Genevieve continues to give us a thorough tour of the campus, though there's honestly not much to look at.",
		"n We visit every notable building, such as the Lab Building or the Gym, but they're all very mundane for a magic school. I do know that the school's supposed to be pretending to be a regular private school on paper, but still...",
		"show character g normal with fadeIn",
		"g And, finally, we have the library, our school's prized location.",
		"p Huh. Surprisingly large.",
		"show character g happy",
		"g We are a school after all. We treasure knowledge above all other commodoties.",
		"show character g sigh",
		"g Well, most of the shelves are just normal books. We only have a few actual magic texts...",
		"p So it's only for show after all.",
		"n After looking around, I can now confidently confirm that Haven is far in stature and status from the dizzying, extravagent dungeons of the Clock Tower.",
		"n It'll probably serve decently enough as a space for tutelage, but its facilities and faculties are a far stretch from the frontier of Magic.",
		"p I don't mean to be rude, but is this school going to be okay? You aren't secretly hiring regular teachers to teach us arts and crafts, are you?",
		"g I understand your concern, but please bear with it. We don't have unlimited funds and we are just starting out. It'll be better by the next generation. I'm sure your heirs will find it quite amazing when it's their turn.",
		"show character g sigh at leftish",
		"show character i eager at rightish",
		"i Well, I think it's really cool, Genevieve! I'm super excited about the next four years here!",
		"show character g happy",
		"g Really? I'm glad to hear that.",
		"g I'm sure you'll learn to love it here too, {{p.f}}! Just watch. After four years, you won't even want to leave.",
		"p Well, I can only hope.",

		"hide character i",
		"hide character g",
		"show character g normal at center with fadeIn",
		"wait 500",
		"g Well, then, are there any other questions before we end today's tour?",
		"p Well...",

		{
			'Choice': {
				'Dialog': 'Do I have a question to ask?',
				'Class': {
					'Text': 'Do I have to go to class?',
					'Do': 'jump Day1_Class'
				},
				'Wi-Fi': {
					'Text': 'Is there Wi-Fi?',
					'Do': 'jump Day1_Wi-Fi'
				},
				'None': {
					'Text': 'None',
					'Do': 'jump Day1_None'
				}
			}
		}


	],

	'Day1_Class': [
		"p Do I have to go to class? What happens if I skip?",
		"show character g surprise",
		"g Eh? Ah, well... I suppose we don't have any rules in place for that.",
		"g Do you not want to go to class and study?",
		"p Not really, just asking. Just thought it'd be good to know.",
		"show character g normal",
		"g This may sound preachy, but I do encourage you to attend class everyday and study as much as you can.",
		"g You aren't a magus if you don't prioritize your studies above all else. Even here, that's true.",
		"n Indeed, the path of the magus is one of obsession. Surpassing all material desires and typical conerns, the solitary magus strips himself of all humanity and solely devotes himself towards the pursuit of knowledge.",
		"n It seems that the ideal of the Magus is still maintained in this anti-Association organization.",
		"n I'm not sure if that's a good thing, though...",
		"jump Dormitory"
	],

	'Day1_Wi-Fi': [
		"p Is there Wi-Fi here?",
		"show character g surprise",
		"g Huh? Well, yes, there actually is. I'm surprised you asked, though.",
		"p Oh? I'm the surprised one. Didn't think a magus school would invest in the internet.",
		"show character g sigh",
		"g The Modern Magecraft Faculty demanded it. They said it was a necessity for magi in the modern era to be able to access as much knowledge as is humanly possible.",
		"p Huh. Well, I won't argue with that since it is convenient.",
		"n Modern Magi, huh. They weren't thought of very highly back at the Clock Tower, but it seems that they have more influence at Haven.",
		"jump Dormitory"
	],

	'Day1_None': [
		"p I don't have anything. Do you, Iris?",
		"hide character g with fadeOut",
		"wait 500",
		"show character i normal with fadeIn",
		"i Nope, not really. I think you did a really great job explaining everything, Genvieve.",
		"hide character i with fadeOut",
		"wait 500",
		"show character g happy with fadeIn",
		"g Thank you. It's always a pleasure of mine to show off the school I'm so proud off.",
		"n Thinking about it, it is weird that the future heir of the clan personally came to pick us up and give us a tour on a day off.", 
		"n I don't know if there's any ulterior motive, but she must be pretty nice to go out of her way for us.",
		"n I should think of a way to thank her sometime in the future.",
		"jump Dormitory"
	],

	'Dormitory': [
		"show scene Dorm_Day with fadeIn duration 2s",
		"wait 1500",
		"centered 12:07 PM, August 30th, 2025",
		"n With the tour over, we retrieve our luggage from the car and drag it over to our final destination for the day: the student dormitory.",
		"n It's a four-story building that looks rather old, not unlike the school building. It seems that all of the students are required to live here at the moment.",
		"show character g normal at leftish with fadeIn",
		"show character i normal at rightish with fadeIn",
		"g Tada! This will be your new home from now on, Midgard Hall.",
		"show character i eager",
		"i Ooooooohhhh!!! Dorms! Co-habitation! I've been wondering what our rooms would be like!",
		"g What's wrong, {{p.f}}? Aren't you excited to see your new home?",
		"p It's hard to get emotional over a place I've never seen before.",
		"g Well, you'll change your tune soon. The dorms are surprisingly comfortable and living with everyone makes everyday fun.",
		"hide character i with fadeOut",
		"hide character g with fadeOut",
		"wait 500",
		"g Now then, for a quick run-through. As you can see, the dormitory has four floors, but the third and fourth aren't in use due to a lack of students. You're not allowed to go up there either, so be careful.",
		"g On the first floor, there's a student lounge, public kitchen, and recreation room that you are free to use as you please. Baths are on all floors, but they're seperated by gender, so be careful.",
		"g Finally, curfew is at 11 PM. We know it might be inconvenient, but please do your best to stay quietly in your room by that time, as to not disturb your fellow students who are trying to sleep.",
		"g That's all. Are there any questions?",
		"show character g normal at leftish with fadeIn",
		"show character i eager at rightish with fadeIn",
		"i Oh, I have a question. Do we have roomates? Please tell me we have roomates!",
		"show character g happy",
		"g Hehe, indeed, you do. It's two people to a room.",
		"p Tch, really?",
		"show character g surprise",
		"show character i upset",
		"g Oh dear, are you not okay with having a roomate, {{p.f}}?",
		"p It's not a big problem... just would prefer not to.",
		"n It's less of a personal preference and more of my habit as a magus. A magus typically hides their true research and abilities from others, so we tend to be wary about our privacy. I'd rather not have to share the private space with someone else.",
		"show character g normal",
		"g I understand how you feel, but that's just how it is. I'm sure that, with time, you'll come to trust your roomate and become comfortable with having them near.",
		"p ... I guess.",
		"p Speaking of which, I also have a question. Can we use magecraft in the dorms?",
		"g Well, it's not strictly forbidden, but please be careful. Remember that you are sharing the building with everyone else and don't break anything.",
		"p Got it.",
		"n It seems I'll still be able to do some nightly training in my room, then. That's good.",
		"g Now then, that concludes everything I have to explain to you. I'm sure you'll be able to pick up the rest as you go on.",
		"g Here are the keys to your room and the room number.",
		"g {{p.f}} {{p.l}} Yggdmillennia. Iris Loveridge Yggdmillennia. From now on, both of you are proud members of this school. Once again, I welcome you to Haven!",

		"show character i happy",
		"n Genevieve hands small envelopes to us with the room number stickered onto them and with the keys inside. Iris and I recieve them graciously.",
		"i Thank you, Genevieve! We'll see you later then-",
		"show character i sweat",
		"i Hmm? That's weird.",
		"n Both Iris and I notice the anomaly at the same time. Both of our key envelopes show the room number 214. In other words, we were given keys to the same room.",
		"p O-oi. Does this mean...?",
		"show character g surprise",
		"g Oh, did I forget to mention it? The two of you will be sharing the same room. You're roomates from now on.",
		"i Wh-wh-wha-!?",
		"p Hold on, hold on. Why are you putting us in the same room? Wouldn't you normally seperate boys and girls?",
		"g Well, we only had two new students this year and it's two people to a room. All the other rooms on the first two floors are filled, so there was no choice.",
		"i Are you serious?",
		"n So that means I really have to share a room with this birdbrain for the next four years? Just when I thought I had finally gotten rid of her?",
		"show character g normal",
		"g You're both adults. I trust you won't do anything you regret and that you'll find a way to work things out between the two of you.",
		"p Tch...",
		"show character i upset",
		"i Hmmm... I guess there's no other option.",
		"show character i happy",
		"i Well, we do already get along, so I suppose this might actually be a turn of good fortune, {{p.f}}. Let's be the best roomies from now on!",
		"show character g happy",
		"g Aww, you two are so cute. In that case, I'll be cheering for you too!",
		"n ... for the first time since defecting from the Association, I contemplate running back home.",
		"jump Unpack"

	],

	'Unpack': [
		"show scene Room_Day with fadeIn duration 2s",
		"wait 2000",
		"centered 12:13 PM, August 30th, 2020",
		"n Lugging our bads up the stairs to the second floor, Iris and I finally reach our new abode for the next four years.",
		"n It's a modest looking room with two beds and two small desks. It's very student-like, so I suppose it's to be expected. In fact, it's actually larger than I had imagined.",
		"show character i eager with fadeInRight",
		"i Wow! Look at this! It's everything I wanted!",
		"n And what exactly was that? A dingy room with no furniture? Cause that's what you got.",
		"i Oh, which bed do you want, {{p.f}}? The one by the windows or the one by the door?",
		"p ... windows.",
		"show character i happy",
		"i Alright, it's all yours!",
		"i Gosh, I'm excited. I don't even know why, this just feels so fun, y'know?",
		"p I don't... I'm just gonna unpack now, okay?",
		"i Good idea! Let's get settled in!",
		"n Where does she get all that energy from?",
		
		"show scene Room_Day with fadeIn duration 1s",
		"wait 1000",
		"centered 12:34 PM, Auust 30th, 2020",
		"n About 20 minutes later, I get up from my open luggage and stretch.",
		"p Alright, I'm done.",
		"show character i sweat with fadeIn",
		"i Huh, already? That was fast.",
		"p I jus took out the essentials. I can do the rest tonight. I'd rather not spend the rest of the sunlight in this room.",
		"p I'm just gonna go for a walk and get a feel for the place. See ya tonight.",
		"show character i upset",
		"i Wait, what about lunch?",
		"p I'll figure something out on my own. Good luck with unpacking.",
		"hide character i with fadeOut",
		"n Giving a curt farewell, I leave my new roomate and my new room.",
		"n Just in case, I put a magic lock on my luggage so she couldn't snoop through it while I was gone. Right now, I still don't trust her, so I'll be a little extra wary and keep as much distance as I can. I don't want to start letting my guard down around her, so I'll purposefully avoid her for a bit to keep things strictly distant.",
		"jump Meet_Lisa"

	],

	'Meet_Lisa': [
		"show scene Lob_Day with fadeIn duration 1s",
		"wait 1000",
		"n Now then... what should I do?",
		"n I made that excuse to create some distance between me and Iris, but I don't actually have any plan for the rest of the day.",
		"n I guess I might as well do good on what I said and actually familiarize myself with my new surroundings. First off, then, should be the dorm itself.",
		"n With that in mind, I walk around aimlessly through the seemingly empty dormitory. Nobody seems to be around at the moment, either out or locked in their rooms. Though with such good weather, it's hard to imagine they're all being shut-ins.",
		
		"show scene Back with fadeIn duration 2s",
		"wait 2000",
		"n After walking for a bit, I discover what seems to be the dorm's backyard. It's a verdant area with some pretty flowers.",
		"n And in this tranquil space, I finally run into someone else.",
		"show character l normal with fadeIn",
		"wait 500",
		"n It's a girl who seems to be doing some laundry while humming a tune. She must be distracted by her tune as she hasn't noticed my presence yet.",
		"n It might be rude to disturb her when she's working. But then again, it might also be rude to watch her and not say anything.",
		
		{
			'Choice': {
				'Dialog': 'What should I do?',
				'Announce': {
					'Text': 'Go and greet her',
					'Do': 'jump Lisa_1'
				},
				'Watch': {
					'Text': 'Just watch her secretly',
					'Do': 'jump Lisa_2'
				}
			}
		}


	],

	'Lisa_1': [
		"n Yeah, it'd be weird to see her and not say anything. I should, at the very least, greet her briefly.",
		"p Good afternoon.",
		"show character l surprise with shake",
		"q Huwwaaahh!?",
		"jump Lisa_3"
	],

	'Lisa_2': [
		"n It wouldn't be good to disturb her. Let's just chill for a bit and watch until she's finished before going to greet her.",
		"n I stay by the doorway, just watching the girl peacefully take down the laundry and place it in the hamper.",
		"n After a brief moment, she finishes, takes a sigh of relief, and turns—",
		"show character l surprise",
		"n —and of course finally notices me nearby for the first time.",
		"show character l surprise with shake",
		"q Huwwaaahh!? Wh-who are you?",
		"jump Lisa_3"

	],

	'Lisa_3': [
		"p Sorry, did I startle you? I didn't mean to disturb you or anything, but I thought I should greet you.",
		"p It's nice to meet you. I'm {{p.f}} {{p.l}}. I'm a new student here from now on. Let me know if you ever need anything.",
		"q ... oh right. You must be the transfer student. That was today, wasn't it?",
		"show character l normal",
		"q Phew, you scared me there for a second. Thought an intruder somehow got in.",
		"p ... out of curiosity, what would you have done if I was an intruder?",
		"show character l smile",
		"q Well, of course, I'd have to punish you. In fact, I nearly round-house kicked you on instinct, when you surprised me.",
		"n Okay, don't sneak up on this girl from behind. Lesson noted.",
		"n While taking a cautionary step back, I notice the laundry hamper next to her and the large heap of sheets in it. That's definitely way more than a single person should have.",
		"n Is she doing laundry for the entire dorm? In that case, she must be one of the caretakers or something. Probably a maid hired by Yggdmillennia or the like.",
		"n Well, that's the logical conclusion but her clothes certainly don't seem maid like... should I ask her?",
		"p So, um, are you one of the workers here?",
		"show character l sly",
		"q Hmm~? What makes you think that?",
		"q Sorry to dissapoint, but I'm a student. Name's Lisa Cadmus Yggdmillenia.",
		"p Oh. My apologies, I just assumed...",
		"l Don't you know what happens when you assume things? You make an ASS out of U and ME.",
		"p Well, in that case, I guess that makes us both asses. Let's call each other 'Ass' from now on as if we were friends for a dozen years.",
		"show character l smile",
		"l Hahaha, that's a good idea. It seems we'll really get along, Ass.",
		"p Likewise, it's nice to meet you, Ass.",
		"l Hahaha, okay, I'm laughing now, but call me that again and you'll regret it.",
		"n What a troublesome woman. I best not get on her bad side.",

		"p Anyways, I was wondering why you were doing so much laundry on your own if you aren't a worker? Do the students here take turns doing everyone's laundry?",
		"show character l normal",
		"l Oh, no, don't worry about that. I just do it for everyone. You can leave your laundry to me from now on, too.",
		"p Is that so...",
		"l Speaking of, do you know what time it is?",
		"p Just before 1 PM, I think.",
		"show character l surprise",
		"l Really? Ah, geez, I lost track of time. I need to start preparing for lunch.",
		"n Lisa makes a hurried expression as she rushes the rest of the laundry into the hamper.",
		"p Then, in that case, let me help. I can carry that hamper back in for you.",
		"l Huh? Seriously?",
		"p Yeah. That hamper looks pretty heavy, so let me take care of it.",
		"p Also you'll be making lunch too after this, right? If you don't mind, I'd like to help with that too.",
		"l Are you sure? I mean, if you want, I won't say no...",
		"p Great. Then, let's get to it.",
		"n While Lisa still seems stunned, I take hold of the hamper and begin carrying it in. It seems that I found something to do today.",
		"jump Lunch"

	],

	'Lunch': [
		'show scene Dining with fadeIn duration 2s',
		"wait 2000",
		"centered 1:18 PM, August 30th, 2025",
		"show character l normal with fadeIn",
		"wait 500",
		"l Lunch time, everyone! Come and eat!",
		"n A loud clanging of pans reverberates through the dormitory as Lisa drums up a ruckus. Moments later, a bunch of students come out of their rooms and head for the dining area. Without even saying thanks, they begin digging in greedily.",
		"n I take the moment to breath a sigh of relief. We sure cooked up a storm for such a short period of time. They say it's not much different cooking for one or many, but dealing with this much is a pain.",
		"p Say, do you cook lunch for everyone everday? There's no cooking duty rotation, is there?",
		"l Hm? Nah, it's just me. Laundry and cleaning too.",
		"p ... are you sure you're not the maid?",
		"show character l smile",
		"l Hahaha, well, I am a maiden in the springtime of her youth. Can't say much about frilly aprons, though.",
		"show character l sly",
		"l What's wrong, tired already? Like I said, you don't have to help me. I'm fine by myself.",
		"p ... nah, it's fine. It's no big deal, really.",
		
		"hide character l with fadeOut",
		"wait 500",
		"show character b normal with fadeIn",
		"wait 500",
		"q Oh, boy, is it time for breakfast, already? I'm famished.",
		"n Suddenly, one student seperates from the entering crowd and comes to greet Lisa. It's a man in slacks with a bed of messy hair, giving off a sloppy but pleasant impression.",
		"hide character b",
		"show character l doubt at rightish",
		"show character b normal at leftish",
		"l It's lunch, not breakfast, Brook. Don't tell me you just woke up again?",
		"b Haha, you caught me. It sure is easy to oversleep when the weather's this good, am I right?",
		"show character b serious",
		"b Hey, who's this fellow? Never seen his mug before.",
		"l This is {{p.f}} {{p.l}}. He's the new transfer student.",
		"p Nice to meet you. I'm {{p.f}}. Let me know if you ever need anything.",
		"show character b normal",
		"b Oh, so you're just the new guy. Hah, for a second there, I thought Lisa brought in her new boyfriend or something.",
		"show character l angry",
		"l ... pervert.",
		"show character b surprise",
		"b Huuh? What about that made me a pervert?",
		"l Your wording made it seem like I was a loose woman. I'm sure you were just trying to tease me in order to draw out a flustered expression or something.",
		"l Also, you were thinking about perverted stuff when you said it.",
		"b How do you know that? Where's your proof? Show me the proof!",
		"show character l sly",
		"l That line is enough. Only a culprit ever says that line.",
		"b Objection! That's circumstantial at best.",
		"l Overruled. Guilty. Sentenced to 20 years.",
		"b 20 years in prison for that!?",
		"show character l smile",
		"l Nah, just death at the age of 20 years.",
		"b You're going to kill me now!?",

		"n They seem to be trading some friendly banter. Judging from how casual it is, they must be decently close.",
		"show character l normal",
		"show character b normal",
		"l Oh, I forgot to introduce you. This is Brook Backinson. He's a second-year in the Department of Material Applications. We're classmates.",
		"b Once again, nice to meet you, man. Let's get along.",
		"p Department of Material Applications? Ah, that's one of the four curriculum tracks, huh? Does that mean you also belong to that department, Lisa?",
		"l Yup. What abou you, {{p.f}}?",
		"p I haven't decided yet. I just learned about it today.",
		"show character b grin",
		"b In that case, you should join Mats with us! It'll be fun!",
		"show character l doubt",
		"l Don't goad him like that. It's an important choice. He should decide after thinking about it properly.",
		"show character b normal",
		"b I know, I know, I was just joshing.",

		"hide character b with fadeOut",
		"hide character l with fadeOut",
		"wait 1000",
		"show character i upset with fadeInRight",
		"wait 500",
		"i Umm... excuse me. I heard something about lunch.",
		"n Suddenly, out of nowhere, Iris pops up while fidgeting.",
		"hide character i",
		"show character l surprise at leftish",
		"show character i upset at rightish",
		"l Woah. Another new face.",
		"i Hi, sorry, I'm the other new student, Iris Loveridge.",
		"i I just heard everyone coming to eat and followed them. Would it be alright if I joined in?",
		"l Ah, well... I'd love to say yes, but I didn't account for your presence, so we might be a portion short...",
		"i Oh...",
		"p It's okay. I knew the smell would lure her here, so I made some extra. Here, Iris.",
		"show character i happy",
		"i Really? Yay! Thanks, {{p.f}}. As expected of my BARF!",
		"p Barf?",
		"i Best Awesome Roomate Forever!",
		"p ... never call me that ever again.",

		"hide character l",
		"show character b normal at leftish with fadeInLeft",
		"b So you're the new girl? Yo, I'm Brook. Let's get along.",
		"show character i normal",
		"i Oh, hello. I'm Iris...",
		"hide character i",
		"wait 100",
		"show character l angry at rightish",
		"l Pervert. Guilty. Sentenced to 20.",
		"show character b surprise",
		"b Just for talking to her!?",

		"jump Afternoon"

	],

	'Afternoon': [
		"show scene Lob_Day with fadeIn duration 2s",
		"wait 2000",
		"centered 4:47 PM, August 30th, 2020",
		"n After lunch, I helped Lisa wash the dishes and the rest of her chores. As expected, her chore load is a damn lot even when divided between the two of us.",
		"n Naturally, as we work together, we end up chatting about meaningless things.",
		"show character l normal with fadeIn",
		"l So, you used to study at the Clock Tower? That's pretty impressive.",
		"p Yeah. That's not a problem, right? I know you guys don't like the Association.",
		"l Don't worry about it. That's true, but it's also because most families are Association defectees to begin with. We won't look down on a fellow outcast.",
		"l Though it is rare for us to get someone from the HQ of Magecraft. As far as I know, there's only one other student at Haven who used to attend the Clock Tower.",
		"p Is that so? Well, I guess that's a relief.",
		"show character l surprise",
		"l Oh, we have to bring these boxes to the school building. They're fragile so don't drop them.",
		"p Got it. Leave it to me.",

		"show scene Courtyard with fadeIn duration 2s",
		"wait 2000",
		"n Carrying some heavy boxes, we leave the dormitory and head over to the school building. On the way, we pass through the courtyard and find a person sitting at one of the tables.",
		"show character m neutral with fadeIn",
		"wait 500",
		"q ...",
		"n It's a black-haired beauty reading a heavy book in the brisk, autumn breeze. It seems someone is actually taking advantage of the good weather after all.",
		"hide character m",
		"show character m neutral at leftish with fadeIn",
		"show character l normal at rightish with fadeIn",
		"l Oh, there you are, Mafuyu. You didn't come to lunch today.",
		"m ... I wasn't hungry.",
		"n The girl named Mafuyu doesn't lift an eye from her book as she responds.",
		"n Lisa puts down her boxes on one of the tables to talk to the girl. I copy her, if only to give my arms some rest.",
		"l Oh, {{p.f}}. Let me introduce you. This is Yukisada Mafuyu, a second-year in the Department of Modern Methods.",
		"l She's the one I told you about earlier, the other student who came from the Clock Tower. Since you are both from the same school, I'm sure you'll get along.",
		"m ...",
		"p It's nice to meet you. I'm {{p.f}} {{p.l}}. Let me know if you ever need anything.",
		"m ... what's that supposed to mean?",
		"p Pardon?",
		"show character m normal",
		"show character l surprise",
		"m 'Let me know if you ever need anything?' Why should I do that? What will you do if I do tell you?",
		"p I'd help you, of course. That's why I'd like you to tell me. I can't help you if I don't know what to help with.",
		"m And what would be the price of this counseling session?",
		"p Nothing at all. I'd help you for free.",
		"m No matter what the request is?",
		"p Of course. I'd have to be a stingy person to offer help and then charge you afterwards.",
		"m I have difficulty believing that.",
		"show character l doubt",
		"l H-hey now, Mafuyu. I know you're wary of the newcomer, but there's no need for this.",
		"l {{p.f}}'s a really good person. He's been helping me with all my chores all day.",
		"m And you think that he did that solely out of the goodness of his heart? That he's some Saint that can't help seeing a girl in distress?",
		"m Whatever they are, it's clear that ulterior motives line his actions. For example, he might be trying to curry your good favor and expect repayment under the guise of 'friendship' later on. Or he may just be trying to attach himself to you since he's new to this school. It's even possible that he just wants to get under your skirt.",
		"m The people who say that they'll do something for free are the last people you should ever trust.",
		"show character l surprise",
		"l H-hey, you're being too rude, Mafuyu. You shouldn't say those kind of things.",
		"p No, it's alright. She's not wrong.",
		"l Huh?",
		"m ...",
		"p I was planning to tell you this later, just in case, but I might as well make it clear now. I'm not helping you out of any good will or kindness, Lisa.",
		"p The truth is, I just like helping people. I don't actually care about their general well-being; I just like the action of helping others.",
		"p As Mafuyu said, I'm not a nice or good person. My actions are completely self-centered and selfish. I only care about myself.",
		"p So, I don't want you to feel gratitutde towards me or to feel indebted to me because I helped you today, Lisa. If anything, I should be grateful that you gave me the chance to help you.",
		"show character m think",
		"wait 1000",
		"show character m normal",
		"m And by admitting to it, you make yourself seem like a more honest, open-hearted person. That's the only avenue open to you to save your image after being exposed.",
		"p And by pointing that out, you reinforce my supposed shadiness and your own theory, so that my confession doesn't undercut your accusation of me.",
		"p By your logic, does it not follow that you aren't exposing my faults out of good will for Lisa either? Surely, you won't claim that you're trying to protect her from a conman out of the kindness of your heart.",
		"p The only reason you'd say this out loud is to prove your own assumptions correct and show how smart you are for being right, no?",
		"show character m think",
		"wait 1000",
		"show character m pout",
		"m ... you might be more clever than I thought.",
		"p We just met and you already had an opinion on my intelligence? Are you the type who judges book on their cover or...",
		"p Do you just think everyone except you is an idiot?",
		"show character m normal",
		"m Not any more than you do. At the very least, I don't pretend like I don't.",
		"show character l doubt",
		"l ... are all Clock Tower magi like this?",
		"p Basically.",
		"show character m neutral",
		"m Pretty much.",
		"n The Clock Tower is basically built off of elitism and stubborness, after all. Admitting that you're wrong or that someone else is better than you are the hardest things for a CT Magus.",
		"p Anyways, we should get going. We need to get these to the school building, right, Lisa?",
		"show character l surprise",
		"l Huh? Oh, yeah.",
		"n We pick our boxes back up and head off, bidding farewell to the girl we crossed on our path.",
		"p Talk to you later, Mafuyu.",
		"m Please don't.",

		"hide character m",
		"hide character l",
		"wait 1000",
		"show character l normal with fadeIn",
		"l Sorry about that. I wasn't expecting her to just go off on you like that.",
		"p Is she always like that to everyone?",
		"l She is pretty distant, yeah. I thought maybe it was cause she's from the Clock Tower so she can't connect with the others. That's why I thought you two would get along.",
		"l Guess I was wrong, though. That bridge has probably been burned.",
		"p No, actually, I found that quite refreshing.",
		"show character l surprise",
		"l Huh?",
		"p This might just be me, but that conversation wasn't too unenjoyable. I can appreciate that level of distance and wariness in a magus, too.",
		"show character l doubt",
		"l Seriously?",
		"show character l angry",
		"l ... you two just might be made for each other.",
		"jump Bush"

	],

	'Bush': [
		'show scene Hall_Day with fadeIn duration 2s',
		"wait 2000",
		"centered 5:29 PM, August 30th, 2020",
		"show character l normal",
		"l All right, that's everything. Thanks a lot, {{p.f}}.",
		"p Like I said, you don't need to thank me. I'm just doing this because I want to.",
		"show character l smile",
		"l Then, there's no need to reject my thanks. I'm just doing it because I want to.",
		"p Hm...",
		"p Anyways, is that really all? Do you have no other chores for the day?",
		"show character l normal",
		"l Nope. Well, I have to make dinner, but it's a bit early for that, since we had a late lunch.",
		"l I'm gonna take a bit of a break for now; you should too. When it's time to cook, I'll call you.",
		"p Okay then. Let me know if you need anything.",
		"show character l sly",
		"l You really will do anything I ask for, huh?",
		"p To the best of my abilities. Unfortunately, I can't grant you world domination, make you immortal, or defeat the Saiyans heading to Earth, just yet.",
		"l You should be careful. Or else, a bad girl will take advantage of you.",
		"p It's not taking advantage of me if I want it. So there's no need to worry about that.",
		"show character l doubt",
		"l You really do have an answer to everything, huh?",
		"show character l normal",
		"l Well, that's enough prodding for today. I'm gonna head out for a bit. See ya later.",
		"p Okay. Bye.",

		"show scene Courtyard with fadeIn duration 1s",
		"wait 1000",
		"n Bidding farewell to Lisa, I head back to the dorms with nothing better to do. Might as well take this chance to finish unpacking.",
		"n I pass through the courtyard on my way there. Mafuyu's no longer here. She must've left shortly after our conversation.",
		"n In her place, though, is a peculiar, barely visible sight. There seems to be someone hiding in one of the bushes, with only the top of their head barely sticking out.",
		"n Based on the hair, that's... Iris?",
		
		"show character i upset with fadeIn",
		"i ...",
		"i Mnnn..... grrr........ it's not coming out...",
		"hide character i with fadeOut",
		"n She doesn't seem to have noticed me as she's preoccupied with whatever business she has.",
		"n What is she doing? She's just crouching down in the bushes and making groaning noises as if exerting some sort of effort. Her body's hidden under the bush, so you can't see what she's doing but it seems strenuous...",
		"n Wait. That stance and those sounds... could it be?",
		"i I have to hurry before someone passes by...",
		"i Ughhhhh... there we go. It finally came out. Today's sure was big...",
		"show character i upset with fadeInUp duration 1s",
		"n She proceeds to stand, pulling up her underwear with her.",
		"i Phew. Good thing nobody was around. I can't exactly show this to anyone else...",
		"p ... yo.",
		"show character i sweat",
		"i Awa!? {{p.f}}!? Wh-wh-when did you... Y-you didn't see anything right?",
		"n Hmm, the gentlemanly thing would probably be to pretend I didn't see anything. These matters are delicate after all, so let's be nice.",
		"p Of course, don't worry. The bushes were in the way so I wasn't able to see any of your defecation.",
		"i Eh!? N-no, that's not what was I doing!",
		"p Then what were you doing?",
		"i Th-that's...",
		"n She avoids my eyes and doesn't answer. So I hit the mark after all.",
		"p Listen, Iris. I know your memory's bad, but if you can't find the toilet, it's okay to just ask other people for directions.",
		"show character i tear",
		"i I told you, that's not what it is!",
		"n She seems upset. And here I was, just trying to be considerate.",
		"p Anyways, just make sure you clean up after yourself. If you need help getting to the toilet, you can just call me next time.",
		"i Geez, just leave me alone.",
		"hide character i with fadeOutLeft",
		"n She runs off before I can say another word.",
		"n I briefly glance at the now-defiled bush she left behind and decide not to look inside, lest I see something that will ruin my appetite for tonight.",
		"n Just what was that whole thing about, anyways?",
		"jump Assault",


	],

	'Assault': [
		"show scene Campus_Night with fadeIn duration 2s",
		"wait 2000",
		"centered 9:03 PM, August 30th, 2020",
		"n After dinner, I helped clean up and wash the dishes with Lisa, before going on a night walk under the guise of burning some calories.",
		"n The night air feels cool and refreshing, reminding me of the sea breeze from the morning. I walk around the campus a bit, just taking in the scenery and counting how many people are out and about like me.",
		"n Eventually, I come to clearing with no one around except the stars in the sky. Tranquil as the moon, I sigh and turn around.",
		"p ... okay, there's no one here. You can come out now.",
		"show character t serious with fadeIn duration 2s",
		"wait 2000",
		"q ...",
		"n A girl comes out of the shadows and glares at me with clear hostility.",
		"p Did you think I didn't notice you stalking me all day? What do you want?",
		"q ... my name is Tania Umbridge. You are the new student from the Clock Tower, right?",
		"p That's right. I'm {{p.f}} {{p.l}}. Let me know if you ever need anything.",
		"t Fight me.",
		"p ... why?",
		"t The Clock Tower has the strongest magi in the world. You're also strong, right?",
		"p Well, that is true, but... isn't fighting banned here?",
		"t ...",
		"n She's serious. It doesn't seem like the rules matter to her.",
		
		{
			'Choice': {
				'Dialog': 'What should I do?',
				'Announce': {
					'Text': 'Agree to fight her',
					'Do': 'jump Tania_1'
				},
				'Watch': {
					'Text': 'Refuse to fight',
					'Do': 'jump Tania_2'
				}
			}
		}

	],

	'Tania_1': [
		"p Fine. If that's what you want, I'll help you.",
		"p On one condition: no killing. I'm not about to get in a death match on my first day here.",
		"t ... understood.",
		"t In that case, prepare yourself. I am the 3rd generation heir of the Umbridge family. On the honor of my lineage, I will defeat you!",
		"jump Tania_Fight"

	],

	'Tania_2': [
		"p I refuse. I'm a new student, so I can't exactly go breaking the rules on my first day.",
		"p If you really wanna have a go at it, we can have a spar later with all the proper regulations.",
		"t I don't think you understand your place.",
		"t I wasn't asking politely!",
		"jump Tania_Fight"

	],

	'Tania_Fight': [
		"hide character t with fadeOut duration 0.5s",
		"n Suddenly, Tania rushes at me and draws out a dagger from her cloak.",
		"n Is that her Mystic Code? Is it an amplification type or a conceptual weapon? No time to analyze, gotta make a move.",
		"t Take this!",
		"n She throws the dagger at me with violent intent.",
		"n But it's slow and not very accurate. I easily dodge it by jumping back, and it lands harmlessly in the ground in front of me-",
		"show background Campus_Night with shake duration 1s",
		"p Guh!",
		"n A sharp pain abruptly hits my chest. The feeling is comparable to getting stabbed by a knife.",
		"n How? I dodged the dagger, so how did she still hurt me? There don't seem to be any external wounds in my chest, but this pain is real.",
		"show character t serious with fadeIn duration 0.5s",
		"t There's more where that came from!",
		"hide character t with fadeOut duration 0.5s",
		"n She pulls out two more daggers and throws them.",
		"n However, there's no need for me to dodge since they're not aimed at me. Both daggers land on the ground next to the original blade-",
		"show background Campus_Night with shake duration 1s",
		"p Guaaah!",
		"n Once more, sharp pains strike my chest. This time, I feel two distinct pains in my chest.",
		"n Is that her magecraft? If her weapon hits the ground, I get hurt? No, that's too arbitrary; there has to be some clearer rule...",
		"n I quickly look around the area for any clues and my eyes catch sight of the street lamp just behind me. I look back and forth between it and the daggers on the ground to confirm my hunch.",
		"show character t serious with fadeIn duration 0.5s",
		"p I get it. It's my shadow.",
		"n In some cultures, the shadow is considered a reflection of the soul. Thus, if you attack the shadow, you attack their soul. That is the basis of her magecraft.",
		"t You figured it out quickly. As expected of someone from the Clock Tower.",
		"t But it's already too late. I win!",
		"hide character t with fadeOut duration 0.5s",
		"n Tania pulls out a final dagger and charges at me. Instead of throwing it, it seems she's intending to plunge it directly into my chest.",
		"n Oi, oi, what happened to the no-killing rule? Is this chick insane?",
		"n I try to quickly leap out of the way, but my feet suddenly don't move. Could it be that pinning the shadow also pins the target in place too?",
		"n In that case, I can't dodge any longer. I have no choice, but to counter-attack.",
		"p Haaahh...",
		"n Taking a deep breath, I bring my magic circuits to life. Energy flows through every part of my body as I ready my counter blow.",
		"n Tania doesn't seem to notice it and continues chargin at me blindly, assured of her victory.",
		"show character t normal with fadeIn duration 0.5s",
		"t I did it. I beat one of the elite!",
		"n She makes a final leap towards me, right into the counter attack I've secretly prepared!",
		"show scene rgb(255,255,255) with fadeIn duration 1s",
		"wait 2000",
		"show scene Campus_Night with fadeIn duration 1s",
		"wait 1000",
		"n Suddenly, a bright light cuts through the darkness, interrupting the fight.",
		"n The light erases my shadow for an instant and I regain my movement, allowing me to dodge the dagger at the last moment and retract my counter attack.",
		"show character t serious with fadeIn",
		"t Who's there!?",
		"hide character t with fadeOut duration 0.5s",
		"wait 500",
		"show character g normal with fadeIn",
		"wait 500",
		"g Sorry. Am I interrupting something?",
		"n Oh, shit. The one worst person to see us fighting has shown up.",
		"hide character g",
		"wait 500",
		"show character g normal at rightish with fadeIn",
		"show character t surprise at leftish with fadeIn",
		"g Perhaps I was seeing wrong, but it almost seemed like the two of you were having a fight, even though those are explicitly banned. What could be the meaning of that?",
		"t Th-th-that's...",
		"g You're not going to try and tell me you were having a friendly bout, were you? Those weren't the kind of attacks you use during a spar, Tania. Would you mind explaining?",
		"t Ummm...",
		"n Tania quickly glances at me. If I wanted to, I could easily discredit any excuse she has and honestly explain how she attacked me.",

		{
			'Choice': {
				'Dialog': 'What should I do?',
				'Announce': {
					'Text': 'Explain what happened',
					'Do': 'jump Tania_3'
				},
				'Watch': {
					'Text': 'Cover for Tania',
					'Do': 'jump Tania_4'
				}
			}
		}

	],

	'Tania_3': [
		"hide character g with fadeOut",
		"hide character t with fadeOut",
		"n I calmly explain to Genevieve exactly what happened. All the while, Tania pouts like a child caught with their hand in the cookie jar.",
		"show character g sigh at rightish with fadeIn",
		"show character t avoid at leftish with fadeIn",
		"g I see, so that's what happened.",
		"t ...",
		'jump Assault_End'
	],

	'Tania_4': [
		"hide character g with fadeOut",
		"hide character t with fadeOut",
		"n I decide to cover for Tania and tell Genevieve that we were honestly just sparring. She was interested in my abilities and I agreed to have a practice match against her.",
		"show character g sigh at rightish with fadeIn",
		"show character t avoid at leftish with fadeIn",
		"g I see... you are very nice, {{p.f}}. But there's no need to lie for her sake. I can tell what actually happened.",
		"t ...",
		"n It seems your fib was seen through easily.",
		"jump Assault_End"

	],

	'Assault_End': [
		"show character g normal",
		"g I'm sorry you got dragged into this {{p.f}}. Don't worry, I know that you aren't at fault here.",
		"g Tania. Go back to your room immediately. We'll talk about this tomorrow.",
		"t ... okay.",
		"hide character g with fadeOut",
		"hide character t with fadeOut",
		"n The shadow mage meekly slunks away, in sharp contrast to the vigor and hostility she showed before.",
		"show character g normal with fadeIn",
		"g Once again, sorry about that, {{p.f}}. She has her reasons, but that girl really has a thing against magi from the Clock Tower. She's even attacked Mafuyu before.",
		"g I should've known she'd try again with you. It was just good luck that I happened to be passing by and stumble upon you two.",
		"p It's fine. Nobody got hurt and that's all that matters.",
		"show character g happy",
		"g Haha, not quite. You don't have to act tough and hide your wounds. Let me heal you up as an apology.",
		"show scene rgb(255,255,255) with fadeIn duration 1s",
		"wait 1000",
		"show scene Campus_Night with fadeIn duration 1s",
		"wait 1000",
		"n With a flash of light, all the pain in my body is washed away. I'm fully healed done to even any itches or muscle pain in my body.",
		"n That's pretty high-level White Magic. She's good. Really good.",
		"show character g normal with fadeIn",
		"g All right, why don't we both call it a night, before something else happens? Get some good rest tonight, {{p.f}}.",
		"p R-right...",
		"hide character g with fadeOut",
		"n Following her instructions, I head back to the dorms and try to put everything that just happened behind me.",
		'jump Sleep'
	],

	'Sleep': [
		"show scene Room_Night with fadeIn duration 2s",
		"wait 2000",
		"centered 10:32 PM, August 30th, 2020",
		"n I plop onto my bed feeling, surprisingly exhausted.",
		"n Today was a real doozy, and I'm honestly ready to just clock out for the day.",
		"n Things to do before I snooze... oh, right, I need to choose my department.",
		"n I find the pamphlet Genevieve mentioned in my desk and begin examining it. As she mentioned, there are four departments/curriculums to choose from.",
		"n Witchworks, the Department of Material Applications. This Department focuses on the study of the magical properties of various materials and their application in magecraft. Related subjects include Minerology, Zoology, and Botany. Students studying this will graduate with a vast understanding of the natural world and its plentiful resources. Other featured courses include Resource Economics and Mystic Code creation.",
		"n Forvedge, the Department of Spirits and Apparitions. This Department focuses on the study of spirits and the spiritual realm. Spiritual summoning, invocation, evocation, communication, and contracting are just some of the subjects in this department. Students studying this will graduate with a deep understanding of the spiritual and be able to command it with practiced ease.",
		"n Grassroots, the Department of Global Foundations. This Department focuses on the study of popular Thaumaturgic Foundations across the world. Runes, Kaballah, Witchcraft, and even oriental magecraft are studied in this Department. Students in this department will have a thorough knowledge of the many magecraft schools as well as their underlying cultures, granting them a broad familiarity with many global concepts that can be applied to their magecraft.",
		"n Heresy, the Department of Modern Methods. This Department focuses on the adaptation of traditional magecraft techniques into a modern context. Blending science and magecraft into one, students will discover new ways to evolve their craft alongside the progression of the human race and graduate with not only an intimate knowledge of science, but also how it relates to their mysteries.",
		"n Those are the four Departments that I have to choose from. Honestly, it's not an easy choice.",
		"n Guess I'll sleep on it. I might come up with a good idea in my dreams.",

		"show character i normal with fadeIn",
		"i Going to bed?",
		"p ... yeah. You?",
		"show character i happy",
		"i Same. I'm tired. Let's catch some z's.",
		
		"show scene Room_Dark with fadeIn duration 1s",
		"wait 1000",

		"n The lights are turned off and both Iris and I curl up in our beds.",
		"i Hey, mind if I ask you something?",
		"p ... what?",
		"i Why'd you decide to join Yggdmillennia?",
		"p ... what about you?",
		"i Well... I guess I just had nowhere else to go.",
		"i My Master, the one who taught me magecraft, passed away. And the Association confiscated all his belongings, so I was left with nothing.",
		"i They wouldn't take me in either, so I was completely on my own. This place was basically the only one that would accept me.",
		"p I see...",
		"i That's why I'm curious. You were at the Clock Tower, already, right? That's basically the top of the mountain. So why would you climb down here? What made you throw it all away?",
		"p ...",
		"p ... disgust.",
		"i Huh?",
		"p I couldn't stand it anymore. It was just too revolting.",
		"i Wh-what does that mean?",
		"p ...",
		"n Once more, I decide to ignore Iris and just delve deeper into my mattress.",
		"n I shouldn't have answered. Now, I'm gonna end up dreaming about shit I'd rather not.",
		"n I don't know what's in store for me in the future. I still don't know what to make of my past. But in the present, I'm here.",
		"n From now on, this is my new life.",
		"n This is my Magician Raising Project.",

		"show scene rgb(255,255,255) with fadeIn duration 5s",
		"wait 5000",
		"centered Chapter 1 End",
		"end"
	]

});
