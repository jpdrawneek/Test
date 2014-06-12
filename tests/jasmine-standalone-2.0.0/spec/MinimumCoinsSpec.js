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
  
  it("One for each type", function() {
    expect(coins.sterling(373)).toEqual({'£2': 1, '£1': 1, '50p': 1, '20p': 1, '2p': 1, '1p': 1});
  });
  
  it("19p all copper", function() {
    expect(coins.sterling(19)).toEqual({'£2': 0, '£1': 0, '50p': 0, '20p': 0, '2p': 9, '1p': 1});
  });
  
});
