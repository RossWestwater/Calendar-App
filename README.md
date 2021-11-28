# Calendar-Challenge

## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

This is a simple task tracker meant to be used for standard business hours based on hourly timeblocks. It is built to create a personalized list of things to do based on times that the items should be completed. This was created to allow individual based tracking to increase efficacy via organization and to familiarize myself with Jquery, moment, bootstrap and expand on my JavaScript knowledge. Pre-assignment, I was not too knowledgeable on some of the methods I ended up using. Using parent(), sibling(), and children() really opened my eyes to some alternative ways of pointing to elements and inputs via their relationships when finding that specific object on the page with a document based search would have been difficult. When I created the "btn" and "btnInput" vars, I was able to get them to point to the appropriate values and arrays and textareas, but the input wasn't being pushed. I managed to observe on my own (after too much time...) that the "btn" var was returning a string and not a number that I had initially put in my "if" statements. After eventually updating the "if" statements to look for a string value of the number, it worked! I'm particularly proud of being able to spot this simple, but significant distinction. I also challenged myself to create everything through JS, though I was advised laying out the basic structure in HTML would have been easier. The coding is functional, but somewhat ugly and I have a tutor set up to see what I might do to clean things up.

![Picture of the calendar app after refreshing the browser](/Assets/screen_shots/Calendar_App.png)

## Tests
One particular issue I was having that I didn't realize until later was that multiple consecutive clicks of the save button was adding more separate listings to the object array that was getting saved. The result was a hodgepodge of extra commas and various inputs strung together. I was able to use the splice() method instead of push() (which was my initial comfort pick) to ensure that there would only be one item in an object relegated to a given time slot no matter how many times the button was clicked.