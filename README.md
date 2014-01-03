NuclearJS - Boilerplate for CasperJS
===============================================

NuclearJS is a boilerplate to start your test cases with CasperJS.

Concept and Organization
------------------------

Based in [Atomic Design Concept](http://bradfrostweb.com/blog/post/atomic-web-design/) for organization:
* Atoms
* Molecules
* Organisms
* Templates
* Pages

Example of folder structure:

    source/
        atoms/
            a.js (case test for links)
        molecules/
            search.js (case test for search form)
        organisms/
            header.js (case test for header element)
        templates/ (probably will be deleted)
        pages/
            index.js (case test for index.html)
    tests/
        init.js (case test initializer)
        checkout.js (case test for checkout process)

Dependencies
------------

* [NodeJS](http://nodejs.org/)
* [CasperJS](http://casperjs.org) based in [PhantomJS](http://phantomjs.org)

Install (Very advanced level)
-----------------------------
If CasperJS is installed, so clone the repo
    
    $ git clone git@github.com:richardsantos/nuclearjs.git
    
    // edit your paths in: tests/init.js
    var nuclear = nuclear || {
       "root"   : "/var/www/nuclearjs/",
       "source" : "/var/www/nuclearjs/source/",
       "test"   : "/var/www/nuclearjs/tests/"
    };

Options
-------
* --ignore
* --page
* --screenshot (default: false)
* --url (default: http://www.example.com)

Usage
-----

    $ casperjs test tests/init.js
    $ casperjs test tests/init.js --url=http://www.example.com --screenshot=true
    $ casperjs test tests/init.js --url=http://www.example.com --ignore=atoms
    
Contribution
-------------
Please, submit a issue and send me a pull request. You'll make me happy =)

Thanks
------
Thank you [Brad Frost](https://github.com/bradfrost) by inspiration!
