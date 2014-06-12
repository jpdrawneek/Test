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
    expect(input.process('4')).toEqual(4);
    expect(input.process('84')).toEqual(84);
  });
  
  xit("should be able to handle pence symbol", function() {
    expect(input.process('197p')).toEqual(197);
    expect(input.process('2p')).toEqual(2);
  });
  
  xit("should be able to handle pound symbol", function() {
    expect(input.process('£2')).toEqual(2);
    expect(input.process('£10')).toEqual(10);
  });
  
  xit("should be able to handle decimal with no pound symbol", function() {
    expect(input.process('1.87')).toEqual(187);
  });
  
  xit("should be able to handle pound symbol with decimal", function() {
    expect(input.process('£1.23')).toEqual(123);
  });
  
  xit("should be able to handle pence symbol with decimal", function() {
    
  });
  
  it("should return 0 for empty input", function() {
    expect(input.process('')).toEqual(0);
  });
  
  xit("should return 0 for invalid input", function() {
    expect(input.process('1x')).toEqual(0);
    expect(input.process('£1x.0p')).toEqual(0);
  });
  
  xit("should return 0 for input without integers", function() {
    expect(input.process('£p')).toEqual(0);
  });

});
