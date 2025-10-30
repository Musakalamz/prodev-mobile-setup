# 📱 Mobile Development — Task 0: Setting Up and Testing Your Mobile Development Environment

**Project:** Mobile Development with React Native (Task 0)  
**Repository:** `prodev-mobile-setup`  
**Directory:** `mobile-development-setup`  
**File:** `README.md`  

---

## 🧭 Objective

This task focuses on **setting up Expo Go on a physical mobile device** to prepare for React Native development using the **Expo Framework**.  
Expo Go enables you to run and test your React Native applications directly on your Android or iOS device without the need for complex emulators.

You are required to:
- Install **Expo Go** on your mobile device.
- Select the latest SDK version.
- Verify that you can connect your device to your local development server.
- Document your setup and challenges in this README.

---

## 🧩 Why Expo Go?

Mobile development often requires high hardware resources to emulate iOS and Android devices.  
Expo Go provides a **lightweight, cost-effective alternative** by allowing you to:
- Test apps directly on your phone.
- Avoid the need for emulators or simulators.
- Preview real device behavior instantly.
- Work seamlessly with both **iOS** and **Android** devices.

---

## 🛠️ Step-by-Step Setup Guide

### ✅ Step 1: Pre-Setup Check
Ensure the following tools are already installed:

| Tool | Purpose | Version / Check |
|------|----------|----------------|
| Node.js (LTS) | JavaScript runtime | `node -v` (v16 or higher) |
| npm | Node package manager | `npm -v` |
| VS Code | Recommended IDE | Installed |
| Operating System | Windows / macOS / Linux | Compatible |

---

### ✅ Step 2: Visit Expo Go Page

1. Open the official page: https://expo.dev/go  
2. Select the **latest SDK version** listed on the page.  
3. Choose the correct platform to install Expo Go:
   - **Android:** Install from Google Play Store — search for **Expo Go**
   - **iOS:** Install from Apple App Store — search for **Expo Go**

---

### ✅ Step 3: Install and Sign In

1. Download and install **Expo Go** on your device.  
2. Open the app.  
3. Sign in with your **Expo account** or create a new one if you don’t have one.

---

### ✅ Step 4: Create and Start a Sample Expo Project

Create a simple Expo project locally to verify your setup. Run these commands in your terminal:

```bash
npx create-expo-app expo-test
cd expo-test
npx expo start
