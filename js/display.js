// js/display.js

var Casino = Casino || {} // Namespacing to Casino object

;(function($, Casino) {

  function Display() {
    this.DIE_CLASS_NAME = 'die'
    this.DICE_CONTAINER_NAME = '.dice'
    this.diceContainer = $(this.DICE_CONTAINER_NAME)
  }

  Display.prototype.dieTemplate = function(value) {
    var imagePath = 'images/' + value + '-die.png'
    return '<div class='+ this.DIE_CLASS_NAME +'><img src="'+ imagePath +'" /></div>'
  }

  Display.prototype.compileDiceTemplate = function(dice) {
    var diceTemplate = ""
    for (var index = 0; index < dice.length; index++) {
        var die = dice[index]
        diceTemplate += this.dieTemplate(die.value)
    }
    return diceTemplate
  }

  Display.prototype.render = function(dice) {
    this.diceContainer.html(this.compileDiceTemplate(dice))
  }

  Casino.Display = new Display()

}(jQuery, Casino))