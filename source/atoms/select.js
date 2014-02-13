/**
*   <select> element - Test Case
**/

casper.test.begin("Select element", 0, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("select:not([name])", "The Name attribute isn't present");
        test.assertDoesntExist("select[name='']", "Empty Name attribute");
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});