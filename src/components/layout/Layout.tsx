import { Outlet } from 'react-router-dom';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

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
      </main>
      <Footer />
    </>
  );
};

export default Layout;
