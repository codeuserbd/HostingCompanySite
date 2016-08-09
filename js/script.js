var myCenter=new google.maps.LatLng(23.794029, 90.427035);

    function initialize()
    {
        var mapProp = {
            center:myCenter,
            zoom:17,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };

        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

        var marker=new google.maps.Marker({
            position:myCenter,
        });

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);