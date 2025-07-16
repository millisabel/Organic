import { Link } from 'react-router-dom';

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
      <div className="container mx-auto px-4">
        <div className="py-24">
          <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-3 lg:gap-8 lg:text-left">
            {/* Contact Us */}
            <div className="lg:justify-self-end lg:text-right">
              <h3 className="mb-8 font-roboto text-3xl font-bold text-primary">Contact Us</h3>
              <div className="space-y-5">
                <div>
                  <p className="font-bold text-text-light">Email</p>
                  {/* <FooterContactLink href="mailto:needhelp@organia.com">
                    needhelp@organia.com
                  </FooterContactLink> */}
                </div>
                <div>
                  <p className="font-bold text-text-light">Phone</p>
                  {/* <FooterContactLink href="tel:666888888">666 888 888</FooterContactLink> */}
                </div>
                <div>
                  <p className="font-bold text-text-light">Address</p>
                  <p className="text-text-light">88 road, borklyn street, USA</p>
                </div>
              </div>
            </div>

            {/* Company Info & Socials */}
            {/* <div className="flex flex-col items-center border-x-0 border-b-2 border-t-2 border-border px-8 py-8 lg:border-x-2 lg:border-y-0 lg:py-0">
              <Logo />
              <p className="my-6 text-center text-text-light">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
                text of the printing.
              </p>
              <SocialButtonsList socials={SOCIALS_FOOTER} />
            </div> */}

            {/* Utility Pages */}
            <div>
              <h3 className="mb-8 font-roboto text-3xl font-bold text-primary">Utility Pages</h3>
              <div className="flex flex-col items-center space-y-4 text-text-light lg:items-start">
                <Link
                  to="/style-guide"
                  className="transition-colors hover:text-secondary hover:-translate-y-0.5 duration-300"
                >
                  Style Guide
                </Link>
                <Link
                  to="/404"
                  className="transition-colors hover:text-secondary hover:-translate-y-0.5"
                >
                  404 Not Found
                </Link>
                <Link
                  to="/password-protected"
                  className="transition-colors hover:text-secondary hover:-translate-y-0.5"
                >
                  Password Protected
                </Link>
                <Link
                  to="/licences"
                  className="transition-colors hover:text-secondary hover:-translate-y-0.5"
                >
                  Licences
                </Link>
                <Link
                  to="/changelog"
                  className="transition-colors hover:text-secondary hover:-translate-y-0.5"
                >
                  Changelog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center">
          <p className="text-sm text-text-light">
            Copyright © {new Date().getFullYear()} Organick. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
