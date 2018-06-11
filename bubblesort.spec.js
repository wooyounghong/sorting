describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles single item in an array', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles multiple items in an array', function() {
    expect(bubbleSort([2, 1])).toEqual([1, 2])
  })
  // it('does not handle non-numerical number in an array', function() {
  //   expect(bubbleSort([NaN, undefined]))
  // })
});
