import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import { CarModel } from './CarModel.js';
import { carPartsData } from './mockData.js';

export default function App() {
    const [hoveredPart, setHoveredPart] = useState(null);

    return (
        <>
            <div className="dashboard-overlay">
                <div className="stats-panel">
                    <h1>Factory Repaint Stats</h1>
                    <p>Hover over car parts to see details.</p>

                    {hoveredPart ? (
                        <div className="part-details">
                            <h2>{hoveredPart.name}</h2>
                            <p><strong>Repaints:</strong> {hoveredPart.repaintCount}</p>
                            <p><strong>Top Color:</strong>
                                <span style={{ color: hoveredPart.mostFrequentColor, fontWeight: 'bold', marginLeft: '5px' }}>
                                    {hoveredPart.mostFrequentColor}
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div className="summary">
                            <h3>Overview</h3>
                            <p>Total Parts Tracked: {carPartsData.length}</p>
                            <div className="legend">
                                {carPartsData.map(part => (
                                    <div key={part.id} className="legend-item">
                                        <div className="color-dot" style={{ backgroundColor: part.mostFrequentColor }}></div>
                                        <span>{part.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Canvas shadows camera={{ position: [4, 2, 5], fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <CarModel onPartHover={setHoveredPart} />
                    </Stage>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>

            <div className="tooltip" style={{
                display: hoveredPart ? 'block' : 'none',
                left: '50%',
                top: '50%'
                // Note: Real 3D tooltip positioning requires projecting 3D coords to 2D. 
                // For simplicity in this no-build version, we use the sidebar panel.
            }}>
            </div>
        </>
    );
}
