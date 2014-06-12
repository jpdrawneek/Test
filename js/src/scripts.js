/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */
var coins = new MinimumCoins();
var convert = new ConvertToPence();

$(document).ready(function(){
    $('form').submit(function(e){
        var input = $('#amount').val();
        var pence = convert.sterling(input);
        var data = coins.sterling(pence);
        console.log(data);
        return false;
    });
});
