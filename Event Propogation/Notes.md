## Event Propogation

Event Propogation refers how the Javascript events travel through the DOM tree.The DOM tree is the structure which contains parent/child/sibling elements in relation to each other.

Lets say we have a div inside that div we have a form inside that from we have an button and in all of this we attached a event listner onClick into these.

## div -> form -> button

if we click on a button **first** then how the event should be executed first is it from the very **bottom to top or top to bottom** or any other direction.

## Event Bubbling

We can understand this concept by how the bubbles form from the **bottom to top**. So in this case we can if we click on a button then the event should start triggered from the bottom to the top.

**In case of the above scenario** If we click on a button first then it will be executed first then a form will be triggered and after this div should get triggered.

## What is event.target vs this.target vs event.currentTarget
