import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vite'

export default function createVersionJsonFilePlugin(): Plugin {

  return {
    name: 'create-version-json-file',
    async closeBundle() {
      console.log('📦 Сборка завершена. Создаём version.json...')

      const lernaPath = path.resolve(__dirname, 'lerna.json')
      const packagePath = path.resolve(__dirname, 'package.json')
      const outputPath = path.resolve(__dirname, 'packages/portal/dist/version.json')

      let lernaVersion = null
      let libraryVersion = null

      if (fs.existsSync(lernaPath)) {
        const lerna = JSON.parse(fs.readFileSync(lernaPath, 'utf-8'))
        lernaVersion = lerna.version || null
      }

      if (fs.existsSync(packagePath)) {
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
        libraryVersion =
          pkg.dependencies?.['@netcracker/qubership-apihub-api-processor'] ||
          null
      }

      const versionData = {
        frontend: lernaVersion,
        apiProcessor: libraryVersion,
      }

      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      }

      fs.writeFileSync(outputPath, JSON.stringify(versionData, null, 2))
      console.log(`✔ version.json успешно создан в ${outputPath}`)
    },
  }
}
