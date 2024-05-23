document.addEventListener('DOMContentLoaded', function () {
    const sidenav = document.querySelector('.sidenav');
    const uirBtn = document.getElementById('uir-btn');
    const uirSubmenu = document.getElementById('uir-submenu');
  
    // Handle links for moving the profile image
    const links = document.querySelectorAll('.sidenav a');
    const profileImage = document.querySelector('.profile-image');
  
    links.forEach(link => {
      link.addEventListener('click', function () {
        if (link.getAttribute('href') !== 'index.html') {
          sidenav.insertBefore(profileImage, sidenav.firstChild);
        } else {
          sidenav.appendChild(profileImage);
        }
      });
    });

    // Toggle the display of the submenu when clicking on the UIR button
    uirBtn.addEventListener('click', function() {
        if (uirSubmenu.style.display === 'block') {
          uirSubmenu.style.display = 'none'; // Hide the submenu if it's already visible
        } else {
          uirSubmenu.style.display = 'block'; // Show the submenu if it's hidden
        }
      });
  });
