describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
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
  });

  xit('creates SongQueueEntryViews for each queued song & renders them', function(){
    spyOn(SongQueueEntryView.prototype, 'render').andCallThrough();
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).toHaveBeenCalled();
  });

  xit('renders when add or remove event fires from the song queue collection', function(){
    spyOn(SongQueueView.prototype, 'render').andCallThrough();
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render.callCount).toEqual(2);
  });

});
