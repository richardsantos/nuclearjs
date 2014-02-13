/**
*   <title> element - Test Case
**/

casper.test.begin("Title element", 0, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertTitleMatch(/.+/, 'Empty Title element');
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});