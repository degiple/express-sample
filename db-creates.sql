

CREATE TABLE boards (
  board_id INT(11) AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  created_at DATETIME
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE messages (
  message_id INT(11) AUTO_INCREMENT PRIMARY KEY,
  board_id INT(11),
  message TEXT,
  created_at DATETIME
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

