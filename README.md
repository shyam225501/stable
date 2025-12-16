# Stable App

A modular React Native application structured using **Expo Router**, with clear separation of authentication, dashboard flows, reusable components, and shared logic.

---

## 📁 Project Structure

```text
stable/
├── app/
│   ├── _layout.tsx              # Root navigation layout
│   ├── index.tsx                # Entry screen
│   │
│   ├── (auth)/                  # Authentication flow
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │
│   ├── (dashboard)/             # Main application flow
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│
├── components/                  # Reusable UI components
│   └── Button.tsx
│
├── context/                     # Global state management
│   └── AuthContext.tsx
│
├── hooks/                       # Custom React hooks
│   └── useAuth.ts
│
├── constants/                   # Shared constants and theme values
│   └── colors.ts
```

---

## 🧭 Navigation Architecture

This project uses **Expo Router** with route groups:

* **`(auth)`**
  Contains authentication-related screens such as login and registration.

* **`(dashboard)`**
  Contains screens accessible after authentication.

Each group has its own `_layout.tsx` to manage nested navigation and layout logic.

---

## 🔐 Authentication

Authentication state is handled via:

* **`AuthContext`** – Centralized auth state and actions
* **`useAuth` hook** – Simplified access to auth logic across components

This design keeps authentication logic decoupled from UI components.

---

## 🧩 Components

Reusable UI components are stored in the `components` directory.

Example:

* `Button.tsx` – Shared button component used across screens

---

## 🎨 Constants

Shared values such as colors, themes, and configuration constants are centralized in:

* `constants/colors.ts`

This ensures consistency and easy maintenance.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npx expo start
```

---

## 📌 Notes & Best Practices

* `node_modules` should be ignored via `.gitignore`
* Keep screen-specific logic inside the relevant route group
* Prefer hooks and context for shared business logic
* Reusable UI should live in `components/`

---

## 📄 License

This project is private/internal unless otherwise specified.

---
