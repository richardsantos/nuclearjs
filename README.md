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

Install
------------

* `npm intall -g phantomjs-prebuilt`
* `npm install`

Usage
-----
```sh
    $ npm test --
    $ npm test -- --url=http://www.example.com --screenshot=true
    $ npm test -- --url=http://www.example.com --ignore=atoms
    $ npm test -- --url=http://www.example.com --page=index
    $ npm test -- --url=http://www.example.com --network=true
```

Options
-------
* --ignore (you can ignore atoms, molecules or organisms)
* --page
* --screenshot (default: false)
* --url (default: http://www.example.com)
* --network (default: false)

Contribution
-------------
Please, submit an issue or send me a pull request.

Thanks
------
Thank you [Brad Frost](https://github.com/bradfrost) by inspiration!
