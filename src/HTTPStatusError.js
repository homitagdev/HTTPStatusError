/**
 * Describes http status errors. This has better error represenations than http-errors open shource module
 * @author: Kamarudeen
 * Date: 28-Jun-2019 
 */

const http_codes = {
	Status_OK			: 200,
	Status_Created		: 201,
	BadRequest          : 400,
	Unauthorized        : 401,
	PaymentRequired     : 402,
	Forbidden           : 403,
	NotFound            : 404,
	MethodNotAllowed    : 405,
	NotAcceptable       : 406,
	ProxyAuthenticationRequired : 407,
	RequestTimeout      : 408,
	Conflict            : 409,
	Gone                : 410,
	LengthRequired      : 411,
	PreconditionFailed  : 412,
	PayloadTooLarge     : 413,
	URITooLong          : 414,
	UnsupportedMediaType : 415,
	RangeNotSatisfiable : 416,
	ExpectationFailed   : 417,
	ImATeapot           : 418,
	MisdirectedRequest  : 421,
	UnprocessableEntity : 422,
	Locked              : 423,
	FailedDependency    : 424,
	UnorderedCollection : 425,
	UpgradeRequired     : 426,
	PreconditionRequired : 428,
	TooManyRequests     : 429,
	RequestHeaderFieldsTooLarge : 431,
	UnavailableForLegalReasons  : 451,
	InternalServerError : 500,
	NotImplemented      : 501,
	BadGateway          : 502,
	ServiceUnavailable  : 503,
	GatewayTimeout      : 504,
	HTTPVersionNotSupported : 505,
	VariantAlsoNegotiates   : 506,
	InsufficientStorage : 507, 
	LoopDetected        : 508, 
	BandwidthLimitExceeded : 509,
	NotExtended         : 510,
	NetworkAuthenticationRequired : 511
};

class HTTPStatusError extends Error{
     
    constructor(status, message, error = new Error()){
        super(error);

        this.status = status;
        this.code = 'NaN'; // Either a numeric error code or alphanumeric error code. Example: DB errors

        if(message !== error.message)
            this.message = message+' : '+ error.message;
        else
            this.message = message;

     }

}

module.exports = {
	HTTPStatusError: HTTPStatusError,
	http_codes: http_codes	
};