CREATE TABLE `callback_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`topic` text NOT NULL,
	`preferred_time` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer NOT NULL,
	`consent_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_callback_phone_created` ON `callback_requests` (`phone`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_callback_created` ON `callback_requests` (`created_at`);