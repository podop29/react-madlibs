### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a open source front end js library used to build reusable components.
  Allows developers to make large single page applications

- What is Babel?
  It is a tool used to convert js2015+ code into older versions that are compatible on more browsers.

- What is JSX?
  Allows developers to write html in react

- How is a Component created in React?
  By creating a new js file and creating a function to render the component with react

- What are some difference between state and props?
  State can store data between rerenders and change, props are just property's in a component that cant change.

- What does "downward data flow" refer to in React?
  The passing of data from parent to child components via props

- What is a controlled component?
  Where form data is handled by component state

- What is an uncontrolled component?
Where form data is handled by the dom 

- What is the purpose of the `key` prop when rendering a list of components?
  Helps react keep track of the components by giving them a unique id

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Indexes can change if the array is rerendered and cause problems

- Describe useEffect.  What use cases is it used for in React components?
  UseEffect is a build in react hook that runs every time a component is first rendered, and then also when 
  specified dependencies are changes

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  Use ref lets you create a reference to a component or html element and wont cause a rerender when changed

- When would you use a ref? When wouldn't you use one?
  If you will be working with component or element you will be using often and you don't want to keep selecting it between 
  every time you want to use it

- What is a custom hook in React? When would you want to write one?
  A custom hook is a developer created hook that lets you share logic between components, its not necessary but can
   be when there are similarity's in code between components like api calls or similar
