/**
*   Index - Test Case
**/

var page = {
    name : "Index"
};

casper.echo("\nPage: " + page.name, "INFO");

casper.test.assertDoesntExist("[class='']", "One or more elements have an empty class attribute");
casper.test.assertDoesntExist("[id='']", "One or more elements have an empty id attribute");
casper.test.assertDoesntExist("[style]", "One or more elements have an style attribute");