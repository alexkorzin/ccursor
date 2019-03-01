export default class Ccursor {
    constructor(obj) {
        this.cursor = document.querySelector(obj.cursor);
        this.mouse = {
            x: 0,
            y: 0,
            moveX: 0,
            moveY: 0,
            lastposX: 0,
            lastposY: 0
        };
        this.translate = {
            currentX: 0,
            currentY: 0,
            lastX: 0,
            lastY: 0
        }
        this.speed = {
            x: 0,
            y: 0
        }
        this.delta = {
            x: 0,
            y: 0,
            x1: 0,
            y1: 0
        };

        this.spring = obj.spring || 0.9;
        this.friction = obj.friction || 0.95;
        this.kinet = obj.kinet || 0.9;
        this.deformation = obj.deformation || 3

        document.addEventListener("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            if (this.mouse.lastposX > 0 && this.mouse.lastposY > 0) {
                // Calc mouse speed
                this.mouse.moveX = (this.mouse.lastposX - this.mouse.x);
                this.mouse.moveY = (this.mouse.lastposY - this.mouse.y);

                this.speed.x += this.mouse.moveX / 10;
                this.speed.y += this.mouse.moveY / 10;
            }
        })
        this.render();
    }

    render() {
        // Apply friction
        this.speed.x *= this.friction;
        this.speed.y *= this.friction;

        // Get mouse delta
        this.delta.x = this.mouse.lastposX - this.mouse.x;
        this.delta.y = this.mouse.lastposY - this.mouse.y;

        // Apply spring
        this.speed.x += this.delta.x * this.spring
        this.speed.y += this.delta.y * this.spring

        // Calc translate
        this.translate.currentX = this.mouse.x + this.speed.x
        this.translate.currentY = this.mouse.y + this.speed.y

        // Get translate delta
        this.delta.x1 = this.translate.currentX - this.translate.lastX;
        this.delta.y1 = this.translate.currentY - this.translate.lastY;

        // Apply kinetic
        this.speed.x += (this.delta.x1 * this.kinet);
        this.speed.y += (this.delta.y1 * this.kinet);

        // Calc translate CSS property
        let translate = "translate(" + this.translate.currentX + "px," + this.translate.currentY + "px)"
        let rotate = "rotateX(" + this.delta.x1 / this.deformation + "deg) rotateY(" + this.delta.y1 / this.deformation + "deg)"

        // Apply translate to cursor
        this.cursor.style.transform = translate + rotate + "translate(-50%, -50%)";

        // Update last values
        this.mouse.lastposX = this.mouse.x;
        this.mouse.lastposY = this.mouse.y;
        this.translate.lastX = this.translate.currentX;
        this.translate.lastY = this.translate.currentY;

        requestAnimationFrame(this.render.bind(this))
    }
}