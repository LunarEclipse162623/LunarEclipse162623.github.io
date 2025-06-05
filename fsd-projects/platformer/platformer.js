$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "black"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 650, 200, 20, "black");
    createPlatform(500, 550, 200, 20, "black");
    createPlatform(800, 450, 200, 20, "black");
    createPlatform(800, 650, 200, 20, "black");
    createPlatform(1100, 350, 200, 20, "black");
    createPlatform(300, 400, 220, 20, "black");
    createPlatform(100, 300, 100, 20, "black");
    createPlatform(1100, 550, 200, 20, "black");

    // TODO 3 - Create Collectables
    var collectableType = "database";
    createCollectable(collectableType, 575, 500);
    createCollectable(collectableType, 875, 400);
    createCollectable(collectableType, 1175, 300);
    createCollectable(collectableType, 380, 350);
    createCollectable(collectableType, 125, 250);
    // TODO 4 - Create Cannons
    // createCannon("right", 300, 1750);
    // createCannon("right", 450, 1500);
    // createCannon("left", 450, 1250);
    // createCannon("top", 125, 1000);
    // createCannon("top", 775, 800);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
