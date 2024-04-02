
 

document.addEventListener("DOMContentLoaded", function () {


    // ascii art made with http://www.network-science.de/ascii/
    const title =
        `                                                                                                                                                                                        
     _____ _     _        _        _   _                 __   __             ____  _          _                                                                                      
    |_   _| |__ (_)___   (_)___   | | | | _____      __  \\ \\ / /__  _   _   |  _ \\(_) ___  __| |                                                                                     
      | | | '_ \\| / __|  | / __|  | |_| |/ _ \\ \\ /\\ / /   \\ V / _ \\| | | |  | | | | |/ _ \\/ _\` |                                                                                     
      | | | | | | \\__ \\  | \\__ \\  |  _  | (_) \\ V  V /     | | (_) | |_| |  | |_| | |  __/ (_| |_ _ _                                                                               
      |_| |_| |_|_|___/  |_|___/  |_| |_|\\___/ \\_/\\_/      |_|\\___/ \\__,_|  |____/|_|\\___|\\__,_(_|_|_)                                                                              
    `;

    console.log(title + `
Choose Your Occupation & Starting Position
High School Student - Muldraugh High
Fast Food Employee - Spiffo's (An American Fast Food Restaurant)
Unemployed - A House in Muldraugh


Type 'help' for instructions on how to play.`)

    let occupation = 0;

    let y = 0;
    let x = 0;

    fetch('asciiart.txt')
    .then(response => response.text())
    .then(text => asciimenuart.innerHTML = text)





    document.getElementById('userInputForm').addEventListener('submit', function (eventData) {
        eventData.preventDefault();

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

        if (input === "help") {
            console.log(`Type 'North', 'West', 'East', or 'South' to move.
            
To pick up items type 'pickup' and for dropping items type 'drop (item name)'.
            
To see your inventory type 'inventory'
            
To attack an enemy type '(weapon of choice) attack (enemy name)'

Also all text input is NOT case sensitive.`)
        }

        // occupation 1 is high school student, occupation 2 is fast food employee, and occupation 3 is unemployed.
        if (occupation === 0) {
            if (input === "high school student") {
                console.log("Your occupation is a High School Student.")
                occupation = 1;
            } else if (input === "fast food employee") {
                console.log("Your occupation is a Fast Food Employee")
                occupation = 2;
            } else if (input === "unemployed") {
                console.log("You are unemployed, you should get a job you lazy bum! I guess it's too late now huh.")
                occupation = 3;
            }
        }



        console.log("x: " + x)
        console.log("y: " + y)
        console.log(occupation)






    });
    
});

