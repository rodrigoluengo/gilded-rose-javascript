const { Item, update_quality } = require('../src/gilded_rose');

describe("Gilded Rose", function () {

  describe("Test default items", function () {

    it("shoud decrease 1 in sell_in and quality properties", function () {
      const items = [new Item('+5 Dexterity Vest', 10, 20)]
      const [dexterity] = items;

      expect(dexterity.sell_in).toBe(9);
      expect(dexterity.quality).toBe(19);
    });

  });

});
