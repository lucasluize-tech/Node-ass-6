class ExpressError extends Error {
    constructor(message, statusCode) {
        super(); // inheriting the Error methods
        this.message = message;
        this.status = statusCode;
        console.log(this.stack);
    }
}

module.exports = ExpressError;