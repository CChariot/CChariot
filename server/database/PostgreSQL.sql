CREATE TABLE employees
(
	Emp_ID INT PRIMARY KEY,
	last_name VARCHAR(50) NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	dob DATE NOT NULL,
	rest_day VARCHAR(50) NOT NULL,
	department VARCHAR(50) NOT NULL,
	Hourly_Rate INT
);

CREATE TABLE department
(
	Sup_ID INT PRIMARY KEY,
	department_name VARCHAR(50) NOT NULL,
	operating_hour VARCHAR(50) NOT NULL
);

CREATE TABLE employees_profile
(
	Emp_ID INT PRIMARY KEY,
	Sup_ID INT,
	Department_name VARCHAR(50),
	Hourly_Rate INT
);

CREATE TABLE offrequest (
	Request_ID INT PRIMARY KEY,
	Request_DATE DATE NOT NULL,
	Emp_ID INT NOT NULL,
	Reason VARCHAR(200)
);

INSERT INTO employees VALUES
	(123456789, 'Dalao', 'Bida', '1996-04-10', 'Monday', 'Subway'),
	(321435234, 'Caiji', 'Runmin', '1996-04-10', 'Sunday', 'Bus');

INSERT INTO department VALUES
	(213213, 'Bus', '10:30 to 18:30'),
	(438438, 'Subway', '9:30 to 17:30');