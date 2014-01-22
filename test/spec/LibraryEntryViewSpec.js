describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    // spyOn(SongModel.prototype, 'enqueue'); // Uncomment this when working on the second test
    spyOn(SongModel.prototype, 'play');
    view = new LibraryEntryView({model: model});
    view.render();
  });

  it('plays clicked songs', function(){
    view.$el.children().first().click();
    expect(model.play).toHaveBeenCalled();
  });

  // Comment out the above spec when implementing the below
  xit('queues clicked songs', function(){
    view.$el.children().first().click();
    expect(model.enqueue).toHaveBeenCalled();
  });

});
