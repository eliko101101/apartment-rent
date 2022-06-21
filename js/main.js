
//====== code for map =====================================      
      'use strict';

     
      function LocatorPlus(configuration) {
        const locator = this;

        locator.locations = configuration.locations || [];
        locator.capabilities = configuration.capabilities || {};

        const mapEl = document.getElementById('gmp-map');
        
        // Initialize the map -------------------------------------------------------
        locator.map = new google.maps.Map(mapEl, configuration.mapOptions);

        

        // Create a marker for each location.
        const markers = locator.locations.map(function(location, index) {
          const marker = new google.maps.Marker({
            position: location.coords,
            map: locator.map,
            title: location.title,
          });
          marker.addListener('click', function() {
            selectResultItem(index, false, true);
          });
          return marker;
        });

        // Fit map to marker bounds.
        locator.updateBounds = function() {
          const bounds = new google.maps.LatLngBounds();
          if (locator.searchLocationMarker) {
            bounds.extend(locator.searchLocationMarker.getPosition());
          }
          for (let i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
          }
          locator.map.fitBounds(bounds);
        };
        if (locator.locations.length) {
          locator.updateBounds();
        }


       

        // Initial render of results -----------------------------------------------
        locator.renderResultsList();
      }


       
   
   
      const CONFIGURATION = {
        "locations": [
          {"title":"Oleny Pchilky St, 5","address1":"Oleny Pchilky St","address2":"5, Kyiv, Ukraine, 02000","coords":{"lat":50.41609770240039,"lng":30.631193204368614},"placeId":"ChIJt7Xy1gjF1EAR9ZdVeNiVqU0"},
          {"title":"Yuriya Shums\u0027koho St, 3","address1":"Yuriya Shums\u0027koho St","address2":"3, Kyiv, Ukraine, 02000","coords":{"lat":50.42325223158758,"lng":30.60443256256562},"placeId":"ChIJF_GL4nnF1EAR0KlFsfHXM8Y"},
          {"title":"Kharkivs\u0027ke Hwy, 19","address1":"Kharkivs\u0027ke Hwy","address2":"19, Kyiv, Ukraine, 02000","coords":{"lat":50.43081315777327,"lng":30.63458040066374},"placeId":"ChIJ22mFShXF1EARfT8fatw4NF0"},
          {"title":"Anny Akhmatovoi St, 22","address1":"Anny Akhmatovoi St","address2":"22, Kyiv, Ukraine, 02000","coords":{"lat":50.40851843422188,"lng":30.62490519140166},"placeId":"ChIJpUW2PabF1EAR8UrSwY9tYzw"},
          {"title":"Yaroslava Hasheka Blvd, 17","address1":"Yaroslava Hasheka Blvd","address2":"17, Kyiv, Ukraine, 02000","coords":{"lat":50.438704543343675,"lng":30.632180664418023},"placeId":"ChIJqWBO-UPF1EAR_DGgAza85l4"},
          {"title":"Dniprovska Embankment, 19","address1":"Dniprovska Embankment","address2":"19, Kyiv, Ukraine, 02000","coords":{"lat":50.40758805668456,"lng":30.611161433729563},"placeId":"ChIJlTjOCKPF1EAR7i0dozKFtAA"},
          {"title":"Mykhaila Drahomanova St, 40Ж","address1":"Mykhaila Drahomanova St","address2":"40Ж, Kyiv, Ukraine, 02000","coords":{"lat":50.4065198740085,"lng":30.63860112209014},"placeId":"ChIJv_gx-KrF1EARyy9KanzujkY"}
        ],
        "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
        "mapsApiKey": "AIzaSyA9Ioo9cUhqmO19x5JRxOwsaAAlUzNZ3MY",
        "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false}
      };

      function initMap() {
        new LocatorPlus(CONFIGURATION);
      }
// =========== code for popUp =============



    //Блокировка скролла при поп-ап
const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY; //добавляем в обьект body новое свойство dbScrollY

    document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
`
        }

const enableScroll = () => {
            document.body.style.cssText = '';
            window.scroll({
                top: document.body.dbScrollY,
            })
        }


const closeWindow = () => {
        // resetForm();
        enableScroll();
        document.querySelector('.popUp').innerHTML = '';
    }


const sendTrue = () => {
        let template = `
        <div class="popUp__bg">
            <div class="popUp__block">
                <div class="popUp__close" onclick=" closeWindow()">&#10006;</div>
                <div class="popUp__body">
                          <h2 class="popUp__title">Order a call</h2>
                    <p class="popUp__subtitle">Leave your application and our manager will call back</p>
                    <form action="">
                      <input type="text" name="" id="" placeholder="Name">
                      <input type="tel" name="" id="" placeholder="Phone">
                      <input type="submit" value="Send">
                  </form>
                </div>
            </div>
        </div>`;
        document.querySelector('.popUp').innerHTML = template;
        disableScroll();
    }
  