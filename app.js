const game = function () {
  const container = document.querySelector(".container");
  const step2 = document.querySelector(".step-2");
  const body = document.querySelector("body");
  const playerScore = document.querySelector(".score p:last-child");

  // Play match
  const playMatch = () => {
    const game = document.querySelector(".game");
    const choices = document.querySelectorAll(".choice-wrapper button");
    const playerHand = document.querySelector(".player-pick img");
    const computerHand = document.querySelector(".house-pick img");

    // Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    // Loop through the choices, then add an event listener
    choices.forEach((choice) => {
      choice.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // transition from step1 to step2
        game.style.animation = "opacityzero 0.7s ease forwards";
        setTimeout(() => {
          const computer = computerHand.parentElement.parentElement;
          const player = playerHand.parentElement.parentElement;

          step2.style.display = "flex";
          step2.style.animation = "opacityone 0.7s ease forwards";

          // Update Hands
          playerHand.src = `./images/icon-${this.id}.svg`;
          computerHand.src = `./images/icon-${computerChoice}.svg`;

          player.id = `${this.id}-choice`;
          computer.id = `${computerChoice}-choice`;

          setTimeout(() => {
            computer.style.animation = "opacityone 0.5s ease forwards";

            // Call Compare Hands
            compareHands(this.id, computerChoice);
          }, 1000);
        }, 500);
      });
    });

    // Get scores
    let score;
    if (localStorage.getItem("score") == null) {
      localStorage.setItem("score", 0);
    } else {
      score = localStorage.getItem("score");
      playerScore.textContent = score;
    }

    // Update scores
    const updateScore = () => {
      setTimeout(() => {
        playerScore.textContent = score;
      }, 500);
    };

    // Compare Hands
    const compareHands = (playerChoice, computerChoice) => {
      // Check for tie
      if (playerChoice == computerChoice) {
        return;
      }
      //Checking for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          score++;
          localStorage.setItem("score", score);
          updateScore();
          return;
        } else {
          score--;
          localStorage.setItem("score", score);
          updateScore();
          return;
        }
      }
      //Checking for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "rock") {
          score++;
          localStorage.setItem("score", score);
          updateScore();
          return;
        } else {
          score--;
          localStorage.setItem("score", score);
          updateScore();
          return;
        }
      }
      //Checking for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
          score++;
          localStorage.setItem("score", score);
          updateScore();
          return;
        } else {
          score--;
          localStorage.setItem("score", score);
          updateScore();
          return;
        }
      }
    };
  };

  // Rules function
  const rules = () => {
    const ruleBtn = document.querySelector(".rules");
    const rulesChart = document.querySelector(".rules-pop");
    const closeBtn = document.querySelector(".close");

    // Close rules
    function closeRules() {
      body.style.animation = "backgroundlow 1s ease forwards";
      rulesChart.style.animation = "closeRules 1s ease forwards";
      container.style.animation = "opacityhigh 1s ease forwards";
      step2.style.animation = "opacityhigh 1s ease forwards";
    }

    // Show rules
    function showRules() {
      body.style.animation = "backgroundhigh 1s ease forwards";
      rulesChart.style.animation = "showRules 1s ease forwards";
      container.style.animation = "opacitylow 1s ease forwards";
      step2.style.animation = "opacitylow 1s ease forwards";
    }

    ruleBtn.addEventListener("focus", showRules);
    closeBtn.addEventListener("click", closeRules);
  };

  // Call rules function
  rules();
  // Call play function
  playMatch();
};

game();
