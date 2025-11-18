const fs = require('fs');
const { createCanvas } = require('canvas');

function generateIcon(size, filename) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#10b981');
    gradient.addColorStop(1, '#3b82f6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Draw clock icon
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#ffffff';
    ctx.lineWidth = size * 0.04;
    
    // Clock circle
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Hour hand
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 0.3, centerY - radius * 0.4);
    ctx.lineWidth = size * 0.06;
    ctx.stroke();
    
    // Minute hand
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 0.5, centerY - radius * 0.2);
    ctx.lineWidth = size * 0.04;
    ctx.stroke();
    
    // Center dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.03, 0, 2 * Math.PI);
    ctx.fill();
    
    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
    console.log(`Generated ${filename}`);
}

// Generate icons
try {
    generateIcon(192, 'icons/icon-192.png');
    generateIcon(512, 'icons/icon-512.png');
    console.log('Icons generated successfully!');
} catch (error) {
    console.error('Error generating icons:', error.message);
    console.log('\nAlternative: Open create-icons.html in your browser and save the icons manually.');
}
