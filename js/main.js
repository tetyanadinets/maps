;(function($){

	$(window).on('load', function(){
		initMap();
	});

	$('#submit').on('click', function(evt){
		evt.preventDefault();

		var lat = Number($('#lat').val());
		var lng = Number($('#lng').val());

		initMap(lat, lng);

	});



	function initMap(lat=49.5685276, lng=34.58543170000007){
		var map;

		var coords = {lat: lat, lng: lng};


		map = new google.maps.Map(
			document.getElementById('ba_map'), {
        center: coords,
        zoom: 8
      });

		if(lat!=49.5685276 || lng!=34.58543170000007){
			var marker = new google.maps.Marker({
				position : {lat, lng},
				map : map,
				icon: 'favicon.png'
			});
		}
	}

})(jQuery);
