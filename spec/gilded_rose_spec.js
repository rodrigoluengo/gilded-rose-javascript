const { Item, update_quality } = require('../src/gilded_rose');

describe("Gilded Rose", function () {

  describe("Test default items", function () {

    it("should decrease 1 in sell_in and quality properties", function () {
      const items = [new Item('+5 Dexterity Vest', 10, 20)]
      const [dexterity] = items;
      update_quality(items)
      expect(dexterity.sell_in).toBe(9);
      expect(dexterity.quality).toBe(19);
    });

    it("should quality degrades twice", function () {
      const items = [new Item('+5 Dexterity Vest', 0, 10)]
      const [dexterity] = items;
      update_quality(items)
      expect(dexterity.sell_in).toBe(-1);
      expect(dexterity.quality).toBe(8);
    })

    it("should quality of an item never being negative", function () {
      const items = [new Item('+5 Dexterity Vest', 0, 1)]
      const [dexterity] = items;
      update_quality(items)
      expect(dexterity.sell_in).toBe(-1);
      expect(dexterity.quality).toBe(0);
    })

  });

  describe("Test Aged Brie item", function () {
    it("should increases in quality the older it gets", function () {
      const items = [new Item('Aged Brie', 0, 1)]
      const [dexterity] = items;
      update_quality(items)
      expect(dexterity.sell_in).toBe(-1);
      expect(dexterity.quality).toBe(3);
    })
  });

});
