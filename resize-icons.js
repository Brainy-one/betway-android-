const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceIcon = path.join(__dirname, 'icons', 'betway Focus Timer (1024 x 1024 px).png');
const outputDir = path.join(__dirname, 'icons');

// Sizes needed for Microsoft Store
const sizes = [
    { width: 1024, height: 1024, name: 'icon-1024.png' },
    { width: 512, height: 512, name: 'icon-512.png' },
    { width: 300, height: 300, name: 'icon-300.png' },
    { width: 192, height: 192, name: 'icon-192.png' },
    { width: 150, height: 150, name: 'icon-150.png' },
    { width: 71, height: 71, name: 'icon-71.png' }
];

async function resizeIcons() {
    // Check if source file exists
    if (!fs.existsSync(sourceIcon)) {
        console.error('❌ Source icon not found:', sourceIcon);
        console.log('Please ensure the file exists at:', sourceIcon);
        process.exit(1);
    }

    console.log('🎨 Starting icon resize process...');
    console.log('📁 Source:', sourceIcon);
    console.log('📁 Output directory:', outputDir);
    console.log('');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Resize each size
    for (const size of sizes) {
        try {
            const outputPath = path.join(outputDir, size.name);
            
            await sharp(sourceIcon)
                .resize(size.width, size.height, {
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
                })
                .png()
                .toFile(outputPath);
            
            console.log(`✅ Created ${size.width}x${size.height} → ${size.name}`);
        } catch (error) {
            console.error(`❌ Failed to create ${size.name}:`, error.message);
        }
    }

    console.log('');
    console.log('🎉 Icon resize complete!');
    console.log('');
    console.log('Generated icons:');
    sizes.forEach(size => {
        console.log(`  - ${size.name} (${size.width}x${size.height})`);
    });
}

resizeIcons().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
});
