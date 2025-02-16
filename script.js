// Fetch games from the backend API
fetch('/api/games')
    .then(response => response.json())
    .then(games => {
        const gameList = document.getElementById('game-list');
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.className = 'game';
            gameElement.innerHTML = `
                <img src="${game.thumbnail_url}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.game_url}" target="_blank">Play Now</a>
            `;
            gameList.appendChild(gameElement);
        });
    });