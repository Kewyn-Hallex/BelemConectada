    var map = L.map('map').setView([-1.4557549, -48.4901799], 13); // Centraliza o mapa em Belém

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-1.4557549, -48.4901799]).addTo(map)
        .bindPopup()
        .openPopup();
