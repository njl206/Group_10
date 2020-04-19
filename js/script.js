// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
      var apikey = "apiKey=442e8eb93d0b487b96936c8b9720d862"; 
      var apiQuery = "https://api.spoonacular.com/recipes/search?cuisine=";
      

      $("button").click(function(event){
        event.preventDefault();
        var continent = $(this).attr("id")
        console.log ("continent",continent)
        var urlQuery = apiQuery + continent+"&number=15&" + apikey;
        console.log(urlQuery);
        $.ajax({url: urlQuery, success: function(result){
         // $("#div1").html(result);
         console.log(result);
        }});
      });

      // $("#african").click(function(){
      //   var urlQuery = apiQuery + "african&number=15&" + apikey;
      //   console.log(urlQuery);
      //   $.ajax({url: urlQuery, success: function(result){
      //    // $("#div1").html(result);
      //    console.log(result);
      //   }});
      // });

      // $("#chinese").click(function(){
      //   var urlQuery = apiQuery + "chinese&number=15&" + apikey;
      //   console.log(urlQuery);
      //   $.ajax({url: urlQuery, success: function(result){
      //    // $("#div1").html(result);
      //    console.log(result);
      //   }});
      // });

      // $("#indian").click(function(){
      //   var urlQuery = apiQuery + "indian&number=15&" + apikey;
      //   console.log(urlQuery);
      //   $.ajax({url: urlQuery, success: function(result){
      //    // $("#div1").html(result);
      //    console.log(result);
      //   }});
      // });

      // $("#american").click(function(){
      //   var urlQuery = apiQuery + "american&number=15&" + apikey;
      //   console.log(urlQuery);
      //   $.ajax({url: urlQuery, success: function(result){
      //    // $("#div1").html(result);
      //    console.log(result);
      //   }});
      // });

      // $("#latin_american").click(function(){
      //   var urlQuery = apiQuery + "latin_american&number=15&" + apikey;
      //   console.log(urlQuery);
      //   $.ajax({url: urlQuery, success: function(result){
      //    // $("#div1").html(result);
      //    console.log(result);
      //   }});
      // });   
      
      
    

});
