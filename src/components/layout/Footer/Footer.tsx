import Layout from '@/components/patterns/ContentLayout';
import { useNavigationLinks } from '@/hooks/useNavigationLinks';
import CompanyInfo from './complnens/CompanyInfo';
import Copyright from './complnens/Copyright';
import Links from './complnens/Links';

const Footer = () => {
  const { footer: pages, contact: contactLinks } = useNavigationLinks();

  const pagesData = pages.map(({ href, text }) => ({
    title: text,
    href,
  }));

  const contactLinksData = contactLinks.map(({ href, text }) => ({
    title: text,
    href,
  }));

  return (
    <footer className="bg-background-secondary">
      <div className="border-b border-border mb-6">
        <Layout variant="gridColumn_3" className="container py-24 sm:grid-cols-1 gap-12 lg:gap-8">
          <Links
            title="Contact Us"
            data={contactLinksData}
            className="lg:pr-12 lg:justify-self-end lg:text-right text-center"
          />
          <CompanyInfo className="flex flex-col items-center gap-8 border-b-2 border-t-2 lg:border-b-0 lg:border-t-0 lg:border-l-2 lg:border-r-2 py-8 lg:py-0 lg:px-12" />
          <Links
            title="Pages"
            data={pagesData}
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
