# weatherDashboard

# Unit 06 Server-Side APIs Homework: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. In this homework assignment, your challenge is to build a weather dashboard using the OpenWeather API.


## Instructions

Build a weather dashboard application with search functionality to find current weather conditions for multiple cities. Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly
```

How do you deliver this? Here are some guidelines:

* Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.

* Use AJAX to hook into the API to retrieve data in JSON format.

* Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

* Easy
  * Display the following under current weather conditions:

    * City

    * Date

    * Icon image (visual representation of weather conditions)

    * Temperature

    * Humidity

    * Wind speed

    ![weather empty](./Assets/cleared.png)
    ![weather single](./Assets/single.png)
    ![multiple city](./Assets/muliCity.png)




### Hints

* Create multiple functions within your application to handle the different parts of the dashboard:

  * Current conditions



* You will need to make more than one AJAX call.

* You will need to hardcode some of the parameters in the API's URL. User input will determine some of the other parameters.


## Minimum Requirements

* Easier
    * Functional, deployed application.

    * GitHub repository with a unique name and a README describing the project.

    * User can search for weather reports by city using the openweathermap API.

    * After searching for a city, the following information is displayed:

        *  Current temperature

        *  Current humidity

        *  Windspeed

        * Application uses icons to represent weather conditions.

        * Results from previous city remain on the screen

## Bonus

* Use the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to add the user's current location to the initial landing page.



## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository

* Updated Portfolio
- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
