describe('var, let & const', function() {
  test('should understand var', function() {
    var a = 1;
    expect(a).toBe(1);
    if (a) {
      var a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(2);
  });
  test('should understand let', function() {
    let a = 1;
    expect(a).toBe(1);
    if (a) {
      let a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(1);
  });
  test('should understand const', function() {
    const a = 1;
    expect(a).toBe(__);
    if (a) {
      const a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });
  test('should understand let', function() {
    let a = 1;
    expect(a).toBe(__);
    a = 2;
    expect(a).toBe(__);
  });
  test('should understand const', function() {
    const a = 1;
    expect(a).toBe(__);
    try {
      // a = 2;
    } catch (e) {
      //empty
    }
    expect(a).toBe(__);
  });
  test('should understand const', function() {
    const a = { name: 'Myamoto' };
    a.name = 'Hattori';
    expect(a).toEqual(__);
  });
});
