###
   NuclearJS - Test Cases for UI Components
   Test Cases Boilerplate for CasperJS
   @author Richard Santos (https://github.com/richardsantos/nuclearjs)
###

# var casper  = require('casper').create();

nuclear = require "nuclear.json"

nuclear.path =
    "atoms"       : nuclear.source + "atoms/"
    "molecules"   : nuclear.source + "molecules/"
    "organisms"   : nuclear.source + "organisms/"
    "pages"       : nuclear.source + "pages/"
    "screenshots" : nuclear.test + "screenshots/"

nuclear.options =
    "ignore"     : casper.cli.get("ignore") || ""
    "page"       : casper.cli.get("page") || null
    "screenshot" : casper.cli.get("screenshot") || false
    "url"        : casper.cli.get("url") || "http://www.example.com"
    "testcase"   : casper.cli.get("testcase")
    "network"    : casper.cli.get("network") || false

casper.test.begin nuclear.options.url, (test) ->
    casper.start(nuclear.options.url, 0, ->
        # testing deprecated tags
        require nuclear.test + "deprecated.coffee"
        # monitoring: resources and javascript errors
        require nuclear.test + "network.coffee"
    ).then(->
        # atoms
        unless nuclear.options.ignore.indexOf("atoms") >= 0
            require nuclear.path.atoms + 'a.coffee'
            require nuclear.path.atoms + 'form.coffee'
            require nuclear.path.atoms + 'img.coffee'
        return
    ).then(->
        # molecules
        unless nuclear.options.ignore.indexOf("molecules") >= 0
            require nuclear.path.organisms + "search.coffee"
            # your components here
            require nuclear.path.organisms + "example.coffee"
        return
    ).then(->
        # organisms
        unless nuclear.options.ignore.indexOf("organisms") >= 0
            require nuclear.path.organisms + "header.coffee"
        return
    ).then(->
        # molecules
        unless nuclear.options.page
            require nuclear.path.pages + nuclear.options.page + ".coffee"
        return
    ).then(->
        # test cases
        unless nuclear.options.testcase
            require nuclear.test + nuclear.options.testcase + ".js"
        return
    ).run ->
        test.done()
        return

    return