import CompanyInfo from './complnens/CompanyInfo';
import Copyright from './complnens/Copyright';
import Links from './complnens/Links';

const PAGES = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
  {
    title: 'Cart',
    href: '/cart',
  },
];

const CONTACTS = [
  {
    title: 'Email',
    href: 'mailto:needhelp@organia.com',
    value: 'needhelp@organia.com',
  },
  {
    title: 'Phone',
    href: 'tel:666888888',
    value: '666 888 888',
  },
  {
    title: 'Address',
    href: 'https://www.google.com/maps/place/88+road,+borklyn+street,+USA/@40.7127755,-74.0059731,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2585ff9df2f6d:0xf876cceb6e3fae97!8m2!3d40.7127755!4d-74.0037844',
    value: '88 road, borklyn street, USA',
  },
];

const Footer = () => {
  return (
    <footer className="bg-background-secondary">
      <div className="border-b border-border mb-6">
        <div className="container grid grid-cols-1 gap-12 text-center lg:grid-cols-3 lg:gap-8 lg:text-left py-24">
          <Links
            title="Contact Us"
            data={CONTACTS}
            className="lg:pr-12 lg:justify-self-end lg:text-right"
          />
          <CompanyInfo className="flex flex-col items-center gap-8 border-b-2 border-t-2 lg:border-b-0 lg:border-t-0 lg:border-l-2 lg:border-r-2 py-8 lg:py-0 lg:px-12" />
          <Links title="Pages" data={PAGES} className="lg:pl-12" />
        </div>
      </div>
      <div className="m-auto p-4">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
