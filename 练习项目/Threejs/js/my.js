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
// 网格
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// 创建基础材质
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 几何立方体
// const cube = new THREE.Mesh(geometry, material)

// 线条的基本材质
/* const material = new THREE.LineBasicMaterial({ color: 0x0000ff }) */
// 放置顶点
/* const points = [new THREE.Vector3(- 10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0)]
const geometry = new THREE.BufferGeometry().setFromPoints(points)
const line = new THREE.Line(geometry, material) */

// 默认的放置坐标（0，0，0）这样摄像机和立方体会在一起
// scene.add(cube)
/* scene.add(line)
camera.position.set(0, 0, 105)
camera.lookAt(0, 0, 0) */

// 渲染场景
function animate() {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
}



animate()
