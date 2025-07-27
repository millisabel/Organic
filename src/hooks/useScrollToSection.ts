import { useSectionWithScroll } from './useSectionWithScroll';

interface UseScrollToSectionOptions {
  delay?: number;
}

export const useScrollToSection = (options: UseScrollToSectionOptions = {}) => {
  const { delay = 100 } = options;
  const { sectionRef, scrollToTop } = useSectionWithScroll(null);

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const section = document.querySelector(`[id="${sectionId}"]`) as HTMLElement;
      if (section) {
        sectionRef.current = section;
        scrollToTop();
      }
    }, delay);
  };

  return { scrollToSection };
};
