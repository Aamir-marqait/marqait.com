export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const scrollToProducts = () => scrollToSection("products");
export const scrollToCopilot = () => scrollToSection("copilot");
export const scrollToWhatGrowthPods = () => scrollToSection("what-growth-pods");
export const scrollToHowGrowthPodsWork = () =>
  scrollToSection("how-growth-pods-work");
export const scrollToWhoItsFor = () => scrollToSection("who-its-for");
export const scrollToWhyBusinessNeeds = () =>
  scrollToSection("why-business-needs");
