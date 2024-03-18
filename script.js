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
Unemployed - A House in Muldraugh
High School Student - Muldraugh High
Fast Food Employee - Spiffo's (An American Fast Food Restaurant)

Type 'help' for instructions on how to play.`)



    let y = 0;
    let x = 0;

    function moveNorth(params) {

    }

    document.getElementById('userInputForm').addEventListener('submit', function (eventData) {
        eventData.preventDefault();

        let input = document.getElementById("userInput").value;
        document.getElementById('userInput').value = '';
        input = input.toLowerCase()

        console.log(input)

        if (input === "north") {
            y += 1
        } else if (input === "west") {
            x -= 1
        } else if (input === "east") {
            x += 1
        } else if (input === "south") {
            y -= 1
        }

        if (input === "help") {
            console.log(`Type 'North', 'West', 'East', or 'South' to move.
            
To pick up items type 'pickup' and for dropping items type 'drop (item name)'.
            
To see your inventory type 'inventory'
            
To attack an enemy type '(weapon of choice) attack (enemy name)'`)
        }




        console.log("x: " + x)
        console.log("y: " + y)








    });
});