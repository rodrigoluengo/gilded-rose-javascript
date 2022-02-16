const { Item, update_quality } = require('../src/gilded_rose');

describe("Gilded Rose", function () {

  describe("Test default items", function () {

    it("should decrease 1 in sell_in and quality properties", function () {
      const items = [new Item('+5 Dexterity Vest', 10, 20)]
      const [item] = items;
      update_quality(items)
      expect(item.sell_in).toBe(9);
      expect(item.quality).toBe(19);
    });

    it("should quality degrades twice", function () {
      const items = [new Item('+5 Dexterity Vest', 0, 10)]
      const [item] = items;
      update_quality(items)
      expect(item.sell_in).toBe(-1);
      expect(item.quality).toBe(8);
    })

    it("should quality of an item never being negative", function () {
      const items = [new Item('+5 Dexterity Vest', 0, 1)]
      const [item] = items;
      update_quality(items)
      expect(item.sell_in).toBe(-1);
      expect(item.quality).toBe(0);
    })

  });

  describe("Test Aged Brie item", function () {
    it("should increases in quality the older it gets", function () {
      const items = [new Item('Aged Brie', 0, 1)]
      const [item] = items;
      update_quality(items)
      expect(item.sell_in).toBe(-1);
      expect(item.quality).toBe(3);
    })

    test("The quality of an item shouldn't be more than 50", function () {
      const items = [new Item('Aged Brie', 0, 49)]
      const [item] = items;
      update_quality(items)
      expect(item.quality).toBe(50);
    });
  });

  describe("Test Sulfuras item", function () {
    it("should not decrease in quality", function () {
      const items = [new Item('Sulfuras, Hand of Ragnaros', 0, 49)]
      const [item] = items;
      update_quality(items)
      expect(item.quality).toBe(49);
    });
  });

  describe("Test Backstage passes item", function () {
    it("should increase by 1 in quality when sell_in is greater than 10", function () {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]
      const [item] = items;
      update_quality(items)
      expect(item.quality).toBe(21);
    });

    it("should increase by 2 in quality when sell_in is 10", function () {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]
      const [item] = items;
      update_quality(items);
      expect(item.quality).toBe(22);
    });

    it("should increase by 2 in quality when sell_in is less than 10", function () {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20)]
      const [item] = items;
      update_quality(items);
      expect(item.quality).toBe(22);
    });

    it("should increase by 3 in quality when sell_in is 5", function () {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]
      const [item] = items;
      update_quality(items);
      expect(item.quality).toBe(23);
    });

    it("should increase by 3 in quality when sell_in is less than 5", function () {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20)]
      const [item] = items;
      update_quality(items);
      expect(item.quality).toBe(23);
    });

    it("should drop to 0 in quality when sell_in is 0", function () {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]
      const [item] = items;

      expect(item.quality).toBe(0);
    });
  });

});
