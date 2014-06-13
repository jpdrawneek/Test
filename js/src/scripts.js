/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */
var coins = new MinimumCoins();
var convert = new ConvertToPence();
var controller = new Controller(coins, convert);

$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        var input = $('#amount').val();
        controller.process(input);
        return false;
    });
});
