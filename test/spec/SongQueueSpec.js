describe('SongQueue', function() {
  var playSpy, songData1, songData2;

  beforeEach(function() {
    playSpy = spyOn(SongQueue.prototype, 'playFirst').andCallThrough();
    songData1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    };
    songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title:'test song 2'
    };
  });

  afterEach(function() {
    playSpy.reset();
  });

  describe('when a song is added', function() {
    describe('when it is the only song in the song queue', function() {
      it('plays it', function() {
        var songQueue = new SongQueue();
        songQueue.enqueue(songData1);
        expect(playSpy).toHaveBeenCalled();
      });
    });

    describe('when it is not the only song in the song queue', function() {
      it('does nothing', function() {
        var songQueue = new SongQueue(songData1);
        songQueue.enqueue(songData2);
        expect(playSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('when a song ends', function() {
    it('removes the song from the queue', function() {
      var songQueue = new SongQueue([songData1, songData2]);
      song2 = songQueue.at(1);
      expect(songQueue.length).toEqual(2);
      songQueue.at(0).trigger('ended');
      expect(songQueue.length).toEqual(1);
      expect(songQueue.at(0)).toEqual(song2);
    });

    describe('if there are any songs left in the queue', function() {
      xit('plays the first song in the queue', function() {
        var songQueue = new SongQueue([songData1, songData2]);
        songQueue.at(0).ended();
        expect(playSpy).toHaveBeenCalled();
      });
    });

    describe('if there are no songs left in the queue', function() {
      xit('does nothing', function() {
        var songQueue = new SongQueue(songData1);
        songQueue.at(0).ended();
        expect(playSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('when a song is dequeued', function() {
    xit('removes the song', function() {
      removeSpy = spyOn(SongQueue.prototype, 'remove').andCallThrough();
      var songQueue = new SongQueue(songData1);
      songQueue.at(0).dequeue();
      expect(removeSpy).toHaveBeenCalled();
    });
  });

  describe('playFirst', function() {
    xit('plays the first song in the queue', function() {
      spyOn(SongModel.prototype, 'play').andCallThrough();
      var songQueue = new SongQueue(songData1);
      songQueue.playFirst();
      expect(songQueue.at(0).play).toHaveBeenCalled();
    });
  });
});
