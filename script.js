document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidenav a');
    const profileImage = document.querySelector('.profile-image');
    const sidenav = document.querySelector('.sidenav');

    links.forEach(link => {
        link.addEventListener('click', function () {
            // Vérifiez si le lien cliqué est différent de l'accueil
            if (link.getAttribute('href') !== 'index.html') {
                // Déplacez la photo de profil au-dessus de la barre latérale
                sidenav.insertBefore(profileImage, sidenav.firstChild);
            } else {
                // Remettre la photo de profil à son emplacement initial
                sidenav.appendChild(profileImage);
            }
        });
    });
});
