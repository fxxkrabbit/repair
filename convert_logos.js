const fs = require('fs');
const path = require('path');

// SVG内容
const mainLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="70" viewBox="0 0 280 70">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2980b9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="10" y="15" rx="8" ry="8" width="40" height="40" fill="url(#grad1)" />
  <path d="M20 35 L40 35 M30 25 L30 45" stroke="white" stroke-width="4" stroke-linecap="round" />
  <circle cx="30" cy="35" r="15" stroke="white" stroke-width="2" fill="none" />
  <text x="60" y="43" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#333">
    <tspan fill="#2980b9">Repair</tspan><tspan fill="#1565C0">Hub</tspan>
  </text>
  <text x="60" y="58" font-family="Arial, sans-serif" font-size="12" fill="#777">Your Guide to Repair Resources</text>
</svg>`;

const collapsedLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2980b9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" rx="8" ry="8" width="40" height="40" fill="url(#grad1)" />
  <path d="M20 30 L40 30 M30 20 L30 40" stroke="white" stroke-width="4" stroke-linecap="round" />
  <circle cx="30" cy="30" r="15" stroke="white" stroke-width="2" fill="none" />
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2980b9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="4" y="4" rx="8" ry="8" width="56" height="56" fill="url(#grad2)" />
  <path d="M20 32 L44 32 M32 20 L32 44" stroke="white" stroke-width="6" stroke-linecap="round" />
  <circle cx="32" cy="32" r="20" stroke="white" stroke-width="3" fill="none" />
</svg>`;

// 确保images目录存在
const imagesDir = path.join(__dirname, 'assets', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 保存SVG文件，稍后可以手动在浏览器中打开并另存为PNG
fs.writeFileSync(path.join(imagesDir, 'logo@2x.svg'), mainLogoSvg);
fs.writeFileSync(path.join(imagesDir, 'logo-collapsed@2x.svg'), collapsedLogoSvg);
fs.writeFileSync(path.join(imagesDir, 'favicon.svg'), faviconSvg);

console.log('SVG文件已保存到assets/images目录。');
console.log('请手动使用浏览器打开这些SVG文件，然后另存为PNG格式。');

// 创建一个HTML文件，便于查看和保存所有logo
const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>RepairHub Logos</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .logo-container { 
      margin-bottom: 30px; 
      padding: 20px; 
      border: 1px solid #ddd; 
      border-radius: 10px;
    }
    h2 { color: #333; }
    .instructions { 
      background: #f5f5f5; 
      padding: 15px; 
      border-radius: 8px; 
      margin-bottom: 30px; 
    }
  </style>
</head>
<body>
  <h1>RepairHub Logos</h1>
  
  <div class="instructions">
    <h3>说明：</h3>
    <p>1. 右键点击每个图像</p>
    <p>2. 选择"另存为图片"或类似选项</p>
    <p>3. 保存为相应的PNG文件名</p>
  </div>
  
  <div class="logo-container">
    <h2>主Logo (保存为 logo@2x.png)</h2>
    ${mainLogoSvg}
  </div>
  
  <div class="logo-container">
    <h2>折叠Logo (保存为 logo-collapsed@2x.png)</h2>
    ${collapsedLogoSvg}
  </div>
  
  <div class="logo-container">
    <h2>Favicon (保存为 favicon.png)</h2>
    ${faviconSvg}
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'logos.html'), htmlContent);
console.log('已创建logos.html文件，请在浏览器中打开此文件查看并保存所有logo。'); 