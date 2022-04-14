console.log(THREE)

// Scene
const scene = new THREE.scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Add mesh to scene
scene.add(mesh)
