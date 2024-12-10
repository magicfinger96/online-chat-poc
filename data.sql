CREATE TABLE vehicle_category (
    letter CHAR(1) PRIMARY KEY NOT NULL,
    value CHAR(100) NOT NULL
);

CREATE TABLE vehicle_type (
    letter CHAR(1) PRIMARY KEY NOT NULL,
    value CHAR(100) NOT NULL
);

CREATE TABLE vehicle_transmission (
    letter CHAR(1) PRIMARY KEY NOT NULL,
    value CHAR(100) NOT NULL
);

CREATE TABLE vehicle_fuel (
    letter CHAR(1) PRIMARY KEY NOT NULL,
    value CHAR(100) NOT NULL
);

CREATE TABLE vehicle_group (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category CHAR(1) NOT NULL,
    type CHAR(1) NOT NULL,
    transmission CHAR(1) NOT NULL,
    fuel CHAR(1) NOT NULL,
    daily_price FLOAT,
    FOREIGN KEY (category) REFERENCES vehicle_category(letter),
    FOREIGN KEY (type) REFERENCES vehicle_type(letter),
    FOREIGN KEY (transmission) REFERENCES vehicle_transmission(letter),
    FOREIGN KEY (fuel) REFERENCES vehicle_fuel(letter)
);

CREATE TABLE vehicle (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vehicle_group_id INTEGER NOT NULL,
    registration_number VARCHAR(200),
    model VARCHAR(200),
    brand VARCHAR(200),
    FOREIGN KEY (vehicle_group_id) REFERENCES vehicle_group(id)
);

CREATE TABLE agency (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    address VARCHAR(200),
    city VARCHAR(200),
    phone VARCHAR(200),
    email VARCHAR(200)
);

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(200),
    password VARCHAR(200),
    firstname VARCHAR(200),
    lastname VARCHAR(200),
    birthday DATE,
    address VARCHAR(200),
    is_support INTEGER,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vehicle_group_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    departure_agency_id INTEGER NOT NULL,
    arrival_agency_id INTEGER NOT NULL,
    arrival_date TIMESTAMP NOT NULL,
    departure_date TIMESTAMP NOT NULL,
    price FLOAT NOT NULL,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vehicle_group_id) REFERENCES vehicle_group(id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (departure_agency_id) REFERENCES agency(id),
    FOREIGN KEY (arrival_agency_id) REFERENCES agency(id)
);

CREATE TABLE payment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    reservation_id INTEGER NOT NULL,
    stripe_payment_id VARCHAR(200),
    amount FLOAT,
    currency VARCHAR(200),
    status ENUM('successful', 'failed', 'pending') DEFAULT 'pending',
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)
);

CREATE TABLE chat_message (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER NOT NULL,
    content VARCHAR(200) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES user(id),
    FOREIGN KEY (receiver_id) REFERENCES user(id)
);