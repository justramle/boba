
  document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add 'visible' class when the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2 // Adjust if needed to specify how much of the item must be visible
    });
  
    // Observe elements with the class '.code-ani'
    document.querySelectorAll('.code-ani').forEach(element => {
      observer.observe(element);
    });

    // Observe elements with the class '.intro-ani'
    document.querySelectorAll('.intro-ani').forEach(element => {
        observer.observe(element);
      });

    // Observe elements with the class '.boba-ani'
    document.querySelectorAll('.boba-ani').forEach(element => {
        observer.observe(element);
      });

    // Observe elements with the class '.contact-ani'
    document.querySelectorAll('.contact-ani').forEach(element => {
        observer.observe(element);
      });
  });
  