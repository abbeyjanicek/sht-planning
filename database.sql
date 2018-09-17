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



CREATE TABLE "trip" (
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



CREATE TABLE "trip_campsite" (
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



CREATE TABLE "trip_photos" (
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





ALTER TABLE "trip" ADD CONSTRAINT "trip_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "trip" ADD CONSTRAINT "trip_fk1" FOREIGN KEY ("trailhead_start_id") REFERENCES "trailhead"("id");
ALTER TABLE "trip" ADD CONSTRAINT "trip_fk2" FOREIGN KEY ("trailhead_end_id") REFERENCES "trailhead"("id");

ALTER TABLE "campsite_review" ADD CONSTRAINT "campsite_review_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "campsite_review" ADD CONSTRAINT "campsite_review_fk1" FOREIGN KEY ("campsite_id") REFERENCES "campsite"("id");

ALTER TABLE "trip_campsite" ADD CONSTRAINT "trip_campsite_fk0" FOREIGN KEY ("campsite_id") REFERENCES "campsite"("id");
ALTER TABLE "trip_campsite" ADD CONSTRAINT "trip_campsite_fk1" FOREIGN KEY ("trip_id") REFERENCES "trip"("id");


ALTER TABLE "trip_photos" ADD CONSTRAINT "trip_photos_fk0" FOREIGN KEY ("trip_id") REFERENCES "trip"("id");
ALTER TABLE "trip_photos" ADD CONSTRAINT "trip_photos_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "campsite_pics" ADD CONSTRAINT "campsite_pics_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "campsite_pics" ADD CONSTRAINT "campsite_pics_fk1" FOREIGN KEY ("campsite_id") REFERENCES "campsite"("id");

