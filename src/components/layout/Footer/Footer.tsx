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

// import SocialButtonsList from '@/components/shared/Button/SocialButton/SocialButton';
// import Logo from '../ui/Logo';

// const SOCIALS_FOOTER = {
//   facebook: 'https://facebook.com/',
//   instagram: 'https://instagram.com/',
//   twitter: 'https://www.twitter.com',
//   pinterest: 'https://www.pinterest.com',
// };

const Footer = () => {
  return (
    <footer className="bg-background-secondary">
      <div className="border-b border-border mb-6">
        <div className="container grid grid-cols-1 gap-12 text-center lg:grid-cols-3 lg:gap-8 lg:text-left py-24">
          <Links title="Contact Us" data={CONTACTS} className="lg:justify-self-end lg:text-right" />
          <Links title="Pages" data={PAGES} className="lg:justify-self-center" />
          {/*  

            <div className="flex flex-col items-center border-x-0 border-b-2 border-t-2 border-border px-8 py-8 lg:border-x-2 lg:border-y-0 lg:py-0">
              <Logo />
              <p className="my-6 text-center text-text-light">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
                text of the printing.
              </p>
              <SocialButtonsList socials={SOCIALS_FOOTER} />
            </div>

           */}
        </div>
      </div>
      <div className="m-auto p-4">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
