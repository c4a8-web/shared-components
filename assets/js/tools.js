class Tools {
  static scrollIntoView(element) {
    if (element) {
      const headerOffset = document.querySelector("header").offsetHeight + 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });
    }
  }
}

export default Tools;
