# _Beep Boop_

#### _Translate # to Beep Boops, Version 1_

#### By _**Clara Munro**_

## Description

* https://claramunro.github.io/beep-boop/

This is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

Numbers that contain a 0 are replaced (all digits) with "BEEP!"
Numbers that contain a 1 are replaced (all digits) with "B00P!"
Numbers divisible by 3 are replaced with "I'm sorry, NAME. I'm afraid I can't do that."
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

A user can also enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "Beep!", "Boop!", 2, "I'm Sorry...", 4, 5


## Setup/Installation Requirements

*  clone this repo
*  cd into folder
*  open index.html


## Specifications

* Program replaces 0 with "BEEP!":
    * Example Input: 0 
    * Example Output: ["BEEP!"]
    
* Program replaces 1 with "B00P!":
    * Example Input: 1 
    * Example Output: ["BOOP!"]
     
* Program replaces #'s divisible by 3 with "I'm sorry NAME, I can't do that!":
    * Example Input: # % 3 === 0
    * Example Output: "I'm sorry NAME, I can't do that!";

## Known Bugs

_None as of 1/15/19_

## Support and contact details

_Email me at clarajmunro@gmail.com_

## Technologies Used

* HTML5
* CSS3
* Javascript
* jQuery
* Visual Studio Code


### License

*MIT License*

Copyright (c) 2019 **Clara Munro**
