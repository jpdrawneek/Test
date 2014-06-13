/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

describe("Controller", function() {
  var controller;
  
  beforeEach(function() {
    var coins = new MinimumCoins();
    var convert = new ConvertToPence();
    controller = new Controller(coins, convert);
  });
  
  it("should be able to handle integers", function() {
    expect(controller.process(4)).toEqual({ errors : '', result : '<h2>Result</h2><ul><li><span class="coin">Coin: 2p,</span> <span class="number">Number = 2</span></li></ul>' });
    expect(controller.process('4')).toEqual({ errors : '', result : '<h2>Result</h2><ul><li><span class="coin">Coin: 2p,</span> <span class="number">Number = 2</span></li></ul>' });
    expect(controller.process('84')).toEqual({ errors : '', result : '<h2>Result</h2><ul><li><span class="coin">Coin: 50p,</span> <span class="number">Number = 1</span></li><li><span class="coin">Coin: 20p,</span> <span class="number">Number = 1</span></li><li><span class="coin">Coin: 2p,</span> <span class="number">Number = 7</span></li></ul>' });
  });
  
  it("should be able to handle pence symbol", function() {
    expect(controller.process('2p')).toEqual({ errors : '', result : '<h2>Result</h2><ul><li><span class="coin">Coin: 2p,</span> <span class="number">Number = 1</span></li></ul>' });
  });
  
  it("should be able to handle pound symbol with decimal", function() {
    expect(controller.process('£1.23')).toEqual({ errors : '', result : '<h2>Result</h2><ul><li><span class="coin">Coin: £1,</span> <span class="number">Number = 1</span></li><li><span class="coin">Coin: 20p,</span> <span class="number">Number = 1</span></li><li><span class="coin">Coin: 2p,</span> <span class="number">Number = 1</span></li><li><span class="coin">Coin: 1p,</span> <span class="number">Number = 1</span></li></ul>' });
  });
  
  it("should be able to handle multiple decimal and return 0", function() {
    expect(controller.process('123.00.00.00')).toEqual({ errors : '<h2>Errors</h2><ul><li>Too many decimal places entered.</li><li>No value entered</li></ul>', result : '' });
  });
  
  it("should return only error for empty input", function() {
    expect(controller.process('')).toEqual({ errors : '<h2>Errors</h2><ul><li>No value entered</li></ul>', result : '' });
  });
  
  it("should return only error for invalid input", function() {
    expect(controller.process('1x')).toEqual({ errors : '<h2>Errors</h2><ul><li>Invalid characters entered</li></ul>', result : '' });
    expect(controller.process('£1x.0p')).toEqual({ errors : '<h2>Errors</h2><ul><li>Invalid characters entered</li></ul>', result : '' });
  });
  
  it("should return only error for input without integers", function() {
    expect(controller.process('£p')).toEqual({ errors : '<h2>Errors</h2><ul><li>No value entered</li></ul>', result : '' });
  });

});
