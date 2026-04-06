import re
import os

with open(r'd:\Workspace\Coding\projects\yolo\web\src\App.jsx', 'r', encoding='utf-8') as f:
    app_jsx = f.read()

# Define the sections and their component names
sections = [
    (r'\{\/\* Minimalist TopNavBar \*\/\}(.*?)\{\/\* Hero Section \*\/\}', 'NavBar'),
    (r'\{\/\* Hero Section \*\/\}(.*?)\{\/\* The Edge of the Map: Surgical Precision Approach \*\/\}', 'Hero'),
    (r'\{\/\* The Edge of the Map: Surgical Precision Approach \*\/\}(.*?)\{\/\* Telemetry Section \*\/\}', 'EdgeOfMap'),
    (r'\{\/\* Telemetry Section \*\/\}(.*?)\{\/\* Dual-Terrain Bento Grid \*\/\}', 'TelemetryArea'),
    (r'\{\/\* Dual-Terrain Bento Grid \*\/\}(.*?)\{\/\* Innovation Metrics \*\/\}', 'TransPlanetary'),
    (r'\{\/\* Innovation Metrics \*\/\}(.*?)\{\/\* Architecture Section: DeepLabV3\+ Engine \*\/\}', 'Metrics'),
    (r'\{\/\* Architecture Section: DeepLabV3\+ Engine \*\/\}(.*?)\{\/\* Business & Market Section \*\/\}', 'Architecture'),
    (r'\{\/\* Business & Market Section \*\/\}(.*?)\{\/\* Mission Architects \*\/\}', 'Markets'),
    (r'\{\/\* Mission Architects \*\/\}(.*?)\{\/\* Footer \*\/\}', 'Team'),
    (r'\{\/\* Footer \*\/\}(.*?)<\/div>\s*\);\s*\}', 'Footer')
]

components_dir = r'd:\Workspace\Coding\projects\yolo\web\src\components'
os.makedirs(components_dir, exist_ok=True)

import_mapping = {
    'MdTerminal': 'react-icons/md',
    'MdRocketLaunch': 'react-icons/md',
    'MdKeyboardDoubleArrowDown': 'react-icons/md',
    'MdAgriculture': 'react-icons/md',
    'MdPrecisionManufacturing': 'react-icons/md',
    'MdSpaceDashboard': 'react-icons/md',
    'MdLayers': 'react-icons/md',
    'MdViewInAr': 'react-icons/md',
    'MdOutput': 'react-icons/md',
    'TelemetryModel': './TelemetryModel' # Local component
}

app_imports = []
app_body = []

for regex, comp_name in sections:
    match = re.search(regex, app_jsx, re.DOTALL)
    if not match:
        print(f"Could not extract section for {comp_name}")
        continue
    
    content = match.group(1).strip()
    
    # Identify required imports for this component
    required_imports = set()
    for item, pkg in import_mapping.items():
        if f'<{item}' in content:
            required_imports.add((item, pkg))
    
    # Generate the component file content
    comp_content = f'import React from "react";\n'
    
    # Group imports by package
    pkg_to_items = {}
    for item, pkg in required_imports:
        if pkg not in pkg_to_items:
            pkg_to_items[pkg] = []
        pkg_to_items[pkg].append(item)
    
    for pkg, items in pkg_to_items.items():
        if pkg.startswith('./'):
            for item in items:
                comp_content += f'import {item} from "{pkg}";\n'
        else:
            comp_content += f'import {{ {", ".join(items)} }} from "{pkg}";\n'
            
    comp_content += f'\nexport default function {comp_name}() {{\n'
    comp_content += f'  return (\n    <>\n      {content}\n    </>\n  );\n}}\n'
    
    with open(os.path.join(components_dir, f'{comp_name}.jsx'), 'w', encoding='utf-8') as f:
        f.write(comp_content)
    
    # Modify main App variables
    app_imports.append(f'import {comp_name} from "./components/{comp_name}";')
    app_body.append(f'      <{comp_name} />')

# Write the new App.jsx
new_app_jsx = f'''import React from "react";
{chr(10).join(app_imports)}

function App() {{
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
{chr(10).join(app_body)}
    </div>
  );
}}

export default App;
'''

with open(r'd:\Workspace\Coding\projects\yolo\web\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(new_app_jsx)

print("Successfully refactored into components!")
