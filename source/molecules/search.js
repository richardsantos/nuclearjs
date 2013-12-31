/**
*   Search Form - Test Case
**/

var component = {
	name : "SearchForm",
	selector : "form.search-form"
};

casper.test.begin(component.name, 3, function(test){

    casper.start(url, function() {
        test.assertExists(component.selector, "Search Form");
        test.assertExists(component.selector + " input[type='text']", "Search Input"); //#fail (change to type='search' to pass)
        test.assertExists(component.selector + " button[type='submit']", "Search button");
    });

    casper.then(function(){
    	
    });

    casper.run(function(){
        test.done();
    });

});