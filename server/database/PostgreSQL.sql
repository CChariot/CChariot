CREATE TABLE employees
(
	Emp_ID INT PRIMARY KEY,
	last_name VARCHAR(50) NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	dob DATE NOT NULL,
	rest_day DATE NOT NULL
);
CREATE TABLE department
(
	Emp_ID INT ,
	Sup_ID INT ,
	department_name VARCHAR(50) NOT NULL,
	operating_hour TIME(0) NOT NULL,
	PRIMARY KEY(Emp_ID, Sup_ID)
);
INSERT INTO employees
VALUES(
		1,
		'HAHA',
		'lol',
		'01/02/1997',
		'01/02/1997'
);

INSERT INTO department
VALUES( 2, 3, 'MTA', '01:00');

INSERT INTO employees_profile
VALUES(
		1,
		2,
		'MTA',
		3
);