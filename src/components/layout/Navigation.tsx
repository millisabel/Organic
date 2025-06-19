import { Link } from 'react-router-dom'

interface NavigationProps {
  isMobile?: boolean;
}

const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/shop', label: 'Shop' },
  { path: '/projects', label: 'Projects' },
  { path: '/news', label: 'News' },
]

const Navigation = ({ isMobile = false }: NavigationProps) => {
  const baseClasses = isMobile 
    ? "flex flex-col space-y-4" 
    : "hidden md:flex items-center space-x-8"

  return (
    <nav className={baseClasses}>
      {navigationLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="text-nav-link text-text hover:text-primary transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation 