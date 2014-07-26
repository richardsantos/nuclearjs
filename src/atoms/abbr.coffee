###
    <abbr> element - Test Case
###

atom =
    name: "Abbr element"
    selector: "abbr"

casper.echo "Atom: #{atom.name}", "INFO"

casper.test.assertDoesntExist "#{atom.selector}:not([title])", "The Title attribute isn't present"
casper.test.assertDoesntExist "#{atom.selector}[title='']", "Empty Title attribute"
# your tests here