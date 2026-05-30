
# Instacart - Full Stack Grocery Delivery App with Live Tracking

A comprehensive, production-ready full-stack Grocery Delivery Application built using the modern **PERN Stack** (PostgreSQL, Express, React, Node.js) and **TypeScript**. This project features real-time synchronization, continuous background task management, an administrative platform, a dedicated workspace for delivery agents, and an online payment workflow.

---

## Key Features

### Client Frontend
- **Product Filtering & Sorting:** Dynamic category filters, price ranges, and multi-option sorting (price, ranking, alphabet).
- **Persistent Cart System:** Cart data is secured locally and managed via React Context Provider layout.
- **Dynamic Checkouts:** Multiple step workflows including address validation, card payments (via Stripe), or Cash on Delivery (COD).
- **Live Order Tracking:** Interactive maps displaying current delivery driver pathways alongside step-by-step progress timelines.

### Admin Dashboard
- **Store Performance Metrics:** Quick views of overall earnings, total user metrics, store items, and out-of-stock items.
- **Inventory Management:** Full CRUD mechanisms for updating parameters, listings, or declaring stocks empty.
- **Driver Onboarding & Management:** Dedicated configuration space to control delivery provider records and network statuses.
- **Order Dispatch Management:** Centralized center to instantly link active orders with available local carriers.

### Delivery Partner Ecosystem
- **Agent Secure Login:** Independent access walls for active delivery personnel profiles.
- **Active Task Center:** Overview of processing orders requiring assembly, transport, or dynamic tracking toggles.
- **Secure Pin Validation:** OTP verification step matching user coordinates prior to marking deliveries completed.
- **Continuous Location Sharing:** Constant live background tracking metrics linked immediately to user interfaces.

---

## Tech Stack & Packages

### Frontend (`/client`)
- **Core Framework:** React 18, Vite, TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM (v6)
- **Icons:** Lucid React, React Simple Icons
- **Mapping Utilities:** Leaflet, React Leaflet
- **Notifications:** React Hot Toast

### Backend (`/server`)
- **Runtime Environment:** Node.js, Express, TypeScript
- **Database Engine:** PostgreSQL hosted natively on [Neon Database](https://neon.tech)
- **ORM System:** Prisma
- **Data Streams & Scheduling:** Ingest SDK
- **Payment Processing:** Stripe Node SDK
- **Media Hosting:** Cloudinary v2 API Node client
- **Cryptographic Encryption:** Bcrypt, JSON Web Token (JWT)
- **Form/File Parsing:** Multer
- **Mail Engine:** NodeMailer (configured via Brevo SMTP relays)

---

## Project Architecture

```text
grocery-delivery/
├── client/                     # React Frontend Workspace
│   ├── public/                 # Static asset folders
│   └── src/
│       ├── assets/             # Global layout files and styles
│       ├── components/         # Shared layouts (Navbar, Sidebar, ProductCard)
│       ├── config/             # Network clients (Axios interceptors)
│       ├── context/            # Context Providers (AuthContext, CartContext)
│       ├── pages/              # Primary route views (Home, Admin, Checkout)
│       ├── types/              # Unified TypeScript definitions
│       ├── app.tsx             # Target Route Router map
│       └── main.tsx            # Global entry mount wrapper
│
└── server/                     # Express Backend Workspace
    ├── prisma/                 # Database schema models definitions
    ├── src/
    │   ├── config/             # Global configurations (Cloudinary, NodeMailer)
    │   ├── controllers/        # Request handlers (Auth, Products, Orders)
    │   ├── ingest/             # Background workflow functions 
    │   ├── middleware/         # Security validation hooks (Auth, Admin verification)
    │   ├── routes/             # Network path route maps
    │   └── types/              # Express request layer global models
    ├── seed.ts                 # Database seeding handler
    └── server.ts               # Core startup gateway entry-point
