class WinScene extends Scene {
    //Variables for the win scene
    timeSinceWin

    start() {
      this.timeSinceWin = 0

    }
    update() {
      this.timeSinceWin += Time.deltaTime
      if (this.timeSinceWin > 3) {
        //Start main scene
        currentScene = new MainScene()
        currentScene.start()
      }

    }
    draw() {
      //Engine drawing code
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.clearRect(0, 0, canvas.width, canvas.height)


      ctx.fillStyle = "yellow"
      ctx.beginPath()
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.fill()


      //Draw text
      ctx.fillStyle = "darkgreen"
      ctx.font = "30px Times New Roman"
      ctx.fillText("You beat the game. Horray!", 0, 20)


    }
  }