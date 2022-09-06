let marker1, marker2, marker3, map;

function initMap() {
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center:{lat: 10.479187376852131, lng: -66.90684810635037}
    })

    const marker1 = new google.maps.Marker({
        position: {lat: 8.48633893618663, lng: -71.53762063706942},
        map,
        tittle: "La montaña de los sueños"
    })

    const marker2 = new google.maps.Marker({
        position: {lat: 10.503275572062625, lng: -63.47404727206831},
        map,
        tittle: "Las aguas de moises"
    })

    const marker3 = new google.maps.Marker({
        position: {lat: 10.86343126687625, lng: -68.29138312783323},
        map,
        tittle: "Morrocoy"
    })
}