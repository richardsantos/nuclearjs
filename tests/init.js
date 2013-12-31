/**
*   NuclearJS - Test Cases for UI Components
*   Test Cases Boilerplate for CasperJS
*   @author Richard Santos (https://github.com/richardsantos/nuclearjs)
**/

// var casper  = require('casper').create();

var path = "../source/",
	atoms = path + 'atoms/',
	molecules = path + "molecules/",
	organisms = path + "organisms/",
	url = casper.cli.get("url") || "http://demo.pattern-lab.info/?p=pages-homepage",
	ignore = casper.cli.get("ignore");

if(!ignore || ignore.indexOf("atoms") >= 0){
	require(atoms + "a.js");
	require(atoms + "form.js");	
}

if(!ignore || ignore.indexOf("molecules") >= 0){
	require(molecules + "search.js");
}

if(!ignore || ignore.indexOf("organisms") >= 0){
	require(organisms + "header.js");
}