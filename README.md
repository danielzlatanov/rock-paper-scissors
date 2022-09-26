# "Rock Paper Scissors" game
This is a simple console game called **"Rock Paper Scissors"**.

![pexels-pavel-danilyuk-8111311](https://user-images.githubusercontent.com/110429874/192363118-1c8ab4ac-9b46-4427-a282-df5ef25c67bf.jpg)


## Goals and solution
This game has been implemented using **Node.js**

Rock-Paper-Scissors is a two-player game, in this case - you and the computer (being your opponent), where you will have the chance to choose one of the following three options before the computer selects his: **"rock"**, **"paper"**, or **"scissors".** The rules are as follows: 

- `Rock` **beats** `scissors` (the scissors get broken by the rock)
- `Scissors` **beats** `paper` (the paper gets cut by the scissors)
- `Paper` **beats** `rock` (the paper covers the rock)

The **winner** is the 'player' whose choice beats the choice of his opponent. Should both players choose the same option (e.g. "rock"), the game's outcome is a **"draw"**.

<img width="368" alt="Screenshot 2022-09-26 at 23 02 24" src="https://user-images.githubusercontent.com/110429874/192369337-f555ede1-8951-4a72-89b0-48885ce9fa90.png">

All these situations are handled by analyzing the different possible game choices with a series of checks.

Link to the source code -> [code.js](https://github.com/danielzlatanov/rock-paper-scissors/blob/main/rock-paper-scissors.js)
## Input and Output

In order to run this game, **type the following command in your console:**
>node rock-paper-scissors.js
<br>

![r-p-s](https://user-images.githubusercontent.com/110429874/192382612-cadfdbb6-477a-43ac-93f3-eadd941c0297.png)

The player enters one of the following options as an input:

- `rock` *or* `r`
- `paper` *or* `p`
- `scissors` *or* `s`

The computer will make up his choice, after which the winner will be revealed in a colorized console, along with the inputted options.

Please note that if your input is different than the provided choices, the console will return that you have entered an invalid option.

#### Screenshots of the game

<img width="310" alt="Screenshot 2022-09-26 at 22 16 11" src="https://user-images.githubusercontent.com/110429874/192362011-fc3f1818-cc64-4fe8-9485-f8532b24e007.png">

## Live Demo

Try out this game by playing it directly in your web browser: (Click either the [hyperlink](https://replit.com/@danielzlatanov/rock-paper-scissors#rock-paper-scissors.js) or the image below to open it!)

[Link to the game](https://replit.com/@danielzlatanov/rock-paper-scissors#rock-paper-scissors.js)

<a href="https://replit.com/@danielzlatanov/rock-paper-scissors#rock-paper-scissors.js">
<img width="1150" alt="r-p-s-replit" src="https://user-images.githubusercontent.com/110429874/192383092-c2280ce7-4122-4e1c-bd44-96dfd861ad2f.png">

#### Enjoy!
