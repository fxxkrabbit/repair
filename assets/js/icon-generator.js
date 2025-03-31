/**
 * 网站图标生成器
 * 根据网站名称的首字母生成SVG图标
 */

// 预定义的颜色数组，确保所有生成的图标有一致的设计语言
const iconColors = [
  '#3498db', // 蓝色
  '#2ecc71', // 绿色
  '#e74c3c', // 红色
  '#f39c12', // 橙色
  '#9b59b6', // 紫色
  '#1abc9c', // 青绿色
  '#d35400', // 深橙色
  '#c0392b', // 深红色
  '#16a085', // 暗青色
  '#8e44ad', // 深紫色
  '#27ae60', // 深绿色
  '#2980b9', // 深蓝色
  '#f1c40f', // 黄色
  '#e67e22', // 浅橙色
  '#7f8c8d'  // 灰色
];

// 特殊网站的配置
const specialSites = {
  'iFixit': {
    bgColor: '#0071CE',
    textContent: 'i',
    extraSVG: '<path d="M20,32 Q20,36 24,36 L28,36 Q32,36 32,32 L32,20 L20,20 Z" fill="white" opacity="0.3" />'
  },
  'AutoZone': {
    bgColor: '#d52b1e',
    textContent: 'A',
    extraSVG: '<rect x="10" y="22" width="20" height="8" fill="white" opacity="0.3" />'
  },
  'WikiHow': {
    bgColor: '#66B500',
    textContent: 'W',
    extraSVG: '<path d="M30,15 L35,20 L30,25 L25,20 Z" fill="white" opacity="0.3" />'
  },
  'Reddit': {
    bgColor: '#FF4500',
    textContent: 'R',
    extraSVG: '<circle cx="15" cy="15" r="5" fill="white" opacity="0.3" /><circle cx="25" cy="15" r="5" fill="white" opacity="0.3" />'
  },
  'YouTube': {
    bgColor: '#FF0000',
    textContent: 'Y',
    extraSVG: '<rect x="10" y="15" width="20" height="10" rx="3" ry="3" fill="white" opacity="0.3" />'
  },
  'EEVblog': {
    bgColor: '#4285F4',
    textContent: 'E',
    extraSVG: '<path d="M32,20 L24,28 L16,20 L24,12 Z" fill="white" opacity="0.3" />'
  },
  // 新增网站配置
  'Instructables': {
    bgColor: '#f8b514',
    textContent: 'I',
    extraSVG: '<rect x="12" y="12" width="16" height="16" fill="white" opacity="0.3" />'
  },
  'Stack Exchange': {
    bgColor: '#1E5397',
    textContent: 'S',
    extraSVG: '<rect x="12" y="18" width="16" height="4" fill="white" opacity="0.3" /><rect x="12" y="12" width="16" height="4" fill="white" opacity="0.3" /><rect x="12" y="24" width="16" height="4" fill="white" opacity="0.3" />'
  },
  'Fix.com': {
    bgColor: '#35B6E7',
    textContent: 'F',
    extraSVG: '<rect x="10" y="20" width="20" height="2" fill="white" opacity="0.3" />'
  },
  'REI': {
    bgColor: '#1c6937',
    textContent: 'R',
    extraSVG: '<path d="M25,15 L32,15 L32,25 L25,25 Z" fill="white" opacity="0.3" />'
  },
  'Manualslib': {
    bgColor: '#0f4b81',
    textContent: 'M',
    extraSVG: '<path d="M12,12 L28,12 L28,18 L20,28 L12,18 Z" fill="white" opacity="0.3" />'
  },
  'YourMechanic': {
    bgColor: '#FF6B00',
    textContent: 'Y',
    extraSVG: '<circle cx="20" cy="20" r="8" fill="white" opacity="0.2" />'
  },
  'VEVO': {
    bgColor: '#FF0000',
    textContent: 'V',
    extraSVG: '<polygon points="20,10 30,20 20,30 10,20" fill="white" opacity="0.3" />'
  },
  'Amazon': {
    bgColor: '#FF9900',
    textContent: 'A',
    extraSVG: '<path d="M10,20 Q20,30 30,20" stroke="white" stroke-width="2" fill="none" />'
  },
  '易修': {
    bgColor: '#4CAF50',
    textContent: '易',
    extraSVG: '<rect x="12" y="25" width="16" height="3" fill="white" opacity="0.3" />'
  },
  'YiXiu': {
    bgColor: '#4CAF50',
    textContent: 'Y',
    extraSVG: '<rect x="12" y="25" width="16" height="3" fill="white" opacity="0.3" />'
  },
  // 更多新增网站
  'RepairClinic': {
    bgColor: '#3366cc',
    textContent: 'R',
    extraSVG: '<path d="M15,20 L25,20 L25,30 L20,25 L15,30 Z" fill="white" opacity="0.3" />'
  },
  'DIY网': {
    bgColor: '#00a651',
    textContent: 'D',
    extraSVG: '<circle cx="20" cy="20" r="8" fill="white" opacity="0.2" />'
  },
  '修理屋': {
    bgColor: '#8B4513',
    textContent: '修',
    extraSVG: '<rect x="10" y="26" width="20" height="4" fill="white" opacity="0.3" />'
  },
  'Doityourself': {
    bgColor: '#D32F2F',
    textContent: 'D',
    extraSVG: '<path d="M10,15 L30,15 L30,25 L10,25 Z" fill="white" opacity="0.15" />'
  },
  'HGTV': {
    bgColor: '#0C4DA2',
    textContent: 'H',
    extraSVG: '<path d="M15,10 L25,10 L25,30 L15,30 Z" fill="white" opacity="0.2" />'
  },
  'Popular Mechanics': {
    bgColor: '#EF6C00',
    textContent: 'P',
    extraSVG: '<rect x="15" y="15" width="15" height="3" fill="white" opacity="0.3" /><rect x="15" y="21" width="15" height="3" fill="white" opacity="0.3" />'
  },
  'ChipRepair': {
    bgColor: '#673AB7',
    textContent: 'C',
    extraSVG: '<rect x="15" y="15" width="10" height="10" fill="white" opacity="0.2" />'
  },
  'DIYNetwork': {
    bgColor: '#4CAF50',
    textContent: 'D',
    extraSVG: '<path d="M12,28 L28,28 L28,12 Z" fill="white" opacity="0.2" />'
  },
  'CarTalk': {
    bgColor: '#1976D2',
    textContent: 'C',
    extraSVG: '<circle cx="27" cy="15" r="5" fill="white" opacity="0.2" />'
  },
  'ThisOldHouse': {
    bgColor: '#795548', 
    textContent: 'T',
    extraSVG: '<rect x="15" y="25" width="10" height="5" fill="white" opacity="0.3" />'
  },
  'RepairPal': {
    bgColor: '#03A9F4',
    textContent: 'R',
    extraSVG: '<circle cx="28" cy="12" r="4" fill="white" opacity="0.2" />'
  },
  'Family Handyman': {
    bgColor: '#E53935',
    textContent: 'F',
    extraSVG: '<path d="M15,15 L25,15 L25,25 L15,25 Z" fill="white" opacity="0.2" />'
  },
  'Bob Vila': {
    bgColor: '#607D8B',
    textContent: 'B',
    extraSVG: '<path d="M20,10 L30,20 L20,30 L10,20 Z" fill="white" opacity="0.15" />'
  },
  'AutoMD': {
    bgColor: '#FF5722',
    textContent: 'A',
    extraSVG: '<rect x="12" y="22" width="16" height="2" fill="white" opacity="0.3" />'
  },
  'Fixya': {
    bgColor: '#009688',
    textContent: 'F',
    extraSVG: '<path d="M15,25 L25,25 L20,30 Z" fill="white" opacity="0.2" />'
  },
  'RepairShopSolutions': {
    bgColor: '#673AB7',
    textContent: 'R',
    extraSVG: '<rect x="12" y="20" width="16" height="5" fill="white" opacity="0.2" />'
  }
};

/**
 * 根据字符串生成一个0-14的哈希值
 * @param {string} str - 输入字符串
 * @return {number} - 0到14之间的哈希值
 */
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash; // 转换为32位整数
  }
  // 确保结果在0-14之间
  return Math.abs(hash) % iconColors.length;
}

/**
 * 生成基于首字母的SVG图标 - 高级版本
 * @param {string} siteName - 网站名称
 * @param {number} size - 图标大小（像素）
 * @return {string} - SVG图标代码
 */
function generateLetterIcon(siteName, size = 40) {
  // 检查是否有特殊网站配置
  const siteKey = Object.keys(specialSites).find(key => 
    siteName.toLowerCase().includes(key.toLowerCase())
  );
  
  let bgColor, textContent, extraSVG = '';
  
  if (siteKey) {
    // 使用特殊网站配置
    const config = specialSites[siteKey];
    bgColor = config.bgColor;
    textContent = config.textContent;
    extraSVG = config.extraSVG || '';
  } else {
    // 获取第一个有效字符（对于非拉丁文字如中文也有效）
    textContent = siteName.trim().charAt(0).toUpperCase();
    
    // 特殊情况处理
    if (textContent === '' || !textContent) {
      textContent = 'A'; // 默认字符
    }
    
    // 基于网站名决定颜色
    const colorIndex = simpleHash(siteName);
    bgColor = iconColors[colorIndex];
  }
  
  // 生成苹果风格的圆角矩形图标
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">
    <!-- 背景圆角矩形 -->
    <rect x="0" y="0" width="40" height="40" rx="10" ry="10" fill="${bgColor}" />
    
    <!-- 首字母文本 -->
    <text x="20" y="24" fill="white" font-family="Arial, sans-serif" font-size="22" 
          font-weight="bold" text-anchor="middle">${textContent}</text>
    
    <!-- 额外的装饰元素 -->
    ${extraSVG}
    
    <!-- 高光效果 -->
    <rect x="0" y="0" width="40" height="20" rx="10" ry="10" fill="white" opacity="0.1" />
  </svg>`;
  
  return svg;
}

/**
 * 生成图标的DataURI格式
 * @param {string} siteName - 网站名称
 * @param {number} size - 图标大小
 * @return {string} - DataURI格式的SVG
 */
function generateIconDataURI(siteName, size = 40) {
  const svg = generateLetterIcon(siteName, size);
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

/**
 * 自动为页面中的卡片生成图标
 * 寻找带有指定class的元素并替换其图像
 */
function applyIconsToCards() {
  // 查找所有网站卡片
  const cards = document.querySelectorAll('.xe-widget');
  
  cards.forEach(card => {
    // 获取网站名称
    const nameElement = card.querySelector('.xe-user-name strong');
    if (!nameElement) return;
    
    const siteName = nameElement.textContent.trim();
    
    // 查找图像元素
    const imgElement = card.querySelector('.xe-user-img img');
    if (!imgElement) return;
    
    // 检查图像是否存在错误状态
    const checkImageStatus = () => {
      const src = imgElement.getAttribute('src');
      // 如果图像不存在或者已经是我们生成的图标，则应用我们的图标
      if (!src || src.includes('assets/images/logos') || src.indexOf('data:image/svg+xml;base64') === 0) {
        imgElement.src = generateIconDataURI(siteName);
      }
    };
    
    // 检查图像是否加载失败
    imgElement.onerror = function() {
      this.src = generateIconDataURI(siteName);
    };
    
    // 立即检查一次，确保已有的图片问题得到解决
    checkImageStatus();
  });
}

// 页面加载完成后应用图标
document.addEventListener('DOMContentLoaded', function() {
  // 延迟执行以确保所有图片都已加载完成
  setTimeout(applyIconsToCards, 500);
});

// 暴露全局函数，以便手动调用
window.generateSiteIcon = generateIconDataURI;
window.applyIconsToCards = applyIconsToCards; 