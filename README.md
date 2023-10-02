# Job Listing Tabs - React Project

## Description

The Job Listing Tabs project is a React-based web application that provides an interactive way to display job listings. Can switch between job tabs to view details for different positions. This project fetches job data from an external API and presents it in a tabbed format, making it easy for users to explore job opportunities.

**Project Link**: [Job Listing Tabs - Live Demo](https://job-listing-tabs.onrender.com)

## Technologies Used

The project employs the following technologies and concepts:

- **React**: The application is built using React, a popular JavaScript library for building user interfaces. React allows for the creation of reusable UI components, simplifying the development process.

- **React Hooks**: React Hooks, such as `useState` and `useEffect`, are used for state management and side effects. They enhance the functional component pattern and enable more dynamic behavior.

- **Fetching Data**: The project uses the `fetch` API to retrieve job information from an external data source. The `useEffect` hook is utilized to make asynchronous API calls.

- **Dynamic Rendering**: Job details are dynamically rendered based on user interactions. Clicking on different job tabs displays the corresponding job details.

- **UUID Generation**: The `uuid` library is employed to generate unique identifiers for job listings. These unique IDs are used as keys for React components to ensure efficient rendering and updating.

- **Conditional Rendering**: The application incorporates conditional rendering to display loading messages while fetching data and to show job details when available.

- **Component Composition**: React components are composed to create a structured and maintainable codebase. Components like `JobInfo`, `Duties`, `BtnContainer`, and `CurrentItem` work together to deliver the desired functionality.

## Conclusion

The Job Listing Tabs project provides a practical example of building a dynamic web application with React. Can explore job listings effortlessly through the tabbed interface. This project also demonstrates how to integrate external data sources into applications.
