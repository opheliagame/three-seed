
import { BoxGeometry, Group, Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshStandardMaterial, PlaneGeometry, RepeatWrapping, TextureLoader } from 'three';

import IMAGE1 from '../../textures/img1.jpg'
import IMAGE2 from '../../textures/cutout_pillar_1.png'

export default class GardenImage extends Group {
  constructor() {
    super()
    const loader = new TextureLoader()

    this.name = 'garden-image'

    loader.load(IMAGE1, (texture) => {

      const material = new MeshBasicMaterial({map : texture})
      const box = new Mesh(new BoxGeometry(1, 1, 1), material)
      // this.add(box)
      const plane = new Mesh(new PlaneGeometry(15, 10), material)
      plane.position.set(0, 0, 0)
      plane.rotateY(Math.PI)
      this.add(plane)
    })

    loader.load(IMAGE2, (texture) => {

      const material = new MeshBasicMaterial({map : texture, transparent: true})
      const box = new Mesh(new BoxGeometry(1, 1, 1), material)
      // this.add(box)
      const plane = new Mesh(new PlaneGeometry(4, 8), material)
      plane.position.set(-2, 2, -1)
      plane.rotateY(Math.PI)
      this.add(plane)
    })







  }

}
