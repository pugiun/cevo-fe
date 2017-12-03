describe('Cevo FE Exam App', function() {

  beforeEach(function() {
    browser.get('http://localhost/cevo-ng/build/');
  });

  it('should automatically redirect to /category/1 when location hash/fragment is empty', function() {
    expect(browser.getCurrentUrl()).toMatch("/category/1");
    expect(browser.getTitle()).toEqual('Category');
  });

  it('should show 4 categories in navbar', function() {
    // Verify that there are 4 categories
    var categories = element.all(by.repeater('category in nav.categories'));
    expect(categories.count()).toEqual(4);
  });

  it('should redirect to category 2 when category 2 link is clicked', function() {
    var categories = element.all(by.repeater('category in nav.categories'));
    var header;
    categories.get(1).click().then(function() {
      header = element(by.css('.page-header'));
      header.getText().then(function(text) {
        expect(text).toEqual('Category 2');
      });
    }, 1000);
  });

  it('should redirect to area 5 when area 5 link is clicked', function() {
    var category = element.all(by.repeater('category in nav.categories')).first();
    browser.actions().mouseMove(category).perform().then(function() {
      var areas = element.all(by.repeater('area in category.areas'));
      var header;
      areas.get(4).click().then(function() {
        header = element(by.css('.area-header'));
        header.getText().then(function(text) {
          expect(text).toEqual('Area 5');
        });
      }, 1000);
    }, 300);
  });

  it('should redirect to sub-area 3 when area 3 link is clicked', function() {
    var category = element.all(by.repeater('category in nav.categories')).get(1);
    browser.actions().mouseMove(category).perform().then(function() {
      var subs = element.all(by.repeater('sub in area.subs'));
      var header;
      subs.get(2).click().then(function() {
        header = element(by.css('h3'));
        header.getText().then(function(text) {
          expect(text).toEqual('Sub-Area 3');
        });
      }, 1000);
    }, 300);
  });

  it('should redirect to child area 6 when child-area 6 link is clicked', function() {
    var category = element.all(by.repeater('category in nav.categories')).get(2);
    browser.actions().mouseMove(category).perform().then(function() {
      var children = element.all(by.repeater('child in sub.children'));
      var header;
      children.get(5).click().then(function() {
        header = element(by.css('h4'));
        header.getText().then(function(text) {
          expect(text).toEqual('Child-Area 6');
        });
      }, 1000);
    }, 300);
  });

});
