/**
*   Tests for deprecated tags
**/
var test = {
    name: "Deprecated tags"
}

casper.echo("\nTest: " + test.name, "INFO");

casper.test.assertDoesntExist("acronym", "The acronym element is deprecated");
casper.test.assertDoesntExist("applet", "The applet element is deprecated");
casper.test.assertDoesntExist("basefont", "The basefont element is deprecated");
casper.test.assertDoesntExist("big", "The big element is deprecated");
casper.test.assertDoesntExist("center", "The center element is deprecated");
casper.test.assertDoesntExist("dir", "The dir element is deprecated");
casper.test.assertDoesntExist("font", "The font element is deprecated");
casper.test.assertDoesntExist("isindex", "The isindex element is deprecated");
casper.test.assertDoesntExist("strike", "The strike element is deprecated");