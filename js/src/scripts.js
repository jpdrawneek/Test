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
        if (data['errors']) {
            $('#errors').append('<div class="wrapper">' + data['errors'] + '</div>');
        }
        $('#result').children().remove();
        if (data['result']) {
            $('#result').append('<div class="wrapper">' + data['result'] + '</div>');
        }
        return false;
    });
});
