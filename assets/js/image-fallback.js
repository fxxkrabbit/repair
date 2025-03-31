/**
 * 图片加载失败时自动替换为SVG图标
 * 解决网站图片无法加载的问题
 */

(function() {
  // 等待页面完全加载
  document.addEventListener('DOMContentLoaded', function() {
    // 确保icon-generator.js已加载
    if (typeof window.generateSiteIcon !== 'function') {
      console.warn('图标生成器未加载，无法自动替换缺失图片');
      return;
    }
    
    // 替换所有图像
    replaceMissingImages();
    
    // 500ms后再次检查，以捕获任何延迟加载的图像
    setTimeout(replaceMissingImages, 500);
    
    // 2秒后进行最后一次检查
    setTimeout(replaceMissingImages, 2000);
  });
  
  /**
   * 检测并替换所有缺失的图像
   */
  function replaceMissingImages() {
    // 查找所有卡片中的图像
    const images = document.querySelectorAll('.xe-user-img img');
    
    images.forEach(function(img) {
      // 检查图像是否已加载
      if (!img.complete || img.naturalHeight === 0) {
        // 图像未加载，查找网站名称
        const card = findParentCard(img);
        if (!card) return;
        
        const nameElement = card.querySelector('.xe-user-name strong');
        if (!nameElement) return;
        
        const siteName = nameElement.textContent.trim();
        
        // 使用SVG图标替换
        img.src = window.generateSiteIcon(siteName);
        
        // 记录替换操作
        console.log('已替换缺失图片为SVG图标: ' + siteName);
      }
    });
  }
  
  /**
   * 查找图片所在的卡片元素
   * @param {HTMLElement} img - 图片元素
   * @return {HTMLElement|null} - 卡片元素
   */
  function findParentCard(img) {
    let parent = img.parentElement;
    while (parent && !parent.classList.contains('xe-widget')) {
      parent = parent.parentElement;
    }
    return parent;
  }
  
  /**
   * 监听所有图片的错误事件
   */
  function setupImageErrorListeners() {
    document.addEventListener('error', function(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'img') {
        // 查找网站名称
        const card = findParentCard(target);
        if (!card) return;
        
        const nameElement = card.querySelector('.xe-user-name strong');
        if (!nameElement) return;
        
        const siteName = nameElement.textContent.trim();
        
        // 使用SVG图标替换
        if (typeof window.generateSiteIcon === 'function') {
          target.src = window.generateSiteIcon(siteName);
        }
      }
    }, true); // 使用捕获阶段
  }
  
  // 设置图片错误监听
  setupImageErrorListeners();
  
})(); 