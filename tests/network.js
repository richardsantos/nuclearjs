/**
*   Network Monitoring - Test Case
**/

casper.on('resource.error', function (resource) {
    casper.echo(resource.errorString, "ERROR");
});

// capture javascript errors
casper.on('page.error', function (msg, trace) {
    casper.echo("Error: " + msg, "ERROR");
});