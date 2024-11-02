/*
	Generated in drawio
	Database: sqlite
	Plugin: sql
	Version: 0.0.6
*/

CREATE TABLE "Grants" (
	"Id" int NOT NULL,
	"PreviousId" int NULL,
	"Link" text not null,
	"ApplicationLink" text,
	"Resource" text,
	"Type" int,
	"Description" text,
	"StartDate" DATETIME null,
	"EndDate" DATETIME null,
	"CreatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
	"UpdatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("Id" AUTOINCREMENT)
);

-- type individual or community

CREATE TABLE "GrantKeyword" (
	"GrantId" int NOT NULL,
	"KeywordId" int NOT NULL,
	PRIMARY KEY("GrantId","KeywordId")
);

CREATE TABLE "Keywords" (
	"Id" int NOT NULL PRIMARY KEY,
	"Name" text,
	PRIMARY KEY("Id" AUTOINCREMENT)
);

-- need subscribers