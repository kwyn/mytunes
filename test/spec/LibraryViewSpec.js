describe("LibraryView", function() {
  var view, fakeSongs, fakeSongData, fakeSubview;

  beforeEach(function() {
    fakeSongData = [
      {
        artist: 'Fakey McFakerson',
        title: 'Never Gonna Mock You Up',
        url: 'example/url'
      },
      {
        artist: 'BittyBacon',
        title: 'Sizzle Sundays',
        url: 'fake/url'
      }
    ];
    fakeSongs = new Songs(fakeSongData);
  });

  it("should render its subviews when you render it", function(){
    fakeSubview = { render: jasmine.createSpy() };
    spyOn(window, 'LibraryEntryView').andReturn(fakeSubview);
    view = new LibraryView({collection: fakeSongs});
    expect(fakeSubview.render.callCount).toEqual(fakeSongData.length);
  });

  it("should have a header element after being rendered", function(){
    view = new LibraryView({collection: fakeSongs});
    expect(view.$el.children().length).toBe(2);
    expect(view.$el.children()[0].tagName).toBe('TH');
  });
});
