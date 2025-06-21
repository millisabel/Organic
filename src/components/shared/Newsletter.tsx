import newsletterBg from '@assets/images/backgrounds/newslatteer_bg.webp';

import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';

const Newsletter = () => {
  const sectionStyle = {
    backgroundImage: `url(${newsletterBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="bg-cover bg-center bg-no-repeat">
      <div style={sectionStyle} className="container mx-auto px-2 lg:px-20 py-24 xs:rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 rounded-lg">
          <h2 className="section-title w-full text-center text-white lg:w-1/3 lg:text-left">
            Subscribe to our Newsletter
          </h2>
          <form className="flex w-full flex-col items-center space-y-4 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
            <Input
              id="email-newsletter"
              name="email"
              type="email"
              placeholder="Your Email Address"
              className="!py-5 rounded-xl text-2xl placeholder:italic placeholder:text-2xl"
              wrapperClassName="w-full lg:w-[350px] shrink-0"
            />
            <Button type="submit" variant="default" className="!py-4 text-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
