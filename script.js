let gdia = {
    "unem0": {
        "dia":"The date is July 2, 1993. You start at James's house (A friend from highschool), James hasn't been seen by you in days. You seem suspicious of his sudden disappearance and go to investigate by stepping outside for the first time in weeks. You find that your town is no longer the bustling city it was known for but now a desolate city with nothing but the wind making a noise.<br>",
        "opt":["Option 1: Page James.<br>", "Option 2: Ask around your neighborhood for information about your friend."],
        "incombat": "false"
    },
    "unem01": {
        "dia":"You try to page James using your pager. You wait an hour and don't hear anything from the home phone.",
        "opt":["Option 1: Ask around your neighborhood for information about your friend."],
        "incombat": "false"
    },
    "unem02": {
        "dia":"You go to your neighbor, James, and knock on the door. You feel a very uneasy fealing while doing this. You wait at least three minutes for a response but no one seems to be home.",
        "opt":["Option 1: Try to open the door.<br>", "Option 2: Leave"],
        "incombat": "false"
    },
    "unem021": {
        "dia":"You're worried about your neighbor James, come to think of it you haven't really heard from him in a long time either. This seems serious and your curiosity gets the best of you so you try to force yourself into his house. You get the same uneasy feeling from when you first knocked on the door but this time it's more intense. The house seems quiet, too quiet...",
        "opt":["Option 1: Investigate<br>", "Option 2: Leave"],
        "incombat": "false"
    },
    "unem02leave": {
        "dia":"You've watched too many horror movies and are not a fan of dying because of your curiosity so you leave to ask another neighbor.",
        "opt":["Option 1: Change your mind and go back in the house for your neighbor James<br>", "Option 2: Search for another neighbor to ask about your friend James"],
        "incombat": "false"
    },
    "unem0211": {
        "dia":"You decide to investigate and see if your neighbor James is in trouble. You search the entire first floor but find nothing suspicous but suddenly you hear a noise upstairs.",
        "opt":["Option 1: Investigate<br>", "Option 2: Search for a weapon so your prepared.", "Option 3: Leave"],
        "incombat": "false"
    },
    "unem02111": {
        "dia":"As your going upstairs you hear another noise and stop in fear...Something hits you so hard you fall to the ground",
        "incombat": "true"
    }
        
    
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
    let y = 0;
    let x = 0;
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

        if (occupation != 0 && combatstatus != active) {
            if (input === "north") {
                y += 1
                output = ("You moved north")
            } else if (input === "south") {
                y -= 1
                output = ("You moved south")
            } else if (input === "east") {
                x += 1
                output = ("You moved east")
            } else if (input === "west") {
                x -= 1
                output = ("You moved west")
            } else (
                output = ("You didn't move")
            )
        }


        console.log(input)
        console.log('x is ' + x)
        console.log('y is ' + y)

        function wall(xLoc, yLoc, w, h) {

            if ((x >= xLoc && x <= xLoc + w) && (y >= yLoc && y <= yLoc + h)) {
                console.log('bruh')
                if (input === "north") {
                    y -= 1
                    console.log("bruh")
                } else if (input === "south") {
                    y += 1
                    console.log("bruh")

                } else if (input === "west") {
                    x += 1
                    console.log("bruh")

                } else if (input === "east") {
                    x -= 1
                    console.log("bruh")

                }
            }
        }

        if (input === "help") {
            output = (`Type 'North', 'West', 'East', or 'South' to move.<br>
            To see your inventory type 'inventory<br>To attack an enemy type '(weapon of choice) attack (enemy name)'<br>
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

        // demonstration of a vertical wall that is 5 units tall and is located at x=1
        // if ((x === 1) && (y >= 1 && y <= 5)) {
        //     console.log("vertical wall")
        // }

        // demonstration of a horizontal wall that is 5 units wide and one unit tall. Located at y=1.
        // if ((y === 1) && (x >= 1 && x <= 5)) {
        //     console.log("horizontal wall")
        // }

        console.log(occupation)
        console.log(output)
        output = output + ``

        if (input === "talk") {

        }

        function HSdialogue() {

        }
        function Mildialogue() {

        }

        if (occupation != 0) {

            if ((y <= 2 && y >= -9) && (x === -2)) {
                console.log("road")
            }

        }

        if (occupation === "unemployed") {
            x = 0;
            y = 0;

            if (input === "1") {

            }


        }



        // this is a test for now so that I can try the combat system

        function combat() {
            function attack(max) {
                return Math.floor(Math.random() * max)
            }
            combatstatus = 'active'
            let playerhp = 20
            let enemyhp = 10;
            let blockstatus = 0;
            playerturn()
            function playerturn() {

                if (enemyhp > 0) {

                    output = 'You encounter a zombie.  You can either "attack" them or attempt to "defend" yourself.'
                    if (input === "attack") {
                        enemyhp -= attack(6);
                        output = 'You attacked the zombie.  They have ' + enemyhp + ' health left';
                        zombieturn();
                    }
                    if (input === "defend") {
                        blockstatus = 1;
                        zombieturn();
                    }
                    else {
                        output = "You did nothing!";
                        zombieturn();
                    }
                }
                else {
                    output = `The zombie has died, you can now continue on your journey.`;
                    combatstatus = 0;
                }
            }
            function zombieturn() {
                let enemyattack
                if (playerhp > 0) {
                    if (blockstatus = 1) {
                        enemyattack = attack(5);
                        playerturn();
                    }
                    else {
                        enemyattack = attack(9);
                        playerturn();
                    }
                }
                else {
                    output = "You have died.";
                    occupation = 0;
                    combatstatus = 0;
                    x = 0;
                    y = 0;
                }
                playerhp -= enemyattack
                output = `The zombie attacks you dealing ` + enemyattack + ` damage.  You have ` + playerhp + ' health left';
            }
        }
        if (input === "combat") {
            combat()
        }


        // makes each seperate output a different color
        if ((idval % 2) != 0) {
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color: rgb(222, 222, 222)">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        } else {
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color:rgb(150, 150, 150); color: rgb(255, 255, 255);">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        }
        idval += 1;

        document.getElementById('location').innerHTML = (` X-Position: ` + x + `<br>` + `Y-Position: ` + y)


    });

});

