import { Link } from 'react-router-dom';
import Container from '../shared/Container';

const Footer = () => {
  return (
    <Container className="bg-background">
      <div className="py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-yellowtail text-primary">
              Organic
            </Link>
            <p className="mt-4 text-text-light">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
              text of the printing.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold text-text mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-text-light hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-text-light hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/shop" className="text-text-light hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/projects" className="text-text-light hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/news" className="text-text-light hover:text-primary transition-colors">
                News
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-text mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-text">Email</p>
                <a
                  href="mailto:needhelp@organic.com"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  needhelp@organic.com
                </a>
              </div>
              <div>
                <p className="font-bold text-text">Phone</p>
                <a
                  href="tel:+666888888"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  666 888 888
                </a>
              </div>
              <div>
                <p className="font-bold text-text">Address</p>
                <p className="text-text-light">88 road, Brooklyn street, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-text-light">
            Copyright © {new Date().getFullYear()} Organic. All rights reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
