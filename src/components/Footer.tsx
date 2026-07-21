import { Container } from '@/design-system/Section'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-mist-dim md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {profile.name}. Crafted with React & TypeScript.
        </p>
        <p>Alexandria, Egypt · EN / AR</p>
      </Container>
    </footer>
  )
}
