## Event Propogation

Event Propogation refers how the Javascript events travel through the DOM tree.The DOM tree is the structure which contains parent/child/sibling elements in relation to each other.

Lets say we have a div inside that div we have a form inside that from we have an button and in all of this we attached a event listner onClick into these.

## div -> form -> button

if we click on a button **first** then how the event should be executed first is it from the very **bottom to top or top to bottom** or any other direction.

## Event Bubbling

We can understand this concept by how the bubbles form from the **bottom to top**. So in this case we can if we click on a button then the event should start triggered from the bottom to the top.

**In case of the above scenario** If we click on a button first then it will be executed first then a form will be triggered and after this div should get triggered.

## What is event.target vs this.target vs event.currentTarget

event.target refers to the point from were the triggering was started.

For Example -> If we click on a button first then it should refer the event.current as button in every step as we move from **button to form to the div**

## Output -> button -> button -> button

this.tagName -> It refers to the current function .

For Example -> If we click on a button first then it should refer the this.tagName as current function were it belongs to in every step as we move from **button to form to the div**

## Output -> button -> form -> div

event.currentTarget refers to the current point form were it is.

For Example -> If we click on a button first then it should refer the event.currentTarget as button then it will target form then div in every step as we move from **button to form to the div**

## Output -> button -> form -> div

## Event Capturing / Trickling

It is a process by which we can change the flow for the triggering element by default in case of bubbling it will go from bottom to top but after applying **capturing** it will starts moving from top to bottom

## Note : To stop event bubbling or capturing we can use e.stopPropogation()

## Event Delegation

It is a process by which we add the event listener to the parent element instead of adding to the child or descendant element.
