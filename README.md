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

PATIENT_DASHBOARD/
├── backend/
│   ├── node_modules/
│   ├── data.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── .vscode/
│   ├── api/
│   ├── app/
│   ├── assets/
│   ├── components/
│   │   ├── PatientInfoCard.js
│   │   └── ShipmentItem.js
│   ├── constants/
│   │   └── colors.js
│   ├── hooks/
│   ├── scripts/
│   │   └── reset-project.js
│   ├── store/
│   │   └── authStore.js
│   ├── styles/
│   │   ├── colors.js
│   │   ├── globalStyles.js
│   │   ├── loginStyles.js
│   │   ├── patientCardStyles.js
│   │   └── shipmentCardStyles.js
│   ├── .gitignore
│   ├── app.json
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── tsconfig.json
└── README.md


## 🔧 Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/Patient360.git
cd Patient360

2. Setup Backend (Express API)

cd backend
npm install
node server.js

3. Setup Frontend (React Native App)

cd ../frontend
npm install
npx expo start

Update API Base URL
Open frontend/api/apiClient.js and replace:
const baseURL = '(https://patient-backend-j5kv.onrender.com)';

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

🎨 Figma Design: (https://www.figma.com/design/BojIzbTWnEBZ4SKs0pNpyA/PATIENT-DASHBOARD?node-id=0-1&p=f&t=XZUiToREG4nN7ntS-0)


🙌 Author
Developed with 💙 by Sahdev Patel

