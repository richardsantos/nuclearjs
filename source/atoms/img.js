/**
*   <img> element - Test Case
**/

casper.test.begin("Image element", 0, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("img[src='']", "Empty Image");
        test.assertDoesntExist("img:not([alt])", "Alternative Text");
    })

    .then(function(){
    	// your tests here
    })

    .run(function(){
        test.done();
    });

});