import { config } from '~/config'

export function pkgB() {
    console.log(`${config.PACKAGE_NAME} (v${config.VERSION})`)
}
