/*
	Generated in drawio
	Database: mysql
	Plugin: sql
	Version: 0.0.6
*/

CREATE TABLE `Grants` (
	`Id` intNOTNULL,
	`PreviousId` intNULL,
	`Link` varcharnotnull(1000),
	`ApplicationLink` varchar(1000),
	`Resource` varchar(255),
	`Type` int,
	`Description` varchar(255),
	`StartDate` datetimenull,
	`EndDate` datetimenull,
	`CreatedAt` datetime,
	`UpdatedAt` datetime,
	PRIMARY KEY(`Id`)
);

CREATE TABLE `GrantKeyword` (
	`GrantId` intNOTNULL,
	`KeywordId` intNOTNULL,
	PRIMARY KEY(`GrantId`,`KeywordId`)
);

CREATE TABLE `Keywords` (
	`Keyword` intNOTNULLPRIMARYKEY,
	`Name` varchar(100),
	PRIMARY KEY(`Keyword`)
);