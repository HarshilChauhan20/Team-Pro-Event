const fs = require('fs');
const https = require('https');
const path = require('path');

// Create floral images directory
const floralDir = 'client/public/images/floral';
if (!fs.existsSync(floralDir)) {
  fs.mkdirSync(floralDir, { recursive: true });
  console.log(`Created directory: ${floralDir}`);
}

// Floral image URLs from Unsplash (beautiful event/wedding floral arrangements)
const floralImages = {
  // Centerpieces
  'client/public/images/floral/centerpiece-1.jpg': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/floral/centerpiece-2.jpg': 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Floral Arches
  'client/public/images/floral/arch-1.jpg': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/floral/arch-2.jpg': 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Bouquets
  'client/public/images/floral/bouquet-1.jpg': 'https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/floral/bouquet-2.jpg': 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Aisle Decor
  'client/public/images/floral/aisle-1.jpg': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/floral/aisle-2.jpg': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Garlands
  'client/public/images/floral/garland-1.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/floral/garland-2.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Boutonnieres
  'client/public/images/floral/boutonniere-1.jpg': 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/floral/boutonniere-2.jpg': 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
};

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Download all floral images
async function downloadAllFloralImages() {
  console.log('🌸 Starting floral images download...');
  console.log('📁 Downloading to: client/public/images/floral/');
  console.log('⏳ This may take a few minutes...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const [filepath, url] of Object.entries(floralImages)) {
    try {
      await downloadImage(url, filepath);
      successCount++;
      // Add delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      errorCount++;
      console.error(`❌ Error downloading ${filepath}:`, error.message);
    }
  }
  
  console.log('\n🎉 Floral images download summary:');
  console.log(`✅ Successfully downloaded: ${successCount} images`);
  console.log(`❌ Failed downloads: ${errorCount} images`);
  
  if (errorCount > 0) {
    console.log('\n💡 Tip: Run the script again to retry failed downloads');
  }
}

// Run the download
downloadAllFloralImages();