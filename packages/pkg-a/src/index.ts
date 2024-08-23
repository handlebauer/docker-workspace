import { pkgB } from 'pkg-b'
import { config } from '~/config'

console.log(`${config.PACKAGE_NAME} (v${config.VERSION})`)
pkgB()
