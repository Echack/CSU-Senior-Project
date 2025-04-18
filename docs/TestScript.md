# Test Scripts for Weather Website Testing

---

## **Script ID:** TS001
### **Test Case Reference:** Test Case 1 - 55
### **Objective:**
To validate the functionality of weather data display, history features, and the ability to manage multiple locations on the weather website. Also to make the the entire UI is functional and that the Sign in feature works.

---

### **Preconditions**
- The weather website is live and accessible.
- The Weather API is functional and configured correctly.
- Test data are prepared for execution.
- Test environment meets system requirements.

---

## **Test Script Sections**
### **1. Check Current Weather Display Functionality**

| **Step No.** | **Action**                                                              | **Expected Result**                                                                      |
|--------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| 1            | Launch the weather website in a browser.                                | The website should load successfully.                                                  |
| 2            | Enter a valid city name (e.g., "New York") into the search bar.         | The search bar accepts the input without errors.                                       |
| 3            | Click the "Search" button.                                              | The page displays current weather data including temperature, humidity, and wind speed. |
| 4            | Verify the weather data displayed matches expected results from the API. | The data displayed should match the API response accurately.                           |

---

### **2. Validate History Functionality**

| **Step No.** | **Action**                                                              | **Expected Result**                                                                      |
|--------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| 1            | Launch the weather website in a browser.                                | The website should load successfully.                                                  |
| 2            | Enter a valid city name (e.g., "New York") into the search bar.         | The search bar accepts the input without errors.                                       |
| 3            | Click the "Search" button.                                              | The weather page loads for the city.                                                   |
| 4            | Check the history section for the displayed city.                       | The history box shows accurate weather data for the day, including time and conditions.|

---

### **3. Validate Adding Multiple Locations**

| **Step No.** | **Action**                                                              | **Expected Result**                                                                      |
|--------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| 1            | Launch the weather website in a browser.                                | The website should load successfully.                                                  |
| 2            | Enter a valid city name (e.g., "Summerville") into the search bar.      | The search bar accepts the input without errors.                                       |
| 3            | Click the "Add" button.                                                 | The city is added to the weather locations list with correct data.                     |
| 4            | Repeat steps for additional cities (up to three).                       | Multiple locations should appear, each with accurate weather data and averages.        |

---

### **Postconditions**
- Ensure no data or user settings persist between test runs unless required.
- Close the browser after completing each test.

---

## **Execution Status**
| **Test Script ID** | **Execution Status** | **Pass/Fail** | **Remarks**                         |
|---------------------|----------------------|---------------|--------------------------------------|
| TS001               | Completed           | Pass          | Data displayed accurately.           |
| TS002               | Completed           | Pass          | History box not displaying any data. |
| TS003               | Completed           | Pass          | Multiple locations added successfully.|

---

## **Code Used For Testing**
[Click Here](https://github.com/Echack/CSU-Senior-Project/blob/master/Project/index.html)

