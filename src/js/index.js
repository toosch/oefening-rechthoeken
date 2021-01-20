import "../../icons/svgxuse";

import Rectangle from "./Rectangle.js";

let mooooooi = 10;
while (mooooooi--) {
  new Rectangle(50, 50, 50 * mooooooi, 50 * mooooooi);
}

const rect1 = new Rectangle(50, 100, 300, 100);
const rect2 = new Rectangle(100, 50, 300, 100);

console.log("getDistance example:", Rectangle.getDistance(rect1, rect2));
console.log("collides example:", Rectangle.collides(rect1, rect2));
console.log("oppervlakte:", rect1.getOppervlakte());
