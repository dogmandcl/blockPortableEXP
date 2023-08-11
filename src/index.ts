import { engine, InputAction, inputSystem, Material, MeshCollider, pointerEventsSystem } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'


import { addPlatforms } from './platforms'
import { doorSystem } from './systems'
import { showUI } from './denyUI'



engine.addSystem(doorSystem)

export function main() {
  addPlatforms();

 


}
