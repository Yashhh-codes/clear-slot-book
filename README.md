# MedBook — Book Doctor Appointments Easily & Instantly

MedBook is a modern, high-performance healthcare appointment booking platform built with **TanStack Start**, **React 19**, and **Tailwind CSS 4**. It provides a seamless experience for patients to find verified doctors, book instant slots, and access teleconsultation services.

## 🚀 Features

- **Instant Search**: Find doctors by specialty, name, or location.
- **Specialty Categories**: Browse doctors through intuitive specialty cards (Cardiology, Neurology, etc.).
- **3-Step Booking**: Search -> Select Slot -> Confirm.
- **Teleconsultation**: Integrated video call support for remote consultations.
- **AI Recommendations**: Personalized doctor suggestions based on patient symptoms.
- **Emergency Booking**: One-tap access to urgent care.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Premium UI/UX**: Built with Framer Motion for smooth transitions and Radix UI for accessibility.

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/guide/start/overview) (React 19)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Runtime & Bundler**: [Node.js](https://nodejs.org/) & [Vite](https://vitejs.dev/)
- **Deployment**: Ready for [Cloudflare Workers](https://workers.cloudflare.com/)

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and **npm** installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rohan-kapadi/clear-slot-book
   cd clear-slot-book
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be running at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the build locally:
```bash
npm run preview
```

## 📂 Project Structure

- `src/routes/`: Contains the TanStack Router definition and page components (`index.tsx`, `home.tsx`).
- `src/components/`: Reusable UI components (Header, Footer, SearchBar, etc.).
- `src/assets/`: Static assets like images and fonts.
- `src/lib/`: Utility functions and configuration.
- `src/styles.css`: Global styles and Tailwind configuration.
- `wrangler.jsonc`: Cloudflare Workers configuration.

## 📜 License

This project is licensed under the MIT License.
