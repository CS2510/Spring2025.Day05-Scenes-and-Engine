class DeathScene extends Scene {
    //Variables for the dead scene
    timeSinceDeath

    start() {
      this.timeSinceDeath = 0

    }
    update() {
      this.timeSinceDeath += Time.deltaTime
      if (this.timeSinceDeath > 3) {
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



      ctx.fillStyle = "black"
      ctx.beginPath()
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.fill()


      //Draw text
      ctx.fillStyle = "darkred"
      ctx.font = "30px Times New Roman"
      ctx.fillText("You are dead.", 0, 20)



    }

  }