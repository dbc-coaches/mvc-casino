// scripts/js/casino.js

var Casino = Casino || {} // Namespacing to Casino object

;(function($, Casino) {

  // Shortcut for: $(document).ready(function() {})
  $(function() {
    Casino.Dealer.start()  // 'Kicks off the game'
  })

//  // P.S. Use your browser's dev tools for all your problems!! 
//  // i.e. Chrome debugger and console!! :)
}(jQuery, Casino))