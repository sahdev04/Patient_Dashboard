# Patient-Dashboard

# 🩺 Patient360

**Patient360** is a cross-platform mobile app built using **React Native + Expo** that enables patients to securely log in and view their medical plan, shipment history, and subscription status. The app provides an intuitive, animated dashboard powered by a lightweight Express backend.

---

## ✨ Features

- 🔐 Secure Login
- 🧑 Personalized Dashboard
- 📦 Shipment History
- 💳 Billing & Plan Status
- 🌀 Smooth Animated Cards (using `moti`)
- ☁️ Backend with Express.js (mock data)
- 💾 State Management with Zustand

---

## 📁 Folder Structure

Patient360/
│
├── frontend/ # Expo mobile app
│ ├── api/ # Axios API config
│ ├── store/ # Zustand auth store
│ ├── components/ # UI components (cards etc.)
│ └── app/ # Screens (login, dashboard)
│
├── backend/ # Node.js + Express backend
│ ├── server.js # API server
│ └── data.js # Static mock data
│
├── eas.json # EAS Build configuration
└── README.md # This file

## 🔧 Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/Patient360.git
cd Patient360

2. Setup Backend (Express API)

cd backend
npm install
node index.js

3. Setup Frontend (React Native App)

cd ../frontend
npm install
npx expo start

Update API Base URL
Open frontend/api/apiClient.js and replace:
const baseURL = 'https://your-backend-host.onrender.com';

🚀 Production Deployment Plan via Expo EAS
📦 EAS Build Profiles (eas.json)

{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  },
  "submit": {
    "production": {}
  }
}

🛠 CI/CD Workflow (GitHub Actions)
Run EAS Build automatically on production branch merge.

name: EAS Build

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install EAS CLI
        run: npm install -g eas-cli
      - name: Authenticate
        run: eas login --token ${{ secrets.EXPO_TOKEN }}
      - name: Build Android
        run: eas build --platform android --profile production --non-interactive

📸 Screenshots




🔗 Project Links
🧑‍💻 GitHub Repo: https://github.com/your-username/Patient360

🎥 Demo Video: Watch Here

🎨 Figma Design: View on Figma


🙌 Author
Developed with 💙 by Sahdev Patel
If you liked it, don't forget to ⭐ the repo!

