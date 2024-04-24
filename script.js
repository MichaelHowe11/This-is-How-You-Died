let unem = {
    "unem0": {
        "dia": "The date is July 2, 1993. You start at James's house (A friend from high-school), James hasn't been seen by you in days. He said he was going to search for food or other valuables to aid in survival. You seem suspicious of his sudden disappearance and go to investigate by stepping outside for the first time in weeks. You find that your town is no longer the bustling city it was known for but now a desolate city with nothing but the wind making a noise. You're not surprised as the relentless news coverage has already made clear, the city is plagued by creatures that feast on unsuspecting prey. In this grim reality, encountering such a monster only serves to confirm what you already know.<br>",
        "opt": ["Option 1: Page James.<br>", "Option 2: Ask around your neighborhood for information about your friend."],
        "incombat": "false"
    },
    "unem01": {
        "dia": "You try to page James using your pager. You wait an hour and don't hear anything from the home phone.",
        "opt": ["Option 1: Ask around your neighborhood for information about your friend."],
        "incombat": "false"
    },
    "unem02": {
        "dia": "You go to your neighbor, James, and knock on the door. You feel a very uneasy fealing while doing this. You wait at least three minutes for a response but no one seems to be home.",
        "opt": ["Option 1: Try to open the door."],
        "incombat": "false"
    },
    "unem021": {
        "dia": "You're worried about your neighbor James, come to think of it you haven't really heard from him in a long time either. This seems serious and your curiosity gets the best of you so you try to force yourself into his house. You get the same uneasy feeling from when you first knocked on the door but this time it's more intense. The house seems quiet, too quiet...",
        "opt": ["Option 1: Investigate<br>"],
        "incombat": "false"
    },
    "unem0211": {
        "dia": "You decide to investigate and see if your neighbor James is in trouble. You search the entire first floor but find nothing suspicous but suddenly you hear a noise upstairs.",
        "opt": ["Option 1: Investigate", "Option 2: Search for a weapon so your prepared."],
        "incombat": "false"
    },
    "unem02111": {
        "dia": "As your going upstairs you hear another noise and stop in fear...Something hits you so hard you fall to the ground<br>You are now in combat! Type help for info on how to combat.",
        "incombat": "true"
    },
    "unem021110": {
        "dia": "In the aftermath of your victory, a stark truth sinks in, the creature you defeated was no mere mortal. Its grotesque form, barely resembling anything human.",
        "opt": ["Option 1: Search the house for valuables"],
        "incombat": "false"
    },
    "unem0211101": {
        "dia": `You search the house for valuables but find nothing of use to defend yourself but you did find a note that looked to be in James' handwriting. You read it and it says, "I'm leaving to go to the Jack's Storage, I will not be back. I want to be alone." You're perplexed on this very short note, your also confused on why he didn't tell you either.`,
        "opt": ["Option 1: Search 'empty' houses in your neighborhood", "Option 2: Go to find Jack's Storage"]
    },
    "unem02111011": {
        "dia": `You search empty houses near your area`,
        "opt": ["Option 1: Search 'empty' houses in your neighborhood", "Option 2: Go to find Jack's Storage"]
    }

}

let unemp2 = {
    "unem0": {
        "dia": "After your hours long search for Jack's Storage you need sleep, if you don't sleep you will start to lose defense levels, attack levels, and eventually health points until you find another chance to sleep again. It's also getting late so visibility is decreasing and so are your defense and accuracy with it. If you are low on health it is highly advised to sleep to replenish your health points. If you need an even more in depth explanation of the sleeping system than type 'helpsleep' for more info.",
        "opt": ["Option 1: Sleep", "Option 2: Don't Sleep and keep searching."]
    },
    "unem01": {
        "dia": "You decide to sleep, although James could be in trouble you want to also protect yourself from getting in trouble as well. If you die than James could die with you. The continuation of your search begins now...",
        "opt": ["Option 1: Continue"]
    },
    "unem02": {
        "dia": "You decide not to sleep, James is more important than sleep. Sleeping could be between James surviving a potential danger or not surviving it. You've lost ",
        "opt": ["Option 1: Continue"]
    },
    "unem020": {
        "dia": "You've finally found it, Jack's storage. Your eyes lay upon a massive warehouse, Jack's Storage dwarfs even a Home Depot in size. You wonder why James wanted such a ginormous base if it brought all of the dangers of killing so many zombies in such a big building like this.",
        "opt": ["Option 1: Enter Jack's Storage", "Option 2: Search the surrounding area"]
    },
    "unem0201": {
        "dia": "As you enter it feels like your still outside, the building is ginormous. It has obvious signs of decay due to neglect but its original glory still shines within.",
        "opt": ["Option 1: Search Jack's Storage"]
    },
    "unem02011": {
        "dia": "You found James! However it's not sunshine and rainbows. He's on the ground showing signs of exhaustion and physical injuries. There are a couple of dead zombies around him. You yell his name and hear no response. He seems to show no signs of zombification but there is still a chance...",
        "opt": ["Option 1: See if you can help James", "Option 2: Leave him there"]
    },
    "unem020111": {
        "dia": `You go up to James and see if he is still alive. To your surprise James wakes up in confusion. You ask him what happened and he says "The last thing I remember was fighting some zombies and being really tired." You evaluate his injuries and deem them non life threatening. You explain how yourself and James need to leave Kentucky because of a radio signal explaining how there is a military base on the outskirts of Muldraugh. You and James leave happily ever after in the military base of Muldraugh :).`,
        "opt": ["Option 1: See if you can help James", "Option 2: Leave him there"]
    },
    "unem020112": {
        "dia": `You decide to leave James there because you fear that he might be a zombie, James is a tall muscular man and if he were to be a zombie you would be in a lot of danger. After you leave Jack's Storage you head to the military base on the outskirts of Muldraugh to seek refuge from the ongoing apocalypse`,
        "opt": ["Option 1: See if you can help James", "Option 2: Leave him there"]
    }
}

// first value in list is damage, second value is defense, third value is hit chance
const itemnames = ["fists", "bat", "knife", "pencil", "katana", "crowbar", "axe"]
const items = {
    "fists": [1, 1, 1],
    "bat": [2, 3, 1],
    "knife": [1, 2, 1],
    "pencil": [0.5, 1, 5],
    "katana": [6, 6, 0],
    "crowbar": [3, 2, 1],
    "axe": [3, 2, 1]
}

let inv = {
    "space": 0,
    "items": []
}

function start() {
    let start = document.getElementById("start");
    start.classList.add("hidden");
    let input = document.getElementById("userInputForm");
    input.classList.remove("hidden");
    let textarea = document.getElementById("consoleOutput");
    textarea.classList.remove("hidden");

    document.getElementById('consoleOutput').classList.remove('hidden')
}
let php = 10;
let attkLev = 1;
let defLev = 1;
let misslev = 1;
let turnNum = 0;
let incombat = false;
let ehp = 18;
let spot = "unem0";

document.addEventListener("DOMContentLoaded", function () {
    let output = "";
    let occupation = 0;
    let combatstatus = 0;
    let classname = "";
    let idval = 1;

    fetch('title.txt').then(response => response.text()).then(text => title1.innerHTML = text)
    fetch('asciiart.txt').then(response => response.text()).then(text => asciimenuart.innerHTML = text)

    document.getElementById('userInputForm').addEventListener('submit', function (eventData) {
        eventData.preventDefault();
        document.getElementById('instr').classList.add('hidden')
        if (occupation === 0) {
            output = (`Choose Your Occupation & Starting Position<br><br>Student - Muldraugh High<br>
Chef - Spiffo's (An American Fast Food Restaurant)<br>
Unemployed - A House in Muldraugh<br>
Type 'help' for instructions on how to play.`)
        };
        let input = document.getElementById("userInput").value;
        document.getElementById('userInput').value = '';
        input = input.toLowerCase()

        if (input === "help") {
            output = (`To see your inventory type 'inventory<br>To attack an enemy type '(weapon of choice) attack'<br>
            Also all text input is NOT case sensitive so the text 'HELLO' and 'hello' are the same.<br>
            Everytime you progress in the story there will be options at the bottem of the text, type the number that corresponds with that option. (option 1 would be '1')`)
        }

        if (input === "unemployed" && occupation === 0) {
            output = (unem.unem0.dia) + "<br>" + (unem.unem0.opt)
            occupation = 1;
        }
        function combat(eattkLev, edefLev, emissLev, userInput) {
            let combatOutput = ""
            let damagedealtp = 0;
            let damagedealte = 0;

            incombat = true
            let inputArray = userInput.split(' ');
            if (inputArray[0] === "attack" && incombat === true) {
                turnNum += 1;
                let itemusing = "";
                for (let i = 0; i < itemnames.length; i++) {
                    if (inputArray[1] === itemnames[i]) {
                        itemusing = inputArray[1]
                        attkLev = items[itemusing][0]
                        defLev = items[itemusing][1]
                        misslev = items[itemusing][2]
                    }
                }
                // if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else 
                if ((turnNum % 2 === 0) && Math.floor((Math.random() * (emissLev + 1))) === 0) {
                    damagedealtp = (eattkLev / defLev).toFixed(2)
                    console.log(eattkLev / defLev)
                    output = "The zombie did " + (eattkLev / defLev).toFixed(2) + " damage to you!"
                } else if (turnNum % 2 === 0) {
                    output = "Zombie Missed!"
                } else if ((Math.floor(Math.random() * (misslev + 1)) === 0)) {
                    output = ("You did " + (attkLev / edefLev).toFixed(2) + " damage on the zombie!<br>The zombie now has " + ehp + " health!")
                    damagedealte = (attkLev / edefLev).toFixed(2)
                } else if (Math.random((Math.random() * 101)) === 0) {
                    output = "You missed and damaged yourself!"
                    damagedealtp = 1
                } else {
                    output = "You missed."
                }


                if (ehp <= 0) {
                    output = "You've defeated the zombie!"
                    incombat = false
                } else if (php <= 0) {
                    output = "This is how you died..."
                    setTimeout(function () {
                        location.reload();
                    }, 5001);
                }

            }
            console.log(ehp)

            return ([damagedealtp, damagedealte])
        }

        if (occupation === 1) {


            if (occupation === 1) {
                if (occupation === 1) {
                    if (spot === "unem0") {
                        if (input === "1") {
                            output = unem.unem01.dia + "<br>" + unem.unem01.opt.join("<br>");
                            spot = "unem01";
                        } else if (input === "2") {
                            output = unem.unem02.dia + "<br>" + unem.unem02.opt.join("<br>");
                            spot = "unem02";
                        }
                    } else if (spot === "unem01") {
                        if (input === "1") {
                            output = unem.unem021.dia + "<br>" + unem.unem021.opt.join("<br>");
                            spot = "unem021";
                        }
                    } else if (spot === "unem02") {
                        if (input === "1") {
                            output = unem.unem021.dia + "<br>" + unem.unem021.opt.join("<br>");
                            spot = "unem021";
                        }
                    } else if (spot === "unem021") {
                        if (input === "1") {
                            output = unem.unem0211.dia + "<br>" + unem.unem0211.opt.join("<br>");
                            spot = "unem0211";
                        }
                    } else if (spot === "unem0211") {
                        if (input === "1") {
                            output = unem.unem02111.dia
                            spot = "unem02111";
                            incombat = true;
                        } else if (input === "2") {
                            output = "You search for a weapon and find a " + unem.unem02111.dia
                            spot = "unem02111";
                        }
                    } else if (spot === "unem02111") {
                        incombat = true;
                        if (incombat === true) {
                            let attacklist = combat(1, 1, 1, input);
                            console.log(attacklist[0])
                            console.log(attacklist[1])


                            php -= attacklist[0];
                            ehp -= attacklist[1];
                            console.log('php: ' + php)
                            console.log('ehp: ' + ehp)


                            if (php <= 0) {
                                output = "You were defeated...";
                                incombat = false;
                            } else if (ehp <= 0) {
                                output = "You've defeated the zombie!";
                                incombat = false;
                            }

                        } else {
                            output = unem.unem021110.dia + unem.unem021110.opt.join("<br>");
                            spot = "unem021110";
                        }
                    } else if (spot === "unem021110") {
                        if (input === "1") {
                            output = unem.unem0211101.dia + "<br>" + unem.unem0211101.opt.join("<br>");
                            spot = "unem0211101";
                        }
                    } else if (spot === "unem0211101") {
                        if (input === "1") {
                            output = unem.unem02111011.dia + "<br>" + unem.unem02111011.opt.join("<br>");
                            spot = "unem02111011";
                        }
                    } else if (spot === "unem02111011") {
                        output = unem.unem02111011.dia + "<br>" + unem.unem02111011.opt.join("<br>");
                        spot = "unem02111011";
                    }
                }
            }





        }
        console.log(spot)


        if ((idval % 2) != 0) {
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color: rgb(222, 222, 222)">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        } else {
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color: #880808; color: rgb(255, 255, 255);">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        }
        idval += 1;
    })
});
