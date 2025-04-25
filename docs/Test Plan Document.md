# **Test Plan**

---

### **Test Plan Identifier**  
WET20245-TP-v2.0-2025-4-20


---

### **Introduction**  
- **Overview**: The goal of this test plan is to establish what needs to be accomplished on the project.  
- **Goals/Objectives**: My goals for my weather website are for it to calculate the average weather, allow more than one weather selection, and to show the history of the weather throughout the day.  
- **Constraints**: The only contraints are time related.

---

### **References**  
- **Project Plan**: https://github.com/Echack/CSU-Senior-Project/blob/master/docs/Senior%20Project%20Proposal%20(1).md  
- **Other Documents**: Requirements Document- https://github.com/Echack/CSU-Senior-Project/blob/master/docs/Senior%20Project%20Requirements%20Document.md

---

### **Test Items**  
Visual Studio Code version 17.9

---

### **Features to be Tested**  
- The features that are to be test is the weather history feature, the selection of more locations, and the average weather.
- This corresponds with the accuracy requirement, convenience requirement, and simplicity requirement. These are the main specifications I want to test for the project that will solely test the goal of the project.

---

### **Features Not to be Tested**  
- This test plan will not include tests that involve the display of the website or the icons used. It also will not include more features that will allow more custimazation to the website.
- My reasoning behind this is that they are not as important as making sure the overall goals of the website succeed. Once everything is tested until completion then these features will be possibly implemented.

---

### **Approach**  
- I will test what I mentioned by running inputs into the search bar to get the data that I will then compare to news networks to make sure that I am pulling data correctly from the source. I can also implement debugging methods that can check to see where certain values are being displayed incorrectly. 
- Specify the testing levels (if this is a Master Test Plan), testing types, and testing methods (Manual/Automated, White Box/Black Box/Gray Box). The main test plan that I am hoping to achieve is one that can test the overall performance of the code. So all my tests will be manual.

---

### **Item Pass/Fail Criteria**  
When a user signs in it should...
- Pass: Display the users username on the top right of the screen to indicate the sign in was successfull.
- Fail: It does not display the users username.

When I add a weather location it should...
- Pass: Correctly display the weather next to the default weather.
- Fail: Doesnt display the weather correctly next to the default weather.

When I search a location it should...
- Pass: Properly display the average weather.
- Fail: Doesnt display the average weather.

When the weather information displays it should...
- Pass: Show the history of the weather for the entire day.
- Fail: Will not display the weather for the entire day.

When a user signs out it should...
- Pass: The display of the username will change to guest and the users chosen locations should be saved to their account.
- Fail: The username does not change to guest and the locations are not saved.

When a the degrees button is clicked it should...
- Pass: Switch between Celsius and Fahrenheit.
- Fail: It does not switch.

---

### **Suspension Criteria and Resumption Requirements**  
- If somehow the wifi I am currently using goes out then my testing activities will be suspended.  
- For me to resume testing all I would need is wifi and my computer.

---

### **Test Deliverables**  
List the test deliverables, providing links to them if applicable:
- Test Plan (this document)  
- [Test Cases](TestCases.md) 
- [Test Scripts](TestScript.md)
- [Defect/Enhancement Logs](defectEnhancementLog.md)

---

### **Test Environment**  
Detail the configuration of the test environment:
- **Laptop**  
- **The Software I am using is Virtual Studio Code**  
- **CSU WIRELESS is my Network**  
- **Tools**: I will be using a live server from Virtual Studio Code. I am also using Firebase for the authentification part of my project.

---

### **Estimate**  
There will be zero cost for any tests. The entire product will use open resources that require no payment to run or test.

---

### **Schedule**  
- The Test Schedule will begin October 17th to November 25th. 
- https://github.com/Echack/CSU-Senior-Project/blob/master/docs/Senior%20Project%20Proposal%20(1).md

---

### **Staffing and Training Needs**  
Evan Hack is the person needed to code for the product. In order to complete this project one must have thourough knowledge in html, java, and how to manipulate API.

---

### **Responsibilities**  
Evan Hack is the creator, coder, and scribe for the entire project.

---

### **Risks**  
The only risk identified so far is the chance that at any moment the API's used for th product are no longer valid or the website that distributed them is shutdown.
My contingency plan is to locate and find other API's that gather weather information and implement those into my product.

---

### **Assumptions and Dependencies**  
### My Assumptions are:
- The weather API used to fetch the data is functional and reliable.
- The test data is accurate.
- Users will have access to a stable internet connection while using the website.

### My Dependecies are:
- The availability of third-party weather API's.
- Hosting and server stability for the website.
- Access to the test environments.
- The availability of Firebase.
---

### **Approvals**  
Evan Hack: Creator

---

**Signature:** 
Evan Hack
