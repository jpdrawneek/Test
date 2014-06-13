/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

function Controller(MinimumCoins, ConvertToPence) {
    this.coins = MinimumCoins;
    this.convert = ConvertToPence;
    this.resultsTemplate = Handlebars.compile('<h2>Result</h2><ul>{{#each this}}{{#if this}}<li><span class="coin">Coin: {{@key}},</span> <span class="number">Number = {{this}}</span></li>{{/if}}{{/each}}</ul>');
    this.errorsTemplate = Handlebars.compile('<h2>Errors</h2><ul>{{#each this}}<li>{{this}}</li>{{/each}}</ul>');
}

Controller.prototype.process = function(data) {
    this.convert.clearErrors();
    var pence = this.convert.sterling(data);
    var result = this.coins.sterling(pence);
    if (this.convert.error === 1) {
        var output = {errors: this.errorsTemplate(this.convert.errorsList), result: ''};
    } else {
        var output = {errors: '', result: this.resultsTemplate(result)};
    }
    return output;
};
