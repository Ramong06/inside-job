# EmployerInsider

## App Basics

Testing out merge conflicts

## What is it?

Develop an app that holds information about companies that users are interested in starting a career with. The database will pull information like company bio, history, financial information, and latest news. This is going to be useful for users who need information about companies they want to interview for or want to research how to start up their own company.

## Technologies

React, Node, MongoDB/Mongoose, Chrome, multiple APIs, Chart JS, Bootstrap, Passport

## Team Member Responsibilities

- Ramon - Back-End/Database
- Ehson - Project Management
- Tolu- Research
- Mina - Front-End

## UI/UX & User Flow

- Welcome Page with Navbar
- If users want to sign up so they can save searches there is a log in button
- Search Bar where they can start searching for company by name
- Once you click on a company name a sub menu will pop up with nav bar - info, history, financial info, graphs, etc.
- Stretch Goal: filter by location and/or business category
- Color Scheme: grey & blue & dark green & silver?

### StateVariable Flow

SearchForm component is appended to each page. App.js holds the searchData state variable. App.js also has the handleSearchResults function which sets searchData to the searchData parameter that is passed into it, and uses the history context to push that searchData state variable to the /results page. Now the App.js takes the handleSearchResults prop and drills it down to the SearchForm component where it is actually used. When the SearchForm is submitted, handleSearchResults is called and accepts the results of the API call as a parameter (searchData). HandleSearchResults takes the searchData parameter, assigns it to the searchData state variable in App.js, and we're back to the start of the explanation.

### Tolu's Todos

Find a way to pass both the company data from the companys.json and financial modeling api call (now profile.json) to the stateVariable in App.js to be used on the Company page. Right now the user types in a company name, whcih may find a match in the API, company database or both. If it exists in just the api or in both, the ticker should be used to pull info. If it only exists in the company database, then a different id must be used to pull company information.
