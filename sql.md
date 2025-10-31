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


## select specific column

select name from student;

## select all column

select * from students;

## select statment with where clause

select * from students where mark > 80;

## select using group by clause

select count(*) as age_count,age from students group by age; 

select count(*) as age_count,age,name from students group by age,name;

select count(*) as age_count,age from students where age >= 25 group by age;

select count(*) as age_count,age from students group by age having age >24;




GROUP BY statement groups rows that have the same values in one or more columns. It is commonly used to create summaries, such as total sales by region or number of users by age group.

Its main features include:

Used with the SELECT statement.
Groups rows after filtering with WHERE.
Can be combined with aggregate functions like SUM(), COUNT(), AVG(), etc.
Filter grouped results using the HAVING clause.
Comes after WHERE but before HAVING and ORDER BY.

| Feature                         | WHERE              | HAVING                     |
| ------------------------------- | ------------------ | -------------------------- |
| **Filters**                     | Individual rows    | Groups (after aggregation) |
| **Used with GROUP BY**          | Before grouping    | After grouping             |
| **Can use aggregate functions** | No                 | Yes                        |
| **Execution order**             | Before aggregation | After aggregation          |


1. WHERE Clause

Used to filter rows before grouping or aggregation happens.

It works on individual rows of a table.

You cannot use aggregate functions (like SUM(), COUNT(), AVG()) inside a WHERE clause.

2. HAVING Clause

Used to filter groups after the GROUP BY operation.

It works on aggregate results (like totals, averages, counts).

You can use aggregate functions inside HAVING.


# select with distinct clause

select DISTINCT  age  from students;

select DISTINCT  mark  from students;

we will use DISTINCT keyword to return only unique values from a column.

# select statment with order by clause

select * from students order by age asc;

select * from student order by age,mark asc;

## Sorting By Column Number
select * from student order by 3;


## insert data from on table to another table

insert into student_age (name,Age_O,studentID) select name,age,studentID from students;

## Insert Specific Rows Based on Condition
insert into student_age (name,Age_O,studentID) select name,age,studentID from students where age>24;











