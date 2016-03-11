DROP database IF EXISTS scheduler;

create database scheduler;


#---------------#

DROP TABLE IF EXISTS scheduler.usertypes;

CREATE  TABLE scheduler.usertypes (

  usertypeid INT NOT NULL AUTO_INCREMENT ,
  usertype VARCHAR(45) NOT NULL ,
  usertypedescr VARCHAR(45) NULL ,
  createddate DATETIME NOT NULL,
  active BIT NOT NULL,

  PRIMARY KEY (usertypeid) );

INSERT INTO scheduler.usertypes
(usertype, createddate, active)
select 'System Admin', now(), 1 ;
;

#---------------#
DROP TABLE IF EXISTS scheduler.users;

CREATE  TABLE scheduler.users (

  userid INT NOT NULL AUTO_INCREMENT ,
  username VARCHAR(45) NOT NULL ,
  password VARCHAR(45) NOT NULL ,
  email VARCHAR(100) NOT NULL ,
  createddate DATETIME NOT NULL,
  active BIT NOT NULL ,

  PRIMARY KEY (userid) );

INSERT INTO scheduler.users
(username, password, email, createddate, active)
select 'admin', 'admin', 'admin@scheduler.com', now(), 1 union
select 'sampleuser', 'sampleuser', 'sampleuser@scheduler.com', now(), 1;
#---------------#

DROP TABLE IF EXISTS scheduler.taskcategories;

CREATE  TABLE scheduler.taskcategories (

  taskcategoryid INT NOT NULL AUTO_INCREMENT ,
  taskcategoryname VARCHAR(45) NOT NULL ,
  taskcategorydescr VARCHAR(45) NULL ,
  createddate DATETIME NOT NULL,
  active BIT NOT NULL ,

  PRIMARY KEY (taskcategoryid) );

INSERT INTO scheduler.taskcategories
(taskcategoryname,createddate, active)
select 'TFGW',  now(), 1 union
select 'AYTTFM',  now(), 1 union
select 'LAC', now(), 1 ;
;

#---------------#

DROP TABLE IF EXISTS scheduler.tasks;

CREATE  TABLE scheduler.tasks (

  taskid INT NOT NULL AUTO_INCREMENT ,
  taskname VARCHAR(45) NOT NULL ,
  taskdescr VARCHAR(45) NULL ,
  taskcategoryid int null,
  createddate DATETIME NOT NULL,
  active BIT NOT NULL,

  PRIMARY KEY (taskid) );

INSERT INTO scheduler.tasks
(taskname, taskcategoryid, createddate,  active)
select 'DFSG', 1, now(), 1 union
select 'BR',  1, now(), 1 
;

#---------------#

DROP TABLE IF EXISTS scheduler.genders;

CREATE  TABLE scheduler.genders (

  genderid INT NOT NULL AUTO_INCREMENT ,
  gender VARCHAR(45) NOT NULL ,
  createddate DATETIME NOT NULL,
  PRIMARY KEY (genderid) 
  );  
  
  INSERT INTO scheduler.genders
(gender, createddate)
select 'Male',  now()  union
select 'Female', now() 
;

#---------------#

DROP TABLE IF EXISTS scheduler.persons;

CREATE  TABLE scheduler.persons (

  personid INT NOT NULL AUTO_INCREMENT ,
  firstname VARCHAR(45) NOT NULL ,
  lastname VARCHAR(45) NOT NULL,
  genderid int not null,
  createddate DATETIME NOT NULL,
  active BIT NOT NULL ,

  PRIMARY KEY (personid) );

ALTER TABLE scheduler.persons 
ADD CONSTRAINT FK_gender
FOREIGN KEY (genderid) REFERENCES scheduler.genders(genderid) 
;

INSERT INTO scheduler.persons
(firstname, lastname, genderid, createddate,  active)
select 'Caesar', 'Nimrod', 2, now(), 1 union
select 'Junta', 'Overthrown', 1, now(), 1 
;


#---------------#

DROP TABLE IF EXISTS scheduler.buildings;

CREATE  TABLE scheduler.buildings (

  buildingid INT NOT NULL AUTO_INCREMENT ,
  buildingname VARCHAR(45) NOT NULL ,
  createddate DATETIME NOT NULL,
  active BIT NOT NULL ,

  PRIMARY KEY (buildingid) );

INSERT INTO scheduler.buildings
(buildingname, createddate,  active)
select 'Arena Hall', now(), 1 union
select 'ComQuest', now(), 1 union
select 'Quest', now(), 1 union
select 'Jazz Alley', now(), 1  
;

#---------------#

DROP TABLE IF EXISTS scheduler.rooms;

CREATE  TABLE scheduler.rooms (

  roomid INT NOT NULL AUTO_INCREMENT ,
  roomname VARCHAR(45) NOT NULL ,
  createddate datetime NOT NULL,
  active BIT NOT NULL ,

  PRIMARY KEY (roomid) );

INSERT INTO scheduler.rooms(roomname,createddate, active)
select 'Main Hall', now(), 1 union
select 'Second Hall', now(), 1 union
select 'Rainier', now(), 1 union
select 'Mt Shazzam', now(), 1
;