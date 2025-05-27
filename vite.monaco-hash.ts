import { createHash } from 'crypto'
import type { Plugin } from 'vite'
import * as path from 'path'
import type { Stats } from 'fs'
import * as fs from 'fs'

const ENCODING: BufferEncoding = 'utf-8'

function generateFileHash(stats: Stats): string {
  const data = `${stats.size}-${stats.birthtimeMs}`
  return createHash('sha256').update(data).digest('hex').slice(0, 10) // сократим до 10 символов
}

export interface IMonacoHashOpts {
  monacoDir: string
  htmlPath: string
}

export default function monacoHashPlugin(options: IMonacoHashOpts): Plugin {
  const { monacoDir, htmlPath } = options

  return {
    name: 'vite-plugin-monaco-hash',
    writeBundle() {
      const fileNameMap: { [key: string]: string } = {}
      const dirPath = path.resolve(process.cwd(), monacoDir)
      const entries = fs.readdirSync(dirPath, { withFileTypes: true })

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name)

        if (entry.isFile()) {
          const stats = fs.statSync(fullPath)
          const hash = generateFileHash(stats)

          const ext = path.extname(entry.name)
          const baseName = path.basename(entry.name, ext)
          const newFileName = `${baseName}-${hash}${ext}`
          const newPath = path.join(dirPath, newFileName)

          fs.renameSync(fullPath, newPath)

          fileNameMap[entry.name] = newFileName
        }
      }

      const htmlFullPath = path.resolve(process.cwd(), htmlPath)
      if (fs.existsSync(htmlFullPath)) {
        let htmlContent = fs.readFileSync(htmlFullPath, ENCODING)

        for (const [oldName, newName] of Object.entries(fileNameMap)) {
          htmlContent = htmlContent.replace(oldName, newName)
        }
        fs.writeFileSync(htmlFullPath, htmlContent, ENCODING)
      }
    },
  }
}
