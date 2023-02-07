// 创建一个场景
const scene = new THREE.Scene()
// 透视相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// 渲染器
const renderer = new THREE.WebGLRenderer()
// 渲染区域的宽高
renderer.setSize(window.innerWidth, window.innerHeight)
// 一个canvas元素
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

const cube = new THREE.Mesh(geometry, material)
// 默认的放置坐标（0，0，0）这样摄像机和立方体会在一起
scene.add(cube)
camera.position.z = 5

// 渲染场景
function animate() {
    requestAnimationFrame(animate)
    cube.position.x += 0.01
    cube.position.y += 0.01
    renderer.render(scene, camera)
}

animate()
/* function testAnimation() {
    console.log(111)
}
requestAnimationFrame(testAnimation) */