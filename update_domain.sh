#!/bin/bash

# 获取当前目录中所有分类目录
CATEGORIES=("electronics-repair" "general-repair" "home-outdoor" "repair-communities" "repair-manuals" "right-to-repair" "garden-care")

# 遍历每个分类目录
for category in "${CATEGORIES[@]}"; do
    echo "Updating $category/index.html..."
    
    # 更新 meta 标签中的域名和网站名称
    sed -i '' "s/content=\"Repair Navigator\"/content=\"RepairHub\"/g" "$category/index.html"
    sed -i '' "s/- Repair Navigator/- RepairHub/g" "$category/index.html"
    sed -i '' "s/https:\/\/repair-navigator.com/https:\/\/repairhub.top/g" "$category/index.html"
    sed -i '' "s/content=\"Repair Navigator -/content=\"RepairHub -/g" "$category/index.html"
    sed -i '' "s/site_name\">Repair Navigator/site_name\">RepairHub/g" "$category/index.html"
    
    # 更新 logo alt 文本
    sed -i '' "s/alt=\"Repair Navigator Logo\"/alt=\"RepairHub Logo\"/g" "$category/index.html"
    
    # 更新页脚版权信息
    sed -i '' "s/<strong>Repair Navigator<\/strong>/<strong>RepairHub<\/strong>/g" "$category/index.html"
done

echo "All category pages have been updated to use the new domain repairhub.top and brand name RepairHub." 