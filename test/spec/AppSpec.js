describe('App', function() {
  var app, fakeSongs;

  beforeEach(function() {
    fakeSongs = new Songs([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);
    app = new AppModel({library: fakeSongs});
  });

  it('creates a song queue on initialize', function(){
    expect(app.get('songQueue') instanceof SongQueue).toBeTruthy();
  });

  it('sets the current song when a "play" event is fired', function(){
    expect(app.get('currentSong')).toEqual(jasmine.any(Object));
    app.get('library').at(0).play();
    expect(app.get('currentSong')).toEqual(app.get('library').at(0));
  });

  xit('queues the next song when an "enqueue" event is fired', function(){
    app.get('library').at(1).enqueue();
    expect(app.get('songQueue').at(0)).toEqual(app.get('library').at(1));
  });

});
