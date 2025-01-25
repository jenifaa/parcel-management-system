# Packify

A complete parcel delivery management system designed to streamline parcel tracking, delivery requests, and admin management. The platform includes dedicated pages for admins, users, and delivery men, offering a seamless experience for all stakeholders.

## Overview
This project simplifies parcel delivery operations, enabling:
- Users to create and track parcel delivery requests.
- Delivery men to accept and manage delivery tasks.
- Admins to monitor and control the entire system, including delivery requests and user management.

## Features

### Admin Features:
- View all delivery requests.
- Approve or decline delivery man requests.
- Manage users and delivery men.
- Monitor parcel delivery statuses.
- Secure login with admin credentials.

### Delivery Man Features:
- View personal delivery tasks.
- Request access to join the system.
- Manage and update delivery statuses.
- View customer reviews.

### User Features:
- Register and log in securely.
- Create delivery requests.
- Track delivery status in real-time.
- Submit feedback and reviews for delivery services.

### Notifications:
- Delivery man requests appear as attractive notifications on the admin dashboard with an 'Accept' button for approval.

## Tools and Technologies
- **Frontend:** React, React DOM, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using native MongoDB driver, no Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **State Management:** React Context API
- **Mapping:** React-leaflet
- **Styling:** CSS, Tailwind CSS, Shadcn
- **API Development:** RESTful APIs

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd parcel-delivery-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Admin Credentials
- **Email:** jenifa55@gmail.com
- **Password:** Jenifa12@

## Delivery Man Credentials
- **Username:** mango@gmail.com
- **Password:** Mango12@

## User Credentials
- **Username:** 
- **Password:** 

## Functionalities

### What You Can Do as an Admin:
- View, accept, or reject delivery man requests.
- Monitor all delivery tasks and statuses.
- Manage users and their activities.
- Oversee reviews submitted by users.

### What You Can Do as a Delivery Man:
- Accept or decline assigned delivery tasks.
- Update the delivery status in real time.
- View personal reviews.

### What You Can Do as a User:
- Create new parcel delivery requests.
- Track your parcel's current status.
- Provide feedback and rate the delivery service.

## Folder Structure
```
parcel-delivery-management
├── src
│   ├── components
│   ├── pages
│   ├── assets
│   │   ├── lib
│   ├── styles
├── backend
│   ├── routes
│   ├── controllers
│   ├── models
├── .env
├── package.json
├── README.md
```

## Future Enhancements
- Add payment gateway integration.
- Introduce delivery analytics for admins.

## Live Demo
https://parcel-management-2333e.web.app

---


