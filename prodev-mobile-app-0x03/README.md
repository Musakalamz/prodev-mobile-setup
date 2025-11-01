# 🔐 Core Components and Login Screen (prodev-mobile-app-0x03)

This repository contains the solution for **Task 4: Explore More Core Components**, resulting in the implementation of a full-featured **Mobile Login Screen**. This task combined layout management, form inputs, external styling, and third-party icon integration.

## ✨ Key Implementations

* **External Styling:** Separated all styles into a dedicated file (`styles/index.tsx`) and imported them, promoting modularity and maintainability.
* **Form Input Handling:** Utilized the `<TextInput>` component for email and password fields, including keyboard type specification (`keyboardType="email-address"`).
* **Complex Form Layout:** Structured password input with an inline icon using a `<View>` wrapper and `flexDirection: 'row'` (`styles.passwordGroup`).
* **Third-Party Icons:** Integrated the **FontAwesome** and **Ionicons** libraries via `@expo/vector-icons` for the back arrow and password visibility toggle.
* **Social Sign-In:** Implemented `TouchableOpacity` buttons for "Continue with Google" and "Continue with Facebook," demonstrating common social media authentication patterns.

## 📁 File Structure

The project utilizes an improved folder structure:

* `app/index.tsx`: The main Login Screen component.
* `styles/index.tsx`: Contains all global styles defined via `StyleSheet.create()`.
* `app/_layout.tsx`: Configured to hide the default header (`headerShown: false`).

## 🚀 Getting Started

1.  Navigate to the project directory: `cd prodev-mobile-app-0x03`
2.  Ensure necessary assets (`logo.png`, `google.png`, `facebook.png`) are in `assets/images`.
3.  Run the application: `npx expo start`
4.  Test the app on your physical device using **Expo Go**.

## 👤 Author

* **Musa Ogunsolu** (GitHub: [Musakalamz](https://github.com/Musakalamz))
* **LinkedIn:** [Musa Ogunsolu](https://www.linkedin.com/in/musa-ogunsolu)
