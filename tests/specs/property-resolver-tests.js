var assert = chai.assert;
var expect = chai.expect;

describe('Property Resolver', function () {

    it('should correctly resolve objects within chain', function () {
        var someObject = {
            somethingElse: {
                somethingMore: {
                    value: 10
                }
            }
        };

        var propertyChainProcessor = new PropertyResolver();

        var valuePropertyChain = "somethingElse.somethingMore.value";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(10);

        var objectPropertyChain = "somethingElse.somethingMore";
        var objectProperty = propertyChainProcessor.resolveProperty(someObject, objectPropertyChain);
        expect(objectProperty).eql(someObject.somethingElse.somethingMore);
    });

    it('should correctly resolve objects within arrays', function () {
        var someObject = {
            someArray: [
                { someObject: { value: 1 } }
            ]
        };

        var propertyChainProcessor = new PropertyResolver();

        var valuePropertyChain = "someArray[0].someObject.value";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(1);
    });

    it('should correctly resolve objects within arrays within arrays', function () {
        var someObject = {
            someArray: [
                { someObject: [
                        { value: 1 }
                    ]}
            ]
        };

        var propertyChainProcessor = new PropertyResolver();

        var valuePropertyChain = "someArray[0].someObject[0].value";
        var valueProperty = propertyChainProcessor.resolveProperty(someObject, valuePropertyChain);
        expect(valueProperty).equals(1);
    });

});