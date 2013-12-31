/**
*   NuclearJS - Test Cases for UI Components
*   Test Cases Boilerplate for CasperJS
*   @author Richard Santos (https://github.com/richardsantos)
**/

// var casper  = require('casper').create();

var path = "../source/",
	atoms = path + 'atoms/',
	molecules = path + "molecules/",
	organisms = path + "organisms/",
	url = casper.cli.get("site") || "http://localhost/nuclearjs";

url   = "http://demo.pattern-lab.info/?p=pages-homepage";

require(atoms + "a.js");
require(atoms + "form.js");

require(molecules + "search.js");

require(organisms + "header.js");