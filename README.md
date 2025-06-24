# Task

## Project Setup

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd Appexoft_task
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the root directory (see `.env.example` if present).
   - Add the following line:
     ```
     VITE_API_BASE_URL=https://66d9b41e4ad2f6b8ed55b736.mockapi.io/
     ```
   - **OR** use your own mock API (for example, via https://mockapi.io/) and set your custom link in VITE_API_BASE_URL.
4. **Start the development server:**
   ```sh
   npm run dev
   ```

## Technical Decisions

- **Vite** is used as the build tool for fast development and hot module replacement.
- **React** is the main UI library for building the SPA.
- **Redux Toolkit Query** is used for API data fetching and caching, providing a simple and efficient way to manage server state.
- **Formik** is used for form state management and handling form submissions.
- **Yup** is used for form validation schemas.
- **MUI (Material UI)** is used for UI components to ensure a modern and consistent look.
- **TypeScript** is used for type safety and better developer experience.
- **Environment variables** are used for API URLs to allow easy switching between environments without code changes.

## Folder Structure

```
src/
  App.tsx                // Main application component
  main.tsx               // Entry point
  index.scss             // Global styles
  setupTests.ts          // Test setup file
  vite-env.d.ts          // Vite TypeScript env types
  components/            // Reusable React components
    FormikTextField.tsx
    Header.tsx
    MediaCard.tsx
    modals/              // Modal components
      schema.ts
      stylesModals.ts
      AddAccountModal/
        AddAccountModal.tsx
        AddAccountModal.test.tsx
        index.ts
      DeleteAccountModal/
        DeleteAccountModal.tsx
        index.ts
      UpdateAccountModal/
        UpdateAccountModal.tsx
        UpdateAccountModal.test.tsx
        index.ts
    ui/                  // UI-specific components
      CustomModal/
        CustomModal.tsx
        stylesCustomModal.ts
  service/               // API service logic (RTK Query)
    socialMediaApi.ts
  store/                 // Redux store setup
    store.ts
  types/                 // TypeScript type definitions
    AccountType.ts
```

## External Packages Used

- **@reduxjs/toolkit** & **react-redux**: State management and API queries (RTK Query).
- **@mui/material**: Material UI React components for layout, forms, and modals.
- **@emotion/react** & **@emotion/styled**: Styling dependencies for MUI.
- **formik** & **yup**: For form state management and validation.
- **typescript**: Type safety for the codebase.
- **vite**: Fast build tool and dev server.
