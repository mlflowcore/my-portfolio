// Smooth scroll utility
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Offset for navbar
      behavior: 'smooth'
    });
  }
};