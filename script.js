    // Script to handle active nav link based on scroll position
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('header nav a');

    function setActiveLink() {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', setActiveLink);

    // Initial call
    setActiveLink();



    // -------humberger



