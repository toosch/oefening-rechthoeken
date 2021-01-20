// maak gebruik van https://github.com/verhulstd/syntra-fe-scss-js
//  Maak een class Rectangle(w, h, x, y)
//     getters en setters voor width, height, x, y
//     geef deze een random-bgcolor (npmjs.org/random-color)
//     oppervlakte van die rectangle?
//     afstand van rect tot rect => A²=B²+C² (van midden tot midden)
//     als je klikt op 1 rechthoek dan krijgt die een nieuwe BGC
//      hitTest/collision detection

const randCol = require("randomcolor");

export default class Rectangle {
  constructor(width, height, x, y) {
    this._w = width;
    this._h = height;
    this._x = x;
    this._y = y;
    this._ref = this.generateInitialHTML();
    this.setStyling();
    this.clickettyclick();
  }
  clickettyclick() {
    this._ref.addEventListener("click", () => {
      this.setStyling();
    });
  }
  static getDistance(rect1, rect2) {
    return Math.sqrt((rect1._x - rect2._x) ** 2 + (rect1._y - rect2._y) ** 2);
  }
  static collides(rect1, rect2) {
    return (
      rect1._x < rect2._x + rect2._w &&
      rect1._x + rect1._w > rect2._x &&
      rect1._y < rect2._y + rect2._h &&
      rect1._y + rect1._h > rect2._y
    );
  }

  getOppervlakte() {
    return this._w * this._h;
  }
  generateInitialHTML() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
            <div class="square"></div>
        `
    );
    return document.querySelector("div:first-child");
  }
  setStyling() {
    const styles = {
      left: this._x - this._w / 2 + "px",
      top: this._y - this._h / 2 + "px",
      width: this._w + "px",
      height: this._h + "px",
      backgroundColor: randCol.randomColor(),
    };
    Object.assign(this._ref.style, styles);
  }
  get width() {
    return this._w + "px";
  }
  set width(waarde) {
    this._w = waarde;
    this.setStyling();
  }
  get height() {
    return this._h + "px";
  }
  set height(waarde) {
    this._h = waarde;
    this.setStyling();
  }
  set position(coordinate) {
    const arr = coordinate.replace(" ", "").split(",");
    this._x = arr[0];
    this._y = arr[1];
    this.setStyling();
  }
}
