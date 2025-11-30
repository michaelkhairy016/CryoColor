export const carPartsData = [
    {
        id: 'hood',
        name: 'Hood',
        repaintCount: 145,
        mostFrequentColor: '#ff0000', // Red
        meshNamePattern: /hood/i // Regex to match mesh name in GLTF
    },
    {
        id: 'roof',
        name: 'Roof',
        repaintCount: 89,
        mostFrequentColor: '#000000', // Black
        meshNamePattern: /roof/i
    },
    {
        id: 'door_fl',
        name: 'Front Left Door',
        repaintCount: 210,
        mostFrequentColor: '#0000ff', // Blue
        meshNamePattern: /door.*fl|front.*left/i
    },
    {
        id: 'door_fr',
        name: 'Front Right Door',
        repaintCount: 198,
        mostFrequentColor: '#ffffff', // White
        meshNamePattern: /door.*fr|front.*right/i
    },
    {
        id: 'trunk',
        name: 'Trunk',
        repaintCount: 67,
        mostFrequentColor: '#c0c0c0', // Silver
        meshNamePattern: /trunk|boot/i
    },
    {
        id: 'bumper_f',
        name: 'Front Bumper',
        repaintCount: 320,
        mostFrequentColor: '#1a1a1a', // Dark Grey
        meshNamePattern: /bumper.*f/i
    }
];

export const getPartData = (meshName) => {
    return carPartsData.find(part => part.meshNamePattern.test(meshName));
};
