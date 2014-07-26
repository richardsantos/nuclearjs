###
    <img> element - Test Case
###

atom =
    name: "Image element"
    selector: "img"

casper.echo "Atom: #{atom.name}", "INFO"

casper.test.assertDoesntExist("#{atom.selector}[src='']", "Empty Image");
casper.test.assertDoesntExist("#{atom.selector}:not([alt])", "Alternative Text");
casper.test.assertDoesntExist("#{atom.selector}[alt='']", "Empty Alternative Text");
# your tests here