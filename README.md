# Expense Tracker

This is a simple expense tracker application built using React. It allows users to keep track of their expenses, track their budget, categorize them, and analyze their spending habits.


## Features

- Add new expenses with a title, amount, and date.
- View a list of all expenses.
- Filter expenses based on selected categories.
- See a summary of total expenses, budget and amount remaining.


## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Adejumok/expense-tracker.git
   ```

2. Navigate to the project directory:

   ```shell
   cd expense-tracker
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).


## Usage

1. Open the application in your web browser.

2. Click on the "Add Expense" button to add a new expense.

3. Fill in the required fields (title and amount) and select a category.

4. Click "Save" to add the expense. The expense will appear in the list of expenses.

5. View the summary section to see the total expenses and spending by category.


## Technologies Used

- React
- HTML
- CSS


## Folder Structure

The project structure is organized as follows:

```
expense-tracker/
  ├── src/
  │   ├── components/        # React components
  |   ├── context/           # Context for sharing data across components
  │   ├── App.js             # Main application component
  │   ├── index.js           # Entry point
  │   └── index.css          # Entry style
  ├── .gitignore             # Git ignore file
  ├── LICENSE                # License file
  ├── public/                # Public assets
  ├── README.md              # Project readme
  ├── package-lock.json      # Describes NPM package configuration
  └── package.json           # NPM package configuration
```

## Contributing

Contributions are welcome! If you find any bugs or want to improve the application, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
