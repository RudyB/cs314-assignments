var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.6574516, lng: -117.4282505},
        zoom: 15
      });

    let place1 = {
        lat: 47.6552141,
        lng: -117.4191017
    };
    let marker1 = new google.maps.Marker({ position: place1, map: map});
    let info1 = new google.maps.InfoWindow({ content: '<h5>Hogwash Whiskey Den<br>5 Stars</h5>' });
    marker1.addListener('click', function () { info1.open(map, marker1); });
    marker1.setMap(map);

    let place2 = {
        lat: 47.6588087,
        lng: -117.4209415
    };
    let marker2 = new google.maps.Marker({ position: place2, map: map  });
    let info2 = new google.maps.InfoWindow({ content: '<h5>Durkin\'s Liquor Bar<br>4.5 Stars</h5>' });
    marker2.addListener('click', function () { info2.open(map, marker2); });
    marker2.setMap(map);

    let place3 = {
        lat: 47.657605,
        lng: -117.425619
    };
    let marker3 = new google.maps.Marker({ position: place3, map: map});
    let info3 = new google.maps.InfoWindow({ content: '<h5>Volstead Act<br>4.7 Stars</h5>' });
    marker3.addListener('click', function () { info3.open(map, marker3); });
    marker3.setMap(map);

}