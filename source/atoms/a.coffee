###
    <a> element - Test Case
###

atom =
    name: "Anchor element"
    selector: "a"

casper.echo "\nAtom: " + atom.name, "INFO"

host = casper.getCurrentUrl().split('/')[2]
casper.test.assertDoesntExist "#{atom.selector}[href='']", "Empty links"
casper.test.assertDoesntExist "#{atom.selector}[href*='callto']", "Skype Deprecated Function"
casper.test.assertDoesntExist "#{atom.selector}[href*='javascript']", "Behavior forbidden here"
casper.test.assertDoesntExist "#{atom.selector}[href^='http']:not([href*='" + host + "']):not([target='_blank'])", "External Links"
casper.test.assertDoesntExist "#{atom.selector}[title='']", "Empty Title attribute"