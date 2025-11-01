# 📱 Mobile Development Environment Setup and First App (prodev-mobile-setup)

This repository documents the initial environment setup and the creation of the first mobile application using the modern mobile development stack: **React Native**, **TypeScript**, and the **Expo Framework** with **NativeWindCSS**.

This setup ensures a streamlined and efficient workflow for building cross-platform applications.

## ⚙️ Task 0: Setting Up and Testing Your Mobile Development Environment

The objective of this task was to confirm the readiness of the development environment, focusing particularly on setting up **Expo Go** for device testing. Mobile development requires more robust testing environments, and Expo Go allows for cost-effective, real-time testing on physical iOS and Android devices.

### Prerequisites Verified

The following tools and prerequisites have been successfully installed and configured:

* **Node.js** (LTS version)
* **VS Code** (IDE)
* **Operating System** (macOS/Linux/Windows)
* **Expo Go** (Installed on physical iOS/Android device)

### Steps to Install Expo Go

1.  Visited the official **Expo Go** homepage (`https://expo.dev/go`).
2.  Installed the **Expo Go** application from the **Google Play Store** (Android) or **Apple App Store** (iOS).
3.  Successfully logged in/created an account within the **Expo Go** app to prepare for scanning the development QR code.

### Challenges Faced

* **Initial Challenge:** (Document any specific challenges faced, e.g., Node.js version conflict, firewall issues, slow emulator setup, etc. If none, state clear setup.)
* **Resolution:** (Describe the solution or steps taken to overcome the challenge.)

---

## 🚀 Task 1: Create Your First Mobile App

This task involved scaffolding a new React Native project using the **Expo Router** template and verifying the development workflow.

### Scaffolding Steps

1.  Navigated to the project parent directory (`cd prodev-mobile-setup`).
2.  Initialized a new Expo project using the latest Expo Router template:
    ```bash
    npx create-expo-app@latest .
    ```
3.  The project structure was created inside the current directory, setting up the necessary files for a navigation-enabled application.
4.  Modified the home screen file at `app/(tabs)/index.tsx`.
5.  Changed the default displayed text **Welcome!** to **First App Created**.

### Testing and Running

1.  Started the Expo development server:
    ```bash
    npx expo start
    ```
2.  Scanned the generated QR code using the **Expo Go** app on a physical device.
3.  Successfully ran the application and verified the updated text **First App Created** on the mobile device screen.

### Observation on `reset-project` Command

The command `npm run reset-project` executes a script that is typically set up in the `package.json` file of an Expo Router template. 

When I ran the `npm run reset-project` command, the following was observed:

* The command completely **deletes the entire `app` directory** that contains all the application pages, components, and logic.
* The script then **replaces the deleted `app` directory** with a fresh, minimal example template from the `app-example` directory.
* This action effectively **resets the application codebase** to its initial, scaffolded state, allowing developers to start over without manually deleting and recreating files. This is particularly useful when switching between different project iterations or fixing deep configuration issues.
