/**
*   Example - Test Case
**/

var molecule = {
    name     : "Example",
    selector : "body > div"
};

casper.test.begin(molecule.name, 3, function(test){

    casper.start(nuclear.options.url, function() {
        if(this.exists(molecule.selector)){
            test.assertExists(molecule.selector + " h1", "Example Heading");
            test.assertExists(molecule.selector + " p", "Example text");
            test.assertExists(molecule.selector + " a[href='http://www.iana.org/domains/example']", "Example Link");
        }else{
            this.echo(molecule.selector + " not found!", "INFO");
        }
    })

    .then(function(){
        // screenshot
        if( this.exists(molecule.selector) && nuclear.options.screenshot === true ){
            this.captureSelector(nuclear.path.screenshots + molecule.name + ".jpg", molecule.selector);
        }
        
        // your tests here
    })

    .run(function(){
        test.done();
    });

});