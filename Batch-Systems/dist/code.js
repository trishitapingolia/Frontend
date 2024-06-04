document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        this.textContent = 'LIGHT';
    } else {
        this.textContent = 'DARK';
    }
});
