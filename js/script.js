$(document).ready(function(){
  
  $("#demo").click(function(){
  var x = document.getElementById("demo");

 navigator.geolocation.getCurrentPosition(success, error);
  
  function success(position){
          console.log('here');
          var appid = "03794fe9d2505a20d15b7811280bd99d";
      //$('#demo').html("Latitude: " + position.coords.latitude +
      //"<br>Longitude: " +  position.coords.longitude );
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" + appid;
      console.log(url);
      $.get(url, function( data ) {
          var temp =  data.main.temp * (9/5) - 459.67;
              //alert( "Current Temp: " + temp );
                
                    if (temp <= 45) {

                 $("#clothes").html('<img src="images/cold.png">');
                 $("#cold").css("display", "block");
                 $(".emailForm").css("display", "block");

                } else if (temp >45&& temp<=75) {
                  $("#clothes").html('<img src="images/mild.png">');
                 $("#mild").css("display", "block");
                 $(".emailForm").css("display", "block");

                } else if (temp >75&& temp<=90) {

                  alert( "Current Temp: " + temp );

                  $("#clothes").html('<img src="images/warm.png">');
                 $("#warm").css("display", "block");
                 $(".emailForm").css("display", "block");

                }else{

                  $("#clothes").html('<img src="images/hot.png">');
                 $("#hot").css("display", "block");
                 $(".emailForm").css("display", "block");

                }




                
                




      });
  }
  
  function error(){
    console.log('no geolocation here');
  }
  
  
});

});




/*
Temp Definitions
45 or less = cold
46-75 = mild
76-90 = warm
91+ = hot
*/
