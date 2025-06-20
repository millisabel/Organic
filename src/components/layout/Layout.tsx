import { Outlet } from 'react-router-dom';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

import FacebookIcon from '../icons/FacebookIcon.tsx';
import InstagramIcon from '../icons/InstagramIcon.tsx';
import PinterestIcon from '../icons/PinterestIcon.tsx';
import TwitterIcon from '../icons/TwitterIcon.tsx';
import ArrowIcon from '../ui/ArrowIcon.tsx';
import { Button } from '../ui/Button/index.tsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>

        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-100 border-t">
          <Button variant="default">
            Default Button <ArrowIcon />
          </Button>
          <Button variant="accent">
            Default Button <ArrowIcon />
          </Button>
          <Button variant="outline">
            Default Button <ArrowIcon />
          </Button>
          <Button variant="destructive">Pagination Button</Button>
        </div>

        <div className="flex flex-wrap items-center gap-4 p-4 bg-white border-t">
          <Button asChild variant="social" size="icon-xl">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </Button>
          <Button asChild variant="social" size="icon-xl">
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </Button>
          <Button asChild variant="social" size="icon-xl">
            <a href="#" aria-label="Twitter">
              <TwitterIcon />
            </a>
          </Button>
          <Button asChild variant="social" size="icon-xl">
            <a href="#" aria-label="Pinterest">
              <PinterestIcon />
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
