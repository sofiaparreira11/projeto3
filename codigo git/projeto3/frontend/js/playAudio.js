function playAudioInSection(sectionId, audioId) {
    const section = document.getElementById(sectionId);
  
    const audio = document.getElementById(audioId);
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      if (isElementInViewport(section)) {
        audio.play();
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  }
  
  playAudioInSection("section1", "section1Audio");
  