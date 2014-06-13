/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

function ConvertToPence() {
    this.error = 0;
    this.errorsList = [];
    this.list = [];
}
/**
 * Convert the entered Sterling value to Sterling pence.
 *
 * @param {mixed} input
 *   Either string or an integer
 *
 * @returns {Number}
 *   0 on failure or 0 inputed. Otherwise the pence value of the input.
 */
ConvertToPence.prototype.sterling = function(input) {
    list = ['stripSterlingSymbols', 'checkForExtraCharacters', 'stripDecimal', 'checkNumber'];
    return this._process(input, list);
};
/**
 * Private method that preforms the conversion.
 * @private
 *
 * @param {mixed} input
 *   This is the input value to be converted.
 * @param {Array} list
 *   List of rules to be applied as part of the conversion process.
 *   
 * @returns {Number}
 *   The input converted to a number. If error it returns 0.
 */
ConvertToPence.prototype._process = function(input, list) {
    var output;
    if ((output = this.checkNumber(input)) !== false) {
        return output;
    } else {
        var ob = this;
        list.forEach(function(element) {
            input = ob[element](input);
        });
        if (input === false) {
            this.error = 1;
            input = 0;
            if (this.errorsList.length === 0) {
                this.errorsList.push('No value entered');
            }
        }
        console.log(input);
        return input;
    }
}

ConvertToPence.prototype.clearErrors = function() {
    this.error = 0;
    this.errorsList = [];
};
/**
 * 
 * @param {mixed} input
 *  This is the input value to be converted.
 *
 * @returns {Number|Boolean}
 *   Returns false on failure or the number on success.
 */
ConvertToPence.prototype.checkNumber = function(input) {
    if (input === false) {
        return false;
    }
    var regex = /^\d+$/i
    if (typeof input==='number' && (input%1)===0) {
        return input;
    } else if (input.toString().match(regex)) {
        return this.parseInt(input);
    } else {
        return false;
    }
};

ConvertToPence.prototype.parseInt = function(input) {
    return parseInt(input);
};
/**
 * 
 * @param {mixed} input
 *  This is the input value to be converted.
 *
 * @returns {Number|Boolean}
 *   Returns false on failure or the number on success.
 */
ConvertToPence.prototype.stripSterlingSymbols = function(input) {
    if (input === false) {
        return false;
    }
    var tmp;
    tmp = input.replace(/p\s*$/i, '');
    tmp = tmp.replace(/^\s*£/i, '');
    return tmp;
};
/**
 * 
 * @param {mixed} input
 *  This is the input value to be converted.
 *
 * @returns {Number|Boolean}
 *   Returns false on failure or the number on success.
 */
ConvertToPence.prototype.checkForExtraCharacters = function(input) {
    if (input === false) {
        return false;
    }
    var count = input.match(/[^\.0-9]/g);
    if (count === null) {
        return input;
    } else {
        this.errorsList.push('Invalid characters entered');
        return false;
    }
};
/**
 * 
 * @param {mixed} input
 *  This is the input value to be converted.
 *
 * @returns {Number|Boolean}
 *   Returns false on failure or the number on success.
 */
ConvertToPence.prototype.stripDecimal = function(input) {
    if (input === false) {
        return false;
    }
    var tmp;
    var count = input.match(/\./g);
    if (count === null) {
        return input;
    } else if (count.length > 1) {
        this.errorsList.push('Too many decimal places entered.');
        return false;
    } else if (count.length === 1) {
        tmp = parseFloat(input).toFixed(2);
        tmp = tmp * 100;
        return tmp;
    }
};
