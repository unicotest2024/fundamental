>create database practice;

>show practice;

>drop database practice;

>create table students (
    studentID int  primary key,
    Name varchar(100) not null,
    Age int,
    Mark int,
    isDeleted bit
);


>insert into students (studentID,Name,Age,Mark,isDeleted)

values (1,'virat',25,98,false),(2,'nick',27,88,false);

>INSERT INTO students (studentID, Name, Age, Mark, isDeleted)
VALUES

(3, 'Rohit', 26, 91, false),
(4, 'Amit', 23, 85, false),
(5, 'Karan', 24, 76, false),
(6, 'Priya', 22, 89, false),
(7, 'Neha', 21, 93, false),
(8, 'Rahul', 25, 82, false),
(9, 'Sonia', 23, 95, false),
(10, 'Arjun', 24, 79, false),
(11, 'Meena', 22, 88, false),
(12, 'Deepak', 26, 90, false);


>alter table students modify column isDeleted int;

## create table from existing table
>create table studentAge as 

select studentID,name,age from students;


>drop table studentAge;

>alter table studentAge rename to student_age;

> alter table student_age rename column age to Age_O;

>alter table student_age add column is_adult INT;

>truncate table student_age;


## Important Points About SQL TRUNCATE TABLE
TRUNCATE TABLE is used to empty a table by removing all rows, but it retains the table structure.
TRUNCATE TABLE is ideal for quickly removing all data from a table without deleting the table structure, making it efficient for data cleanup operations
TRUNCATE TABLE is faster and uses fewer system and transaction logs compared to DELETE.
However, TRUNCATE TABLE typically cannot be rolled back if executed within a transaction.






