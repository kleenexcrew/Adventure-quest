const quest1 = {
    id: 'burning-building',
    title: 'Burning Building',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'burning-building.png',
    description: `
        As you patrol the streets of the inner-city the sound 
        of sirens drifts along the breeze. You rush to their source
        and discover a building ablaze. What do you do?
        `,
    choices: [{
        id: 'rush',
        description: 'Rush into the burning building!',
        result: `
            You rush in and save the lives of 10 people, but you
            also get burned!`,
        hp: -20,
        cs: 10
    }, {
        id: 'run',
        description: 'Run away with your tail between your legs',
        result: `
            You are a huge coward and flee quickly away. Uh oh, you
            tripped and sprained your ankle!`,
        hp: -10,
        cs: 0
    }, {
        id: 'call',
        description: 'Call the fire department and wait outside',
        result: `
            You decide to leave it to the professionals and call the
            fire department. You save 5 people!`,
        hp: 0,
        cs: 5
    }, {
        id: 'special-power',
        description: 'Use your special power!',
        result: 'nothing happens',
        hp: 0,
        cs: 0
    }]
};

const quest2 = {
    id: 'bank-heist',
    title: 'Hostage Situation at the Bank',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'bank-heist.png',
    description: `
        You go to the bank to withdraw money for your grandmother.
        Suddenly, you hear a loud yell, "Stick 'em up!!!" Bank robbers
        are taking hostages! What do you do?`,
    choices: [{
        id: 'attack',
        description: 'Attack bank robbers',
        result: `
            You save 20 people! Unfortunately, your nose is now broken
            from the fight!`,
        hp: -10,
        cs: 20
    }, {
        id: 'negotiate',
        description: 'Try to negotiate',
        result: `
            In your valiant attempt to negotiate with the thieves, 
            you agree on letting all but one hostage go freely.`,
        hp: 0,
        cs: 10
    }, {
        id: 'hiding',
        description: 'You cower in fear.',
        result: `
            As the bank robber take the bank, you hide underneath the tellers.
            The result of your cowardice 
            leaves your grandmother penniless and you heart broken. minus 10 hp.`,
        hp: -10,
        cs: 0
    }, {
        id: 'special-power',
        description: 'Use your special power!',
        result: 'nothing happens',
        hp: 0,
        cs: 0
    }]
};

const quest3 = {
    id: 'runaway-train',
    title: 'Locomotive is on the loose!',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'runaway-train.png',
    description: `
        A passenger train headed towards Central station has lost
        its brakes. What do you do?`,
    choices: [{
        id: 'run',
        description: 'Run after the train',
        result: `
            You take a couple of steps towards the train, 
            but it is already a mile away once you reach the track. 
            Too bad :( You are so sad you missed the train, -10 HP!`,
        hp: -10,
        cs: 0
    }, {
        id: 'surroundings',
        description: 'Use your surroundings',
        result: `
            You take a quick glace of your environment and you spy a 
            motorbike. On you go, and you are able to catch up to and 
            board the train. You pull the emergency brake and save 
            100 people!`,
        hp: 0,
        cs: 100
    }, {
        id: '',
        description: 'Jump on the train from an overpass',
        result: `
            You make it onto the train but you have motion sickness
            and do not stop the train. -50 HP.`,
        hp: -50,
        cs: 0
    }, {
        id: 'special-power',
        description: 'Use your special power!',
        result: 'nothing happens',
        hp: 0,
        cs: 0
    }]
};

const quest4 = {
    id: 'car-pile-up',
    title: 'Massive car pile up on highway 99!',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'car-pile-up.png',
    description: `
        While out on a joy ride in your Lambo you come upon a massive
        car pile up. People are trapped, what do you do?`,
    choices: [{
        id: 'rescue',
        description: 'Rescue people',
        result: `
            As you rush towards the passengers a massive explosion
            occurs from a tipped over oil truck. -30 hp.`,
        hp: -30,
        cs: 0
    }, {
        id: 'keep-driving',
        description: 'Speed up towards the wreck.',
        result: `
            As you speed up towards the pile-up
            you see an off-ramp and take it. Hasta Lavista. 
            Lose 30HP for lack of integrity`,
        hp: -30,
        cs: 0
    }, {
        id: 'call-police',
        description: 'Call the police',
        result: `
            You leave it to the proffesionals and call the police. 
            Remarkably no lives are lost. Good job! 30 people saved.`,
        hp: 0,
        cs: 30
    }, {
        id: 'special-power',
        description: 'Use your special power!',
        result: 'nothing happens',
        hp: 0,
        cs: 0
    }]
};

const quests = [quest1, quest2, quest3, quest4];

export default quests;
