# Nerve Assignment 

This project is a responsive UI developed for a Nerve assignment. The UI allows users to toggle between different views, select dates, and display strategy cards based on the selected view and date.

## Table of Contents

1. [File Structure](#file-structure)
2. [Setup Project Locally](#setup-project-locally)
3. [Approach to the Assignment](#approach-to-the-assignment)

---

## File Structure

The project is structured as follows:

```
src/
│
├── assets/
│   ├── components/
│   │   ├── DateDropDown.tsx   # Dropdown component for selecting dates
│   │   ├── StrategyCards.tsx  # Component to render strategy cards
│   │   └── ToggleView.tsx     # Component to toggle between views (Bullish, Bearish, etc.)
│   └── data/
│       └── data.ts            # Contains the dateArray and strategyArray for the project
│
├── App.tsx                    # Main component to render the app's UI
├── App.css                    # Basic styling for the application
├── index.tsx                  # Entry point for React
├── index.css                  # Global CSS file
├── main.tsx                   # Vite entry point
├── vite-env.d.ts              # TypeScript declaration for Vite
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── vite.config.ts             # Vite configuration
```

### Components:

- **`DateDropDown.tsx`**: A reusable dropdown component that allows the user to select dates from the provided `dateArray`.
- **`StrategyCards.tsx`**: Displays strategy cards based on the selected view and date. It calculates the occurrence of each strategy and shows "Strategy" or "Strategies" based on the count.
- **`ToggleView.tsx`**: A toggle switch component that lets users select between different views (Bullish, Bearish, RangeBound, Volatile).

### Data:
- **`data.ts`**: This file contains the provided `dateArray` and `strategyArray`, which hold all the necessary data for rendering strategies and dates in the UI.

---

## Setup Project Locally

To set up the project on your local machine, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sachin3825/nerve-assignment.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd nerve-assignment
   ```

3. **Install Dependencies**:

   The project uses **Vite** and **TypeScript**. To install all the dependencies, run:

   ```bash
   npm install
   ```

4. **Run the Project Locally**:

   Start the development server using the following command:

   ```bash
   npm run dev
   ```

   This will start the project on `http://localhost:3000` by default (or another port, as specified by Vite).

5. **Build the Project** (Optional):

   To create a production build of the project, run:

   ```bash
   npm run build
   ```

---

## Approach to the Assignment

### Objective:

The assignment was to create a responsive UI with a toggle view, a date dropdown, and strategy cards, based on a set of data. The main requirements were:
- A toggle between four views: Bullish, Bearish, RangeBound, and Volatile.
- A dropdown to select dates from `dateArray`.
- Display strategy cards for the selected date and view.
- Handle edge cases like empty states when no strategies are available.

### Steps Taken:

1. **Component Breakdown**: 
   - **DateDropDown.tsx**: Created to handle the date selection with a smooth dropdown animation.
   - **ToggleView.tsx**: Implemented to allow the user to toggle between views. Each view corresponds to a specific set of strategies.
   - **StrategyCards.tsx**: Displays the strategies based on the selected view and date. It dynamically calculates the count of each strategy and renders the appropriate label ("Strategy" or "Strategies").

2. **Handling Data**: 
   - The data (`dateArray` and `strategyArray`) was provided in the `data.ts` file. The data was processed inside the components to match the user’s selected view and date, filtering strategies dynamically.

3. **Responsive Design**: 
   - CSS was used to ensure the UI adapts to different screen sizes, focusing on ensuring it is mobile-friendly.
   - No external CSS libraries like Bootstrap were used as per the assignment requirement.

4. **Dynamic States**:
   - Used `useState` to manage the selected view and date, allowing for reactive updates in the UI.
   - Conditional rendering and proper state management ensured the app updated in real-time based on user interaction.

5. **Optimal Solution**: 
   - Focused on clean and modular code, ensuring optimal performance by using React’s `useMemo` to avoid unnecessary recalculations and re-renders.

---

### Conclusion:

This project successfully fulfills all the assignment requirements by leveraging React, TypeScript, and Vite to create a performant, modular, and responsive UI. The app allows users to easily interact with different views and dates, displaying strategies dynamically with efficient state management.
