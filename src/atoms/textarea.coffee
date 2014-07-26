###
    <textarea> element - Test Case
###

atom =
    name: "Textarea element"
    selector: "textarea"

casper.echo "Atom: #{atom.name}", "INFO"

casper.test.assertDoesntExist "#{atom.selector}:not([name])", "The Name attribute isn't present"
casper.test.assertDoesntExist "#{atom.selector}[name='']", "Empty Name attribute"
# your tests here