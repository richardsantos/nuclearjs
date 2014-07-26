###
    Example - Test Case
###

molecule =
    name: "Example"
    selector: "body > div"

casper.echo "Molecule: #{molecule.name}", "INFO"

unless casper.exists molecule.selector
    casper.test.assertExists "#{molecule.selector} h1", "Example Heading"
    casper.test.assertExists "#{molecule.selector} p", "Example text"
    casper.test.assertExists "#{molecule.selector} a[href='http://www.iana.org/domains/example']", "Example Link"

    unless nuclear.options.screenshot
        casper.captureSelector nuclear.path.screenshots + {molecule.name} + ".jpg", molecule.selector