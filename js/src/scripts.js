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
        var data = controller.process(input);
        $('#errors').children().remove();
        $('#errors').append(data['errors']);
        $('#result').children().remove();
        $('#result').append(data['result']);
        return false;
    });
});
