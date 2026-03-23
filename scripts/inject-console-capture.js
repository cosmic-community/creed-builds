const fs = require('fs')
const path = require('path')

const outDir = path.join(__dirname, '..', '.next')

function injectScript(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('/dashboard-console-capture.js')) {
    return
  }

  const injected = content.replace(
    '</head>',
    '<script src="/dashboard-console-capture.js"></script></head>'
  )
  fs.writeFileSync(filePath, injected, 'utf8')
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(fullPath)
    } else if (entry.isFile() && fullPath.endsWith('.html')) {
      injectScript(fullPath)
    }
  }
}

if (fs.existsSync(outDir)) {
  walkDir(outDir)
}