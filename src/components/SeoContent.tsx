import { profile } from '@/data/profile'
import { siteConfig, SITE_URL } from '@/lib/site'

export function SeoContent() {
  return (
    <article className="sr-only">
      <h1>{profile.name} — Frontend Engineer Portfolio</h1>
      <p>{siteConfig.description}</p>
      <p>
        Based in {profile.location}. Open to frontend roles using Angular, React,
        Next.js, and TypeScript with bilingual English and Arabic (RTL) interfaces.
      </p>
      <nav aria-label="Primary links">
        <ul>
          <li>
            <a href={SITE_URL}>Portfolio home</a>
          </li>
          <li>
            <a href={profile.github}>GitHub profile</a>
          </li>
          <li>
            <a href={profile.linkedin}>LinkedIn profile</a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>Email {profile.email}</a>
          </li>
        </ul>
      </nav>
    </article>
  )
}
