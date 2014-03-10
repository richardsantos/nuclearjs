/**
*   Index - Test Case
**/

var page = {
    name : "Index"
};

casper.test.begin(page.name, 3, function (test) {

    casper.start(nuclear.options.url, function () {
        test.assertDoesntExist("[class='']", "One or more elements have an empty class attribute");
        test.assertDoesntExist("[id='']", "One or more elements have an empty id attribute");
        test.assertDoesntExist("[style]", "One or more elements have an style attribute");
    }).then(function () {

        // your tests here

    }).run(function () {

        test.done();

    });

});