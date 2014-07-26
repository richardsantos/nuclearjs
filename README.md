NuclearJS - Boilerplate for CasperJS
===============================================

NuclearJS is a boilerplate to start your test cases with CasperJS for every project.
You don't need always code the same things!

Concept and Organization
------------------------

Based in [Atomic Design Concept](http://bradfrostweb.com/blog/post/atomic-web-design/) for organization:
* Atoms
* Molecules
* Organisms
* Pages

Example of folder structure:

    source/
        atoms/
            a.js (case test for links)
        molecules/
            search.js (case test for search form)
        organisms/
            header.js (case test for header element)
        pages/
            index.js (case test for index.html)
    tests/
        checkout.js (case test for checkout process)
    init.js (case test initializer)
    nuclear.json (your paths)

Dependencies
------------

* [CasperJS](http://casperjs.org)
* [PhantomCSS](http://github.com/huddle/PhantomCSS)

Install
-----------------------------
If CasperJS is installed, so clone the repo

    $ git clone git@github.com:richardsantos/nuclearjs.git

    // edit yours paths in the nuclear.json file:
    {
       "root"   : "/var/www/nuclearjs/",
       "source" : "/var/www/nuclearjs/source/",
       "test"   : "/var/www/nuclearjs/tests/"
    }

Options
-------
* --ignore (you can ignore atoms, molecules or organisms)
* --page
* --screenshot (default: false)
* --url (default: http://www.example.com)
* --network (default: false)

Usage
-----

    $ casperjs test ./init.js
    $ casperjs test ./init.js --url=http://www.example.com --screenshot=true
    $ casperjs test ./init.js --url=http://www.example.com --ignore=atoms
    $ casperjs test ./init.js --url=http://www.example.com --page=index
    $ casperjs test ./init.js --url=http://www.example.com --network=true

Contribution
-------------
Please, submit an issue and send me a pull request.

Thanks
------
Thank you [Brad Frost](https://github.com/bradfrost) by inspiration!