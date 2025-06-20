import { Link } from 'react-router-dom';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import PinterestIcon from '../icons/PinterestIcon';
import TwitterIcon from '../icons/TwitterIcon';
import Container from '../shared/Container';
import { Button } from '../ui/Button';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <Container>
      <div className="py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
          {/* Contact Us */}
          <div className="md:justify-self-end">
            <h3 className="mb-6 font-roboto text-3xl font-bold text-primary">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-primary">Email</p>
                <a
                  href="mailto:needhelp@organic.com"
                  className="text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary"
                >
                  needhelp@organia.com
                </a>
              </div>
              <div>
                <p className="font-bold text-primary">Phone</p>
                <a
                  href="tel:+666888888"
                  className="text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary"
                >
                  666 888 888
                </a>
              </div>
              <div>
                <p className="font-bold text-primary">Address</p>
                <p className="text-text-light">88 road, borklyn street, USA</p>
              </div>
            </div>
          </div>

          {/* Company Info & Socials */}
          <div className="flex flex-col items-center border-x-2 border-gray-200 px-8">
            <Logo />
            <p className="my-6 text-center text-text-light">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
              text of the printing.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="social" size="icon-lg" asChild>
                <a href="https://instagram.com" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </Button>
              <Button variant="social" size="icon-lg" asChild>
                <a href="https://facebook.com" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              </Button>
              <Button variant="social" size="icon-lg" asChild>
                <a href="https://twitter.com" aria-label="Twitter">
                  <TwitterIcon />
                </a>
              </Button>
              <Button variant="social" size="icon-lg" asChild>
                <a href="https://pinterest.com" aria-label="Pinterest">
                  <PinterestIcon />
                </a>
              </Button>
            </div>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="mb-6 font-roboto text-3xl font-bold text-primary">Utility Pages</h3>
            <nav className="flex flex-col items-center space-y-2 md:items-start">
              <Link
                to="/style-guide"
                className="text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary"
              >
                Style Guide
              </Link>
              <Link
                to="/404"
                className="text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary"
              >
                404 Not Found
              </Link>
              <Link
                to="/password-protected"
                className="text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary"
              >
                Password Protected
              </Link>
              <Link
                to="/licences"
                className="text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary"
              >
                Licences
              </Link>
              <Link
                to="/changelog"
                className="text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary"
              >
                Changelog
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-text-light">
            Copyright © {new Date().getFullYear()} Organick. All Rights Reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
