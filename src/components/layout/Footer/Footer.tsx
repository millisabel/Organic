import Layout from '@/components/patterns/ContentLayout';
import { useNavigationLinks } from '@/hooks/useNavigationLinks';
import CompanyInfo from './complnens/CompanyInfo';
import Copyright from './complnens/Copyright';
import Links from './complnens/Links';

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
  const { footer: pages } = useNavigationLinks();

  const footerPages = pages.map(({ href, text }) => ({
    title: text,
    href,
  }));

  return (
    <footer className="bg-background-secondary">
      <div className="border-b border-border mb-6">
        <Layout variant="gridColumn_3" className="container py-24 sm:grid-cols-1 gap-12 lg:gap-8">
          <Links
            title="Contact Us"
            data={CONTACTS}
            className="lg:pr-12 lg:justify-self-end lg:text-right text-center"
          />
          <CompanyInfo className="flex flex-col items-center gap-8 border-b-2 border-t-2 lg:border-b-0 lg:border-t-0 lg:border-l-2 lg:border-r-2 py-8 lg:py-0 lg:px-12" />
          <Links
            title="Pages"
            data={footerPages}
            className="lg:pl-12 lg:justify-self-start text-center lg:text-left"
          />
        </Layout>
      </div>
      <div className="m-auto p-4">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
