window.addEventListener('scroll', function () {
  var header = document.querySelector('.sticky-header');
  var hamburgerIcon = document.querySelectorAll('.navbar-toggler-icon');

  // List of all possible section classes that trigger the white header
  const sectionSelectors = [
    '.services_section',
    '.aboutpage_aboutus_section',
    '.pricing_plans_section',
    '.our_team_section',
    '.message_section',
  ];

  // Find the first section that exists on the current page
  let triggerSection = null;
  let triggerOffset = Infinity;

  // Check each section and find the one with the smallest offset
  sectionSelectors.forEach((selector) => {
    const section = document.querySelector(selector);
    if (section) {
      const sectionOffset = section.offsetTop;
      if (sectionOffset < triggerOffset) {
        triggerOffset = sectionOffset;
        triggerSection = section;
      }
    }
  });

  // Adjust trigger point to change color slightly before reaching the section
  const triggerPoint = triggerSection
    ? triggerOffset - header.offsetHeight
    : Infinity;

  // Default styling at the top - transparent
  if (window.scrollY <= 50) {
    header.style.padding = '10px 0';
    header.style.backgroundColor = 'transparent';
    header.classList.remove('solid-background');

    // Set hamburger icon to white for transparent background
    hamburgerIcon.forEach((icon) => {
      icon.style.backgroundColor = '#ffffff';
    });
    return;
  }

  // When scrolled down past 50px
  header.style.padding = '5px 0';

  // If we've scrolled to or past any trigger section
  if (window.scrollY >= triggerPoint) {
    header.style.backgroundColor = '#ffffff'; // White background
    header.classList.add('solid-background');

    // Set hamburger icon to black for white background
    hamburgerIcon.forEach((icon) => {
      icon.style.backgroundColor = '#000000';
    });
  } else {
    header.style.backgroundColor = 'transparent'; // Keep transparent until target sections
    header.classList.remove('solid-background');

    // Set hamburger icon to white for transparent background
    hamburgerIcon.forEach((icon) => {
      icon.style.backgroundColor = '#ffffff';
    });
  }
});

// Run once on page load to set initial state
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.sticky-header');
  var hamburgerIcon = document.querySelectorAll('.navbar-toggler-icon');

  // Set initial state to transparent
  header.style.backgroundColor = 'transparent';

  // Set initial hamburger icon color to white
  hamburgerIcon.forEach((icon) => {
    icon.style.backgroundColor = '#ffffff';
  });

  // Initialize based on current scroll position
  if (window.scrollY > 50) {
    header.style.padding = '5px 0';

    // Check if we're already at a section that needs white background
    const sectionSelectors = [
      '.services_section',
      '.aboutpage_aboutus_section',
      '.pricing_plans_section',
      '.our_team_section',
      '.message_section',
    ];

    // Find the first section that exists on the current page
    let triggerSection = null;
    let triggerOffset = Infinity;

    sectionSelectors.forEach((selector) => {
      const section = document.querySelector(selector);
      if (section) {
        const sectionOffset = section.offsetTop;
        if (sectionOffset < triggerOffset) {
          triggerOffset = sectionOffset;
          triggerSection = section;
        }
      }
    });

    const triggerPoint = triggerSection
      ? triggerOffset - header.offsetHeight
      : Infinity;

    if (window.scrollY >= triggerPoint) {
      header.style.backgroundColor = '#ffffff';
      header.classList.add('solid-background');

      // Set hamburger icon to black for white background
      hamburgerIcon.forEach((icon) => {
        icon.style.backgroundColor = '#000000';
      });
    }
  } else {
    header.style.padding = '10px 0';
  }
});
