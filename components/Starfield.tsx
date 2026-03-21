import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type StarfieldProps = {
  className?: string;
  /** Number of stars to render */
  starCount?: number;
  /** Star color in hex */
  color?: number;
  /** Overall opacity (0-1) */
  opacity?: number;
  /** Depth of the starfield cube */
  depth?: number;
  /** Whether to enable subtle parallax on mouse move */
  parallax?: boolean;
};

const Starfield: React.FC<StarfieldProps> = ({
  className,
  starCount = 1500,
  color = 0xffffff,
  opacity = 0.8,
  depth = 600,
  parallax = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      2000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * depth;
      positions[i3 + 1] = (Math.random() - 0.5) * depth;
      positions[i3 + 2] = (Math.random() - 0.5) * depth;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color,
      size: 1.2,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (!parallax) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX = (x - 0.5) * 2;
      mouseY = (y - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      // gentle rotation
      stars.rotation.x += 0.0006;
      stars.rotation.y += 0.0008;

      // subtle parallax
      if (parallax) {
        camera.position.x += (mouseX * 20 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 20 - camera.position.y) * 0.02;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [starCount, color, opacity, depth, parallax]);

  return (
    <div ref={containerRef} className={className} aria-hidden>
      {/* Three.js canvas appended here */}
    </div>
  );
};

export default Starfield;


