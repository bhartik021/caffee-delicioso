const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function createCircularMask(size) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2;
  
  // Create a new SVG with a circle
  const svg = `<svg width="${size}" height="${size}">
    <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="white"/>
  </svg>`;

  return Buffer.from(svg);
}

async function generateFavicons() {
  const inputFile = path.join(__dirname, '../src/assets/logo.jpeg');
  const outputDir = path.join(__dirname, '../public/favicon');

  // Create output directory if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true });

  // Generate different sizes
  const sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512
  };

  for (const [filename, size] of Object.entries(sizes)) {
    // Create circular mask for this size
    const circleMask = await createCircularMask(size);

    // Process the image
    await sharp(inputFile)
      // First resize the image with padding to ensure it's square
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      // Apply circular mask
      .composite([{
        input: circleMask,
        blend: 'dest-in'
      }])
      .toFormat('png')
      .toFile(path.join(outputDir, filename));

    console.log(`Generated ${filename}`);
  }

  // Generate Safari masked icon
  const safariSize = 512;
  const safariMask = await createCircularMask(safariSize);
  
  await sharp(inputFile)
    .resize(safariSize, safariSize, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .composite([{
      input: safariMask,
      blend: 'dest-in'
    }])
    .toFormat('png')
    .toFile(path.join(outputDir, 'safari-pinned-tab.png'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 