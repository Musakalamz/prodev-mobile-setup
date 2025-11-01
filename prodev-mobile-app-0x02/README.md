# 🖼️ Safe Areas, Images, and Touchable Components (prodev-mobile-app-0x02)

This repository contains the solution for **Task 3: Implementing Safe Areas, Images, and Touchable Components**. The goal was to build a visually engaging and responsive welcome screen using core React Native components essential for modern mobile UI design.

## ✨ Key Components and Concepts

* **SafeAreaView:** Utilized `SafeAreaProvider` and `SafeAreaView` to prevent UI elements from overlapping with device notches, status bars, and navigation areas.
* **ImageBackground & Dimensions:** Used to set a full-screen, responsive background image by integrating `Dimensions.get("window").height` with `resizeMode="cover"`.
* **TouchableOpacity:** Implemented the "Join here" and "Sign In" buttons, providing visual feedback when pressed, which is the standard method for creating interactive buttons in React Native.
* **Component Structure:** Logically grouped text elements and buttons into separate `<View>` containers (`styles.textGroup`, `styles.buttonGroup`) for clean layout management.

## 💡 Real-World Application

The structure and components used here (full-screen image, logo placement, action buttons at the bottom) are standard practice for **onboarding** and **splash screens** in production mobile applications.

## 🚀 Getting Started

1.  Navigate to the project directory: `cd prodev-mobile-app-0x02`
2.  Ensure required assets (`Logo.png`, `background-image.png`) are in the `assets/images` directory.
3.  Run the development server: `npx expo start`

## 👤 Author

* **Musa Ogunsolu** (GitHub: [Musakalamz](https://github.com/Musakalamz))
* **LinkedIn:** [Musa Ogunsolu](https://www.linkedin.com/in/musa-ogunsolu)
