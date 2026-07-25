import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const base64 = readFileSync(join(root, 'public/profile.jpg')).toString('base64')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <defs>
    <clipPath id="c">
      <circle cx="24" cy="24" r="24" />
    </clipPath>
  </defs>
  <image
    href="data:image/jpeg;base64,${base64}"
    width="48"
    height="48"
    clip-path="url(#c)"
    preserveAspectRatio="xMidYMin slice"
  />
</svg>
`

writeFileSync(join(root, 'public/favicon.svg'), svg)
console.log('Wrote public/favicon.svg')
