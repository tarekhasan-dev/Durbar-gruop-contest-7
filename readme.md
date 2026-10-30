# JavaScript Problem Solving

Welcome to my JavaScript Problem Solving repository!

This repository contains 10 programming problems that I have solved as part of my journey to improve my JavaScript skills and problem-solving ability.

Each problem helped me understand different programming concepts, practice logical thinking, and learn how to write cleaner and more efficient code.

## Problems Overview

| No. | Problem Name | Difficulty | Main Concept |
|---|---|---|---|
| 01 | Countdown Time Formatter | Easy | Math, String Formatting |
| 02 | Notification Badge Counter | Easy | Arrays, Objects, State Updates |
| 03 | Nested Folder File Counter | Easy | Recursion, Nested Objects |
| 04 | Student Ranking with Ties | Easy | Sorting, Arrays, Objects |
| 05 | Best Discount Selector | Easy | Conditions, Math, Arrays |
| 06 | Elevator Floor Tracker | Easy | Loops, Simulation |
| 07 | Find Free Time Intervals | Easy | Sorting, Intervals |
| 08 | Max Non-Overlapping Tasks | Medium | Greedy Algorithm |
| 09 | Reconcile Product Inventory | Medium | Objects, Data Updates |
| 10 | Connected Friends | Medium | Graph, BFS, Set |

---

## Problem Details

### 01. Countdown Time Formatter

**Function:** `formatCountdown(totalSeconds)`

**Description:**

Convert a total number of seconds into a readable time format: `HH:MM:SS`.

For example, 3661 seconds becomes `01:01:01`.

**Approach:**

I used basic mathematical operations to calculate hours, minutes, and seconds. Then I used `padStart()` to add leading zeros where needed.

**Concepts Learned:**
- Division and Modulo (`%`)
- Math Operations
- String Formatting
- `padStart()`

**Time Complexity:** `O(1)`

### 02. Notification Badge Counter

**Function:** `updateNotificationCount(initialCount, events)`

**Description:**

Update a notification count based on a sequence of events.

There are three types of events: `ADD`, `READ`, and `CLEAR`. The count should never become negative.

**Approach:**

I used a variable to keep track of the current notification count and processed each event one by one. I also used `Math.max()` to prevent negative values.

**Concepts Learned:**
- Arrays
- Objects
- Object Destructuring
- Loops
- Conditional Statements
- `Math.max()`

**Time Complexity:** `O(n)`

### 03. Nested Folder File Counter

**Function:** `countFilesInFolder(structure)`

**Description:**

Count all files inside a folder structure, including files located in nested subfolders.

**Approach:**

I used Recursion to solve this problem. When an item is a file, I count it. When it is a folder, I check its children and count the files inside them recursively.

**Concepts Learned:**
- Recursion
- Nested Arrays
- Nested Objects
- Conditional Statements
- Function Calls

**Time Complexity:** `O(n)`

### 04. Student Ranking with Ties

**Function:** `rankStudents(students)`

**Description:**

Sort students by their scores in descending order and assign competition ranks.

Students with equal scores receive the same rank. The next rank skips according to the competition ranking system (1, 2, 2, 4).

**Approach:**

I sorted the students by score and then checked whether the current student's score was equal to the previous student's score. Based on that, I assigned the correct rank.

**Concepts Learned:**
- Array Sorting
- Objects
- Object Spread Operator
- Array Methods
- Competition Ranking
- Conditional Statements

**Time Complexity:** `O(n log n)`

### 05. Best Discount Selector

**Function:** `selectBestDiscount(price, offers)`

**Description:**

Find the best discount offer that gives the lowest final price.

The function checks whether an offer is eligible, calculates the discounted price, and selects the best available offer. If no offer provides a discount, it returns `null`.

**Approach:**

I looped through the available offers and calculated the final price for each eligible offer. I kept track of the lowest price and updated the best offer whenever I found a better discount.

**Concepts Learned:**
- Arrays
- Objects
- Loops
- Conditional Statements
- Percentage Calculation
- `Math.max()`
- Comparison Logic

**Time Complexity:** `O(n)`

### 06. Elevator Floor Tracker

**Function:** `trackElevator(startFloor, minFloor, maxFloor, commands)`

**Description:**

Simulate an elevator moving between floors based on `UP` and `DOWN` commands.

The elevator cannot move above the maximum floor or below the minimum floor.

**Approach:**

I used a variable to track the current floor and processed each command one by one. I used `Math.min()` and `Math.max()` to keep the elevator within the allowed floor boundaries.

**Concepts Learned:**
- Loops
- Arrays
- Conditional Statements
- Simulation
- `Math.min()`
- `Math.max()`

**Time Complexity:** `O(n)`

### 07. Find Free Time Intervals

**Function:** `findFreeTime(bookedIntervals, workingHours)`

**Description:**

Find all available time intervals within working hours when no booking exists.

The function also handles overlapping bookings and bookings that extend beyond working hours.

**Approach:**

I used sorting and interval merging to solve this problem.

First, I limited the booked intervals to the working hours. Then I sorted them by start time and merged overlapping intervals. Finally, I found the gaps between booked intervals.

**Concepts Learned:**
- Arrays
- Sorting
- Interval Comparison
- Array Methods
- Overlapping Intervals
- Greedy Logic

**Time Complexity:** `O(n log n)`

### 08. Max Non-Overlapping Tasks

**Function:** `maxTasks(tasks)`

**Description:**

Find the maximum number of tasks that can be completed without overlapping.

A task can start at the exact time another task finishes.

**Approach:**

I used the Greedy Algorithm.

First, I sorted the tasks by their finishing time. Then I selected a task whenever its starting time was greater than or equal to the finishing time of the previously selected task.

**Concepts Learned:**
- Arrays
- Sorting
- Greedy Algorithm
- Array Destructuring
- Scheduling Logic

**Time Complexity:** `O(n log n)`

### 09. Reconcile Product Inventory

**Function:** `reconcileInventory(initialInventory, transactions)`

**Description:**

Update product quantities based on stock-in and stock-out transactions.

New products should be added to the inventory automatically, and stock quantities must never become negative.

**Approach:**

I created a copy of the initial inventory and processed each transaction one by one.

For stock-in transactions, I increased the quantity. For stock-out transactions, I decreased it while making sure the quantity never went below zero.

**Concepts Learned:**
- Objects
- Object Destructuring
- Spread Operator
- Loops
- Conditional Statements
- `Math.max()`

**Time Complexity:** `O(n + m)`

Here, `n` is the number of initial products and `m` is the number of transactions.

### 10. Connected Friends

**Function:** `countConnectedFriends(friendships, startPerson)`

**Description:**

Find the total number of people connected to a starting person through direct or indirect friendships.

Friendships are mutual, meaning if Alice is friends with Bob, Bob is also friends with Alice.

**Approach:**

I used a Graph data structure with Breadth-First Search (BFS).

First, I created an adjacency list using `Map`. Then I used a `Set` to track visited people and a queue to explore their connections.

Finally, I returned the total number of people in the connected network.

**Concepts Learned:**
- Graph
- Map
- Set
- Queue
- Breadth-First Search (BFS)
- Graph Traversal
- Undirected Graph

**Time Complexity:** `O(V + E)`

Here, `V` represents the number of people and `E` represents the number of friendships.

---

## Technologies Used

- JavaScript (ES6+)
- Node.js
- Git
- GitHub

## Key Concepts I Practiced

While working on these problems, I got practical experience with:

- Variables and Data Types
- Arrays and Objects
- Loops and Conditional Statements
- Array Methods
- Object Destructuring
- Spread Operator
- Mathematical Operations
- String Formatting
- Recursion
- Sorting Algorithms
- Greedy Algorithms
- Interval Merging
- Graph Data Structures
- Breadth-First Search (BFS)
- Time and Space Complexity

## How to Run the Solutions

Make sure Node.js is installed on your computer.

1. Clone this repository.
2. Open the project folder in your terminal.
3. Navigate to the JavaScript file you want to run.
4. Execute the file using Node.js.

Example:

```bash
node filename.js
```

Replace `filename.js` with the actual JavaScript filename.

## My Learning Goal

My goal is not just to solve programming problems but also to understand the logic behind each solution.

I am continuously practicing JavaScript, improving my problem-solving skills, and learning how to write better code.

I believe consistent practice and understanding the fundamentals are important steps toward becoming a better developer.

## Author

**Tarek Hasan**

Aspiring Web Developer | JavaScript Learner | Problem Solving Enthusiast