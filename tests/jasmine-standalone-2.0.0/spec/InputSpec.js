/* 
 * @copywright jpdrawneek
 * @author John-Paul Drawneek <jpd@drawneek.co.uk>
 */

describe("Form Input", function() {
  var input;
  
  beforeEach(function() {
    input = new ConvertToPence();
  });
  
  it("should be able to handle integers", function() {
    expect(input.sterling(4)).toEqual(4);
    expect(input.sterling('4')).toEqual(4);
    expect(input.sterling('84')).toEqual(84);
  });
  
  it("should be able to handle pence symbol", function() {
    expect(input.sterling('197p')).toEqual(197);
    expect(input.sterling('2p')).toEqual(2);
  });
  
  it("should be able to handle pound symbol", function() {
    expect(input.sterling('£2')).toEqual(2);
    expect(input.sterling('£10')).toEqual(10);
  });
  
  it("should be able to handle decimal with no pound symbol", function() {
    expect(input.sterling('1.87')).toEqual(187);
  });
  
  it("should be able to handle pound symbol with decimal", function() {
    expect(input.sterling('£1.23')).toEqual(123);
  });
  
  xit("should be able to handle pence symbol with decimal", function() {
    
  });
  
  it("should return 0 for empty input", function() {
    expect(input.sterling('')).toEqual(0);
  });
  
  it("should return 0 for invalid input", function() {
    expect(input.sterling('1x')).toEqual(0);
    expect(input.sterling('£1x.0p')).toEqual(0);
  });
  
  it("should return 0 for input without integers", function() {
    expect(input.sterling('£p')).toEqual(0);
  });

});
