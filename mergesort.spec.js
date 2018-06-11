describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect(split([])).toEqual([]);
    expect(split([1])).toEqual([1]);
  });

});

// it('handles an empty array', function(){
//   expect( bubbleSort([]) ).toEqual( [] );
// });
// it('handles single item in an array', function() {
//   expect(bubbleSort([1])).toEqual([1]);
// });