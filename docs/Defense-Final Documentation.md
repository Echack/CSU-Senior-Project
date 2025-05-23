# Wethite: The Sky Is Just a Click Away

**Author:** Evan Hack

**Major:** Cybersecurity

**Project Advisor:** Songhui Yue


## Abstract
Wethite is an interactive weather website that integrates various weather APIs and Firebase Authentication to provide users with precise and personalized weather information. It enables users to search and save locations, view current and hourly weather forecasts, and manage sessions using sign-in and sign-out functionality. This project concentrates on interactive design and real-world web development technologies.

## 1. Statement of Purpose  
### Problem Statement  
People rely on weather forecasts to dress in appropriate clothing and feel comfortable throughout the day. However, weather is generally unpredictable and inconsistency across weather sources makes it difficult to provide users with trust when planning for the day. Such inaccurate information can lead to discomfort or health risks from overdressing or underdressing for current conditions.

## Statement of Purpose
The target of this project is to develop an online weather application that aggregates information from a number of weather APIs so as to provide a more comprehensive and accurate forecast. By eliminating uncertainty caused by conflicting data, the application aids users in making logical choices about their daily wardrobe and planning. The application is designed to be responsive, user-friendly, and intuitive—offering an efficient solution as climatic conditions become increasingly unpredictable.

---

## 2. Research & Background  
Forecasts about the weather help individuals plan their day and select the right attire. Weather, however, can be very unpredictable, and various sources may have differing forecasts, so it is hard to predict using a single source. Such inconsistency may cause distress or even health problems when people are caught off guard by changing weather.
Although there are many weather apps, most of them rely on a single API or source, which limits the accuracy and reliability of the data. This project aims to break that limitation by developing a site that aggregates the data from several weather APIs. By merging forecasts from different sources, the site will present users with an accurate and balanced picture of the current and future weather, thereby helping them make better day-to-day choices.

---

## 3. Project Language(s), Software, and Hardware  

- **Languages:**  JavaScript, HTML5, and CSS3.
- **Software:**  Visual Studio Code, Firebase, and Weather APIs.
- **Hardware:**  HP Envy Laptop

---

## 4. Project Requirements  
Here is a link to the project requirements.
[Link Text](https://github.com/Echack/CSU-Senior-Project/blob/master/docs/Senior%20Project%20Requirements%20Document.md)

---

## 5. Project Implementation Description & Explanation  
When designing this project I wanted it to look simplistic in way to where it would not be overwhelming to users. I used calming colors for the background to complement this design choice.
The overall design is comprised of five buttons that control the use of the project. These buttons are "Contact me", "Sign in", "Search", "Add", and "C/F". The "C/F" button was implemented so users have the choice of switching between the two measurements of temperature based on what they are the most familiar with. To complement the simplicity of the design the project only allows the use of three different locations. If users made a mistake and want to remove a location a remove feature was added so all they had to do was click it to remove the weather location. If users want to only change the display of the initial weather then all they have to do is type in a location and then click the search button. The "Contact Me" button was installed so that users would be able to contact the creator if any issues were to arise. In order for users to save their chosen locations an account system was created. Users are given the option to sign up or to sign in if an account has already been made. The overall design of this project was centered around simplicity and comfort so that any user who uses the project will feel at ease.

### Screenshots  
- **Fig 1.** Here is the layout and design. 
![Screenshot 1](SP_screenshot1.png)

- **Fig 2.** When I click the C/F button it will switch between Celsius and Fahrenheit.  
![Screenshot 2](SP_screenshot2.png)

- **Fig 3.** When using the search bar and clicking add you can create up to three weather displays.  
![Screenshot 3](SP_screenshot3.png)

- **Fig 4.** When clicking on each weather display it will fade out the display and give a delete option.
![Screenshot 4](SP_screenshot4.png)

- **Fig 5.** When searching for a location and clicking the search button it will change the location of the initial display. 
![Screenshot 5](SP_screenshot5.png)

- **Fig 6.** When clicking the contact me button it will display information on how to contact the creator.  
![Screenshot 6](SP_screenshot6.png)

- **Fig 7.** When clicking the sign in button a bunch of options for signing in will be displayed.  
![Screenshot 7](SP_screenshot.7.png)

- **Fig 8.** When signed in that persons username will be displayed at the top left.  
![Screenshot 8](SP_screenshot8.png)

### Source Code  
[🔗 View the source code repository](https://github.com/Echack/CSU-Senior-Project/tree/master/Project)

---

## 6. Test Plan
Here is a link to the test plan that establishes the type of testing used during the creation of the project.
[Link Text](https://github.com/Echack/CSU-Senior-Project/blob/master/docs/Test%20Plan%20Document.md)

---

## 7. Test Results
To evaluate usability and overall user experience, I collected feedback from a small group of users who interacted with the website. The goal was to test how intuitive and functional the application felt to new users and whether the core features behaved as expected.

## Participants
- 5 individuals (students and friends) tested the site on different devices and browsers.
- Experience levels ranged from beginner to intermediate in tech use.


| **Feature Tested**         | **Feedback Summary**                                                                 |
|----------------------------|---------------------------------------------------------------------------------------|
| **Sign In / Sign Up**      | Most users found the authentication process smooth and appreciated the clear pop-up layout. They liked seeing their username displayed once signed in. |
| **Weather Search / Add**   | Users liked the ability to search for different cities and found the limit of three weather cards reasonable and clean. However, one person suggested a smoother way to remove a location. |
| **Weather History Display**| Positive feedback on the layout and clarity of the hourly history. The styling made it easy to distinguish each hour’s data. Some suggested showing more visual differences between cards. |
| **Design & UI**            | The animated background and soft theme were well received. Users described the design as “friendly” and “easy on the eyes.” |
| **Performance**            | No major complaints. Pages loaded fast in testing. |


### Summary of User Ratings (Out of 5)

| Feature               | Average Rating |
|----------------------|----------------|
| Sign In / Sign Up    | 4.8            |
| Weather Search/Add   | 4.6            |
| History Display      | 4.7            |
| Design & Aesthetics  | 5.0            |
| Performance          | 4.5            |

---

## 8. Challenges Overcome 
I came across a couple challenges while creating the project. The first challenge was finding API's to use and learning how to properly use their data. After an hour or two of testing I resolved the issue by following a tutorial on how to manipulate API's and their data. The second was figuring out how to setup a proper way of storing user information so I could create an account feature. I used Firebase to help me store passwords behind layers of security. Firebase stores user sign in information and saved weather data so that users will be able to have a personal connection to the site.

---

## 9. Future Enhancements  
Improvements and addition features that I would like to add in the future are...
- Music
- More fluent weather displays
- Mobile functionality
- Weather shown based on current location
- More account features like notifications
- More security features like MFA.

---

## 10. Defense Presentation Slides
[Link Text](https://github.com/Echack/CSU-Senior-Project/blob/master/docs/Defense_Presentation.pdf)
