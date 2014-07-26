###
    <title> element - Test Case
###

atom =
    name: "Title element"
    selector: "title"

casper.echo "Atom: #{atom.name}", "INFO"

casper.test.assertTitleMatch(/.+/, 'Empty Title element');
# your tests here