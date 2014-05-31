/**
*   <img> element - Test Case
**/
var atom = {
    name: "Image element",
    selector: "img"
}

casper.echo("\nAtom: " + atom.name, "INFO");

casper.test.assertDoesntExist(atom.selector + "[src='']", "Empty Image");
casper.test.assertDoesntExist(atom.selector + ":not([alt])", "Alternative Text");
casper.test.assertDoesntExist(atom.selector + "[alt='']", "Empty Alternative Text");