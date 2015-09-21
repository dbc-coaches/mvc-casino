// js/dealer.js

var Casino = Casino || {} // Namespacing to Casino object

;(function($, Casino) {

  function Dealer(game, display) {
    this.game = game
    this.display = display
  }

  Dealer.prototype.start = function() {
    this.bindEventListeners()
  }

  Dealer.prototype.addDie = function() {
    this.game.addDie()
    this.updateView()
  }

  Dealer.prototype.rollDice = function() {
    this.game.rollDice()
    this.updateView()
  }

  Dealer.prototype.clearDice = function() {
    this.game.clearDice()
    this.updateView()
  }

  Dealer.prototype.updateView = function() {
    this.display.render(this.game.dice)
  }

  Dealer.prototype.bindEventListeners = function() {
    // Two options for managing scope
    // 1. self, _this, that
    // 2. Bind (as implemented)

    // var self = this
    // $('.add').on('click', function() {
    //     self.addDie()
    // })

    // $('.roll').on('click', function() {
    //     self.rollDice()
    // })

    // $('.clear').on('click', function() {
    //     self.clearDice()
    // })

    // OR 2. Bind
    $('.add').on('click', this.addDie.bind(this))
    $('.roll').on('click', this.rollDice.bind(this))
    $('.clear').on('click', this.clearDice.bind(this))
  }

  Casino.Dealer = new Dealer(Casino.Game, Casino.Display)

}(jQuery, Casino))