/**
*   Network Monitoring - Test Case
**/

if (nuclear.options.network) {

    var test = {
        name: "Network Monitor"
    }

    casper.echo("\nTest: " + test.name, "INFO");

    casper.on('resource.error', function (resource) {
        casper.echo(resource.errorString, "ERROR");
    });

    // capture javascript errors
    casper.on('page.error', function (msg, trace) {
        casper.echo("Error: " + msg, "ERROR");
    });

}
