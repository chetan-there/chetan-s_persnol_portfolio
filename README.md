# 🚀 React Portfolio Contact App

A modern contact form built using **React + Vite** that allows users to send messages directly via email using **EmailJS** — no backend required.

---

## ✨ Features

* 📩 Send emails directly from frontend (EmailJS)
* ⚡ Fast development with Vite
* 🎨 Clean and modern UI
* 🔐 Environment variable support for security
* ♻️ Form reset after submission

---

## 🛠️ Tech Stack

* React
* Vite
* EmailJS
* CSS / Tailwind (optional)

---

## 📦 Installation

```bash
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in root:

```
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

---

## 📧 EmailJS Setup

1. Create account on https://www.emailjs.com
2. Add Email Service (Gmail recommended)
3. Create Email Template
4. Use variables:

```
{{name}}
{{email}}
{{message}}
```

---

## 📁 Project Structure

```
src/
 ├── components/
 │    └── Contact.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🚀 Usage

* Fill the contact form
* Click send
* Message will be delivered to your email

---

## 📌 Future Improvements

* Add toast notifications
* Add loading spinner
* Add validation
* Deploy on Vercel / Netlify

---

## 👨‍💻 Author

Chetan There
Aspiring Java Backend Developer | React Learner

---

## 📬 Note

This email system works without a backend using EmailJS.
Make sure not to expose sensitive keys in public repositories.
