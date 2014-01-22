describe('AppView', function() {
  var appView, app;

  beforeEach(function () {
    app = new AppModel({library:
      new Songs([
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
      ])
    });
    appView = new AppView({model: app});
  });

  xit('should generate a PlayerView when created', function(){
    expect(appView.playerView).toEqual(jasmine.any(PlayerView));
  });

  describe('when the currently playing song changes', function() {
    xit('updates current song in playerView', function(){
      var song = app.get('library').at(0);
      expect(appView.playerView.model).not.toEqual(song);
      song.play();
      expect(appView.playerView.model).toEqual(song);
    });
  });

});
