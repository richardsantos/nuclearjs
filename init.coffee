###
   NuclearJS - Test Cases for UI Components
   Test Cases Boilerplate for CasperJS
   @author Richard Santos (https://github.com/richardsantos/nuclearjs)
###

nuclear = require "nuclear.json"
EXT = ".coffee"

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


casper.echo nuclear.options.page, "INFO"

casper.test.begin nuclear.options.url, (test) ->

    casper.start(nuclear.options.url, 0, ->
        # testing deprecated tags
        # require nuclear.test + "deprecated#{EXT}"
        # monitoring: resources and javascript errors
        require nuclear.test + "network#{EXT}"
    ).then(->
        casper.echo "Vai dar certo!"
        # atoms
        unless nuclear.options.ignore.indexOf("atoms") >= 0
            #require nuclear.path.atoms + "a#{EXT}"
            require nuclear.path.atoms + "abbr#{EXT}"
            #require nuclear.path.atoms + "img#{EXT}"
            #require nuclear.path.atoms + "label#{EXT}"
            #require nuclear.path.atoms + "select#{EXT}"
            #require nuclear.path.atoms + "textarea#{EXT}"
            #require nuclear.path.atoms + "title#{EXT}"
        return
    ).then(->
        # molecules
        unless nuclear.options.ignore.indexOf("molecules") >= 0
            require nuclear.path.molecules + "search#{EXT}"
            require nuclear.path.molecules + "example#{EXT}"
            # your components here
        return
    ).then(->
        casper.echo "PELO MENOS TO AQUI, TA LIGADO","ERROR"
        # organisms
        unless nuclear.options.ignore.indexOf("organisms") >= 0
            require nuclear.path.organisms + "header#{EXT}"
        return
    ).then(->
        # pages
        if nuclear.options.page
            require nuclear.path.pages + nuclear.options.page + EXT
        return
    ).then(->
        # test cases
        unless nuclear.options.testcase
            require nuclear.test + nuclear.options.testcase + EXT
        return
    ).run ->
        test.done()
        return

    return