###
    <label> element - Test Case
###

atom =
    name: "Label element"
    selector: "label"

casper.echo "Atom: #{atom.name}", "INFO"

casper.test.assertDoesntExist "#{atom.selector}:not([for])", "The For attribute isn't present"
casper.test.assertDoesntExist "#{atom.selector}[for='']", "Empty For attribute"
casper.test.assertDoesntExist "#{atom.selector}:not([name])", "The Name attribute isn't present"
casper.test.assertDoesntExist "#{atom.selector}[name='']", "Empty Name attribute"
# your tests here