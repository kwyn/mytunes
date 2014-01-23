var SongQueue = Songs.extend({
  initialize: function(){
    this.on('ended', this.dequeue, this);
    this.on('ended', this.playFirst, this);
    this.on('enqueue', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },
  
  enqueue: function (song) {
    this.add(song);
    _(this.models).last().enqueue();
  },

  dequeue: function () {
    console.log(this);
    this.remove( _(this.models).first() );
  },
  
  playFirst: function () {
    _(this.models).first().play();
  }
});