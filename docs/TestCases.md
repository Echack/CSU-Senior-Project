# Weather Website Test Cases

---

### Test Case 1: Check Current Weather Display Functionality

| **Test Scenario**          | Check Current Weather Display Functionality                                                |
|-----------------------------|--------------------------------------------------------------------------------------------|
| **Test Case**              | Check if the weather website displays the current weather information correctly             |
| **Preconditions**          | Weather API must be functional and the website should be running.                           |
| **Test Steps**             | 1. Launch the weather website. <br> 2. Enter a valid city name (e.g., "New York"). <br> 3. Click the "Search" button. |
| **Test Data**              | City: New York                                                                              |
| **Expected Result**        | The page should display current weather data, including temperature, humidity, and wind speed. |
| **Actual Result**          | _(Leave this blank for testing)_                                                            |
| **Pass/Fail**              | _(Leave this blank for testing)_                                                            |

---

### Test Case 2: Validate Search by ZIP Code

| **Test Scenario**          | Validate Search Functionality by ZIP Code                                                  |
|-----------------------------|--------------------------------------------------------------------------------------------|
| **Test Case**              | Ensure weather data is displayed when a valid ZIP code is entered                           |
| **Preconditions**          | Website should support search by ZIP code. Weather API must support ZIP-based queries.      |
| **Test Steps**             | 1. Launch the weather website. <br> 2. Enter a valid ZIP code (e.g., "10001"). <br> 3. Click the "Search" button. |
| **Test Data**              | ZIP Code: 10001                                                                             |
| **Expected Result**        | The page should display weather data for the entered ZIP code.                              |
| **Actual Result**          | _(Leave this blank for testing)_                                                            |
| **Pass/Fail**              | _(Leave this blank for testing)_                                                            |

---

### Test Case 3: Check Invalid Input Handling

| **Test Scenario**          | Handle Invalid Search Inputs                                                               |
|-----------------------------|--------------------------------------------------------------------------------------------|
| **Test Case**              | Ensure the website displays an error message for invalid inputs                            |
| **Preconditions**          | Website must be functional, and error-handling should be implemented.                      |
| **Test Steps**             | 1. Launch the weather website. <br> 2. Enter an invalid city name (e.g., "xyz123"). <br> 3. Click the "Search" button. |
| **Test Data**              | Invalid Input: xyz123                                                                      |
| **Expected Result**        | The website should display an error message like "Invalid city name. Please try again."    |
| **Actual Result**          | _(Leave this blank for testing)_                                                            |
| **Pass/Fail**              | _(Leave this blank for testing)_                                                            |

