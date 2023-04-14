import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import textureImage from "../pages/bg1.jpg";

const mediaQueryB = window.matchMedia("(width: 1440px)");

const ThreeDBox = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Создание сцены
    const scene = new THREE.Scene();
    const rotationSpeedY = 0.01;
    scene.background = new THREE.Color("#FFD773");

    // Создание камеры
    const camera = new THREE.PerspectiveCamera(75, 1000 / 800, 0.1, 1000);

    // Создание рендерера
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(1000, 800);

    // Добавление рендерера в DOM
    containerRef.current.appendChild(renderer.domElement);

    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load(textureImage);
    // scene.background = texture;

    // Создание куба
    const loader = new GLTFLoader();
    loader.load("/starbucksLogo/scene.gltf", (gltf) => {
      // Получение объекта с моделью из загруженных данных
      const model = gltf.scene;
      // Добавление модели на сцену
      scene.add(model);

      model.position.set(0, -11, 0);
      model.rotation.set(0, 0, 0);
      model.scale.set(13, 13, 13);

      // Настройка камеры
      camera.position.z = 50;

      // Создание источника света
      const light = new THREE.PointLight(0xffffff);
      light.position.set(5, 5, 5);
      scene.add(light);

      // Создание источника света с тенью
      const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
      shadowLight.position.set(0, 8, 5);
      scene.add(shadowLight);

      // Настройка параметров тени
      shadowLight.castShadow = true;
      shadowLight.shadow.mapSize.width = 1024;
      shadowLight.shadow.mapSize.height = 1024;
      shadowLight.shadow.camera.near = 0.1;
      shadowLight.shadow.camera.far = 100;
      shadowLight.shadow.camera.left = -15;
      shadowLight.shadow.camera.right = 15;
      shadowLight.shadow.camera.top = 15;
      shadowLight.shadow.camera.bottom = -15;

      model.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      });

      // Функция анимации
      const animate = () => {
        requestAnimationFrame(animate);

        // Вращение куба только по оси X
        model.rotation.y += rotationSpeedY;

        // Рендер сцены
        renderer.render(scene, camera);
      };

      animate();

      if (mediaQueryB.matches) {
        model.position.set(0, -10, 0);
        model.rotation.set(0, 0, 0);
        model.scale.set(10, 10, 10);
      }
      // Очистка ресурсов при размонтировании компонента
      return () => {
        renderer.dispose();
      };
    });
  }, []);

  return <div className="myModel" ref={containerRef} />;
};

export default ThreeDBox;
