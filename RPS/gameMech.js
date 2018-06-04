var playerWins = 0;
var numGames = 0;

// the computer picks a random choice
function AI()
{
    let choice = Math.floor(Math.random() * 3);

    displayChoice(choice,document.querySelector("#computer img"));
    return choice;
}

// decides who wins that round
/* choices
    0 = rock
    1 = paper
    2 = sisscors
*/
function gameWinner(playerChoice)
{
    console.log("I been clicked");
    let computerChoice = AI();
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let announcement = document.querySelector("#announcement");
    let winCount = document.querySelector("#winCount");
    let totalGames = document.querySelector("#totalGames");

    displayChoice(playerChoice,document.querySelector("#player img"));
    numGames++;

    if(playerChoice === 0 && computerChoice === 2 || 
        playerChoice === 1 && computerChoice == 0 ||
        playerChoice === 2 && computerChoice == 1)
        {
            announcement.innerHTML = `Computer picked ${choiceArray[computerChoice]}. You win!`;
            playerWins++;
            winCount.innerHTML = `win: ${playerWins} percentage: 
            ${Number.parseFloat(playerWins/numGames).toFixed(2)}%`;
            totalGames.innerHTML = `total games: ${numGames}`;
        }
    else if(playerChoice === computerChoice)
        announcement.innerHTML = "Wow! So intense! A tie! MonkaS";
    else
        announcement.innerHTML = "RIP You got toasted";
}

function displayChoice(choice,displayElement)
{
    if(choice === 0)
    {
        displayElement.setAttribute("src","rock.png");
    }
    else if(choice === 1)
    {
        displayElement.setAttribute("src","paper.png");
    }
    else
    {
        displayElement.setAttribute("src","scissors.png");
    }
}

// Computer VS Computer
function autoGame()
{
    let gamesToPlay = prompt("Please enter number of games to play", 0);
    var player;
    while(typeof gamesToPlay === "number")
    {
        gamesToPlay = prompt("That is not a number, Please try again");
    }

    for(let i = 0; i < gamesToPlay; ++i)
    {
        player = Math.floor(Math.random() * 3);
        gameWinner(player);
    }
}