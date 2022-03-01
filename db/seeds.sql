USE cafe_db;

INSERT INTO department (id, department_name)
VALUES (001, "Front-of-House"),
       (002, "Kitchen"),
       (003, "Deliveries");

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "Barista", 50000, 001),
       (002, "Till", 40000, 001),
       (003, "Chef", 70000, 002),
       (004, "Dish-Hand", 30000, 002),
       (005, "Waitstaff", 450000, 001),
       (006, "Driver", 40000, 003),
       (007, "Manager", 100000, 001);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, Sunny, Joban, 002, 002),
       (002, Joe, Dandas, 007, 007),
       (003, Gary, Matherson, 003, 002),
       (004, Pete, Turner, 004, 007),
       (005, Vlad, Alexander, 004, 002),
       (006, Shella, Kerry, 001, 007),
       (007, Maddie, Wong, 007, NULL),
       (008, Jack, Candy, 001, 007),
       (009, Maria, Spagliotti, 005, 007),
       (010, Marty, Magdolin, 002, 007),
       (011, Billie, Brown, 001, 002),
       (012, Renee, Anderson, 003, 002),
       (013, Gaby, Treeby, 005, 002),
       (014, Fred, Hardy, 006, 007),
       (015, Petra, Namanh, 003, 007),
       (016, Ella, White, 002, 002),
       (017, April, Grandy, 005, 007),
       (018, Grace, Hippoff, 001, 002),
       (019, Valery, Carbol, 003, 002),
       (020, Jeff, Bezos, 004, 007),
       