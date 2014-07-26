###
    Search Form - Test Case
###

molecule =
    name: "SearchForm"
    selector: ".search form"

casper.echo "Molecule: #{molecule.name}", "INFO"

if casper.exists molecule.selector
    casper.test.assertExists "#{molecule.selector} input[type='search']", "Search Input"
    casper.test.assertExists "#{molecule.selector} button[type='submit']", "Search button"

    if nuclear.options.screenshot
        casper.captureSelector "#{nuclear.path.screenshots}#{molecule.name}.jpg", molecule.selector