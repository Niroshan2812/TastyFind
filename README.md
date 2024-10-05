Fridge & Recipe Mobile App

A mobile application designed to help users manage their fridge inventory, search for recipes, and get suggestions based on available ingredients. 
The app allows users to create shopping lists, store favorite recipes, and receive notifications for expiring items. Built with React Native, 
Firebase, and Firestore.

 Features

 Phase 1: Core Features
1. **User Authentication**: 
   - Sign up and log in with email, Google, or social media accounts.
2. **Fridge Inventory Management**: 
   - Add, edit, and delete fridge items (name, quantity, expiration date, category).
   - View items in a structured list.
3. **Recipe Database and Display**: 
   - View a list of recipes with details (ingredients, steps).
4. **Recipe Search**: 
   - Search for recipes by name or ingredient.

### Phase 2: Recipe Suggestion and Customization
5. **Recipe Suggestions**: 
   - Get recipe suggestions based on the ingredients in the fridge.
   - Filter by recipe type (e.g., vegan, gluten-free).
6. **User-Generated Recipes**: 
   - Add, edit, and delete personal recipes.

### Phase 3: Enhancements and Advanced Features
7. **Favorites and Saved Recipes**: 
   - Save and favorite recipes for easy access.
8. **Shopping List**: 
   - Generate shopping lists based on missing ingredients.
9. **Recipe Sharing**: 
   - Share recipes on social media or via messaging apps.

### Phase 4: Notifications and Offline Mode
10. **Expiry Notifications**: 
   - Receive notifications when fridge items are nearing expiration.
11. **Offline Mode**: 
   - View saved fridge items and recipes while offline.

### Phase 5: User Profile and Preferences
12. **User Profile Customization**: 
   - Set dietary preferences and get personalized recipe suggestions.

### Phase 6: Final Touches
13. **UI/UX Enhancements**: 
   - Improve user interface, optimize for different screen sizes.
14. **Localization and Accessibility**: 
   - Add language options and ensure accessibility support.

### Phase 7: Testing and Deployment
15. **Testing**: 
   - Thoroughly test functionalities and user experience.
16. **App Store Submission**: 
   - Submit to Apple App Store and Google Play Store.

---

## Installation

### Prerequisites
- **Node.js**: Make sure Node.js is installed.
- **React Native CLI**: Ensure you have React Native CLI set up.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fridge-recipe-app.git
   cd fridge-recipe-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and add a web app to get the Firebase configuration object.
   - Replace the values in `firebaseConfig.js` with your Firebase project details.

   ```js
   const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-auth-domain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id"
   };
   ```

4. Firebase Firestore setup:
   - In Firebase, create a Firestore database.
   - Add a collection called `fridgeItems` with fields like `name`, `quantity`, `expiration`, and auto-generated `id`.

5. Start the development server:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

---

## Firebase Configuration

To set up Firebase with the app, ensure you’ve installed Firebase SDK:

```bash
npm install firebase
```

In `firebaseConfig.js`, include your Firebase project configuration:

```js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "your-api-key",
   authDomain: "your-auth-domain",
   projectId: "your-project-id",
   storageBucket: "your-storage-bucket",
   messagingSenderId: "your-messaging-sender-id",
   appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

---

## How to Use

1. Open the app and navigate to the **Fridge Screen** to view fridge items.
2. Use the **Edit** button next to an item to modify its details (name, quantity, expiration).
3. Save the changes, and they will be stored in Firebase Firestore.

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any changes or additions.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any inquiries, feel free to contact Niroshan.

