
const tabs = document.querySelectorAll('.section1-box__link');
const artistList = document.querySelectorAll('.section1-box3__cont');

function filterAndDisplayArtists(option) {
    const artistsArray = Array.from(artistList);
    let sortedArtists;

    switch(option) {
        case 'Today':
            sortedArtists = artistsArray;
            break;
        case 'This Week':
            sortedArtists = artistsArray.reverse();
            break;
        case 'This Month':
            sortedArtists = artistsArray;
            break;
        case 'All Time':
            sortedArtists = artistsArray.reverse();
            break;
        default:
            sortedArtists = artistsArray;
    }

    const container = document.querySelector('.section1-box3');
    container.innerHTML = '';
    sortedArtists.forEach(artist => container.appendChild(artist));
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const option = tab.textContent.trim();
        filterAndDisplayArtists(option);
    });
});
