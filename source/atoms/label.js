/**
*   <label> element - Test Case
**/

casper.test.begin("Label element", 0, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("label:not([for])", "The For attribute isn't present");
        test.assertDoesntExist("label[for='']", "Empty For attribute");
        test.assertDoesntExist("label:not([name])", "The Name attribute isn't present");
        test.assertDoesntExist("label[name='']", "Empty Name attribute");
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});