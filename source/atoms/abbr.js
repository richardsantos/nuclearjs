/**
*   <abbr> element - Test Case
**/

casper.test.begin("Abbr element", 0, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("abbr:not([title])", "The Title attribute isn't present");
        test.assertDoesntExist("abbr[title='']", "Empty Title attribute");
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});