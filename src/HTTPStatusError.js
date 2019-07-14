/**
 * Describes http status errors. This has better error represenations than http-errors open shource module
 * @author: Kamarudeen
 * Date: 28-Jun-2019 
 */

module.exports = 
class HTTPStatusError extends Error{
     
    constructor(status, message, error = new Error()){
        super(error);

		if(isNaN(status) || status < 400 || status >= 600)
			throw new Error(`parameter status should be a valid http error code. Given status: ${status}`);
        this.status = status;
        this.code = ''; // Either a numeric error code or alphanumeric error code. Example: DB errors

        if(message !== error.message)
            this.message = message+' : '+ error.message;
        else
            this.message = message;

     }

}

