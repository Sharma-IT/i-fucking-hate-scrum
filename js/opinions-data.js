// opinions-data.js - Scrum Opinions Data Module
// Collection of real developer opinions about Scrum from community sources

const scrumOpinions = [
    {
        quote: "Agile was supposed to free us from operational dogma but instead it, much like Anakin Skywalker, became the very thing it was supposed to destroy.",
        author: "LavenderDay3544",
        role: "Software Engineer",
        highlight: "AGILE BECAME THE VERY THING IT SOUGHT TO DESTROY."
    },
    {
        quote: "I am a senior engineer and I still haven't experienced the mythical 'scrum done well'. Every single project that attempts scrum ends up burning people out eventually. The main cause is that it's a grossly leaky abstraction that forces people to micromanage themselves.",
        author: "mkl95",
        role: "Senior Developer",
        highlight: "THE MYTHICAL 'SCRUM DONE WELL' REMAINS A FAIRY TALE."
    },
    {
        quote: "Scrum works, it just fails as soon as points are assigned to tickets and dev value is assigned to tickets completed. I seen firms lose contracts due to keeping the devs that are good at keeping up story points while those that actually had the real experience by doing the actually challenging tickets get the boot",
        author: "Anonymous Developer",
        role: "Software Engineer",
        highlight: "STORY POINTS: ASTROLOGY FOR SOFTWARE DEVELOPERS."
    },
    {
        quote: "Had to do it at a company and thank god we fought against daily standups, but the constant retrospectives, the useless breaking down of tasks into subtasks and ranking how long it'll take just for the benefit of the non technical manager and nobody else… I admit it was so bad I never wanted to work for a company after that.",
        author: "baby",
        role: "Tech Lead",
        highlight: "DAILY STANDUPS: WHERE PRODUCTIVITY GOES TO DIE."
    },
    {
        quote: "What I never hear anyone say, but what I see all the time: Agile is a carte blanche for postponing hard stuff. It stacks technical debt, fast and high. Because we focus on reducible, deductible and demoable problems. And when that stack topples, that's when it gets politicized and we're back at square one in every bad way.",
        author: "Bas Groot",
        role: "Software Engineer",
        highlight: "FAST TO CREATE, SLOW TO FIX - THE SCRUM MOTTO."
    },
    {
        quote: "I worked one place, and our dev manager told us part of our bonus would be based on an increase in velocity. My reply was, 'So we just have to increase our estimate for the story points to meet the goal?' He looked so defeated.",
        author: "ThePhoo",
        role: "Tech Lead",
        highlight: "VELOCITY: A MADE-UP METRIC FOR MADE-UP PRODUCTIVITY."
    },
    {
        quote: "I've worked for 15 different companies, and 13 of those had a standup. And of those 13/13 were a status report.",
        author: "JamesBarney",
        role: "Software Engineer",
        highlight: "STANDUPS: 13/13 COMPANIES DID THEM WRONG."
    },
    {
        quote: "All these teams down in the weeds are obsessed with following the rituals to a tee thinking that makes them good little devs. When the whole point is so the middle and upper managements can track your activity to the minute and judge your performance.",
        author: "matt-attach",
        role: "Software Engineer",
        highlight: "RELIGIOUS RITUALS FOR THE AGILE FAITHFUL."
    },
    {
        quote: "The real reason programmers hate agile: we like our autonomy. We want to diagnose and fix problems, not be micromanaged and told how to do our jobs by people who don't even know how to program.",
        author: "Anonymous Developer",
        role: "Software Engineer",
        highlight: "WE WANT AUTONOMY, NOT MICROMANAGEMENT."
    },
    {
        quote: "People basically used Scrum or that part from the Agile manifesto as a get out of jail free card for not doing any documentation. Probably the single worst thing that ever happened in the history of software development.",
        author: "AtNightWeCode",
        role: "Software Engineer",
        highlight: "NO DOCS, NO PROBLEM - UNTIL THERE IS A PROBLEM."
    },
    {
        quote: "Agile is fucking cancer. It's nonsense dreamed up by MBA people to turn software development into a fast-paced assembly line with assembly line metrics which they can then just look at on a burnup chart and compare one line to another. You're not an educated knowledge worker. You're a monkey working on 'tasks' with a weighted number and an upturned hourglass associated with each one.",
        author: "hexapawn",
        role: "Software Engineer",
        highlight: "AGILE: THE CORPORATE CANCER OF SOFTWARE DEVELOPMENT."
    },
    {
        quote: "Waterfall is like heaven compared to Agile. With waterfall, you can just sit down and build the fucking thing. No hourly meetings or checkups from multiple different clueless managers on how your 'tasks' are tracking towards 'target velocity' etc. etc. You can work at your own pace on your own schedule towards an end goal that you control.",
        author: "hexapawn",
        role: "Tech Lead",
        highlight: "WATERFALL LOOKS LIKE PARADISE COMPARED TO SCRUM."
    },
    {
        quote: "My experience is that sprints interrupt my workflow to such an extent that I can no longer get anything done. In other words, they make a good team bad. Perhaps it's just me, but I need long periods uninterrupted to work.",
        author: "rwmj",
        role: "Software Engineer",
        highlight: "SPRINTS INTERRUPT WORKFLOW, DESTROY PRODUCTIVITY."
    },
    {
        quote: "The issue with all of [Scrum's addition of] process, ceremony and meetings is work still needs to get done. Sadly the only time to do work is often outside of working hours since then, finally, the meetings and ceremony have ended.",
        author: "osigurdson",
        role: "Software Engineer",
        highlight: "WORK HAPPENS AFTER WORK HOURS, WHEN MEETINGS END."
    },
    {
        quote: "Unless people can freely get up in the standup meeting and say 'I got nothing done yesterday because I spent all day trying to install the new version of the SDK, I'm now a week behind on our two week deliverable', and have zero stigma about it - the standups are mostly useless.",
        author: "nikofeyn",
        role: "Software Engineer",
        highlight: "STANDUPS ARE USELESS WITHOUT RADICAL HONESTY."
    },
    {
        quote: "A long time ago, I hired a scrum master. Two months later, I fired the scrum master, and exorcised scrum from my company. It was bureaucratic, it siloed people, turned simple decisions into decision by committee designed to reduce risk to the committee members, favored people who had little knowledge in decision making and put 10 out of 10 client projects behind schedule.",
        author: "IndyMike",
        role: "Tech Lead",
        highlight: "SCRUM MASTERS: BLOCKERS MASQUERADING AS FACILITATORS."
    },
    {
        quote: "My velocity is always low. And you know what? I don't give a damn shit about it. Most of my time is devoted to help other developers keep their work flowing. I'm a team player and problem solver. Do my manager knows about it? Totally, and is very happy that I share my knowledge and experience with the team. My ScamMaster? Always pissed about me.",
        author: "Individual-Praline20",
        role: "Software Engineer",
        highlight: "VELOCITY MEANS NOTHING, CELEBRATE THE BOTTLENECKERS."
    },
    {
        quote: "Agile measures success in ticket closures and story points. This incentives people to take short cuts to complete their sprint instead of prioritizing business/customer impact.",
        author: "tonjohn",
        role: "Software Engineer",
        highlight: "MEASURING SUCCESS BY TICKETS, NOT IMPACT."
    },
    {
        quote: "I use the phrase 'the illusion of predictability' a lot when I talk about Scrum. Sadly, some people really cling to that illusion despite overwhelming evidence that it isn't real.",
        author: "koreth1",
        role: "Software Engineer",
        highlight: "SCRUM PROVIDES THE ILLUSION OF PREDICTABILITY."
    },
    {
        quote: "In my experience business uses the term 'Agile' as a coverup for indecision. When in doubt say 'Agile mode', as you can change the requirements anytime.",
        author: "SquareWait",
        role: "Software Engineer",
        highlight: "AGILE: A COVERUP FOR MANAGEMENT INDECISION."
    },
    {
        quote: "Almost invariably, there are tickets that simply do not fit into a 2-3 week sprint, which cannot reasonably be split into multiple tickets. What almost always happens in my own experience is that no one really cares about the sprint as such. The tickets take as long as they need.",
        author: "Juha Utinen",
        role: "Software Engineer",
        highlight: "SPRINTS DON'T FIT REALITY, REALITY DOESN'T FIT SPRINTS."
    },
    {
        quote: "Agile just lets business leaders justify tapping you on the shoulder or slack pings for a task they deem business critical from a manufactured urgency born out of their poor project management",
        author: "Tech_Mix_Guru111",
        role: "Tech Lead",
        highlight: "MANUFACTURED URGENCY FROM POOR PROJECT MANAGEMENT."
    },
    {
        quote: "Agile is a conveyor-belt sort of methodology. However, Agile is not suited for Software Engineering primarily because the time to actually contribute a micro-part varies enormously, piece-by-piece, for the same stuff. Sometimes it takes 10 hours to write just 10 lines of code, although it was originally planned as a 1 hour task, and nobody willfully wants to hear that.",
        author: "SweetStrawberry4U",
        role: "Software Engineer",
        highlight: "CONVEYOR BELT METHODOLOGY FOR NON-CONVEYOR BELT WORK."
    },
    {
        quote: "Most cases of Agile I've seen means 'instead of doing Specification documents, let's use Jira. And by the way, now that you are doing agile, we expect the deliveries to take half the time, because now you are Agile'",
        author: "SittingWave",
        role: "Software Engineer",
        highlight: "NO SPECS, JUST JIRA, DELIVER TWICE AS FAST."
    },
    {
        quote: "I was dropped into a complex government program that was absolutely destroyed by the endless need for each team to demo 'something' every sprint. The goals were a lofty mountain, but for every sprint it was easier to go downhill for each team.",
        author: "laughingskeptic",
        role: "Software Engineer",
        highlight: "DEMO SOMETHING EVERY SPRINT, ACHIEVE NOTHING OVERALL."
    }
];

// Export for module systems (Node.js, bundlers)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { scrumOpinions };
}

// Export for ES6 modules
if (typeof window !== 'undefined') {
    window.scrumOpinions = scrumOpinions;
}
