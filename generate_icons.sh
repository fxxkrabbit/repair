#!/bin/bash

# 创建目标目录
mkdir -p assets/images/logos

# 定义颜色数组 - 使用扁平化配色
colors=(
    "#00BCD4" "#FF5722" "#4CAF50" "#2196F3" "#FFC107" "#9C27B0" 
    "#F44336" "#3F51B5" "#009688" "#FF9800" "#E91E63" "#795548"
    "#CDDC39" "#673AB7" "#03A9F4" "#8BC34A"
)

# 生成SVG图标的函数
generate_svg() {
    local name=$1
    local color=$2
    local letter=${name:0:1}
    local filename=$(echo $name | tr '[:upper:]' '[:lower:]')
    
    cat > "assets/images/logos/${filename}.svg" << EOF
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="circle_${filename}">
            <circle cx="50" cy="50" r="40"/>
        </clipPath>
    </defs>
    
    <!-- 主背景圆形 -->
    <circle cx="50" cy="50" r="40" fill="${color}"/>
    
    <!-- 右下角装饰形状 -->
    <circle cx="70" cy="70" r="25" fill="white" opacity="0.1"/>
    
    <!-- 文字 -->
    <text x="50" y="50" 
          font-family="-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif" 
          font-size="32" 
          font-weight="600" 
          fill="white" 
          text-anchor="middle" 
          dominant-baseline="middle"
          style="text-transform: uppercase;">
        ${letter}
    </text>
</svg>
EOF
}

# 原有网站的图标
generate_svg "ifixit" "${colors[0]}"
generate_svg "instructables" "${colors[1]}"
generate_svg "wikihow" "${colors[2]}"
generate_svg "autozone" "${colors[3]}"
generate_svg "vevor" "${colors[4]}"
generate_svg "amazon" "${colors[5]}"
generate_svg "youtube" "${colors[6]}"
generate_svg "fix" "${colors[7]}"
generate_svg "rei" "${colors[8]}"
generate_svg "repairorg" "${colors[9]}"
generate_svg "warehouse" "${colors[10]}"
generate_svg "reddit" "${colors[11]}"
generate_svg "stack" "${colors[12]}"
generate_svg "manualslib" "${colors[13]}"
generate_svg "appliance" "${colors[14]}"
generate_svg "yxlady" "${colors[15]}"

# 新增网站的图标
generate_svg "repairclinic" "${colors[0]}"
generate_svg "familyhandyman" "${colors[1]}"
generate_svg "doityourself" "${colors[2]}"
generate_svg "chilton" "${colors[3]}"
generate_svg "rockauto" "${colors[4]}"
generate_svg "carkiosk" "${colors[5]}"
generate_svg "eevblog" "${colors[6]}"
generate_svg "esr" "${colors[7]}"
generate_svg "jestine" "${colors[8]}"
generate_svg "oldhouse" "${colors[9]}"
generate_svg "bobvila" "${colors[10]}"
generate_svg "lawnmower" "${colors[11]}"
generate_svg "partsselect" "${colors[12]}"
generate_svg "repairalliance" "${colors[13]}"
generate_svg "parts" "${colors[14]}"
generate_svg "fixya" "${colors[15]}"
generate_svg "repairshout" "${colors[0]}"
generate_svg "hackaday" "${colors[1]}"
generate_svg "espares" "${colors[2]}"
generate_svg "repairfaq" "${colors[3]}"
generate_svg "servicemanuals" "${colors[4]}"
generate_svg "gardentech" "${colors[5]}"
generate_svg "gardentools" "${colors[6]}"
generate_svg "lawnsite" "${colors[7]}"

echo "SVG图标生成完成" 