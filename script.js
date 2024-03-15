document.addEventListener("DOMContentLoaded", function () {

console.log(`This is How You Died...
Type 'North', 'West', 'East', or 'South' to move.
To pick up items type 'pickup' and for dropping items type 'drop (item name)'.
To see your inventory type 'inventory'`)



    let y = 0;
    let x = 0;

    function moveNorth(params) {
        
    }

    document.getElementById('userInputForm').addEventListener('submit', function (eventData) {
        eventData.preventDefault();
        let input = document.getElementById("userInput").value;
        input = input.toLowerCase()

        console.log(input)

        if (input === "north") {
            y+=1
        } else if (input === "west") {
            x-=1
        } else if (input === "east") {
            x+=1
        } else if (input === "south") {
            y-=1
        }






        console.log("x: " + x)
        console.log("y: " + y)








    });
});