# Car Repaint Dashboard - Setup Instructions

## 1. Add Your 3D Model
- Rename your 3D car file to `car.glb`.
- Place it inside the `models` folder.
- **Note**: If your file is `.gltf` or `.obj`, let me know, as we'll need to tweak the code slightly.

## 2. How to Run / Share
Since we built this as a **static web app**, you don't need to install anything.

### Option A: Netlify Drop (Recommended for Sharing)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the **entire `cryo-kilonova` folder** onto the page.
3. It will upload and give you a **public URL**.
4. Send that URL to your managers!

### Option B: Local Testing (Python)
If you just want to test it on your machine:
1. Open a terminal in this folder.
2. Run: `python -m http.server`
3. Open `http://localhost:8000` in your browser.

## 3. Customizing Data
- Open `src/mockData.js` to change the numbers, colors, or part names.
- The `meshNamePattern` is a "Regular Expression" used to find the part in the 3D model.
  - Example: `/hood/i` matches "Hood", "hood_mesh", "Car_Hood", etc.
