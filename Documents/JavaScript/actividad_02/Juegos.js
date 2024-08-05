document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'd5418abfa6cc4ac8b9b1abd51ef2f0e6';
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=50`; // Usamos games en lugar de platforms

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const games = data.results;
            const gamesContainer = document.getElementById('games-container');

            games.forEach(game => {
                const card = document.createElement('div');
                card.className = 'col-md-4';

                card.innerHTML = `
                    <div class="card game-card">
                        <img src="${game.background_image}" class="card-img-top game-image" alt="${game.name}">
                        <div class="card-body">
                            <h5 class="card-title">${game.name}</h5>
                            <p class="card-text">
                                <strong>Fecha de Lanzamiento:</strong> ${game.released} <br>
                                <strong>Plataformas:</strong> ${game.platforms.map(p => p.platform.name).join(', ')} <br>
                                <strong>Rating:</strong> ${game.rating}
                            </p>
                            <a href="https://www.rawg.io/games/${game.slug}" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                `;

                gamesContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
