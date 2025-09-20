const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .webp({ quality: quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`   Size: ${(originalSize / 1024 / 1024).toFixed(1)}MB -> ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${savings}% savings)`);
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
  }
}

async function main() {
  const imagesToOptimize = [
    { input: 'public/ui.png', output: 'public/optimized/ui.webp' },
    { input: 'public/Dashboard.png', output: 'public/optimized/Dashboard.webp' },
    { input: 'public/1250.png', output: 'public/optimized/1250.webp' },
    { input: 'public/Pattern.png', output: 'public/optimized/Pattern.webp' },
    { input: 'public/tools/hero.png', output: 'public/optimized/hero.webp' },
    { input: 'public/glowing.png', output: 'public/optimized/glowing.webp' },
    { input: 'public/edit/hero.png', output: 'public/optimized/edit-hero.webp' },
    { input: 'public/flipping.png', output: 'public/optimized/flipping.webp' },
    { input: 'public/floating.png', output: 'public/optimized/floating.webp' }
  ];

  console.log('🚀 Starting image optimization...\n');

  for (const { input, output } of imagesToOptimize) {
    if (fs.existsSync(input)) {
      await optimizeImage(input, output, 80);
    } else {
      console.log(`⚠️  ${input} not found, skipping...`);
    }
  }

  console.log('\n✨ Image optimization complete!');
}

main().catch(console.error);