const fs = require('fs');
const https = require('https');
const path = require('path');

// Ensure directories exist
const directories = [
  'client/public/images/tables',
  'client/public/images/chairs',
  'client/public/images/tents',
  'client/public/images/gallery',
  'client/public/images/team'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Image URLs mapping
const imageUrls = {
  // Hero Banner
  'client/public/images/hero-banner.jpg': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  
  // Tables
  'client/public/images/tables/round-table.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tables/rectangular-table.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tables/banquet-table.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tables/small-round-table.jpg': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tables/cocktail-table.jpg': 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tables/sweetheart-table.jpg': 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tables/category-tables.jpg': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Chairs
  'client/public/images/chairs/wooden-resin-chair.jpg': 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/chairs/chiavari-chair.jpg': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/chairs/chiavari-gold.jpg': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/chairs/chiavari-white.jpg': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/chairs/folding-chair.jpg': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/chairs/cross-back-chair.jpg': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/chairs/category-chairs.jpg': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Tents
  'client/public/images/tents/frame-tent-20x30.jpg': 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tents/frame-tent-30x40.jpg': 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tents/pole-tent-30x40.jpg': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tents/pole-tent-40x60.jpg': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tents/sailcloth-tent.jpg': 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tents/clear-top-tent.jpg': 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/tents/category-tents.jpg': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Gallery - Weddings
  'client/public/images/gallery/wedding-1.jpg': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/gallery/wedding-2.jpg': 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/gallery/wedding-3.jpg': 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Gallery - Corporate
  'client/public/images/gallery/corporate-1.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'client/public/images/gallery/corporate-2.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  
  // Team
  'client/public/images/team/sarah-johnson.jpg': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'client/public/images/team/michael-chen.jpg': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'client/public/images/team/emily-rodriguez.jpg': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'client/public/images/team/david-thompson.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const [filepath, url] of Object.entries(imageUrls)) {
    try {
      await downloadImage(url, filepath);
      // Add a small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Error downloading ${filepath}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
}

downloadAllImages();