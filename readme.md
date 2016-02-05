# PropertyResolver

A simple class for allowing string based property resolving on models, like so:

```js
var PropertyResolver = require("property-resolver");

var someObject = {
    someArray: [
        { someObject: [
                { value: 1 }
            ]}
    ]
};

var propertyResolver = new PropertyResolver();
var value = propertyResolver.resolveProperty(someObject, "someArray[0].someObject[0].value");
// value is 1
```

## Usage

It is exported using UMD so if you want it in node do:

`var PropertyResolver = require("property-resolver");`

or if you want to use it in the browser it will self register the `PropertyResolver` global.

Either way you will need to new up an instance of it to use it.
