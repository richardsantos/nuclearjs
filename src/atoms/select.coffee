###
    <select> element - Test Case
###

atom =
    name: "Select element"
    selector: "select"

casper.echo "Atom: #{atom.name}", "INFO"

casper.test.assertDoesntExist "select:not([name])", "The Name attribute isn't present"
casper.test.assertDoesntExist "select[name='']", "Empty Name attribute"
# your tests here