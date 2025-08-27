## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:  In JavaScript, the primary difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
  lies in their specificity, return value, and performance.
  
getElementById and getElementsByClassName difference:
  1. Specificity: getElementById is the most specific, as it can only select a single element based on its
    unique id attribute.  getElementsByClassName selects all elements that have a specific class name.
  2. Return Value: getElementById returns a single DOM element object. getElementsByClassName returns a
    live HTMLCollection, which is an array-like object that automatically updates if elements with that 
    class are added or removed from the DOM.
  3. Performance: These methods are generally faster than   querySelector and querySelectorAll because 
    they are simple, direct lookups.
  
querySelector and querySelectorAll difference:
1. Specificity: These methods are the most flexible, allowing you to select elements using any valid 
  CSS selector string, similar to how you would in a stylesheet.
2. Return Value: querySelector returns the first element that matches the specified selector, or null
  if no match is found. querySelectorAll returns a static NodeList of all matching elements. Unlike a live
  HTMLCollection, a static NodeList, does not automatically update if the DOM changes after the selection is made.  
3. Performance: While they are powerful and convenient, querySelector and querySelectorAll can be slightly slower
  than the older getElementById and getElementsByClassName methods, particularly in very large DOMs, because they 
  have to parse the CSS selector string.  

  Ultimately, while the older getElement methods are faster for their specific use cases,
  querySelector and querySelectorAll are often preferred in modern development due to their 
  flexibility and ability to use complex selectors.

## 2. How do you create and insert a new element into the DOM?
Answer: To create and insert a new element into the DOM, you typically use a combination of
  three key JavaScript methods: createElement(), createTextNode(), and appendChild(). 
  
Step 1: Create the Element  
-> First, use document.createElement() to create the new HTML element. You pass the tag 
  name of the element you want to create as a string.
  
  EXAMPLE:- let newDiv = document.createElement('div');
  
Step 2: appendChild Content
-> Then, use appendChild() to add the text node to the newly created element.
  EXAMPLE:- newDiv.appendChild(newContent);
  
Step 3: Add Attributes and Styles
-> You can set attributes and styles on the new element using standard property 
  assignments or methods like setAttribute(). 
  
Step 4: Insert the Element into the DOM
-> Finally, use appendChild() to insert the new element as a child of an existing
  element in the DOM. You first need to select the parent element.
  EXAMPLE:- let currentDiv = document.getElementById('parentDiv');
  
## 3. What is Event Bubbling and how does it work?
Answer: Event bubbling is a mechanism in the DOM (Document Object Model) that describes
  how an event, such as a click, propagates from an element to its parent elements.
  It's the default behavior for most events in JavaScript and works like a bubble rising through water.
  
How it Works  
  When an event occurs on an element (the target), it first runs any event handlers on that element. 
  The event then "bubbles up" to the element's direct parent, then its grandparent, and so on, 
  all the way up the DOM tree to the document object.
  At each level of the hierarchy, if a parent element has a listener for the same event type, that listener
  is also triggered. This allows a single event to be handled by multiple listeners at different levels.
  EXAMPLE:- <div id="grandparent">
              <div id="parent">
                <button id="child">Click me</button>
              </div>
            </div>

## 4. What is Event Delegation in JavaScript? Why is it useful? 
Answer: Event delegation is a design pattern in JavaScript where you attach a single event listener 
  to a common parent element rather than to each individual child element. This listener then handles 
  events for all of its descendants, relying on the concept of event bubbling. 
  
Why It's Useful  
  Event delegation is a powerful and efficient technique for several key reasons:
  1. Improved Performance: It significantly reduces the number of event listeners on a page.
    Adding hundreds or thousands of individual listeners can be resource-intensive and slow down performance,
    especially in large applications. A single listener is much more efficient.
  2. Handles Dynamic Elements: It automatically works for elements that are added to the DOM after the page has
    loaded. Since the listener is on the parent, it doesn't matter if new children are created; they will still
    bubble their events up to the parent and be handled correctly. This is one of its biggest advantages.
  3. Simpler Code: It makes your code cleaner and easier to manage. You only have to write and maintain one event
     handler for an entire group of elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() and stopPropagation() are two distinct methods of the event object used to control event behavior,
  but they serve different purposes.
  
preventDefault()  
  preventDefault() stops the browser's default action for a given event. The default action is what the browser normally
  does in response to that event. This is useful when you want to handle an event with JavaScript without the browser's
  standard behavior interfering.
Common use cases for preventDefault():
  1. Form Submission: To prevent a form from submitting and reloading the page, allowing you to validate the data with
    JavaScript before sending it via an AJAX request.
  2. Anchor Links: To prevent a link (<a>) from navigating to its URL, allowing you to handle the click with your own
     custom logic, like a smooth scroll or an API call.
  3. Context Menus: To prevent the browser's default context menu from appearing when a user right-clicks on an element.

stopPropagation()
  stopPropagation() prevents an event from bubbling up or capturing down the DOM tree. It stops the event from reaching 
  parent or child elements that also have event listeners.
Common use cases for stopPropagation():
  1. Nested Elements: To prevent a click on a nested element from triggering a click event on its parent. For example,
     clicking a button inside a modal dialog without closing the modal
  2. Event Delegation: To ensure that a handler on a specific element is the only one that runs, preventing the event
     from reaching a delegated listener on a parent element.   
