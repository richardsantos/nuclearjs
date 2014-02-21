/**
*   Index - Test Case
**/

var page = {
    name     : "Index"
};

casper.test.begin(page.name, 3, function(test){

    casper.start(nuclear.options.url, function() {
        test.assertDoesntExist("[class='']", "One or more elements have an empty class attribute");
        test.assertDoesntExist("[id='']", "One or more elements have an empty id attribute");
        test.assertDoesntExist("[style]", "One or more elements have an style attribute");
        test.assertDoesntExist("acronym", "The acronym element is deprecated");
        test.assertDoesntExist("applet", "The applet element is deprecated");
        test.assertDoesntExist("basefont", "The basefont element is deprecated");
        test.assertDoesntExist("big", "The big element is deprecated");
        test.assertDoesntExist("center", "The center element is deprecated");
        test.assertDoesntExist("dir", "The dir element is deprecated");
        test.assertDoesntExist("font", "The font element is deprecated");
        test.assertDoesntExist("isindex", "The isindex element is deprecated");
        test.assertDoesntExist("strike", "The strike element is deprecated");
    })

    .then(function(){
        // your tests here
    })

    .run(function(){
        test.done();
    });

});