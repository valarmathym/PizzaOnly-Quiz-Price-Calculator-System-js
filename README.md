# PizzaOnly Promotion Web Application

JavaScript-based Pizza Promotion Web Application featuring a customer quiz system and promotional pizza price calculator for PizzasOnly to support promotional pizza sales during November and December.

The application includes:

- Interactive customer quiz
- Promotional pizza price calculator
- Dynamic user interaction
- Best-price calculation system

---

# Project Overview

PizzasOnly introduced a promotional campaign to engage customers and provide discounted pizza pricing during the holiday season.

This web application was developed to meet two business requirements:

1. Customer Quiz System
2. Pizza Price Calculator

The application provides an interactive experience for customers while helping sales staff calculate the best promotional prices.

---

# Features

## Customer Quiz System

Customers can participate in a fun pizza quiz before ordering.

### Quiz Questions

- What is the most popular pizza?
- What is the second most popular pizza?
- What is the third most popular pizza?
- What is your favourite pizza?

### Scoring System

| Question | Points |
|---|---|
| Correct answer for Question 1 | 10 |
| Correct answer for Question 2 | 10 |
| Correct answer for Question 3 | 10 |
| Favourite pizza matches top 3 pizzas | 10 |

Maximum score: **40 points**

The final score is displayed as a percentage.

---

## Pizza Price Calculator

The application calculates the best promotional pizza prices based on the number of pizzas ordered.

### Promotional Pricing

| Number of Pizzas | Price |
|---|---|
| 1 Large Pizza | $6.45 |
| 2 Large Pizzas | $12.00 |
| 3 Large Pizzas | $14.00 |

For orders of four or more pizzas, the application combines pricing packages to ensure the best price for customers.

### Example

```text
5 pizzas =
2 pizzas ($12.00) + 3 pizzas ($14.00)

Total = $26.00
```

---

# Technologies Used

- JavaScript
- HTML5
- CSS3

---

# Project Structure

```text
pizzaonly-promo-webapp/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# How to Run the Project

## Option 1: Open Directly

1. Download or clone the repository
2. Open `index.html` in your browser

---

## Option 2: Clone Using Git

```bash
git clone https://github.com/valarmathym/PizzaOnly-Quiz-Price-Calculator-System-js.git
```

Then open:

```text
index.html
```

in your browser.

---

# Example Quiz Output

```text
Do you want to participate in PizzaOnly Promotion?

What is the most popular pizza?
What is the second most popular pizza?
What is the third most popular pizza?
What is your favourite pizza?

Final Score: 75%
```

---

# Example Price Calculator Output

```text
Enter number of pizzas: 5

Best promotional price: $26.00
```

---

# Learning Outcomes

This project helped in understanding:

- JavaScript fundamentals
- Conditional statements
- Functions and calculations
- User interaction and input handling
- Basic web application development
- Problem solving using algorithms

---

# Future Improvements

- Add responsive mobile design
- Store quiz scores using Local Storage
- Add online pizza ordering functionality
- Connect with a backend database
- Add animations and improved UI
- Deploy as a live web application

---

# Author

Valarmathy Murugan

Developed for the PizzasOnly promotional campaign project.
