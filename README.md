# GDF Real Estate - Full Stack Web Application

## 📌 Project Overview
GDF Real Estate is a full-stack web application designed to simplify the process of browsing and managing real estate properties. Users can explore featured properties, view detailed information, and filter available listings dynamically. 

This project was developed as a final submission for the **SEN204** course under the supervision of **Asst. Prof. Dr. Deniz Dahman**.

## 🛠️ Tech Stack
* **Frontend:** React (Vite), React Router, HTML, CSS.
* **Backend:** Python, Django, Django REST Framework.
* **Database:** SQLite (Default Django DB).
* **Media Handling:** Pillow (for dynamic image uploads).

## ✨ Features
* Responsive modern UI with a Dark/Light Mode toggle.
* Dynamic property fetching from the backend API.
* Real-time client-side search and filtering (by name, city, and status).
* Fully functional Django Admin panel to manage properties and images.

---

## 🚀 How to Run the Project Locally

### 1. Backend Setup (Django)
Open your terminal, navigate to the `backend` folder, and run the following commands:

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment (optional but recommended)
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install the required dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py makemigrations
python manage.py migrate

# Run the backend server
python manage.py runserver