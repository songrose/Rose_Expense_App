To quickly view demo, here is a youtube link with time stamps on the demo's features: [a link] (https://www.youtube.com/watch?v=nbIUDpxL_mI&feature=youtu.be)

### Prerequisites
1. Clone the repository into your desired folder `git clone https://github.com/songrose/Rose_Expense_App`
2. Install mysql in your machine: https://dev.mysql.com/doc/refman/8.0/en/installing.html
3. Install node in your machine: https://nodejs.org/en/download/

### Setting up the Local DB in MacOS

1. Open up a terminal window and install mysql client through homebrew: `brew install mysql-client`

2. Go to _System Preferences_ > _MySQL_. This should bring up the MySQL server's status.

   - If MySQL Server is stopped, click on "Start MySQL Server".

   **Note:** If this is your first time setting MySQL Server, you'll be prompted to enter a password for the server itself. Make sure to remember this password.

3. Navigate to mysql's bin folder:`cd /usr/local/mysql/bin/`

4. Run mysql client: `./mysql -u root -p` . Enter the same password you used to set up your local MySQL Server.

5. Copy and paste the following contents of into mysql-client:
```
CREATE DATABASE expensesDB;
USE expensesDB;
DROP TABLE IF EXISTS Expense

CREATE TABLE Expense(
ID INT AUTO_INCREMENT PRIMARY KEY
,CurrentDate DATETIME DEFAULT CURRENT_TIMESTAMP
,Price Decimal(15,2) NOT NULL
,Category VARCHAR(200) NOT NULL
);`
```
### Setting up Local DB in Windows

1. Download and run mysql installer from the following link: https://dev.mysql.com/downloads/installer/

2. Select the Custom setup type and click next.

3. Within the Available Products open MySQL Servers and select the newest version to add. Hit next and hit execute to install the selected product.

4. After installing it will prompt you to setup server settings. Keep the default settings and click next.

5. Enter a password twice here and be sure to remember it.

6. Open up Windows and search for MySQL. A result of MySQL (insert version #) Command Line Client should appear. Open this up.

7. MySQL Command Line Client will first prompt you for the root password you set above. Enter it.

8. Copy and paste the contents of into the command line.
```
CREATE DATABASE expensesDB;
USE expensesDB;
DROP TABLE IF EXISTS Expense

CREATE TABLE Expense(
ID INT AUTO_INCREMENT PRIMARY KEY
,CurrentDate DATETIME DEFAULT CURRENT_TIMESTAMP
,Price Decimal(15,2) NOT NULL
,Category VARCHAR(200) NOT NULL
);`
```

### Setting up the back-end
1. Navigate to the project root folder on the command line
2. Install the following dependencies by `npm i`
3. In the root folder, create a file called `.env`
4. Inside env, save the following
```
DB_HOST=YOURHOST
DB_USER=YOURUSERNAME //try "root"
DB_PASS=YOURPASSWORD
DB_NAME=expensesDB
```

### Setting up the front-end
1. In a seperate command line, go to the project root folder using the command line
2. Write the following in the command line `cd frontend`
2. Install the following in the frontend folder by writing  `npm i` in the command line.

### Running the frontend
1. In a seperate command line, go to the project root folder using the command line
2. Write the following in the command line `cd frontend`
3. Inside the command line, write `npm start`

### Running the backend
1. Navigate to the project root folder on the command line
2. Inside the command line, write `nodemon start`


Project should start in localhost:3000

If time is limited, here is the demo of the project 
