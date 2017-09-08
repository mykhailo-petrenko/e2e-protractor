var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var should = chai.should();

describe('Protractor Demo App', function() {

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
        return expect(browser.getTitle()).eventually.equal('Super Calculator');
    });

    it('should add one plus two and fails', function() {
        this.timeout(5000);

        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        return expect(element(by.binding('latest')).getText()).eventually.equal('5'); // This is wrong!
    });
});