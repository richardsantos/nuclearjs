/**
*   NuclearJS - Test Cases for UI Components
*   Test Cases Boilerplate for CasperJS
*   @author Richard Santos (https://github.com/richardsantos/nuclearjs)
**/

// var casper  = require('casper').create();

var nuclear = require("nuclear.json");

nuclear.path = {
    "atoms"       : nuclear.source + "atoms/",
    "molecules"   : nuclear.source + "molecules/",
    "organisms"   : nuclear.source + "organisms/",
    "pages"       : nuclear.source + "pages/",
    "screenshots" : nuclear.test + "screenshots/"
};

nuclear.options = {
    "ignore"     : casper.cli.get("ignore") || "",
    "page"       : casper.cli.get("page") || null,
    "screenshot" : casper.cli.get("screenshot") || false,
    "url"        : casper.cli.get("url") || "http://www.example.com",
    "testcase"   : casper.cli.get("testcase"),
    "network"    : casper.cli.get("network") || false
};

// testing deprecated tags
require(nuclear.test + "deprecated.js");

// monitoring: resources and javascript errors
if (nuclear.options.network) {
    require(nuclear.test + "network.js");
}

// what should be ignore
if (!(nuclear.options.ignore.indexOf("atoms") >= 0)) {
    require(nuclear.path.atoms + 'a.js');
    require(nuclear.path.atoms + 'form.js');
    require(nuclear.path.atoms + 'img.js');
}

if (!(nuclear.options.ignore.indexOf("molecules") >= 0)) {
    require(nuclear.path.molecules + 'search.js');
    // your components here
    require(nuclear.path.molecules + "example.js");
}

if (!(nuclear.options.ignore.indexOf("organisms") >= 0)) {
    require(nuclear.path.organisms + 'header.js');
}

if (nuclear.options.page) {
    require(nuclear.path.pages + nuclear.options.page + ".js");
}

if (nuclear.options.testcase) {
    require(nuclear.test + nuclear.options.testcase + ".js");
}

casper.echo("Test site: " + nuclear.options.url, "INFO");