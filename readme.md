# Lapis Papyrus Scalpellus 
“Rock, Paper, Scissors” 
![](https://i.imgur.com/veLgHaB.png)
## Lapis, Papyrus, Scalpellus DOM Manipulation
Completing Lapis, Papyrus, Scalpellus
Event listeners are the final piece of the puzzle for creating interactive webpages like our “Lapis, Papyrus, Scalpellus” game.

</br>

Thus far, we’ve been keeping the player.currentChoice property the same. If we wanted to change it, we’d update the array index in the statement. But now, we can make things a bit more interesting with event listeners.

</br>

To start, we’ll need to create buttons that allow the player to make their choice. In the HTML, add three buttons representing the three choices for the game. (You could also add text above them to provide direction; maybe something like “Make your choice below.”)

</br>

Then, create a new function that listens for a click on the choice buttons. Once a button is clicked, update the player.currentChoice property with the option the user chose.