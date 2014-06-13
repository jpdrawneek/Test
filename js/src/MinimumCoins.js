/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

function MinimumCoins() {
    var values = [];
    var label = [];
}
MinimumCoins.prototype.sterling = function(pence) {
    values = [200, 100, 50, 20, 2, 1];
    label = ['£2', '£1', '50p', '20p', '2p', '1p'];
    return this._process(pence, values, label);
};
/**
 * Private method to do the actual calculating.
 *
 * @param integer pence
 *
 * @returns object
 *   JavaScript object holding what coins are required as attributes.
 */
MinimumCoins.prototype._process = function(pence, values, labels) {
    var output = {};
    values.forEach(function(element, index, array) {
        var count = pence / element;
        pence = pence % element;
        output[labels[index]] = parseInt(count);
    });
    return output;
};
