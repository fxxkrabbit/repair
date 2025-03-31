#!/bin/bash

# GA跟踪代码
GA_CODE='<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VYVYRST3N9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\"js\", new Date());

  gtag(\"config\", \"G-VYVYRST3N9\");
</script>'

# 查找所有HTML文件
HTML_FILES=$(find . -name "*.html")

# 计算文件数量
FILE_COUNT=$(echo "$HTML_FILES" | wc -l)
echo "找到 $FILE_COUNT 个HTML文件需要更新"

# 处理每个HTML文件
for file in $HTML_FILES; do
  echo "处理文件: $file"
  
  # 检查文件是否已经包含GA代码
  if grep -q "G-VYVYRST3N9" "$file"; then
    echo "  跳过: 文件已包含GA代码"
    continue
  fi
  
  # 使用sed将GA代码插入到</head>前
  sed -i '' "s|</head>|$GA_CODE\n</head>|" "$file"
  
  echo "  完成: 已添加GA代码"
done

echo "所有HTML文件处理完成!" 