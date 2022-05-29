  let result ;
  
  function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var engine_location = document.getElementById("uilocation");
    var tankcapacity = document.getElementById("tankcapacity");
    var fuel_type = document.getElementById("fuel_type");
    var Height = document.getElementById("Height");
    var Length = document.getElementById("Length");
    var width = document.getElementById("width");
    var city_milage = document.getElementById("city_milage");
    var Gears = document.getElementById("Gears");
    var odometer = document.getElementById("odometer");
    var speedometer = document.getElementById("speedometer");
    var seats_material = document.getElementById("seats_material");
    var seating_capacity = document.getElementById("seating_capacity");
    var audiosystem = document.getElementById("audiosystem");
    var airbags = document.getElementById("airbags");
  
    var url = "http://127.0.0.1:5000/predict"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
    $.post(url, {

        // total_sqft: parseFloat(sqft.value),

        engine_location: engine_location.value,
        odometer : odometer.value,
        speedometer: speedometer.value,
        seats_material: seats_material.value,
        audiosystem: audiosystem.value,
        fuel_type: fuel_type.value,
        Fuel_Tank_Capacity: parseFloat(tankcapacity.value),
        Height: parseFloat(Height.value),
        Length: parseFloat(Length.value),
        Width: parseFloat(width.value),
        City_Mileage: parseFloat(city_milage.value),
        Gears: parseFloat(Gears.value),
        Seating_Capacity: parseFloat(seating_capacity.value),
        Number_of_Airbags: parseFloat(airbags.value) 

    },function(data, status) {

        console.log(data.estimated_price)

        result = data.estimated_price.toString() ;
        var params = new URLSearchParams();
        params.append("first", result);

        var url = "results.html?" + params.toString();
        location.href = url;

    });
  }

















function enginelocation() {
    var url = "http://127.0.0.1:5000/engine_locations"; // Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    $.get(url,function(data, status) {
        console.log("got response for engine_locations request");
        if(data) {
            var locations = data.engine_locations;
            var uiLocations = document.getElementById("uilocation");
            $('#uilocation').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uilocation').append(opt);
            }
        }
    });
    var url1 = "http://127.0.0.1:5000/fuel_type";
    $.get(url1,function(data, status) {
        if(data) {
            var locations = data.fuel_type;
            var uiLocations = document.getElementById("fuel_type");
            $('#fuel_type').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#fuel_type').append(opt);
            }
        }
    });
    var url2 = "http://127.0.0.1:5000/odometer";
    $.get(url2,function(data, status) {
        if(data) {
            var locations = data.odometer;
            var uiLocations = document.getElementById("odometer");
            $('#odometer').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#odometer').append(opt);
            }
        }
    });
    var url3 = "http://127.0.0.1:5000/speedometer";
    $.get(url3,function(data, status) {
        if(data) {
            var locations = data.speedometer;
            var uiLocations = document.getElementById("speedometer");
            $('#speedometer').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#speedometer').append(opt);
            }
        }
    });
    var url4 = "http://127.0.0.1:5000/seats_material";
    $.get(url4,function(data, status) {
        if(data) {
            var locations = data.seats_material;
            var uiLocations = document.getElementById("seats_material");
            $('#seats_material').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#seats_material').append(opt);
            }
        }
    });
    var url5 = "http://127.0.0.1:5000/audiosystem";
    $.get(url5,function(data, status) {
        if(data) {
            var locations = data.audiosystem;
            var uiLocations = document.getElementById("audiosystem");
            $('#audiosystem').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#audiosystem').append(opt);
            }
        }
    });
  } 
 
  
  window.onload = enginelocation;

