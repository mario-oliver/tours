## Figma URL

[Tours](https://www.figma.com/file/OnLoM3AzBFaHzSc2iolJS0/Tours?node-id=0%3A1&t=wiRXOlTLN5ehekYI-1)

## Steps

#### Setup

First create - three components (Tours, Tour, and Loading), you can create three separate files in your project directory: Tours.jsx, Tour.jsx, and Loading.jsx. In each of these files, you will define a React functional component that returns JSX code for rendering the respective component.

#### Fetch Tours

The Tours component will be responsible for rendering a list of Tour components. In App.jsx, you will fetch the tours data from a URL using the fetch API. Before the data is loaded, you should show a loading spinner or message, which can be implemented using the Loading component.

#### Render Tours

Once the data is loaded, you can set the state of your component to store the tours data. You can then map over the tours array and render a Tour component for each tour. Each Tour component will receive the tour data as props, including the tour's id, image, info, name, and price.

#### Remove Tour

To implement the "remove tour" functionality, you can add a button to each Tour component that, when clicked, removes the tour from the list of tours. You can achieve this by updating the state of the Tours component to remove the tour from the tours array.

#### Read More

To implement the "read more" functionality, you can add a button to each Tour component that, when clicked, expands the description of the tour. You can achieve this by updating the state of the Tour component to toggle a "read more" flag, and conditionally rendering the full description based on the flag.

#### Re-fetch Tours

Finally, you can implement a "re-fetch" functionality by adding a button or other user interface element that, when clicked, re-fetches the tours data from the URL and updates the state of the Tours component. You may also want to add a loading state again during the re-fetching process.

Overall, the flow of the application should look something like this:

- App.jsx fetches tours data from a URL and sets the state of the Tours component to store the data.
- The Tours component maps over the tours array and renders a Tour component for each tour.
- Each Tour component has a "remove tour" button and a "read more" button.When the "remove tour" button is clicked, the Tours component updates its state to remove the tour from the tours array.

- When the "read more" button is clicked, the Tour component updates its state to toggle a "read more" flag and conditionally renders the full description.

- When the "re-fetch" button is clicked, the Tours component re-fetches the tours data from the URL and updates its state.

###### READ ME FOR FAQ ACCORDION SECTION

## Figma URL

[Accordion](https://www.figma.com/file/TAwJ3kWOqkw0o8UVtAMOHO/Accordion?node-id=0%3A1&t=1YEti8xBykw69tBH-1)

## Steps

#### Examine and Import Data

Review data.js and import the questions array from data.js into your project. This array should contain objects that represent the questions and their associated data, such as the question text

#### Setup State Value

Next, set up the questions array as a state variable using the useState hook. This will allow you to modify the data and have those changes automatically reflected in the rendered output.

#### Render Questions

To display the list of questions, you can iterate over the questions array and render a SingleQuestion component for each item in the array. Each SingleQuestion component should display the question text in the header, along with a button to toggle the question text.

#### Toggle Question

In the SingleQuestion component, you can set up the functionality for the toggle button by defining a function that toggles the state of a "showInfo" flag. When the flag is set to true, the answer text will be displayed. When the flag is set to false, only the question text will be displayed.

#### Extra Challenge

To set up the functionality where only one question is displayed at a time, you can modify the state of the questions array to keep track of the currently selected question. You can do this by defining a function that updates the state to reflect the selected question index. Then, you can use the selected question index to render only the SingleQuestion component that corresponds to the currently selected question.

Overall, the flow of the application should look something like this:

- Import the questions array from data.js into your project.
- Set up the questions array as a state variable using the useState hook.
- Iterate over the questions array and render a SingleQuestion component for each item in the array.
- In the SingleQuestion component, display the question text in the header and a button to toggle the question text.
- Define a function that toggles the state of a "showAnswer" flag, which determines whether the answer text is displayed or not.
- Modify the state of the questions array to keep track of the currently selected question index.
- Define a function that updates the state to reflect the selected question index.
- Use the selected question index to render only the SingleQuestion component that corresponds to the currently selected question.
