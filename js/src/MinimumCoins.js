/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

function MinimumCoins() {
}
MinimumCoins.prototype.sterling = function(pence) {
    var values = [200, 100, 50, 20, 2, 1];
    var label = ['£2', '£1', '50p', '20p', '2p', '1p'];
    var output = {};
    values.forEach(function(element, index, array) {
        var count = pence / element;
        pence = pence % element;
        output[label[index]] = parseInt(count);
    });
        
    return output;
};
