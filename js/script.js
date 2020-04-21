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
        $.ajax({url: urlQuery, success: function(response){
         console.log(response);
         var imageURI = response.baseUri;
         for(var i = 0; i < response.results.length; i++) {
           console.log (response.results[i]); 
           var recipe = response.results[i];
           var recipeEl = $("<div>");
           recipeEl.addClass("recipe");
           $("#cookbook").append(recipeEl)
           var titleEl = $("<h3>");
           titleEl.addClass("recipeTitle");
           titleEl.text(recipe.title);
           recipeEl.append(titleEl) 
           var imageEl = $("<img>")
           imageEl.attr("src",imageURI + recipe.image)
           recipeEl.append(imageEl)
           var prepEl = $("<p>")
           prepEl.text("preptime: " + recipe.readyInMinutes + ", servings: " + recipe.servings)
           recipeEl.append(prepEl)
         }
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
