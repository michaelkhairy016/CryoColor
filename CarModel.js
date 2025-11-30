import React, { useEffect, useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { getPartData } from './mockData.js';

export function CarModel({ onPartHover }) {
    // Try to load the model. If it fails, this component might error out, 
    // so we should ideally have an ErrorBoundary or fallback.
    // For now, we assume 'models/car.glb' exists.
    const { scene } = useGLTF('models/car.glb');
    const [hoveredMesh, setHoveredMesh] = useState(null);

    useEffect(() => {
        // Traverse the scene to setup materials and data
        scene.traverse((child) => {
            if (child.isMesh) {
                // Enable shadows
                child.castShadow = true;
                child.receiveShadow = true;

                // Check if this mesh corresponds to a part in our data
                const partData = getPartData(child.name);

                // Save original material color to restore later if needed
                // or just clone the material so we don't affect shared materials
                child.material = child.material.clone();

                if (partData) {
                    // Apply the "most repainted color"
                    child.material.color.set(partData.mostFrequentColor);

                    // Add custom user data to the mesh for easy access
                    child.userData = { ...child.userData, partData };
                }
            }
        });

        // Debug: Log all mesh names to help user map them
        console.log("Loaded Model Structure:", scene);
    }, [scene]);

    const handlePointerOver = (e) => {
        e.stopPropagation();
        const mesh = e.object;
        if (mesh.userData.partData) {
            setHoveredMesh(mesh.name);
            onPartHover(mesh.userData.partData);

            // Highlight effect
            mesh.material.emissive.setHex(0x333333);
        }
    };

    const handlePointerOut = (e) => {
        e.stopPropagation();
        const mesh = e.object;
        if (mesh.userData.partData) {
            setHoveredMesh(null);
            onPartHover(null);

            // Remove highlight
            mesh.material.emissive.setHex(0x000000);
        }
    };

    return (
        <primitive
            object={scene}
            scale={1.5}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        />
    );
}

// Preload the model
useGLTF.preload('models/car.glb');
