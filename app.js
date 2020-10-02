const play = function () {
  const container = document.querySelector(".container");
  // Rules function
  const rules = () => {
    const ruleBtn = document.querySelector(".rules");
    const rulesChart = document.querySelector(".rules-pop");
    const closeBtn = document.querySelector(".close");

    // Close rules
    function closeRules() {
      rulesChart.style.animation = "closeRules 1s ease forwards";
      container.style.animation = "opacityhigh 1s ease forwards";
    }

    // Show rules
    function showRules() {
      rulesChart.style.animation = "showRules 1s ease forwards";
      container.style.animation = "opacitylow 1s ease forwards";
    }

    ruleBtn.addEventListener("focus", showRules);
    closeBtn.addEventListener("click", closeRules);
  };

  // Call rules function
  rules();
};

play();
