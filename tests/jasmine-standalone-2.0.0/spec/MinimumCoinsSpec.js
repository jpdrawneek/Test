/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

describe("Calculate minimum number of coins", function() {
  var coins;
  
  beforeEach(function() {
    coins = new MinimumCoins();
  });
  
  it("123p = 1 x £1, 1 x 20p, 1 x 2p, 1 x 1p", function() {
    expect(coins.sterling(123)).toEqual({'£2': 0, '£1': 1, '50p': 0, '20p': 1, '2p': 1, '1p': 1});
  });
  
});
