import NavLink from './NavLink';

interface NavigationProps {
  isMobile?: boolean;
}

const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/shop', label: 'Shop' },
  { path: '/projects', label: 'Projects' },
  { path: '/news', label: 'News' },
];

const Navigation = ({ isMobile = false }: NavigationProps) => {
  const baseClasses = isMobile
    ? 'flex flex-col space-y-4'
    : 'hidden md:flex items-center space-x-8';

  return (
    <nav className={baseClasses}>
      {navigationLinks.map(({ path, label }) => (
        <NavLink key={path} to={path}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
