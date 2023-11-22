import { Group } from "three";
import GardenImage from "./GardenImage/GardenImage";

export default class ImageScene extends Group {
  constructor() {
    super();

    const gardenImage = new GardenImage()

    this.add(gardenImage)

  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}
