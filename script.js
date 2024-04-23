let gdia = {
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
        "opt": ["Option 1: Investigate<br>", "Option 2: Leave"],
        "incombat": "false"
    },
    "unem02leave": {
        "dia": "You've watched too many horror movies and are not a fan of dying because of your curiosity so you leave to ask another neighbor.",
        "opt": ["Option 1: Change your mind and go back in the house for your neighbor James<br>", "Option 2: Search for another neighbor to ask about your friend James"],
        "incombat": "false"
    },
    "unem0211": {
        "dia": "You decide to investigate and see if your neighbor James is in trouble. You search the entire first floor but find nothing suspicous but suddenly you hear a noise upstairs.",
        "opt": ["Option 1: Investigate<br>", "Option 2: Search for a weapon so your prepared.", "Option 3: Leave"],
        "incombat": "false"
    },
    "unem02111": {
        "dia": "As your going upstairs you hear another noise and stop in fear...Something hits you so hard you fall to the ground",
        "incombat": "true"
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


document.addEventListener("DOMContentLoaded", function () {
    let output = "";
    // ascii art made with http://www.network-science.de/ascii/



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
            Everytime you progress in the story there will be options at the bottem of the text, type the number that corresponds with that option. (option 1 would be '1')
`)
        }

        // occupation 1 is high school student, occupation 2 is fast food employee, and occupation 3 is unemployed.
        if (occupation === 0) {
            if (input === "student") {
                output = ("You're a High School Student amidst a desolate road, a school bus lies surrounded by at least three zombies, their twisted forms shuffling ominously. Despite the encroaching decay of the world around them, the buses stand untouched by the chaos, bearing only the scars of time's passage through neglect.")
                occupation = "student";
            } else if (input === "chef") {
                output = ("Your occupation is a Fast Food Employee")
                occupation = "chef";
            } else if (input === "unemployed") {
                output = (gdia.unem0)
                occupation = "unemployed";
            }
        }




        // player health points
        let php = 10;
        // Attack Level
        let attkLev = 1;
        // Defense Level
        let defLev = 1;
        // miss level
        let misslev = 1;
        // amount of turns. Is used to determine who is attacking who.
        let turnNum = 0;
        // If incombat is false than combat function will not be executed
        let incombat = false;
        function combat(ehp, eattkLev, edefLev, emissLev) {

            input = input.split(' ')
            if (input[1] === "attack") {
                turnNum += 1;

                if ((turnNum % 2 === 0) && Math.random() * (emissLev + 1) === 0) {
                    php -= (eattkLev / defLev).toFixed(2)
                    output = "The zombid did" + (eattkLev / defLev).toFixed(2) + " damage to you!"
                } else if (Math.random() * (misslev + 1) === 0) {
                    output = ("You did " + (attkLev / edefLev).toFixed(2) + " damage on the zombie!")
                    ehp -= (attkLev / edefLev).toFixed(2)
                } else if (Math.random() * 101 === 0) {
                    output = "You missed and damaged yourself!"
                    php -= 1
                } else {
                    output = "You missed."
                }

            }
            console.log(input)
            for (let i = 0; i < itemnames.length; i++) {
                if (input[0] === itemnames[i]) {
                    attkLev = items.input[0][0]
                    defLev = items.input[0][1]
                    misslev = items.input[0][2]
                }
            }

            console.log(output)






            if (php <= 0) {
                // php is set to 0 to prevent negative health being shown
                php = 0
                output = "You've Lost, womp womp"
            }

        }






    // makes each seperate output a different color
    if ((idval % 2) != 0) {
        document.getElementById("consoleOutput").innerHTML = `<p style="background-color: rgb(222, 222, 222)">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
    } else {
        document.getElementById("consoleOutput").innerHTML = `<p style="background-color:rgb(150, 150, 150); color: rgb(255, 255, 255);">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
    }
    idval += 1;
    })

});


