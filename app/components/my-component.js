import Component from '@ember/component';


var comments = [];


export default Component.extend({
  actions:{
    addComment(){
      var name = this.name;
      var location = this.location;
      var comment = this.comment;
      var rating = this.rate;
      comments.pushObject({Name: name, Location: location, Comment: comment, Rating: rating});
      console.log(comments);
      console.log(name);
      console.log(location);
      console.log(this.marc);
    },
    setRating:function(e){
      this.set("rate",e);
    }
  },
  lastName: 'Glowacki',
  favoriteFramework: 'Ember',
  comments
});
