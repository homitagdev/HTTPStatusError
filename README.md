# HTTPStatusError

This ES6 class built over Javascript Error class. This helps you add HTTP status codes, additional custom Error codes specific to your applications. 

### Usage

const HTTPStatusError = require('@homitag/httpstatuserror')

let errObj = new HTTPStatusError(HTTPStatusError.http_codes.BadRequest, 'Required username parameter is missing', new Error())

Note that the third is an optional parameter. You can use it for embeding your Javascript error object
