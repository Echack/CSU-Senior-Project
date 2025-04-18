// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyActeN2BdoLDb89zP_b2-bphFoOlX6EFWk",
    authDomain: "wethite-5140b.firebaseapp.com",
    projectId: "wethite-5140b",
    storageBucket: "wethite-5140b.firebasestorage.app",
    messagingSenderId: "1004767514755",
    appId: "1:1004767514755:web:5b5b0692bc937b3f610bb6",
    measurementId: "G-8TJEBG3P4Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login modal logic
function showAuthSection() {
    const authSection = document.getElementById("auth-section");
    const overlay = document.getElementById("overlay");
    if (authSection) authSection.style.display = "flex";
    if (overlay) overlay.style.display = "block";
  }

function closeAuthSection() {
  const authSection = document.getElementById("auth-section");
  const overlay = document.getElementById("overlay");
  if (authSection) authSection.style.display = "none";
  if (overlay) overlay.style.display = "none";
}

// Auth functions
async function signUp() {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
    clearAuthInputs();
    closeAuthSection();
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
}

async function signIn() {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
    clearAuthInputs();
    closeAuthSection();
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

async function signOutUser() {
  try {
    await signOut(auth);
    alert("Signed out!");
    document.getElementById("username-display").textContent = "Signed in as: Guest";
    
    // Reset weather cards to default (New York only)
    resetToDefaultWeather();

    showAuthSection();
  } catch (error) {
    alert("Sign out failed: " + error.message);
  }
}

function resetToDefaultWeather() {
  const container = document.querySelector(".weather-container");
  if (!container) return;

  container.innerHTML = ""; // Remove all weather/history cards

  const cityName = "New York";
  const cityKey = "new york";

  // Create pair wrapper
  const pairWrapper = document.createElement("div");
  pairWrapper.className = "weather-history-pair";

  // Create weather card
  const weatherCard = document.createElement("div");
  weatherCard.className = "weather";
  weatherCard.style.marginLeft = "20px";
  weatherCard.innerHTML = `
    <div class="weather-content">
      <img src="images/rain.png" class="weather-icon" alt="Weather Icon">
      <h1 class="temp" data-temp-celsius="--">--°C</h1>
      <h2 class="city">${cityName}</h2>
      <div class="details">
        <div class="col">
          <img src="images/humidity.png" alt="Humidity">
          <div>
            <p class="humidity">--%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src="images/wind.png" alt="Wind Speed">
          <div>
            <p class="wind">-- km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    <button class="delete-location-btn">Delete</button>
    <button class="cancel-location-btn" style="display: none;">Cancel</button>
  `;

  // Create history box
  const historyBox = document.createElement("div");
  historyBox.className = "history-box";
  historyBox.innerHTML = `
    <h2 class="history-title">${cityName} History</h2>
    <div class="hourly-history"></div>
  `;

  // Add to DOM
  pairWrapper.appendChild(weatherCard);
  pairWrapper.appendChild(historyBox);
  container.appendChild(pairWrapper);

  // Add functionality
  if (typeof addWeatherBoxFeatures === "function") {
    addWeatherBoxFeatures(weatherCard);
  }

  if (typeof checkWeather === "function") {
    checkWeather(cityName, weatherCard, historyBox);
  }

  // Update city set
  if (window.activeCitySet) {
    activeCitySet.clear();
    activeCitySet.add(cityKey);
  }
}


function clearAuthInputs() {
  document.getElementById("auth-email").value = "";
  document.getElementById("auth-password").value = "";
}

// Watch auth state
onAuthStateChanged(auth, async (user) => {
  const section = document.getElementById("auth-section");
  const usernameDisplay = document.getElementById("username-display");
  const toggleBtn = document.getElementById("auth-toggle-btn");
  if (user) {
    if (section) section.style.display = "flex";
    if (usernameDisplay) {
      const username = user.email.split("@")[0];
      usernameDisplay.textContent = `Signed in as: ${username}`;
    }
    if (toggleBtn) toggleBtn.textContent = "Sign Out";


    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const savedLocations = docSnap.data().locations || [];
        savedLocations.forEach(cityKey => {
          const cityName = cityKey.charAt(0).toUpperCase() + cityKey.slice(1);
          if (typeof recreateWeatherCard === "function") {
            recreateWeatherCard(cityName, cityKey);
          }
        });
      }
    } catch (error) {
      console.error("Error loading saved locations:", error);
    }

  } else {
    if (section) section.style.display = "none";
    if (usernameDisplay) usernameDisplay.textContent = "Signed in as: Guest";
    if (toggleBtn) toggleBtn.textContent = "Sign In";
  }
});

// Helper to update saved locations for current user
async function updateUserLocations(citySet) {
  const user = auth.currentUser;
  if (user) {
    try {
      await setDoc(doc(db, "users", user.uid), {
        locations: Array.from(citySet)
      });
    } catch (error) {
      console.error("Error saving user locations:", error);
    }
  }
}

// Recreate a weather card from saved data
window.recreateWeatherCard = function(cityName, cityKey) {
  if (!window.activeCitySet) window.activeCitySet = new Set();
  if (activeCitySet.has(cityKey)) return;
  if (document.querySelectorAll(".weather").length >= 3) return;

  const newWeatherDiv = document.createElement("div");
  newWeatherDiv.classList.add("weather");
  newWeatherDiv.style.marginLeft = "20px";
  newWeatherDiv.innerHTML = `
    <div class="weather-content">
      <img src="images/rain.png" class="weather-icon" alt="Weather Icon">
      <h1 class="temp" data-temp-celsius="--">--°C</h1>
      <h2 class="city">${cityName}</h2>
      <div class="details">
        <div class="col">
          <img src="images/humidity.png" alt="Humidity">
          <div>
            <p class="humidity">--%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src="images/wind.png" alt="Wind Speed">
          <div>
            <p class="wind">-- km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    <button class="delete-location-btn">Delete</button>
    <button class="cancel-location-btn" style="display: none;">Cancel</button>
  `;

  const pairWrapper = document.createElement("div");
  pairWrapper.className = "weather-history-pair";

  // Create the history box
  const newHistoryBox = document.createElement("div");
  newHistoryBox.className = "history-box";
  newHistoryBox.innerHTML = `
    <h2 class="history-title">${cityName} History</h2>
    <div class="hourly-history"></div>
  `;

  // Combine weather + history into wrapper
  pairWrapper.appendChild(newWeatherDiv);
  pairWrapper.appendChild(newHistoryBox);

  const weatherContainer = document.querySelector(".weather-container");
  if (weatherContainer) weatherContainer.appendChild(pairWrapper);

  const deleteBtn = newWeatherDiv.querySelector(".delete-location-btn");
  deleteBtn.addEventListener("click", () => {
    if (pairWrapper) pairWrapper.remove();
    activeCitySet.delete(cityKey);
    updateUserLocations(activeCitySet);
  });

  activeCitySet.add(cityKey);
  addWeatherBoxFeatures(newWeatherDiv);
  checkWeather(cityName, newWeatherDiv, newHistoryBox);
};

function toggleAuth() {
  const user = getAuth().currentUser;
  if (user) {
    // If logged in, just sign out instantly
    signOutUser();
  } else {
    // If not logged in, show the sign-in popup
    showAuthSection();
  }
}


window.showAuthSection = showAuthSection;
window.closeAuthSection = closeAuthSection;
window.signUp = signUp;
window.signIn = signIn;
window.signOut = signOutUser;
window.updateUserLocations = updateUserLocations;
window.toggleAuth = toggleAuth;
