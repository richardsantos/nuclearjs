/**
*   <a> element - Test Case
**/

casper.test.begin("Anchor element", 0, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("a[href='']", "Empty links");
        test.assertDoesntExist("a[href*='callto']", "Skype Deprecated Function");
        test.assertDoesntExist("a[href*='javascript']", "Behavior forbidden here");
        var host = this.getCurrentUrl().split('/')[2];
        test.assertDoesntExist("a[href^='http']:not([href*='" + host + "']):not([target='_blank'])", "External Links");
        test.assertDoesntExist("a[title='']", "Empty Title attribute");
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});