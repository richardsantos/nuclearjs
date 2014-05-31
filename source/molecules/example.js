/**
*   Example - Test Case
**/

var molecule = {
    name     : "Example",
    selector : "body > div"
};

casper.echo("\nMolecule: " + molecule.name, "INFO");

if(casper.exists(molecule.selector)){
    casper.test.assertExists(molecule.selector + " h1", "Example Heading");
    casper.test.assertExists(molecule.selector + " p", "Example text");
    casper.test.assertExists(molecule.selector + " a[href='http://www.iana.org/domains/example']", "Example Link");

    if (nuclear.options.screenshot === true) {
        casper.captureSelector(nuclear.path.screenshots + molecule.name + ".jpg", molecule.selector);
    }

}else{
    casper.echo(molecule.selector + " not found!", "INFO");
}