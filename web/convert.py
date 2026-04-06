import re

with open('src/design/code.html', 'r', encoding='utf-8') as f:
    text = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', text, re.DOTALL)
if body_match:
    jsx = body_match.group(1)
    jsx = jsx.replace('class=', 'className=')
    jsx = re.sub(r'<model-viewer[^>]*>.*?</model-viewer>', '<TelemetryModel />', jsx, flags=re.DOTALL)
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx)
    jsx = jsx.replace('<br>', '<br/>')
    
    with open('src/App.jsx', 'w', encoding='utf-8') as f:
        f.write('import React from "react";\n')
        f.write('import TelemetryModel from "./components/TelemetryModel";\n\n')
        f.write('function App() {\n')
        f.write('  return (\n')
        f.write('    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">\n')
        f.write(jsx)
        f.write('    </div>\n')
        f.write('  );\n')
        f.write('}\n\n')
        f.write('export default App;\n')
    print("Success")
