mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuZHpoaWsiLCJhIjoiY2xndWM5cGszMGU4NzNkcGR3MHAzeXB3diJ9.bxQyAHCaxM2ZaU56VmMrUQ';

const bounds = [
  [-74.254875,40.496309], // Southwest coordinates
  [-73.673973,40.964215] // Northeast coordinates
];

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enablehighAccuracy: true})

function successLocation(position){
  console.log(position)
  setupMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation() {
  setupMap([-74.075317, 40.516931])
}

const filterGroup = document.getElementById('filter-group');

function setupMap(center){
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: center,
    zoom: 12,
    maxBounds: bounds
})



  /*--------Map Geocoder--------*/
  map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    countries: 'us',
    bbox: [-74.216423,40.537025, -73.658180,40.896127],
    mapboxgl: mapboxgl
    }));
  /*--------Map Geocoder--------*/




  
  /*--------Map Full Screen--------*/
  map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));
  /*--------Map Full Screen--------*/





  /*--------Map Controls--------*/
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
  /*--------Map Controls--------*/





  /*--------Map Geolocation--------*/
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  }));
  /*--------Map Geolocation--------*/




  
  /*--------Map Scale--------*/
  const scale = new mapboxgl.ScaleControl({
    unit: 'imperial'
  });
  map.addControl(scale);
  /*--------Map Scale--------*/





  /*--------Map Double Click Zoom--------*/
  map.doubleClickZoom.enable();
  const isDoubleClickZoomEnabled = map.doubleClickZoom.isEnabled();
  /*--------Map Double Click Zoom--------*/



 

  /*--------Map Keys--------*/
  map.keyboard.enable();
  const isKeyboardEnabled = map.keyboard.isEnabled();
  /*--------Map Keys--------*/

























































  /*--------COOLING CENTERS--------*/
  map.on('load', () => {
    // Add a GeoJSON source with 3 points.
    map.addSource('cooling-centers', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    /*Just copy paste this with new locations
{
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': [...]
    }
  },
*/
    {
    /*Kings Highway Brooklyn Public Library*/
    'type': 'Feature',
    'properties': {
      'description':
      '<header><h2>Brooklyn Public Library - Kings Highway Branch</h2></header></br><h3>Public Library</h3></br><p>Address: 2115 Ocean Ave, Brooklyn, NY 11229</p><p>Phone: <a href="#">(718) 375-3037</a></p></br><a href="#" alt="more">See more</a>'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-73.953153,40.610283]
    }
    },

    {
      /*Science, Industry and Business Library at 188 Madison Ave.*/
      'type': 'Feature',
      'properties': {
        'description':
        '<header><h2>Science, Industry and Business Library</h2></header></br><h3>Public Library</h3></br><p>Address: 455 5th Ave 5th floor, New York, NY 10016</p><p>Phone: <a href="#">(212) 592-7057</a></p></br><a href="#" alt="more">See more</a>'
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.98297114516784, 40.748160065884164]
      }
    },

    {
      /*Sage ISC at 305 7th Ave. 15th floor*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.99334427161804, 40.74665733910168]
      }
    },
    
    {
      /*Project Find Woodstock NSC at 127th W 43 St*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.98447437341436, 40.75612440342008]
      }
    },

    {
      /*Muhlenberg Library at 209 W. 23rd St*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.99597897660708, 40.74446869665689]
      }
    },

    {
      /*NYC City Hall*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.00603409475077, 40.71273852134797]
      }
    },

    {
      /*Battery Park City Library at 175 North End Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.01578265919089, 40.71571871097501]
      }
    },

    {
      /*Independence Plaza NSC at 310 Greenwich Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.01087635837843, 40.71777328292971]
      }
    },

    {
      /*Sixty-Seventh Street Library at E 67th St*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95953603019129, 40.76490863544094]
      }
    },

    {
      /*Yorkville Library at 222 E 79th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95642552548549, 40.77363127791146]
      }
    },

    {
      /*Ninety-Sixth Street Library at 112 E. 96th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95181878775884, 40.78591338762016]
      }
    },

    {
      /*Corsi House Neighborhood Senior Center at 307 E. 116 St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93706509182937, 40.796948537123289]
      }
    },

    /*Walt Whitman Library at 93 St. Edwards St*/
    {
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.97776323235996, 40.69445987965015]
      }
    },

    {
      /*Brooklyn Central Library at 10 Grand Army Plaza*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.96819882628338, 40.67249884665255]
      }
    },

    {
      /*Williamsburg Library at 240 Division Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95768379563218, 40.70683803883221]
      }
    },

    {
      /*Flatbush Library at 22 Linden Blvd.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9583074244558, 40.651963824225646]
      }
    },

    {
      /*Astoria Library at 14-01 Astoria Blvd.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9288091763249, 40.77236470569434]
      }
    },

    {
      /*Woodside Library at 54-22 Skillman Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9098335458367, 40.745402509990235]
      }
    },

    {
      /*Sunnyside Library at 43-06 Greenpoint Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.92174685996875, 40.740879577711496]
      }
    },

    {
      /*Jackson Heights Library at 35-51 81st St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.88508465636406, 40.7501511143244]
      }
    },

    {
      /*Bronx House Weinberg NSC at 990 Pelham Pkwy*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.86039658410957, 40.85664242757271]
      }
    },

  /*Just copy paste this with new locations
  {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': [...]
    }
  },
  */

  {
    /*Tremont Library at 1866 Washington Ave.*/
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': [-73.89833812297637, 40.84606017305199]
    }
  },

  {
    /*Grand Concourse Library at 155 E. 173 St.*/
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': [-73.91008691277798, 40.84395413773172]
    }
  },

    ]
    }
    });



    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/
    // Add a cooling centers layer
    map.addLayer({
    'id': 'cool-centers',
    'type': 'circle',
    'source': 'cooling-centers',
    'layout': {
        },
    'paint': {
    'circle-color': '#4264fb',
    'circle-radius': 15,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#ffffff',
    }
    });
    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/





    // Center the map on the coordinates of any clicked circle from the 'cool-center' layer.
    map.on('click', 'cool-centers', (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        duration: 800
    });
    });
     
    // Change the cursor to a pointer when the it enters a feature in the 'cool-center' layer.
    map.on('mouseenter', 'cool-centers', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'cool-centers', () => {
      map.getCanvas().style.cursor = '';
    });
    ;
});
    /*--------COOLING CENTERS--------*/








    /*--------WATER FOUNTAINS AND BOTTLE REFILLING STATIONS--------*/
  map.on('load', () => {
    // Add a GeoJSON source with 3 points.
    map.addSource('water', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    /*Just copy paste this with new locations
{
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': [...]
    }
  },
*/
    {
    /*P.S. 33 at 70 Tompkins Avenue*/
    'type': 'Feature',
    'properties': {
      'description':
        '<header><h2>Science, Industry and Business Library</h2></header></br><h3>Public Library</h3></br><p>Address: 455 5th Ave 5th floor, New York, NY 10016</p><p>Phone: <a href="#">(212) 592-7057</a></p></br><a href="#" alt="more">See more</a>'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-73.94722937256473, 40.696484561267454]
    }
    },

    {
      /*M.S. 50 at 183 South 3rd Street*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.96016967770736, 40.71178246265067]
      }
    },

    {
      /*M.S. 71 at 215 Heyward Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9539260257181, 40.70396952167721]
      }
    },

    {
      /*M.S. 320 at 46 McKeever Place*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95923095176263, 40.66472999292972]
      }
    },

    {
      /*M.S. 390 at 1224 Park Place*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93716324265259, 40.67199486201804]
      }
    },

    {
      /*M.S. 232 at 905 Winthrop Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9287647214219, 40.65854041772596]
      }
    },

    {
      /*M.S. 117 at 300 Willoughby Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95870130240317, 40.691756837988535]
      }
    },

    {
      /*M.S. 291 at 231 Palmetto Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.91531638444069, 40.695310885059584]
      }
    },

    {
      /*Boys and Girls H.S. at 1700 Fulton Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93136109862195, 40.67933188969319]
      }
    },

    {
      /*Automotive H.S. at 50 Bedford Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95380871383178, 40.722688451341654]
      }
    },

    {
      /*South Shore H.S. at 6565 Flatlands Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.91868431335531, 40.63421403472213]
      }
    },

    {
      /*Franklin K. Lane H.S. at 999 Jamaica Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.8689573459901, 40.692576468367946]
      }
    },

    {
      /*Betsy Head Playground between Dumont Avenue and Thomas S. Boyland Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.91365756622113, 40.662525994668506]
      }
    },

    {
      /*Cooper Park on Maspeth Avenue and Sharon Street, between Olive Street and Morgan Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93741028135628, 40.71580612429864]
      }
    },

    {
      /*Paerdegat Park on Albany Ave and 40th Street, between Farragut Road and Foster Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93813209716448, 40.637632711675536]
      }
    },

    {
      /*St. Johns Recreation Center at 2151 Prospect Place*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93528132055964, 40.67374633341744]
      }
    },

    {
      /*Lindower Park at Strickland Avenue, between Miller Avenue and East 60th Place*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.91149200946013, 40.61239311151851]
      }
    },

    {
      /*Fox Square on Fulton Street and Flatbush Avenue Extension*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.98183629419945, 40.75843706418376]
      }
    },

    {
      /*Knickerbocker Plaza on Myrtle Avenue, between Knickerbocker and Greene Avenues*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.94932029433457, 40.781492144773054]
      }
    },

    {
      /*PS 188 at 442 E. Houston St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.97696556844062, 40.719593713654085]
      }
    },

    {
      /*MS 54 at 103 W. 107th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9629284566624, 40.80025793995093]
      }
    },

    {
      /*PS 149 at 34 W. 118th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.94866303093004, 40.80316865300842]
      }
    },

    {
      /*PS 50 at 433 E. 100th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.94114698642218, 40.78525261049863]
      }
    },

    {
      /*PS 123 at 301 W. 140th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9450242330278, 40.82008239749321]
      }
    },

    {
      /*George Washington HS at 549 Audubon Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.92674509722485, 40.85615001312701]
      }
    },

    {
      /*Dry Dock Playground at Szold Pl. between 10th St and Ave. D*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.97541094349035, 40.72525623493152]
      }
    },

    {
      /*The Battery Oval between State St. and Battery Pl.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.01534643611059, 40.70414789691627]
      }
    },

    {
      /*Plaza De Las Americas on 175th St. between Broadway and Wadsworth Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9381075455859, 40.846053317778654]
      }
    },

    {
      /*Flushing HS at 35-01 Union St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.82679979875316, 40.76456240969608]
      }
    },

    {
      /*Martin Van Buren HS at 230-17 Hillside Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.73828429396201, 40.73338013817601]
      }
    },

    {
      /*August Martin HS at 156-10 Baisley Blvd*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.78350198682452, 40.675271010193185]
      }
    },

    {
      /*Richmond Hill HS at 89-30 114th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.83428752641501, 40.69537569950465]
      }
    },

    {
      /*John Adams HS at 101-01 Rockaway Blvd.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.83792911319831, 40.67961397784995]
      }
    },

    {
      /*MS 8 at 108-35 167th St.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.78696277818874, 40.69707435019321]
      }
    },

    {
      /*Ravenswood Library at 35-32 21st Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93633807678957, 40.76063230196524]
      }
    },

    {
      /*Little Bay Park parking lot on Cross Island Pkwy. between Utopia Pkwy. and Totten Ave.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.78282099132603, 40.790404190199695]
      }
    },

    /*
    {
      -XXXXX-
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [...]
      }
    },
    */

    {
      /*Flushing Meadows Corona Park in Field One*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.8407599742147, 40.748583712479245]
      }
    },

    {
      /*Rockaway Beach and Boardwalk: Roller Hockey Rink at Beach 109th St and Shore Front Pkwy.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.8297002490047, 40.57961432367393]
      }
    },

    {
      /*Staten Island Museum Snug Harbor at 1000 Richmond Terr.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.10266246513913, 40.6433448783012]
      }
    },

    {
      /*Ocean Breeze Athletic Complex at 599 Father Capodanno Blvd.*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.0750915179414, 40.58299786015571]
      }
    },

    {
      /*M.S. 147 at 1600 Webster Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9045798853978, 40.840956912663486]
      }
    },

    {
      /*Herbert H. Lehman HS at 3000 East Tremont Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.83926138330739, 40.84061037052976]
      }
    },

    {
      /*James Monroe H.S. at 1300 Boynton Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.87882310728335, 40.831967361836845]
      }
    },

    {
      /*William Taft HS at 240 East 172nd Street*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.91199250230966, 40.83939650138501]
      }
    },

    {
      /*Theodore Roosevelt H.S. at 500 East Fordham Road*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.88860167355864, 40.85892390201533]
      }
    },

    {
      /*Dewitt Clinton H.S. at 100 West Mosholu Parkway*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.88623760762995, 40.880555973479424]
      }
    },

    {
      /*Ferry Point Park, comfort station on Schley Avenue and the LI Sound between Westchester Creek and Balcom Avenue*/
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.8270194799858, 40.82132201615395]
      }
    },


    ]
    }
    });



    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/
    // Add a water fountains and bottle refilling stations layer
    map.addLayer({
    'id': 'water-f',
    'type': 'circle',
    'source': 'water',
    'paint': {
    'circle-color': '#03c6fc',
    'circle-radius': 15,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#ffffff',
    }
    });
    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/




    // Center the map on the coordinates of any clicked circle from the 'cool-center' layer.
    map.on('click', 'water-f', (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        duration: 800
    });
    });
     
    // Change the cursor to a pointer when the it enters a feature in the 'cool-center' layer.
    map.on('mouseenter', 'water-f', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'water-f', () => {
      map.getCanvas().style.cursor = '';
    });
    });
    /*--------WATER FOUNTAINS AND WATER REFILLING STATIONS--------*/

















    
















  /*--------OUTDOOR POOLS--------*/
  map.on('load', () => {
    map.addSource('pools', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    /*Just copy paste this with new locations
{
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': [...]
    }
  },
*/
    {
    /*Betsy Head Pool; Boyland, Livonia and Dumont Avenues*/
    'type': 'Feature',
    'properties': {
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-73.91256692090546, 40.662862091151375]
    }
    },

    {
      /*Bushwick Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93946177682358, 40.702148666994105]
    }
    },

    {
      /*Commodore Barry Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.97809251851714, 40.69797928867659]
    }
    },

    {
      /*David Fox/PS 251 Outdoor Mini Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9237381502683, 40.63280274603106]
    }
    },

    {
      /*Douglass and DeGraw Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.98574702998408, 40.68067367911606]
    }
    },

    {
      /*Glenwood Houses Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.92021743183587, 40.63668294576162]
    }
    },

    {
      /*Howard Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.90900840484885, 40.67304134098157]
    }
    },

    {
      /*Jesse Owens Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93202471923573, 40.692010594953516]
    }
    },

    {
      /*Kosciuszko Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.94909916066955, 40.69144530543045]
    }
    },

    {
      /*Lindower Park Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.91129084239465, 40.612642197350674]
    }
    },

    {
      /*McCarren Park Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.94920930114681, 40.720344568444176]
    }
    },

    {
      /*PS 20 Playground Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.97056375024815, 40.690475636126436]
    }
    },

    {
      /*Red Hook Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.00393150299873, 40.67298598774796]
    }
    },

    {
      /*Sunset Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.00260541834267, 40.647415400656456]
    }
    },

    {
      /*Claremont Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.90773604717104, 40.838879392976615]
    }
    },

    {
      /*Crotona Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89790054347066, 40.84025035625319]
    }
    },

    {
      /*Floating Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.88887776756515, 40.804309606668234]
    }
    },

    {
      /*Foster Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.92422311833563, 40.83207546211678]
    }
    },

    {
      /*Haffen Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.92422311833563, 40.83207546211678]
    }
    },

    {
      /*Mapes Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.8860044164849, 40.846656438820936]
    }
    },

    {
      /*Thompson Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.87775917123038, 40.83430715599225]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Abe Lincoln Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93707520114323, 40.81234357582397]
    }
    },
    
    {
      /*Asser Levy Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.97544011626125, 40.73599464948163]
    }
    },

    {
      /*Dry Dock Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.97537455594579, 40.725663373236166]
    }
    },

    {
      /*Frederick Douglass Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9681548792029, 40.79981447574886]
    }
    },

    {
      /*Douglass and DeGraw Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.98621732028472, 40.681373422176115]
    }
    },

    {
      /*Hamilton Fish Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.98050538478152, 40.71981481207209]
    }
    },

    {
      /*Highbridge Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93348626066376, 40.84244226818746]
    }
    },

    {
      /*Jackie Robinson Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.94271638950012, 40.82453053290794]
    }
    },

    {
      /*John Jay Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.94884464717371, 40.769766606044534]
    }
    },

    {
      /*Marcus Garvey Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9433448183366, 40.80539233397397]
    }
    },

    {
      /*Sheltering Arms Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.95554978293137, 40.814925198193144]
    }
    },

    {
      /*Thomas Jefferson Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.93675141409504, 40.793840346402455]
    }
    },

    {
      /*Tompkins Square Mini Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.9810391048468, 40.727068244675586]
    }
    },

    {
      /*Tony Dapolito Recreation Center*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.00537655881782, 40.72972146497043]
    }
    },

    {
      /*Vesuvio Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-74.0024779934751, 40.72569142151552]
    }
    },

    {
      /*Wagner Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.933355789501, 40.802234735332064]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },

    {
      /*Van Cortlandt Pool*/
      'type': 'Feature',
      'properties': {
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.89625308949762, 40.88999788862567]
    }
    },




    ]
    }
    });




    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/
    // Add an outdoor pools layer
    map.addLayer({
    'id': 'out-pools',
    'type': 'circle',
    'source': 'pools',
    'paint': {
    'circle-color': '#457B9D',
    'circle-radius': 15,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#ffffff',
    }
    });
    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/




    // Center the map on the coordinates of any clicked circle from the 'cool-center' layer.
    map.on('click', 'out-pools', (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        duration: 800
    });
    });
     
    // Change the cursor to a pointer when the it enters a feature in the 'cool-center' layer.
    map.on('mouseenter', 'out-pools', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'out-pools', () => {
      map.getCanvas().style.cursor = '';
    });
    });
    /*--------OUTDOOR POOLS--------*/




























  /*--------PARKS--------*/
  map.on('load', () => {
    map.addSource('park', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    /*Just copy paste this with new locations
{
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': [...]
    }
  },
*/
    {
    /*Prospect Park*/
    'type': 'Feature',
    'properties': {
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-73.96931991339531, 40.66101889239985]
    }
    },




    ]
    }
    });




    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/
    // Add an outdoor pools layer
    map.addLayer({
    'id': 'parks',
    'type': 'circle',
    'source': 'park',
    'paint': {
    'circle-color': '#00A11E',
    'circle-radius': 15,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#ffffff',
    }
    });
    /*-------------------------------------------------------------------LAYERS-------------------------------------------------------------------*/




    // Center the map on the coordinates of any clicked circle from the 'cool-center' layer.
    map.on('click', 'parks', (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        duration: 800
    });
    });
     
    // Change the cursor to a pointer when the it enters a feature in the 'cool-center' layer.
    map.on('mouseenter', 'parks', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'parks', () => {
      map.getCanvas().style.cursor = '';
    });
    });
    /*--------PARKS--------*/


































    // Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: true,
    });
    map.on('click', 'cool-centers', (e) => {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
   
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
   
      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });


    map.on('click', 'water-f', (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
   
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
   
      popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });


    map.on('click', 'out-pools', (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
   
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
   
      popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });


    map.on('click', 'parks', (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
   
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
   
      popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

   
    /*map.on('mouseleave', 'cool-centers', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });*/




























/*
    map.on('load', () => {
        // Load an image from an external URL.
        map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
        (error, image) => {
        if (error) throw error;
         
        // Add the image to the map style.
        map.addImage('cat', image);
         
        // Add a data source containing one point feature.
        map.addSource('point', {
        'type': 'geojson',
        'data': {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.93316267049472, 40.80399705622402]
        }
        }
        ]
        }
        });
         
        // Add a layer to use the image to represent the data.
        map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'point', // reference the data source
        'layout': {
        'icon-image': 'cat', // reference the image
        'icon-size': 0.25
        }
        });
        }
        );
    });
*/










  /*--------How to add Map Layers and filters--------
  
  map.on('idle', () => {
    if (!map.getLayer('cool-centers')) {
    return;
    }
    const toggleableLayerId = ['cool-centers'];
    for (const id of toggleableLayerId) {
      if (document.getElementById(id)) {
        continue;
      }
       

      const link = document.createElement('a');
      link.id = id;
      link.href = '#';
      link.textContent = id;
      link.className = 'active';

      link.onclick = function (e) {
        const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        const visibility = map.getLayoutProperty(
          clickedLayer,
          'visibility'
      );

        if (visibility === 'visible') {
          map.setLayoutProperty(clickedLayer, 'visibility', 'none');
          this.className = '';
      } 
        else {
          this.className = 'active';
          map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'visible'
      );
      }
      };
       
      const layers = document.getElementById('menu');
      layers.appendChild(link);
      }
      });
  --------Map Layers--------*/




/*------------------How to add map layers and sources----------------------
  map.addSource('urban-areas', {
    'type': 'geojson',
    'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/ne_50m_urban_areas.geojson'
    });
    map.addLayer(
    {
    'id': 'urban-areas-fill',
    'type': 'fill',
    'source': 'urban-areas',
    'layout': {},
    'paint': {
    'fill-color': '#f08',
    'fill-opacity': 0.4
    }
    // This is the important part of this example: the addLayer
    // method takes 2 arguments: the layer as an object, and a string
    // representing another layer's name. If the other layer
    // exists in the style already, the new layer will be positioned
    // right before that layer in the stack, making it possible to put
    // 'overlays' anywhere in the layer stack.
    // Insert the layer beneath the first symbol layer.
    },
    firstSymbolId
    );
    */








}