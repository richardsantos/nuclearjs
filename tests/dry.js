/**
 * DRY (Don't Repeat Yoursel)
 * Example of reusing test case
 */

var test = {
    name: "DRY"
}

casper.echo("\nTest: " + test.name, "INFO");

// reusing network testing
require(nuclear.test + "reuseme.js");