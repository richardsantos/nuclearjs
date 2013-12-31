/**
*   <a> element - Test Case
**/

casper.test.begin("Anchor element", 1, function(test){

    casper.start(url, function() {
        test.assertDoesntExist("a[href='']", "Empty links");
        // test.assertDoesntExist("a[href='']", "Empty links");
    });

    casper.then(function(){
    	
    });

    casper.run(function(){
        test.done();
    });

});