// js/game.js

var Casino = Casino || {} // Namespacing to Casino object

;(function($, Casino) {

  function Game(DieFactory) {
    this.DieFactory = DieFactory
    this.dice = []
  }

  Game.prototype.addDie = function() {
    this.dice.push(new this.DieFactory())
  }

  Game.prototype.rollDice = function() {
    // Alternatively use array methods for-in loop, .forEach, or Underscore
    for (var index = 0; index < this.dice.length; index++) {
        var die = this.dice[index]
        die.roll()
    }
  }

  Game.prototype.clearDice = function() {
    this.dice = []
  }

  Casino.Game = new Game(Casino.DieFactory)

}(jQuery, Casino))