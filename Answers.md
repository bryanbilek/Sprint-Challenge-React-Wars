# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library that is used in various forms to create complex, rich user interfaces.  It helps developers build small, reusable pieces of UI that can be easily put together to make larger scale applications. The React team understood how difficult working with the DOM API was so they built a simple engine called the virtual DOM that interacts with the actual DOM for us. We tell the virtual DOM which elements and state (data) to render to the actual DOM, and it will do so. Beyond that, it will “react” when the state (data) in our app changes, & will update the DOM accordingly. It's an useful tool to learn for new developers because of these reasons.

2. What does it mean to think in react?

Think in React is essentially thinking about what you're building in React & what its purpose is. It's being mindful & having a plan as you build your apps.

3. Describe state.

State is like a data store for React components. It is mostly used to update a component when users perform some type of action.

4. Describe props.

When we want to pass information held on state inside one component to another component, we pass them as props. We use props to have more control over our apps by making fewer unintended changes to our state, for readability purposes by breaking our components up into separate files to identify which ones have states or which ones pass or receive props, we use props for maintenance because of how much easier it is to identify particular component files as well as debug problems that may arise, & lastly for reusability because once set up, it is a lot easier to add, remove, or change the components of our apps with less lines of code. 


5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects.