# PropertyResolver

[![Build Status](https://travis-ci.org/grofit/property-resolver.svg?branch=master)](https://travis-ci.org/grofit/property-resolver)

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

It is exported using UMD for browsers (`dist/browser`) and CommonJS for node/modules so if you want it that way just do a normal require:

`var PropertyResolver = require("property-resolver");`

or if you want to use it in the browser it will self register the `PropertyResolver` global.

Either way you will need to new up an instance of it to use it.
