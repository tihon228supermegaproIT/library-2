

   window.onload = function(){
       LoadMap();
   }

   var locations = [
     ['Melbourne', -37.814, 144,96332],
     ['London', 51.50853, -0.12574]
   ];

   function LoadMap(){
       var mapOptions = {
           center: new google.maps.LatLng(-37.814, 144,96332),
           zoom: 0,
           mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       var map =  new google.maps.Map(document.getElementById('map'), mapOptions);

       // Create and open an InfoWindow
       var infoWindow = new google.maps.InfoWindow();

       for (var i=0; i<locations.length; i++){
           var myLatlng = new google.maps.LatLng(locations[i][1], locations[i][2]);
           var marker = new google.maps.Marker({
               position: myLatlng,
               map: map,
               title: locations[i][0]
           });
       }

       // Attach click event to a marker
       (function (marker, data){
           google.maps.event.addListener(marker, 'click', function(){
               infoWindow.setContent(locations[i][0]);
               infoWindow.open(map, marker);
           });
       })
   }
