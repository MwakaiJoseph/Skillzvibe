document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;
    let darkMode = localStorage.getItem('dark-mode');

    const enableDarkMode = () => {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
        body.classList.add('dark');
        localStorage.setItem('dark-mode', 'enabled');
    }

    const disableDarkMode = () => {
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
        body.classList.remove('dark');
        localStorage.setItem('dark-mode', 'disabled');
    }

    const toggleDarkMode = () => {
        darkMode = localStorage.getItem('dark-mode');
        if (darkMode === 'disabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    toggleBtn.addEventListener('click', toggleDarkMode);

    const toggleElement = (element) => {
        element.classList.toggle('active');
    }

    document.querySelector('#user-btn').addEventListener('click', () => {
        const profile = document.querySelector('.header .flex .profile');
        const search = document.querySelector('.header .flex .search-form');
        toggleElement(profile);
        search.classList.remove('active');
    });

    document.querySelector('#search-btn').addEventListener('click', () => {
        const search = document.querySelector('.header .flex .search-form');
        const profile = document.querySelector('.header .flex .profile');
        toggleElement(search);
        profile.classList.remove('active');
    });

    document.querySelector('#menu-btn').addEventListener('click', () => {
        const sideBar = document.querySelector('.side-bar');
        toggleElement(sideBar);
        body.classList.toggle('active');
    });

    document.querySelector('#close-btn').addEventListener('click', () => {
        const sideBar = document.querySelector('.side-bar');
        sideBar.classList.remove('active');
        body.classList.remove('active');
    });

    window.addEventListener('scroll', () => {
        const profile = document.querySelector('.header .flex .profile');
        const search = document.querySelector('.header .flex .search-form');
        const sideBar = document.querySelector('.side-bar');
        profile.classList.remove('active');
        search.classList.remove('active');
        if (window.innerWidth < 1200) {
            sideBar.classList.remove('active');
            body.classList.remove('active');
        }
    });
});
