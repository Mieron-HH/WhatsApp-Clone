import { Conversation, Agent } from "@/constants/Interfaces";

const conversations: Conversation[] = [
	{
		id: "t_d004c097-424d-45d4-8f91-833d85c2da31",
		user: "TDKMS",
		user_profile: require("@/assets/images/users/david-goggins.jpg"),
		last_conv: "13:08",
		content: [
			{
				message:
					"Did you know that the University of Iowa's locker room is painted pink? I wonder why?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I think I did hear something about that.  I imagine it is an attempt to psych the other team out.",
				agent: Agent.Agent2,
			},
			{
				message:
					"So, it would be in the visiting team's locker room but not their own?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Right.  Teams do all kinds of things to bother the competition. I've heard of teams having heated benches in the winter for themselves but not for the visitors.",
				agent: Agent.Agent2,
			},
			{
				message:
					"I would hate a cold bench. Then again, I wouldn't want to be some place that cold or watching football.",
				agent: Agent.Agent1,
			},
			{
				message:
					"I'd rather watch it inside where it's warm.  Have you heard about the Georgia Tech-Cumberland game of 1916?",
				agent: Agent.Agent2,
			},
			{
				message: "No, what happened in that game?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Georgia Tech defeated Cumberland but here's the thing, they defeated them by a score of 222-0!",
				agent: Agent.Agent2,
			},
			{
				message: "That is insane. How could that even happen?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I don't know but it did.  It's the highest scoring game in history.",
				agent: Agent.Agent2,
			},
			{
				message:
					"I'm sure. I don't even watch much and I couldn't imagine that score. I wonder if most people left or were they curious to see how high it would go?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I guess it depended on what team you were pulling for.  To me, it's surprising that the highest scoring game was in college football and not professional.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Maybe it is because some are not as good in college so they may be playing against someone not on their level.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Good point.  Professional does have a player that has never fumbled the ball.",
				agent: Agent.Agent2,
			},
			{
				message: "I've heard that. Wasn't it a Patriot player?",
				agent: Agent.Agent1,
			},
			{
				message:
					"It was. It was a running back by the name of Benjarvus Green Ellis.",
				agent: Agent.Agent2,
			},
			{
				message:
					"That is an interesting name. It's like he has a lot of names.",
				agent: Agent.Agent1,
			},
			{
				message: "i guess so.  Do you watch espn?",
				agent: Agent.Agent2,
			},
			{
				message:
					"No. I don't have regular cable. I use a ROKU and I think you would have to pay extra for ESPN. I didn't watch it when I did have cable though.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Oh, I was going to tell you about them winning an emmy but that's okay.  Well, do you watch or have you watched pokemon?",
				agent: Agent.Agent2,
			},
			{
				message:
					"No, I haven't watch pokemon. My sons use to play with the when they were little. Now they use their phones looking for pokemon in the neighborhood. It is funny.",
				agent: Agent.Agent1,
			},
			{
				message:
					"That is funny.  Pokemon is pretty popular and has been for a while now  They have over 750 tv episodes alone.  Well, I have to go now.  It's been nice chatting with you!  Have a great day!",
				agent: Agent.Agent2,
			},
		],
	},
	{
		id: "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
		user: "Jordan Peterson",
		user_profile: require("@/assets/images/users/jordan-peterson.jpg"),
		last_conv: "09:33",
		content: [
			{
				message: "What do you think about Keith Jacksons death?",
				agent: Agent.Agent1,
			},
			{
				message:
					"It's sad. I wonder how many people grew up hearing his voice?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I imagine this number in the millions taking into account he had a 54 year broadcasting carreer, so sad, but he was old.",
				agent: Agent.Agent1,
			},
			{
				message: "I like that he used this phrase alot Whoa, Nellie!",
				agent: Agent.Agent2,
			},
			{
				message:
					"That was a good phrase I liked it as well, did you see the beer comercial, the one in which he used this phrase?",
				agent: Agent.Agent1,
			},
			{
				message: "I didn't. I did see the ABC would not let him retire at 70!",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah I think he ended his carreer in 2006, he got lured and decided to stay, he had a great voice.",
				agent: Agent.Agent1,
			},
			{
				message:
					"He was also a marine. Looks like he had been calling games since he was young. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Wow this guy sure is full with suprises, he didnt only call football games but also pro basketball games as well as other sports.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Crazy busy it seems. He didn't say anything when Woody Hayes punched a clemson player either!",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah I heard he was criticized because of this, wonder why he did that, maybe he had it coming. ",
				agent: Agent.Agent1,
			},
			{
				message: "I don't think he saw the punch. He also won an Emmy!",
				agent: Agent.Agent2,
			},
			{
				message: "Do you happen to know why he won the emmy?",
				agent: Agent.Agent1,
			},
			{
				message:
					"apparently for the work he did calling the games. He was inducted into the sportscasters hall of fame too.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah I can see why, the guy has a big resume its sad that his wife and children are left behind, as well as three grandchildren, they must be crying a lot.",
				agent: Agent.Agent1,
			},
			{
				message:
					"probably so. Snoop dogg wrote a fight song for his son's high school football team.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Thats nice from Snoop Dogg, can you tell me more about that song?",
				agent: Agent.Agent1,
			},
			{
				message:
					"no, it doesn't say anything more about it. Sorry. I can tell you this though. The highest paid across all u.s. department of defense employees are three football coaches of the service branch teams",
				agent: Agent.Agent2,
			},
			{
				message:
					"Oh I see I will have to google it then, and they must have a good salary then, the inventor of basketball was a bad coach.",
				agent: Agent.Agent1,
			},
			{
				message:
					"14 of the world's 25 largest stadiums belong to american college football teams! I guess it is a pretty popular sport.",
				agent: Agent.Agent2,
			},
			{
				message:
					"It is! I love it, well I love all sports, and theres also a basketball court on the US supreme court building.",
				agent: Agent.Agent1,
			},
		],
	},
	{
		id: "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
		user: "Robert Kiyosaki",
		user_profile: require("@/assets/images/users/robert-kiyosaki.jpg"),
		last_conv: "Yesterday",
		content: [
			{
				message:
					"Do you watch or keep up on much basketball?It's definitely a team sport I didn't play much of ",
				agent: Agent.Agent1,
			},
			{
				message:
					"I watch it from time to time as I enjoy it. do you have a favorite player?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I haven't really had a favorite since Michael Jordan. The guy who invented the sport was a coach at the University of Kansas, and the only losing one at that",
				agent: Agent.Agent1,
			},
			{
				message: "Go figure. do you know who kareem abdul-jabaar was?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I heard he was good at dunking. It was banned from college basketball for over ten years from how frequently he used it",
				agent: Agent.Agent1,
			},
			{
				message:
					"yeah so strange. do you know what the nz basketball team is called?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Do they have an official name, or are you referencing the nickname Tall Blacks?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yeah I am not too sure but that is certainly what they are called",
				agent: Agent.Agent2,
			},
			{
				message:
					'Apparently the Supreme Court enjoys a game of basketball too. On the top floor of the building they shoot hoops at what has been called "the highest court in the land."',
				agent: Agent.Agent1,
			},
			{
				message: "Good for them, how handy to play there at work. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Many of my friends growing up were big basketball and footballs fans. The highest paid state employee in 39 of the 50 states coaches one of those two states at the college level",
				agent: Agent.Agent1,
			},
			{
				message:
					"I guess it pays to be a coach then. the players themselves also get paid quite a bit too. do you listen to the radio much?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I don't, actually, but I use other things that utilize radio waves. It's pretty crazy how the sound can be extracted and transformed over miles",
				agent: Agent.Agent1,
			},
			{
				message: "Actually if you turn it to am you can catch Jupiter's storms",
				agent: Agent.Agent2,
			},
			{
				message:
					"Those are some strong storms! Considering how many artists are from Canada, I wouldn't mind tuning into stations that have to play at least 40% Canadian music by law",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yes very true. do you know how soldiers used to make radios during WWII?",
				agent: Agent.Agent2,
			},
			{
				message:
					"From what I remember, all it would take is a pencil and razorblade, though I'm not sure how it would make sound",
				agent: Agent.Agent1,
			},
			{
				message:
					"I do not even know what channels they would be able to listen to",
				agent: Agent.Agent2,
			},
			{
				message:
					"If they were in Europe, it would be interesting if they could pick up Finnish stations. One of them has a new program in classical Latin",
				agent: Agent.Agent1,
			},
			{
				message: "The one that gives the news in latin right?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yes. That would be an interesting program. I wonder if episodes are available online like classic radio dramas are",
				agent: Agent.Agent1,
			},
		],
	},
	{
		id: "t_c0f787a2-1a4a-47c3-95aa-50b5567504e8",
		user: "Donald J. Trump",
		user_profile: require("@/assets/images/users/donald-trump.jpg"),
		last_conv: "Yesterday",
		content: [
			{
				message: "Hi are you a football fan?",
				agent: Agent.Agent1,
			},
			{
				message: "Hi, no not really.  Are you?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I watch it during the season because I don't have anything better to do.  Especially for the Monday and Thursday night games.",
				agent: Agent.Agent1,
			},
			{
				message:
					"I get that, especially when there is only 11 minutes of action in a game.  I guess the rest is commercials?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Isn't that crazy that it's such a short amount of time for something they drag out of 3 hours?",
				agent: Agent.Agent1,
			},
			{
				message: "I know! They sure do milk it for all its worth.  ",
				agent: Agent.Agent2,
			},
			{
				message:
					"ESPN won an emmy for creating the superimposed yellow first down line on tv.  That has been a good addition to watching games.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yeah, that was a good addition. Can't believe that Benjarvus Green-Ellis never fumbled.  Amazing!",
				agent: Agent.Agent2,
			},
			{
				message:
					"That's an incredible stat to have!  The average lifetime earnings of an engineer is higher than the average lifetime earnings of an NFL or MLB player.  Probably due to having longer careers.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yeah, that's what I would think.  NFL careers are probably pretty short on average due to injury, and it is really hard to get to the majors and stick there long enough to make any serious money",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yes.  Did you know that there is no written rule that prevents females from playing in the NFL?  Maybe we'll see on soon?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Maybe we will!  That would help boost ratings, I would think.  Maybe then they'll start letting the Saint's cheerleaders eat in the same restaurants as the players.  What a stupid rule!",
				agent: Agent.Agent2,
			},
			{
				message: "That is an odd rule for sure!  Kind of dumb.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Do you a cat?  They are amazing creatures.  One is a mayor in Alaska!",
				agent: Agent.Agent2,
			},
			{
				message:
					"I have one outside.  Yes they are.  I would like to see the cat cafes they have in Japan.  Do you know how those work?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yes!  They can pay by the hour to play with cats and have drinks. Seems like a cool place!",
				agent: Agent.Agent2,
			},
			{
				message:
					"I agree!  When a cat reaches the age of 15 they have usually spent 10 of those years sleeping!",
				agent: Agent.Agent1,
			},
			{
				message:
					"That's a life well lived lol.  Cats can also co-author physics papers!",
				agent: Agent.Agent2,
			},
			{
				message:
					"What?  That is crazy!  lol  There is a cat named Stubbs who is the mayor of a town called Talkeetna in Alaska!  How does that work?  lol",
				agent: Agent.Agent1,
			},
			{
				message:
					"I wonder who that cat ran against?  It would've been funny if the other candidate was a dog!",
				agent: Agent.Agent2,
			},
			{
				message:
					"Hahah Yes it would be!  I've had a good time chatting with you!",
				agent: Agent.Agent1,
			},
			{
				message: "Me too.  Have a great day!",
				agent: Agent.Agent2,
			},
		],
	},
	{
		id: "t_50e092b4-c009-4c92-8756-4b334e26db38",
		user: "Andrew huberman",
		user_profile: require("@/assets/images/users/andrew-huberman.jpg"),
		last_conv: "Saturday",
		content: [
			{
				message: "Hi, how are you?",
				agent: Agent.Agent1,
			},
			{
				message: "well thanks! Do you know anything about keith jackson?",
				agent: Agent.Agent2,
			},
			{
				message:
					'I do, I love college football and can hear him say "Whoa Nelly!". What about you, are you familiar with him?',
				agent: Agent.Agent1,
			},
			{
				message:
					'Me as well. Im a huge Michigan fan so he is really memorable with his "Hello Heisman" call',
				agent: Agent.Agent2,
			},
			{
				message:
					"Nice. I feel like he was on a lot of Michigan calls, wasn't he?",
				agent: Agent.Agent1,
			},
			{
				message:
					'Yeah we was. When he retired in 1998, the Michigan marching band spelled out, "THANKS KEITH.',
				agent: Agent.Agent2,
			},
			{
				message:
					"That's such a nice gesture. For the longest time he was the voice of college football. Did you go to Michigan?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I did not just a big fan. My favorite player of all time attended there so It was how I became a fan",
				agent: Agent.Agent2,
			},
			{
				message: "Who is your favorite player of all time?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Charles Woodson. Keith Jackson was also announcing that game when he cemented his Heisman against Ohio St",
				agent: Agent.Agent2,
			},
			{
				message:
					"Nice. I liked Woodson. I went to Illinois so I do not have as much to cheer for as you do. I do remember getting stomped by michigan many times and then hitting the bars after...",
				agent: Agent.Agent1,
			},
			{
				message:
					"Rough haha. Keith Jackson was park of a lot of memorable games! Including when Woody Hayes punched a player",
				agent: Agent.Agent2,
			},
			{
				message:
					"I can't believe he was criticized for that call. He went back and clarified on the call.",
				agent: Agent.Agent1,
			},
			{
				message:
					"I know right! At least he was still able to an Emmy and be inducted into two sportscasting halls of fame",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah, there are a few iconic voices and he is one, along with Musberger, Costas, and Al Michaels.",
				agent: Agent.Agent1,
			},
			{
				message: "All great voices. Would be good for radio as well as tv",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah. When reading, I did not know he did so many sports. That's a ton of calls.",
				agent: Agent.Agent1,
			},
			{
				message: "I know! Even the Olympics",
				agent: Agent.Agent2,
			},
			{
				message:
					"He went to Russia to call rowing during the cold war too. That takes guts.",
				agent: Agent.Agent1,
			},
			{
				message: "Oh wow I did not know that! Thats some Rocky 4 stuff",
				agent: Agent.Agent2,
			},
			{
				message: "Nice chatting with you! Have a great day!",
				agent: Agent.Agent1,
			},
		],
	},
	{
		id: "t_36066ee7-42fb-413c-bce1-25a6933b938a",
		user: "Curtis Jackson",
		user_profile: require("@/assets/images/users/curtis-jackson.png"),
		last_conv: "Saturday",
		content: [
			{
				message: "Have you heard of Keith Jackson?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yes, he is the voice of college football right?  Do you know what broadcast he was on?",
				agent: Agent.Agent2,
			},
			{
				message:
					"He did Saturday afternoon broadcasts on ABC. Seemed he had a long fulfilling life. He was 89.",
				agent: Agent.Agent1,
			},
			{
				message:
					"I do recall him covering a wide variety of sports for radio and television.  Do you recall what he would call the linemen guards?",
				agent: Agent.Agent2,
			},
			{
				message:
					'He had a lot of funny terminology. Like a "bantam rooster" and "Whoa Nellie!"',
				agent: Agent.Agent1,
			},
			{
				message:
					"He was a very funny and interesting man.  Something else that is funny is the University of Iowa painted the visiting locker room pink.  I wonder what the visiting football teams thought about that.  ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah it was probably before pink became popular for professional football players to support breast cancer",
				agent: Agent.Agent1,
			},
			{
				message: "Do you watch a lot of football?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Not really. How about you? I know that football has really grown in popularity. In the 60s, top bowlers made twice as much as football stars.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yes.  I am a big fan.  I love researching about the history of football.  I just read the other day that in 1916, the highest score ever in a football game was 222 to 0.  Georgia Tech vs. Cumberland.  We don't see such a high number like this.  ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Wow! Probably would not have been the case if Benjarvus Green Ellis was on their team. He has never fumbled the ball.",
				agent: Agent.Agent1,
			},
			{
				message:
					"That's right.  Green Ellis is a rare player for sure just like Kareem Abdul.  His dominant use of the dunk got the shot banned from college basketball for over a decade!",
				agent: Agent.Agent2,
			},
			{
				message:
					"That's funny! I'd love to watch play basketball in the us surpeme court building-it's called \"the highest court in the land\"",
				agent: Agent.Agent1,
			},
			{
				message: "Really?  What teams usually play there?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I think it's just for the employees at the building. Wonder if any judges play. Hmmm....",
				agent: Agent.Agent1,
			},
			{
				message: "Do you know who the inventor of basketball is?\n",
				agent: Agent.Agent2,
			},
			{
				message:
					"I think that's James Naismith and he is the only losing coach in the University of Kansas's history.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Well its better to be known for that than the name of the New Zealand basketball team.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Are there any famous college football or basketball coaches? In 39 out of 50 states, the highest paid state employee is iether a college football or basketball coach",
				agent: Agent.Agent1,
			},
			{
				message:
					"I don't know them by name but I am sure there are.  It was nice talking to you.  ",
				agent: Agent.Agent2,
			},
			{
				message: "Nice talking to you.",
				agent: Agent.Agent1,
			},
		],
	},
	{
		id: "t_a623cf24-80e2-4408-b315-714c3bfac9fb",
		user: "Henry",
		user_profile: require("@/assets/images/user-icon.png"),
		last_conv: "Friday",
		content: [
			{
				message: "Hi, how are you?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I am well thanks. How deep do you think NCAA basketball violations go?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Not well but I also think the NCAA is so weak now that the findings of any major sanctions will be difficult and take a long time to investigate. What about you?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I think there is a lot behind the scenes that we dont see. SOme coaches have come out and admitted to it. Arizona Coach Sean Miller discussed a $100,000 bribe to land star recruit Deandre Ayton",
				agent: Agent.Agent2,
			},
			{
				message:
					"I know the Ayton allegations were dismissed by him but the advent of sneaker companies acting as intermeidaries has complicted the investigation.",
				agent: Agent.Agent1,
			},
			{
				message:
					"I did not know that. I feel bad for these kids. They sre being used to make a lot of money. And I dont feel are fairly compensated even with a scholarship",
				agent: Agent.Agent2,
			},
			{
				message:
					"I agree. I think they should let the kids forgo their scholarship and make money instead. Can you imagine how much money some of these kids could make? And if it were'nt for the FBI, this Arizona/Sean Miller/Ayton scandal would not have been know. It's ridiculous.",
				agent: Agent.Agent1,
			},
			{
				message:
					"And the NCAA keeps saying they can control everything but its impossible. A 18 year old kid gets offered money. Who says no?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Right? I would ask for even more. I have no idea how I would have walked away and say no to that offer. What about you?",
				agent: Agent.Agent1,
			},
			{
				message: "It would be really hard to say no. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah. I wonder how successful teams like Duke can be at that high level and not break rules...",
				agent: Agent.Agent1,
			},
			{
				message:
					"And its crazy to think 39 out of 50 states, the highest paid state employee is either a college football or basketball coach. These kids helped get you money. And not all of them will make it pro",
				agent: Agent.Agent2,
			},
			{
				message: "I know. I wish there was more they could get...",
				agent: Agent.Agent1,
			},
			{
				message:
					"Football has got to be crazy too. Its a money maker for a lot of colleges",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah. The only good thing about this model is that it pays for the lesser sports, like swimming and volleyball.",
				agent: Agent.Agent1,
			},
			{
				message:
					"Did you know Espn won an emmy for the creation of the yellow first down line ",
				agent: Agent.Agent2,
			},
			{
				message:
					"I did not. I was also shocked to find out the university of iowa's locker room for visiting football teams is completely painted pink",
				agent: Agent.Agent1,
			},
			{
				message:
					"Its crazy that in the 1960's top bowlers made twice as much as top football stars. Look where the money is now",
				agent: Agent.Agent2,
			},
			{
				message:
					"Or that the highest score ever in a football game occurred in 1916 when georgia tech defeated cumberland 222-0. Don't you have to pull the qb when you're down 60?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I wonder how long that game lasted. Even without commercials interrupting ",
				agent: Agent.Agent2,
			},
			{
				message:
					"HA That' would have lasted for ever... Like listening to nuntii latini - a weekly news programme conducted entirely in classical latin",
				agent: Agent.Agent1,
			},
			{
				message:
					"There is a website where you can listen to thousands of episodes of classic radio dramas for free",
				agent: Agent.Agent2,
			},
		],
	},
	{
		id: "t_3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1",
		user: "Jake",
		user_profile: require("@/assets/images/user-icon.png"),
		last_conv: "Thursday",
		content: [
			{
				message: "Do you like cats?",
				agent: Agent.Agent1,
			},
			{
				message: "Yeah, cats are cool. Do you own one? ",
				agent: Agent.Agent2,
			},
			{
				message:
					"No,but many of my friends do have one or more, they sleep a lot",
				agent: Agent.Agent1,
			},
			{
				message:
					"Apparently, after living for 15 years, 10 of it is from sleeping. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"That is a lot. Did you know there is a town , where the Mayor is a cat?",
				agent: Agent.Agent1,
			},
			{
				message: "I think that is in Alaska, right? ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yes, the town is Talkeetna, and the cat has been major since 1997",
				agent: Agent.Agent1,
			},
			{
				message:
					"Wow, I wonder if he has to make a lot of executive decisions? ",
				agent: Agent.Agent2,
			},
			{
				message:
					"I guess he is a very honest major. I would like to go to a cafe where one can play with cats!",
				agent: Agent.Agent1,
			},
			{
				message:
					"yeah, me too. They had a cat in the opening scene of the godfather. ",
				agent: Agent.Agent2,
			},
			{
				message: "Did you know a cat was once named co-author of a book?",
				agent: Agent.Agent1,
			},
			{
				message: "Yeah, but a physicist right? I wonder why though? ",
				agent: Agent.Agent2,
			},
			{
				message: "That is right! Hey do you like football?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I do. I watched the superbowl a few weeks ago, kind of boring for the big game. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Season is over!! when the season starts they only rest one weekend!",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yeah, well apparently Iowa paints their locker room pink for visiting teams. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"That is so funny, they want to intimidate the visitors, right?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yeah, it sounds like it. I'm surprised it is allowed, aren't you? ",
				agent: Agent.Agent2,
			},
			{
				message:
					"They allow many things, did you know the NFL would allow a woman to play, there is no rule against",
				agent: Agent.Agent1,
			},
			{
				message:
					"Wow, no I didn't know that. Have there been any female players? ",
				agent: Agent.Agent2,
			},
			{
				message:
					"I do not think so. Well it has been nice chatting with you! Take care",
				agent: Agent.Agent1,
			},
		],
	},
	{
		id: "t_3db0cb0e-58ac-4f80-aac9-e6ac91460545",
		user: "Samantha",
		user_profile: require("@/assets/images/user-icon.png"),
		last_conv: "Thursday",
		content: [
			{
				message: "Radio is such a fascinating technology. ",
				agent: Agent.Agent1,
			},
			{
				message: "Good Morning, yes radio is great. I was a DJ on the radio!",
				agent: Agent.Agent2,
			},
			{
				message:
					"That is so cool! I always thought that would be a very stressful job since you are always live on the air. ",
				agent: Agent.Agent1,
			},
			{
				message:
					"It could be at times, I remember when I was at the Ohio School for Radio back in the 80's. I had to do the earliest show, and it was one thing waking up so early to do a 6am shift, let alone the teachers taking out the needles for the records, so I couldn't play anything and had to talk.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Wow..that is crazy. Did you ever play any of the old radio dramas?",
				agent: Agent.Agent1,
			},
			{
				message:
					"No I didn't, that would have been a good and easy radio thing. Just pipe into the radio broadcast and sit back! They would always have their own commercials during those shows, thus I wouldn't have to talk or do anything. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"It would have been neat to be there when some of those broadcasts first came over the air. It was like tv that required thinking. ",
				agent: Agent.Agent1,
			},
			{
				message:
					"I'd have to agree. In radio training, they did have me and a colleague broadcast a Demolition Derby at a county fair. That was fun, though we had car parts flying all over our broadcast booth. (That wasn't very fun dodging those things)",
				agent: Agent.Agent2,
			},
			{
				message:
					"Demo derbys are crazy but fun. It should almost be classified as its own sport. It definitely takes endurance to compete in one of those. ",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yep....wow, I didn't know that Keith Jackson passed away. Dang it....he was a good sportscaster for ESPN.",
				agent: Agent.Agent2,
			},
			{
				message:
					"I never knew much about him. I'm not a huge sports person. Was he well known?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Keith Jackson was pretty much on every Saturday at ESPN. Yep, he was a pretty well-known guy and a good announcer.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Was he one of the announcers that went into it after a career in sports or someone who just started announcing?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I believe that Keith Jackson was just an announcer, but he did it for a lot of years. That's one of the guys I thought of when I went to school for radio. I never did sports talk professionally, but always wondered how I would do doing football games. But, all I got was a demolition derby...lol",
				agent: Agent.Agent2,
			},
			{
				message:
					"lol..I think you won out with the demo. Football always seemed like a really slow game to me. Lots of talking and waiting around but very little game play. ",
				agent: Agent.Agent1,
			},
			{
				message:
					"That's why I liked my training in radio. It taught me how to relay information to the audience. And after I left radio, I went into club DJ'ing. Heck...I've never been afraid  of a microphone!",
				agent: Agent.Agent2,
			},
			{
				message:
					"Is DJ-ing as exciting as movies make it out to be? Given my experience in the bar scene I feel like it would be a lot of annoying drunk people. ",
				agent: Agent.Agent1,
			},
			{
				message:
					'Well, yes, you just hit it. Club DJ\'ing was very very different than doing it on the radio. I remember getting disturbed by many a drunk person in those clubs. You had to be pretty quick with the comebacks to when they would shout stuff out. But you had to do it "clean" and not upset the person ridiculing you, and at the same time make the crowd laugh.',
				agent: Agent.Agent2,
			},
			{
				message:
					"I don't think I would have been very good at that. My wit tends to be a bit biting and sarcastic to be said over a microphone. ",
				agent: Agent.Agent1,
			},
			{
				message:
					"LOL....so is mine when I'm not being an entertainer. I retired from it two years ago, and now can't believe what I did for all that time. Adrenaline and nervous energy is what I used to do all those shows. (Always told myself, use the nervousness as your asset, it'll make you do a better job...and it did!)",
				agent: Agent.Agent2,
			},
			{
				message:
					"Adrenaline has a funny way of making us do things we would never attempt normally. I think that is why there are so many thrill seekers these days. Chasing that rush of adrenaline. ",
				agent: Agent.Agent1,
			},
		],
	},
	{
		id: "t_50747dbe-ee88-437b-a987-e15b091f2206",
		user: "Jason",
		user_profile: require("@/assets/images/user-icon.png"),
		last_conv: "Wednesday",
		content: [
			{
				message: "do you watch the NFL?",
				agent: Agent.Agent1,
			},
			{
				message: "I sure do. How about yourself?",
				agent: Agent.Agent2,
			},
			{
				message: "Me too. Did you know women can play in the NFL too?",
				agent: Agent.Agent1,
			},
			{
				message: "Did not know there, are there limitations though?",
				agent: Agent.Agent2,
			},
			{
				message: "Nope as long as you qualify, you are allowed to play",
				agent: Agent.Agent1,
			},
			{
				message:
					"Nice. Did you hear they are placing tracking chips on the players now?",
				agent: Agent.Agent2,
			},
			{
				message: "Nice, are they doing that for a particular reason?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yes they are collecting stuff such as velocity and rotation and a bunch of others",
				agent: Agent.Agent2,
			},
			{
				message: "Nice I hope they can use those to make the game safer too",
				agent: Agent.Agent1,
			},
			{
				message:
					"I hope so too. Did you know there is a coach who used to be a rocket scientist",
				agent: Agent.Agent2,
			},
			{
				message: "There is such a thing? WHat a change of careers. WHo is it?",
				agent: Agent.Agent1,
			},
			{
				message:
					"It is Matt Patricia and he graduated from a school that had tons of math symbols in the name",
				agent: Agent.Agent2,
			},
			{
				message:
					"Nice. Did you know U of Iowa painted the visitor locker room pink?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I wonder if that is supposed to have some effect on the players",
				agent: Agent.Agent2,
			},
			{
				message:
					"I am not sure. In the 60s bowlers used to make more than NFL players",
				agent: Agent.Agent1,
			},
			{
				message:
					"Yeah I guess it was a more popular game back then. Their coaches are the highest paid people",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah no surprise there. Do you know what the highest score in college football is?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Hmmm no I do not, what is it. Did you hear about that giant stadium in Texas?",
				agent: Agent.Agent2,
			},
			{
				message:
					"The highest score is 222-0, Georgia Tech versus Cumberland, and I do not know abut that stadium",
				agent: Agent.Agent1,
			},
			{
				message:
					"WOw what a score, The stadium is for a high school and can seat 18 000 people",
				agent: Agent.Agent2,
			},
			{
				message: "Wow that is a lot of people , bet it cost a lot too",
				agent: Agent.Agent1,
			},
			{
				message: "It sure did, $60 million",
				agent: Agent.Agent2,
			},
		],
	},
	{
		id: "t_5653dfe8-69f5-4285-a32c-cb1bd01f40b4",
		user: "Matt",
		user_profile: require("@/assets/images/user-icon.png"),
		last_conv: "Tuesday",
		content: [
			{
				message: "Hi there, do you watch the NFL?",
				agent: Agent.Agent1,
			},
			{
				message: "Hi! Yes I do sometimes. What's your favorite team?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I think the Patriots, I like them best. One of their former QB never fumbled a ball in his career. How about you?",
				agent: Agent.Agent1,
			},
			{
				message:
					"My husband is from the bay area so we root for the Oakland Raiders. ",
				agent: Agent.Agent2,
			},
			{
				message:
					"Nice, cool. Do you know what the highest score ever recorded in a game is?",
				agent: Agent.Agent1,
			},
			{
				message: "222-0",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah that must have been quite the game. Do you know who played, the two teams?",
				agent: Agent.Agent1,
			},
			{
				message:
					"Georgia tech and cumberland. Are you familiar with different kinds of football from different parts of the world?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah there are tons of different kinds like soccer, Canadian and Australian football, rugby, a bunch of them",
				agent: Agent.Agent1,
			},
			{
				message:
					"I'm originally from Hungary and our football there is soccer. My grandpa was a huge fan.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Nice, it is a good sport. Did you know ESPN won an Emmy once?",
				agent: Agent.Agent1,
			},
			{
				message:
					"I had no idea. I wonder why the University of Iowa's locker room is painted pink.",
				agent: Agent.Agent2,
			},
			{
				message:
					"I think they did that to intimidate the opposing team but I am not sure if that really works",
				agent: Agent.Agent1,
			},
			{
				message: "Oh ok I see. Do you watch basketball?",
				agent: Agent.Agent2,
			},
			{
				message:
					"I watch it sometimes. I didn't know until recently that the dunk shot was banned because of Kareem Abdul-Jabbar",
				agent: Agent.Agent1,
			},
			{
				message:
					"I didn't know that either. Or that in 39 out of 50 states, the highest paid state employee is either a college football or basketball coach. There is lots of money in sports.",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah that is for sure, lots of people watch it so no surprise I guess. Do you know who invented the sport?",
				agent: Agent.Agent1,
			},
			{
				message:
					"James Naismith. Interesting that he is the only losing coach in the University of Kansas history",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah that is pretty bizarre. Have you heard of the highest basketball court in the land?",
				agent: Agent.Agent1,
			},
			{
				message: "I haven't heard of it. Do you know where it is located?",
				agent: Agent.Agent2,
			},
			{
				message:
					"Yeah it is in the US supreme court building and it is on the top floor, hence the name I am guessing",
				agent: Agent.Agent1,
			},
			{
				message: "What is your favorite basketball team? ",
				agent: Agent.Agent2,
			},
			{
				message:
					"I do not have a favorite but just watch the games from time to time. ",
				agent: Agent.Agent1,
			},
		],
	},
];

export default conversations;
