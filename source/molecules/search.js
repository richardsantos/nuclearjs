/**
*   Search Form - Test Case
**/

var molecule = {
    name     : "SearchForm",
    selector : "form"
};

casper.echo("\nMolecule: " + molecule.name, "INFO");

if(casper.exists(molecule.selector)){
    casper.test.assertExists(molecule.selector + " input[type='text']", "Search Input");
    casper.test.assertExists(molecule.selector + " button[type='submit']", "Search button");

    if(nuclear.options.screenshot === true) {
        casper.captureSelector(nuclear.path.screenshots + molecule.name + ".jpg", molecule.selector);
    }
}else{
    casper.echo(molecule.selector + " not found!", "INFO");
}