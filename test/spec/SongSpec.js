describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
    spyOn(model, 'trigger').andCallThrough();
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      model.play();
      expect(model.trigger).toHaveBeenCalledWith('play', model);
    });
  });

  xdescribe('enqueue', function() {
    it('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(model.trigger).toHaveBeenCalledWith('enqueue', model);
    });
  });

  xdescribe('dequeue', function() {
    it('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(model.trigger).toHaveBeenCalledWith('dequeue', model);
    });
  });

  xdescribe('ended', function() {
    it('triggers an "ended" event', function() {
      model.play();
      model.ended();
      expect(model.trigger).toHaveBeenCalledWith('ended', model);
    });
  });
});
