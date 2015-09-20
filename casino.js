var Casino = Casino || {} // Namespacing to Casino object

;(function($, Casino) {
    // Shortcut for: $(document).ready(function() {})
    $(function() {
        Casino.Dealer.start()  // 'Kicks off the game'
    })

    // Models
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


    function Game(DieFactory) {
        this.DieFactory = DieFactory
        this.dice = []
    }

    Game.prototype.addDie = function() {
        this.dice.push(new this.DieFactory())
    }

    Game.prototype.rollDice = function() {
        // Alternatively use array methods for-in loop, .forEach, or Underscore
        var index, diceCount = this.dice.length
        for (index = 0; index < diceCount; index++) {
            var die = this.dice[index]
            die.roll()
        }
    }
    
    Game.prototype.clearDice = function() {
        this.dice = []
    }


    // Views
    function Display() {
        this.DIE_CLASS_NAME = 'die'
        this.DICE_CONTAINER_NAME = '.dice'
        this.diceContainer = $(this.DICE_CONTAINER_NAME)
    } 

    Display.prototype.dieTemplate = function(value) {
        return "<div class=\'"+ this.DIE_CLASS_NAME +"\'>"+ value +"</div>"
    }
    
    Display.prototype.compileDiceTemplate = function(dice) {
        var diceTemplate = ""
        var index, diceCount = dice.length
        for (index = 0; index < diceCount; index++) {
            var die = dice[index]
            diceTemplate += this.dieTemplate(die.value)
        }
        return diceTemplate
    }

    Display.prototype.render = function(dice) {
        this.diceContainer.html(this.compileDiceTemplate(dice))
    }

    // Controllers
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

    // Model Declarations
    Casino.DieFactory = Die
    Casino.Game = new Game(Casino.DieFactory)

    // View Declarations
    Casino.Display = new Display()

    // Controller Declarations
    Casino.Dealer = new Dealer(Casino.Game, Casino.Display)

//  // P.S. Use your browser's dev tools for all your problems!! 
//  // i.e. Chrome debugger and console!! :)
}(jQuery, Casino))
