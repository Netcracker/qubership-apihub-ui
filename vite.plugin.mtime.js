// vite.plugin.mtime.js
export default function mtimeLoggerPlugin() {
  return {
    name: 'vite-plugin-mtime-logger',
    closeBundle() {
      const fs = require('fs')
      const path = require('path')
      const walk = (dir) => {
        for (const file of fs.readdirSync(dir)) {
          const fullPath = path.join(dir, file)
          const stat = fs.statSync(fullPath)
          if (stat.isDirectory()) {
            walk(fullPath)
          } else {
            console.log(`[mtime] ${fullPath}: ${stat.mtime.toISOString()}`)
          }
        }
      }
      walk('./dist')
    },
  }
}
