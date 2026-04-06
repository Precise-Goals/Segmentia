import re

with open(r'd:\Workspace\Coding\projects\yolo\web\src\App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Imports
imports = """import TelemetryModel from "./components/TelemetryModel";
import { MdTerminal, MdRocketLaunch, MdKeyboardDoubleArrowDown, MdAgriculture, MdPrecisionManufacturing, MdSpaceDashboard, MdLayers, MdViewInAr, MdOutput } from "react-icons/md";
"""
text = text.replace('import TelemetryModel from "./components/TelemetryModel";', imports)

# 2. Icons
def replace_icon(match):
    attrs = match.group(1)
    # Remove material-symbols-outlined from attrs
    attrs = attrs.replace('material-symbols-outlined', '').strip()
    icon_name = match.group(2).strip()
    
    mapping = {
        'terminal': 'MdTerminal',
        'rocket_launch': 'MdRocketLaunch',
        'keyboard_double_arrow_down': 'MdKeyboardDoubleArrowDown',
        'agriculture': 'MdAgriculture',
        'precision_manufacturing': 'MdPrecisionManufacturing',
        'space_dashboard': 'MdSpaceDashboard',
        'layers': 'MdLayers',
        'view_in_ar': 'MdViewInAr',
        'output': 'MdOutput',
    }
    
    comp = mapping.get(icon_name)
    if comp:
        # If attrs are empty, just <Icon /> else <Icon className="..." />
        if attrs:
            return f'<{comp} className="{attrs}" />'
        else:
            return f'<{comp} />'
    return match.group(0)

# The span might look like: <span className="material-symbols-outlined text-[#FF4500] text-lg">terminal</span>
# We capture everything inside className="..."
def process_span(match):
    raw_span = match.group(0)
    # Extract className content
    class_match = re.search(r'className="([^"]*)"', raw_span)
    classes = class_match.group(1) if class_match else ""
    classes = classes.replace('material-symbols-outlined', '').strip()
    
    icon_name = match.group(1).strip()
    mapping = {
        'terminal': 'MdTerminal',
        'rocket_launch': 'MdRocketLaunch',
        'keyboard_double_arrow_down': 'MdKeyboardDoubleArrowDown',
        'agriculture': 'MdAgriculture',
        'precision_manufacturing': 'MdPrecisionManufacturing',
        'space_dashboard': 'MdSpaceDashboard',
        'layers': 'MdLayers',
        'view_in_ar': 'MdViewInAr',
        'output': 'MdOutput',
    }
    comp = mapping.get(icon_name)
    if comp:
        if classes:
            # collapse multiple spaces magically
            classes = " ".join(classes.split())
            return f'<{comp} className="{classes}" />'
        else:
            return f'<{comp} />'
    return raw_span

text = re.sub(r'<span[^>]*>([^<]+)</span>', lambda m: process_span(m) if 'material-symbols-outlined' in m.group(0) else m.group(0), text)

# 3. Grayscale
text = text.replace('grayscale group-hover:grayscale-0', '')
text = text.replace('grayscale hover:grayscale-0', '')
text = text.replace('filter  ', '')
text = text.replace('filter  transition', 'transition') # Handle spaces

# 4. Bento Grid
text = text.replace('<div className="grid grid-cols-1 md:grid-cols-4 gap-8">', '<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:grid-rows-[284px_284px_284px] auto-rows-[284px]">')

text = text.replace('<div className="md:col-span-2 relative h-[600px] rounded-sm overflow-hidden group">', '<div className="md:col-span-2 md:row-span-2 relative h-full rounded-sm overflow-hidden group">')
text = text.replace('<div className="md:col-span-2 relative h-[600px] rounded-sm overflow-hidden group md:-mt-[284px]">', '<div className="md:col-span-2 md:row-span-2 relative h-full rounded-sm overflow-hidden group">')
text = text.replace('<div className="relative h-[284px] rounded-sm overflow-hidden group">', '<div className="md:col-span-1 md:row-span-1 relative h-full rounded-sm overflow-hidden group">')
text = text.replace('<div className="md:col-span-2 relative h-[284px] rounded-sm overflow-hidden group">', '<div className="md:col-span-2 md:row-span-1 relative h-full rounded-sm overflow-hidden group">')


# Double space cleanup in classNames
def cleanup_spaces(match):
    s = match.group(1)
    s = " ".join(s.split())
    return f'className="{s}"'
text = re.sub(r'className="([^"]*)"', cleanup_spaces, text)

with open(r'd:\Workspace\Coding\projects\yolo\web\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Success")
