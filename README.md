# Project 1: Shared shopping list

## Overview
This web application, "Shopping Lists", is designed for managing shared shopping lists. It is built using a three-tier architecture with views, controllers, services, and database layers. The main functionality of the application includes creating and managing shopping lists, adding items to the lists, marking items as collected, and providing an overall summary of the shopping lists and items. The application is primarily hosted locally at http://localhost:7777.

The repository structure, as well as instructions on how to deploy and test the application, are outlined below.

### Project Structure

* **Docker-compose.yml**: This file at the root directory of the project is used to launch the application.
* **README.md**: This file contains the project's documentation.
* **/shopping-lists**: This folder contains the main application.
    * **app.js**: The main entry point to the application. Handles all the requests made and returns the right method for each request.
    * **/views**: This directory contains the user interface templates.
        * **/layouts**: Directory that contins the layouts.
            * **layout.eta**: Layout file that are used in all the pages of this application.
        * **main.eta**: This is the main page of the application. Shows statistics of the lists and items if there are any.
        * **lists.eta**: This is the page that shows the shopping lists that are active.
        * **list.eta**: This is the page that shows an individual shopping list and the items that it contains.
    * **/controllers**: This directory contains all the controllers that app.js uses.
        * **itemController.js**: This controller controls items in the application.
        * **listController.js**: This controller controls lists in the application.
        * **statisticsController.js**: This controller gets the statistics that are shown in the main page of the application.
    * **/database**: Directory that contains the database.
        * **database.js**: Establishes connection with the database.
    * **/services**: Directory that contains the services that the application uses.
        * **itemService.js**: Service that handles everything related to items.
        * **listService.js**: Service that hanldes everything related to lists.
    * **/utils**: Directory that contains utils used in the application.
        * **requestUtils.js**: Contains redirectTo that is used to redirect with the 303 status.
    * **deps.js**: Contains all the application dependencies.
* **/flyway/sql**: This directory contains the SQL scripts used to initialize the database.
* **/e2e-playwright**: Directory that contains everything related to e2e tests.

### Deployment
To deploy the application locally, navigate to the root directory of the project and execute the following command: docker-compose up.

The application will start on port 7777, and can be accessed locally at http://localhost:7777.

### Usage
Upon launching the application, you will be directed to the main page that displays a title "Shared shopping lists" and provides statistics about the total number of shopping lists and items created.

The main page has a link, "Lists", which navigates you to the path /lists, where you can view existing active shopping lists or add a new one. Each shopping list in this section is a link to its specific page, where you can add items and mark them as collected.

When adding a new shopping list or a new item to a shopping list, the application uses the POST/Redirect/GET pattern for form submission. After a successful operation, you are redirected back to the relevant page.

### Database
This application uses a connection pool to handle the database connections. Real database credentials are not included in the submission code.

### Tests
The project includes five meaningful end-to-end tests to verify the functionality of the application. Tests can be run with the command: `docker-compose run --entrypoint=npx e2e-playwright playwright test && docker-compose rm -sf`

### Online Deployment
The application has been deployed online and is fully functional. Please find the online deployment address in the README.md file.

### Running the Application Locally
To run the application locally, please ensure you have docker-compose installed. Once docker-compose is ready, navigate to the project's root directory and execute the `docker-compose up` command.

### Usabilty
All redirections are implemented using the status code 303 for better usability.
