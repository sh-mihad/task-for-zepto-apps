// get element's using id
const userAvatar = document.getElementById('userAvatar');
const userMenu = document.getElementById('user-menu');
const userMenuButton = document.getElementById('user-menu-button');

function toggleUserMenu() {
    if (userMenu.style.display === 'none') {
      userMenu.style.display = 'block';
    } else {
      userMenu.style.display = 'none';
    }
  }

  userAvatar.addEventListener('click', toggleUserMenu);

  document.addEventListener('click', function(event) {
    if (event.target !== userMenuButton && !userMenuButton.contains(event.target)) {
      userMenu.style.display = 'none';
    }
  });
