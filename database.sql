CREATE TABLE "user" (
	"id" serial primary key NOT NULL,
	"username" varchar(180) NOT NULL,
	"password" varchar(240) NOT NULL
);



CREATE TABLE "campsite" (
	"id" serial primary key NOT NULL,
	"site_name" varchar(180) NOT NULL,
	"mile_marker" integer NOT NULL,
	"latitude" DECIMAL(15) NOT NULL,
	"longitude" DECIMAL(15) NOT NULL
);



CREATE TABLE "hike" (
	"id" serial primary key NOT NULL,
	"user_id" integer NOT NULL,
	"date_start" DATE NOT NULL,
	"date_end" DATE NOT NULL,
	"mile_start" integer NOT NULL,
	"mile_end" integer NOT NULL,
	"completed" BOOLEAN NOT NULL,
	"trailhead_start_id" integer NOT NULL,
	"trailhead_end_id" integer NOT NULL,
	"comments" varchar(20000) NOT NULL
);



CREATE TABLE "campsite_review" (
	"id" serial primary key NOT NULL,
	"user_id" integer NOT NULL,
	"campsite_id" integer NOT NULL,
	"review" varchar(20000) NOT NULL,
	"rating" integer NOT NULL
);



CREATE TABLE "hike_campsite" (
	"id" serial primary key NOT NULL,
	"date" DATE NOT NULL,
	"campsite_id" integer NOT NULL,
	"trip_id" integer NOT NULL
);



CREATE TABLE "trailhead" (
	"id" serial primary key NOT NULL,
	"trailhead_name" varchar(180) NOT NULL,
	"mile_marker" integer NOT NULL
);



CREATE TABLE "hike_photos" (
	"id" serial primary key NOT NULL,
	"trip_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"pic_url" varchar(20000) NOT NULL
);



CREATE TABLE "campsite_pics" (
	"id" serial primary key NOT NULL,
	"user_id" integer NOT NULL,
	"campsite_id" integer NOT NULL
);





ALTER TABLE "hike" ADD CONSTRAINT "hike_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "hike" ADD CONSTRAINT "hike_fk1" FOREIGN KEY ("trailhead_start_id") REFERENCES "trailhead"("id");
ALTER TABLE "hike" ADD CONSTRAINT "hike_fk2" FOREIGN KEY ("trailhead_end_id") REFERENCES "trailhead"("id");

ALTER TABLE "campsite_review" ADD CONSTRAINT "campsite_review_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "campsite_review" ADD CONSTRAINT "campsite_review_fk1" FOREIGN KEY ("campsite_id") REFERENCES "campsite"("id");

ALTER TABLE "hike_campsite" ADD CONSTRAINT "hike_campsite_fk0" FOREIGN KEY ("campsite_id") REFERENCES "campsite"("id");
ALTER TABLE "hike_campsite" ADD CONSTRAINT "hike_campsite_fk1" FOREIGN KEY ("hike_id") REFERENCES "hike"("id");


ALTER TABLE "hike_photos" ADD CONSTRAINT "hike_photos_fk0" FOREIGN KEY ("hike_id") REFERENCES "hike"("id");
ALTER TABLE "hike_photos" ADD CONSTRAINT "hike_photos_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "campsite_pics" ADD CONSTRAINT "campsite_pics_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "campsite_pics" ADD CONSTRAINT "campsite_pics_fk1" FOREIGN KEY ("campsite_id") REFERENCES "campsite"("id");

INSERT into "campsite" ("site_name", "mile_marker", "latitude", "longitude")
VALUES ('White Pine', 66, 46.9309, -92.0669);

INSERT into "campsite_review" ("user_id", "campsite_id", "review", "rating")
VALUES (1, 1, 'Great!', 5);

INSERT into "trailhead" ("trailhead_name", "mile_marker")
VALUES ('Martin Road', 60);

INSERT into "trailhead" ("trailhead_name", "mile_marker")
VALUES ('Normanna Road', 74);

INSERT into "hike" ("user_id", "date_start", "date_end", "mile_start", "mile_end", "completed", "trailhead_start_id", "trailhead_end_id", "comments")
VALUES (1, '2018-09-18', '2018-09-19', 60, 74, false, 1, 2, 'Excited!' );

INSERT into "hike_campsite" ("date", "campsite_id", "trip_id")
VALUES ('2018-09-18', 1, 2);


