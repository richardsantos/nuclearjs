/**
*   <a> element - Test Case
**/

casper.test.begin("Anchor element", 3, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("a[href='']", "Empty links");
        test.assertDoesntExist("a[href*='callto']", "Skype Deprecated Function");
        test.assertDoesntExist("a[href*='javascript']", "Behavior forbidden here");
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});