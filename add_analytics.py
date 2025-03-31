#!/usr/bin/env python3

import os
import re
import glob

# GA跟踪代码
GA_CODE = '''<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VYVYRST3N9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VYVYRST3N9');
</script>
'''

# 查找所有HTML文件
html_files = glob.glob('**/*.html', recursive=True)
print(f"找到 {len(html_files)} 个HTML文件需要更新")

# 处理每个HTML文件
for file_path in html_files:
    print(f"处理文件: {file_path}")
    
    # 读取文件内容
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 检查文件是否已经包含GA代码
    if 'G-VYVYRST3N9' in content:
        print(f"  跳过: 文件已包含GA代码")
        continue
    
    # 在</head>标签前添加GA代码
    updated_content = re.sub(r'</head>', f"{GA_CODE}</head>", content)
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)
    
    print(f"  完成: 已添加GA代码")

print("所有HTML文件处理完成!") 