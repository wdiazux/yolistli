/* eslint-disable @typescript-eslint/no-explicit-any */
// If you import Scene from 'babylonjs' then make sure to alias one of them.
import React from 'react'
import '@babylonjs/core/Physics/physicsEngineComponent'
// imports from @babylonjs
import {
    Scene as BabylonScene,
    Engine as BabylonEngine,
    Vector3,
    AbstractMesh,
    StandardMaterial,
    SceneLoader,
    UniversalCamera,
} from '@babylonjs/core'
import { CannonJSPlugin } from '@babylonjs/core/Physics/Plugins'
import { Scene, SceneEventArgs, Engine, withBabylonJS } from 'react-babylonjs'
import '@babylonjs/loaders'
import 'pepjs'
import '../assets/scss/experience.scss'
import * as CANNON from 'cannon'
window.CANNON = CANNON

const EngineWithContext = withBabylonJS(Engine)
const gravityVector = new Vector3(0, -9.81, 0)

interface ScenarioProps {
    name: string
    mode?: string
    location: string
    collisions?: boolean
    callback?: () => void
}

const scenario: ScenarioProps = {
    name: 'espilit',
    mode: 'incremental',
    location: 'https://www.babylonjs.com/scenes/',
    collisions: true,
}

let engine: BabylonEngine, scene: BabylonScene, canvas: HTMLCanvasElement

const meshPicked = (mesh: AbstractMesh) => {
    //console.log('mesh picked:', mesh)
}

/*
 * Process No. 2
 * This function load the 3D model to a new scene
 */
const loadScene = (
    name: string,
    mode: string,
    location: string,
    callback: () => void
) => {
    SceneLoader.ForceFullSceneLoadingForIncremental = true

    engine.resize()

    const defaultCamera = scene.activeCamera
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    let dlCount = 0
    SceneLoader.Append(
        location + name + '/',
        name + mode + '.babylon',
        scene,
        () => {
            scene.executeWhenReady(() => {
                if (scene.activeCamera) {
                    // Detach camera from model
                    if (scene.activeCamera.dispose) scene.activeCamera.dispose()

                    // Re activate defaultCamera
                    scene.activeCamera = defaultCamera

                    console.log(scene.activeCamera)

                    // Key Control
                    if ((scene.activeCamera as any).keysUp) {
                        ;(scene.activeCamera as any).keysUp.push(90) // Z
                        ;(scene.activeCamera as any).keysUp.push(87) // W
                        ;(scene.activeCamera as any).keysDown.push(83) // S
                        ;(scene.activeCamera as any).keysLeft.push(65) // A
                        ;(scene.activeCamera as any).keysLeft.push(81) // Q
                        ;(scene.activeCamera as any).keysRight.push(69) // E
                        ;(scene.activeCamera as any).keysRight.push(68) // D
                    }
                }
                callback()
            })
        },
        evt => {
            if (evt.lengthComputable) {
                engine.loadingUIText =
                    'Loading, please wait...' +
                    ((evt.loaded * 100) / evt.total).toFixed() +
                    '%'
            } else {
                dlCount = evt.loaded / (1024 * 1024)
                engine.loadingUIText =
                    'Loading, please wait...' +
                    Math.floor(dlCount * 100.0) / 100.0 +
                    ' MB already loaded.'
            }
        }
    )
}

/*
 * Process No. 3
 * This is the function execured inside the loop
 */
const renderFunction = (scene: BabylonScene) => {
    if (scene) {
        scene.render()
    }
}

/*
 * Process No. 1
 * After babylon scene is ready in the first instance
 * here is where all start
 */
const handleSceneMount = (event: SceneEventArgs) => {
    canvas = event.canvas
    scene = event.scene
    engine = scene.getEngine()

    const name = scenario.name
    const location = scenario.location || '/Scenes/'
    const mode = scenario.mode ? `.${scenario.mode}` : ''

    // Default Camera for the scene
    // This is required
    const defaultCamera = new UniversalCamera(
        'DefaultCamera',
        new Vector3(-10, 1.8, 9),
        scene
    )

    // Camera default settings
    defaultCamera.speed = 0.2
    defaultCamera.inertia = 0.7
    defaultCamera.fov = 1.024779
    defaultCamera.maxZ = 500
    defaultCamera.minZ = 0.05
    defaultCamera.ellipsoid = new Vector3(0.2, 0.9, 0.2)
    defaultCamera.checkCollisions = true
    defaultCamera.applyGravity = true

    // Attach camera to canvas
    defaultCamera.attachControl(canvas)

    // Scene settings
    scene.gravity = new Vector3(0, -0.5, 0)

    // Load the 3D Scene
    setTimeout(() => {
        loadScene(name, mode, location, () => {
            StandardMaterial.BumpTextureEnabled = true
            if (scenario.collisions) {
                scene.collisionsEnabled = scenario.collisions
            }
            engine.resize()
            if (scenario.callback) scenario.callback()
        })
    }, 1000)

    // Render loop
    engine.runRenderLoop(() => {
        renderFunction(scene)
    })

    // Resize canvas on load
    engine.resize()
    window.addEventListener('resize', () => {
        engine.resize()
    })
}

/*
 * This is the function that render the canvas using react-babylonjs
 */
const experience: React.FC = () => {
    return (
        <EngineWithContext
            antialias={true}
            adaptToDeviceRatio={true}
            canvasId="expCanvas">
            <Scene
                onMeshPicked={meshPicked}
                onSceneMount={handleSceneMount}
                enablePhysics={[gravityVector, new CannonJSPlugin()]}>
                VR Experience
            </Scene>
        </EngineWithContext>
    )
}

export default experience
