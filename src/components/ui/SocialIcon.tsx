import { Github, Twitter, Linkedin, Globe } from 'lucide-react'

interface SocialIconProps {
  icon: string
  size?: number
  className?: string
}

export default function SocialIcon({ icon, size = 18, className }: SocialIconProps) {
  const props = { size, className }

  switch (icon) {
    case 'github':
      return <Github {...props} />
    case 'twitter':
      return <Twitter {...props} />
    case 'linkedin':
      return <Linkedin {...props} />
    case 'farcaster':
      // Custom Farcaster F icon as SVG
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="M5.5 3h13A2.5 2.5 0 0121 5.5v13a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5v-13A2.5 2.5 0 015.5 3zm1.438 3.5v11h2.124v-4.688h6.188v4.688h2.312V6.5H15.25v4.188H9.062V6.5H6.938z" />
        </svg>
      )
    default:
      return <Globe {...props} />
  }
}
