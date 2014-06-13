/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

function Controller(MinimumCoins, ConvertToPence) {
    this.coins = MinimumCoins;
    this.convert = ConvertToPence;
}

Controller.prototype.process = function(data) {
    this.convert.clearErrors();
    var pence = this.convert.sterling(data);
    var output = this.coins.sterling(pence);
    console.log(output);
}