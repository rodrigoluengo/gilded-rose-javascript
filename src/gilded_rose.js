function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

const defaultItems = [
  '+5 Dexterity Vest',
  'Elixir of the Mongoose',
  'Conjured Mana Cake'
];

function update_quality(items) {

  for (const item of items) {

    if (item.name !== 'Sulfuras, Hand of Ragnaros') {
      item.sell_in--;
    }

    if (defaultItems.includes(item.name)) {

      if (item.sell_in < 0 && item.quality > 0) {
        item.quality--
      }

      if (item.name === 'Conjured Mana Cake' && item.quality > 0) {
        item.quality--
      }

      if (item.quality > 0) {
        item.quality--
      }

    } else {

      item.quality++

      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sell_in < 11) {
          item.quality++
        }
        if (item.sell_in < 6) {
          item.quality++
        }
        if (item.sell_in < 1) {
          item.quality = 0;
        }
      }
    }



  }

}

module.exports = { Item, update_quality }
