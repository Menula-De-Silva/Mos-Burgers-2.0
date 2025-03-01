// Search Functionality
const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cardsContainer');
const cards = cardsContainer.getElementsByClassName('col');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    Array.from(cards).forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});