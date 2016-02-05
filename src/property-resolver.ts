export class PropertyResolver
{
    private indexRegex = /\[(\d)]/;
    private splitRegex =  /\./;

    public resolveProperty = (model: any, propertyChain: string): any => {
        var check = null, chain = [ ], lastkey = '';

        if( typeof propertyChain !== 'string' ) {
            throw new TypeError("propertyChain is not a string");
        }

        var processChain = (key: string) =>
        {
            var arrayIndex: any = -1;
            if(this.indexRegex.test(key))
            {
                arrayIndex = this.indexRegex.exec(key)[1];
                key = key.replace(this.indexRegex, "");
            }

            if( check )
            {
                if( typeof check === 'object' )
                {
                    if(arrayIndex >= 0) {
                        if(arrayIndex < check[key].length)
                        {
                            chain.push(check = check[key][arrayIndex]);
                            lastkey = key[arrayIndex];
                        }
                        else
                        { throw new TypeError('cannot find index "' + arrayIndex + '" in ' + lastkey); }
                    }
                    else
                    {
                        if( key in check )
                        {
                            chain.push( check = check[ key ] );
                            lastkey = key;
                        }
                        else
                        { throw new TypeError( 'cannot resolve "' + key + '" in ' + lastkey); }
                    }
                }
                else
                { throw new TypeError( '"' + check + '" ' + ' does not seem to be an object' ); }
            }
            else
            {
                if(arrayIndex >= 0) {
                    chain.push(check = model[key][arrayIndex]);
                    lastkey = key[arrayIndex];
                }
                else
                {
                    lastkey = key;
                    chain.push(check = model[key]);
                }
            }
        };

        propertyChain.split(this.splitRegex).forEach(processChain);
        return chain[chain.length - 1];
    };
}