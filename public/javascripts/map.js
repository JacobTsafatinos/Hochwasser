function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatlng = new google.maps.LatLng(43.665771, -79.397440);
  var mapOptions = {
    center: myLatlng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    draggable: false,
    disableDoubleClickZoom: false,
    mapTypeControl: false,
    scrollwheel: false,
    streetViewControl: false
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Theater'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);