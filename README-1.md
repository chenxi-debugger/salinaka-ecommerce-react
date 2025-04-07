# 🛒 Basket Clone React App

This project is a clone of a shopping cart (basket) interface built with **React**, **Redux**, and **React Router**.

---

## 🚀 Getting Started

### 1. Clone or Download

Download this repo and unzip it.

```
cd basket-clone-complete-app
```

### 2. Install Dependencies

Make sure you have Node.js installed. Then run:

```bash
npm install
```

This installs:
- React
- Redux
- React-Redux
- React-Router-Dom
- Redux-Thunk

> If you're using Yarn:
> ```bash
> yarn install
> ```

### 3. Start Development Server

```bash
npm start
```

The app will run at `http://localhost:3000`

---

## 📁 Folder Structure

```
src/
├── components/
│   └── basket/              # Basket components
├── constants/               # Route constants
├── helpers/                 # Utility functions
├── hooks/                   # Custom hooks
├── redux/
│   ├── actions/             # Redux action creators
│   ├── reducers/            # Redux reducers
│   └── store.js             # Redux store setup
├── App.js                   # Main app routing
└── index.js                 # Entry point with Redux Provider
```

---

## 🔧 Features

- Add/Remove items from basket
- Quantity control
- Clear basket
- Checkout button with auth prompt (mocked)
- Modal handling
- Local subtotal calculation

---


