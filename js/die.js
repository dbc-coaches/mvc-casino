// js/die.js

var Casino = Casino || {} // Namespacing to Casino object

;(function($, Casino) {

  function Die() {
    this.SIDE_COUNT = 6  // Capital text for 'magic'/'static' numbers
    this.value = this._generateRandomValue() // Underscore for 'protected'/'local' methods
  }

  Die.prototype.roll = function() {
    this.value = this._generateRandomValue()
  }

  // Helper Methods
  Die.prototype._generateRandomValue = function() {
    return Math.floor((Math.random() * this.SIDE_COUNT) + 1)
  }

  Casino.DieFactory = Die

}(jQuery, Casino))