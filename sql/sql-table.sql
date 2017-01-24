USE 2d-demo

CREATE TABLE news(
  ID INT NOT NULL AUTO_INCREMENT,
  TITLE VARCHAR(100) NOT NULL,
  CONTENT VARCHAR(1000) NOT NULL,
  IMAGE VARCHAR(100) NOT NULL,
  CREATE_TIME DATETIME NOT NULL,
  UPDATE_TIME DATETIME NOT NULL,
  PRIMARY KEY(ID)
);