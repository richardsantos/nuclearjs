/**
*   HTML element - Test Case
**/

var URI = 'http://google.com';
var URI = 'http://localhost/nuclearjs/';
var LANGUAGE = 'pt-br';

module.exports = {
    'Verifying <html> tag': function (test) {
        test
            .open(URI)
            .query('html')
                .assert.attr('name', '', 'Não pode ser vazio')
            .end()
            .done();
    }
};