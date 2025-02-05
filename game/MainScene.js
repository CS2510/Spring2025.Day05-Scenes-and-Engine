//Game-specific classes
class MainScene extends Scene {
    playerX
    playerY
    playerSpeed


    circleX
    circleY

    circle2X
    circle2Y

    frames
    elapsedTime

    start() {
        this.playerX = 125
        this.playerY = 90
        this.playerSpeed = 50

        this.circleX = 100
        this.circleY = 200

        this.circle2X = 100
        this.circle2Y = 250

        this.frames = 0
        this.elapsedTime = 0
    }

    update() {
        //x++ //x+=1


        this.frames++
        this.elapsedTime += Time.deltaTime

        if (Input.keysdown.includes("ArrowUp")) {
            this.playerY -= this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowDown")) {
            this.playerY += this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowLeft")) {
            this.playerX -= this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowRight")) {
            this.playerX += this.playerSpeed * Time.deltaTime
        }

        if (this.playerX < 50) this.playerX = 50
        if (this.playerX > 200) this.playerX = 200
        if (this.playerY < 75) this.playerY = 75

        this.circleX = 100 + 100 * Math.sin(this.elapsedTime)
        this.circle2X = 100 + 100 * Math.sin(this.elapsedTime + 5)


        if (Collisions.inCollision(this.playerX, this.playerY, 50, this.circleX, this.circleY, 20)) {
            currentScene = new DeathScene()
            currentScene.start()
        }

        if (Collisions.inCollision(this.playerX, this.playerY, 50, this.circle2X, this.circle2Y, 20)) {
            currentScene = new DeathScene()
            currentScene.start()
        }
        

        if (this.playerY > 350) {
            currentScene = new WinScene()
            currentScene.start()
        }


    }
    draw() {

        //Engine drawing code
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)


        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.strokeStyle = "yellow"
        ctx.lineWidth = 5
        ctx.arc(this.playerX, this.playerY, 50, 0, Math.PI * 2)

        ctx.fill()
        ctx.stroke()

        //Draw circle code
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.strokeStyle = "pink"
        ctx.lineWidth = 5
        ctx.arc(this.circleX, this.circleY, 20, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        //Draw circle2 code
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.strokeStyle = "pink"
        ctx.lineWidth = 5
        ctx.arc(this.circle2X, this.circle2Y, 20, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        //Draw text
        ctx.fillStyle = "black"
        ctx.font = "30px Times New Roman"
        let roundedTime = Math.floor(this.elapsedTime * 100) / 100
        ctx.fillText("Score: " + roundedTime, 0, 20)

    }
}