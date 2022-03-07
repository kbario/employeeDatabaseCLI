USE cafe_db;

INSERT INTO departments (id, department_name)
VALUES (001, "Front-of-House"),
       (002, "Kitchen"),
       (003, "Deliveries");

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "Barista", 50000, 001),
       (002, "Till", 40000, 001),
       (003, "Chef", 70000, 002),
       (004, "Dish-Hand", 30000, 002),
       (005, "Waitstaff", 45000, 001),
       (006, "Driver", 40000, 003),
       (007, "Manager", 100000, 001);

INSERT INTO employees (id, first_name, last_name, role_id)
VALUES (001, "Sunny", "Joban", 002),
       (002, "Joe", "Dandas", 007),
       (003, "Gary", "Matherson", 003),
       (004, "Pete", "Turner", 004),
       (005, "Vlad", "Alexander", 004),
       (006, "Shella", "Kerry", 001),
       (007, "Maddie", "Wong", 007),
       (008, "Jack", "Candy", 001),
       (009, "Maria", "Spagliotti", 005),
       (010, "Marty", "Magdolin", 002),
       (011, "Billie", "Brown", 001),
       (012, "Renee", "Anderson", 003),
       (013, "Gaby", "Treeby", 005),
       (014, "Fred", "Hardy", 006),
       (015, "Petra", "Namanh", 003),
       (016, "Ella", "White", 002),
       (017, "April", "Grandy", 005),
       (018, "Grace", "Hippoff", 001),
       (019, "Valery", "Carbol", 003),
       (020, "Jeff", "Bezos", 004);
       
UPDATE employees SET manager_id = 002 WHERE id = 001;
UPDATE employees SET manager_id = 002 WHERE id = 006;
UPDATE employees SET manager_id = 002 WHERE id = 010;
UPDATE employees SET manager_id = 002 WHERE id = 012;
UPDATE employees SET manager_id = 002 WHERE id = 011;
UPDATE employees SET manager_id = 002 WHERE id = 013;
UPDATE employees SET manager_id = 002 WHERE id = 014;
UPDATE employees SET manager_id = 002 WHERE id = 015;
UPDATE employees SET manager_id = 002 WHERE id = 018;
UPDATE employees SET manager_id = 007 WHERE id = 002;
UPDATE employees SET manager_id = 007 WHERE id = 003;
UPDATE employees SET manager_id = 007 WHERE id = 004;
UPDATE employees SET manager_id = 007 WHERE id = 005;
UPDATE employees SET manager_id = 007 WHERE id = 008;
UPDATE employees SET manager_id = 007 WHERE id = 009;
UPDATE employees SET manager_id = 007 WHERE id = 016;
UPDATE employees SET manager_id = 007 WHERE id = 017;
UPDATE employees SET manager_id = 007 WHERE id = 019;
UPDATE employees SET manager_id = 007 WHERE id = 020;
