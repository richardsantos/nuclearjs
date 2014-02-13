/**
*   <textarea> element - Test Case
**/

casper.test.begin("Textarea element", 0, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("textarea:not([name])", "The Name attribute isn't present");
        test.assertDoesntExist("textarea[name='']", "Empty Name attribute");
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});