import { Github, Twitter, Linkedin, Globe, Mail, ExternalLink, ArrowUpRight } from 'lucide-react'

interface SocialIconProps {
  icon: string
  size?: number
  className?: string
}

export default function SocialIcon({ icon, size = 18, className }: SocialIconProps) {
  const props = { size, className, 'aria-hidden': true } as const

  switch (icon) {
    case 'github':
      return <Github {...props} />
    case 'twitter':
      return <Twitter {...props} />
    case 'linkedin':
      return <Linkedin {...props} />
    case 'mail':
      return <Mail {...props} />
    case 'external':
      return <ExternalLink {...props} />
    case 'arrow':
      return <ArrowUpRight {...props} />
    default:
      return <Globe {...props} />
  }
}
