mvc-casino
==========

JavaScript MVC lecture material implementing P6 - "The Dice Game"

---

## Topics Covered

* What is MVC?
* Debugging a javascript application
* How to make your application "modular" with small, reusable components
* Maintaining namespacing within your applicaitons
* Managing scope

### M - Model 
- Data and the "business logic", or "game logic"
- Controls access to data
- Manages application requests for data   

### V - View 
- Presentation of the data
- How the data is displayed

### C - Controller 
- The facilitator between the Model and View
- Manages the interactions with the application
	
--- 

## Implementation Outline

#### Die (model)
- ###### Attributes
  - SIDE_COUNT
  - value

- ###### Methods  
  - roll
  - _generateRandomValue   

#### Game (model)
- ###### Attributes
  - dieFactory
  - dice

- ###### Methods  
  - addDie
  - rollDice
  - clearDice
  

#### Display (view)
- ###### Attributes
  - DIE_CLASS_NAME
  - DICE_CONTAINER_NAME
  - diceContainer

- ###### Methods  
  - dieTemplate
  - compileDiceTemplate
  - render   


### Dealer (controller)
- ###### Attributes  
  - game
  - display

- ###### Methods 
  - start
  - bindEventListeners
  - addDie
  - rollDice
  - clearDice
  - updateView