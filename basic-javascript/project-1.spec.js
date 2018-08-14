const helpers = require('./project-1');

// start testing!
it('multiply by 10', () => {

    expect(helpers.multiplyByTen(1)).toEqual(10);
    expect(helpers.multiplyByTen(10)).toEqual(100);
    expect(helpers.multiplyByTen(25)).toEqual(250);

});