function start() {
    let start = document.getElementById("start");
    start.classList.add("hidden");
    let input = document.getElementById("userInputForm");
    input.classList.remove("hidden");
    let textarea = document.getElementById("consoleOutput");
    textarea.classList.remove("hidden");
    let info = document.getElementById("info");
    info.classList.remove("hidden");

    document.getElementById('consoleOutput').classList.remove('hidden')
}


document.addEventListener("DOMContentLoaded", function () {
    let output = "";


    // ascii art made with http://www.network-science.de/ascii/



    let occupation = 0;
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
            output = (`Choose Your Occupation & Starting Position<br><br>High School Student - Muldraugh High<br>Fast Food Employee - Spiffo's (An American Fast Food Restaurant)<br>Unemployed - A House in Muldraugh<br>Type 'help' for instructions on how to play. `)
        };
        let input = document.getElementById("userInput").value;
        document.getElementById('userInput').value = '';
        input = input.toLowerCase()






        console.log(input)

        if (input === "north") {
            y += 1
        } else if (input === "south") {
            y -= 1
        } else if (input === "east") {
            x += 1
        } else if (input === "west") {
            x -= 1
        }

        function wall(xLoc, yLoc, w, h) {
            console.log(x)
            console.log(xLoc)
            console.log(w)
            console.log(xLoc + w)

            console.log(input)
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
        console.log(wall(1, 1, 4, 4));

        if (input === "help") {
            output = (`Type 'North', 'West', 'East', or 'South' to move.To pick up items type 'pickup' and for dropping items type 'drop (item name)'.<br>To see your inventory type 'inventory<br>To attack an enemy type '(weapon of choice) attack (enemy name)'<br>Also all text input is NOT case sensitive.
`)
        }

        // occupation 1 is high school student, occupation 2 is fast food employee, and occupation 3 is unemployed.
        if (occupation === 0) {
            if (input === "high school student") {
                output = ("Your occupation is a High School Student.")
                occupation = 1;
            } else if (input === "fast food employee") {
                output = ("Your occupation is a Fast Food Employee")
                occupation = 2;
            } else if (input === "unemployed") {
                output = ("You are unemployed, you should get a job you lazy bum! I guess it's too late now huh.")
                occupation = 3;
            }
        }

        if (occupation === 3) {

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
        output = output + `
        
`
        console.log(idval)
        if ((idval % 2) != 0) {
            console.log("white odd")
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color: rgb(210, 208, 208)">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        } else {
            console.log("grey even")
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color:rgb(150, 150, 150);">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        }
        idval += 1;

        document.getElementById('location').innerHTML = (` X-Position: ` + x + `<br>` + `Y-Position: ` + y)


    });

});

