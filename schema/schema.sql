/*
	Generated in drawio
	Database: sqlite
	Plugin: sql
	Version: 0.0.6
*/

CREATE TABLE "Grants" (
	"Id" integer NOT NULL,
	"PreviousId" int NULL,
	"Link" text not null,
	"ApplicationLink" text,
	"Resource" text,
    "Rating"	REAL,
	"Type" int, -- individual or community
    "ApplicationType" int -- online, inperson, email
	"Description" text,
	"StartDate" DATETIME null,
	"EndDate" DATETIME null,
	"CreatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
	"UpdatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("Id" AUTOINCREMENT)
);

-- type individual or community
CREATE TABLE "Keywords" (
	"Id" integer NOT NULL PRIMARY KEY,
	"Name" text,
	PRIMARY KEY("Id" AUTOINCREMENT)
);


CREATE TABLE "GrantKeyword" (
	"GrantId" integer NOT NULL,
	"KeywordId" integer NOT NULL,
    FOREIGN KEY (GrantId) REFERENCES "Grants" (Id),
    FOREIGN KEY (KeywordId) REFERENCES "Keywords" (Id),
	PRIMARY KEY("GrantId","KeywordId")
);

-- need subscribers