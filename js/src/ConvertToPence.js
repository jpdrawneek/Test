/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

function ConvertToPence() {
    
}
ConvertToPence.prototype.sterling = function(input) {
    var output;
    if ((output = this.checknumber(input)) !== false) {
        return output;
    } else {
        tmp = this.stripSterlingSymbols(input);
        if (!this.checkForExtraCharacters(tmp)) {
            tmp = this.stripDecimal(tmp);
            if ((output = this.checknumber(tmp)) !== false) {
                return output;
            }
        }
        this.error = 1;
        return 0;
    }
};

ConvertToPence.prototype.clearErrors = function() {
    this.error = 0;
    this.errorMessages = {};
}

ConvertToPence.prototype.checknumber = function(input) {
    var regex = /^\d+$/i
    if (typeof input==='number' && (input%1)===0) {
        return input;
    } else if (input.match(regex)) {
        return this.parseInt(input);
    } else {
        return false;
    }
}

ConvertToPence.prototype.parseInt = function(input) {
    return parseInt(input);
}

ConvertToPence.prototype.stripSterlingSymbols = function(input) {
    var tmp;
    tmp = input.replace(/p\s*$/i, '');
    tmp = tmp.replace(/^\s*£/i, '');
    return tmp;
}

ConvertToPence.prototype.checkForExtraCharacters = function(input) {
    var count = input.match(/[^\.0-9]/g);
    if (count === null) {
        return false;
    } else {
        return true;
    }
}

ConvertToPence.prototype.stripDecimal = function(input) {
    var tmp;
    var count = input.match(/\./g);
    if (count === null) {
        return input;
    } else if (count.length > 1) {
        return false;
    } else if (count.length === 1) {
        tmp = parseFloat(input).toFixed(2);
        tmp = tmp * 100;
        return tmp;
    }
}