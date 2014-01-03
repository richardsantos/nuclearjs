/**
*   <img> element - Test Case
**/

casper.test.begin("Image element", 1, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("img[src='']", "Empty Image");
    })

    .then(function(){
    	// your tests here
    })

    .run(function(){
        test.done();
    });

});