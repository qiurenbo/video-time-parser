"use strict";
const is = require("is-helper");

module.exports = (time, options = {}) => {
	if (!is.isString(time)) {
		throw new TypeError("time must be string");
	}
	// get time
	const timeRegex = /[0-9]+:[0-9]+(:[0-9]+)*/;
	const match = time.match(timeRegex);
	const matchIndex = 0;
	const totalTime = match[matchIndex];

	// parse time
	const hms = totalTime.split(":");
	let parsed = {};
	parsed.minutes = 0;
	parsed.seconds = 0;
	parsed.hours = 0;

	if (hms.length == 3) {
		parsed.hours = parseInt(totalTime.split(":")[0]);
		parsed.minutes = parseInt(totalTime.split(":")[1]);
		parsed.seconds = parseInt(totalTime.split(":")[2]);
	} else if (hms.length == 2) {
		parsed.minutes = parseInt(totalTime.split(":")[0]);
		parsed.seconds = parseInt(totalTime.split(":")[1]);
	} else if (hms.length == 1) {
		parsed.seconds = parseInt(totalTime.split(":")[0]);
	} else {
		throw new Error("time parsed error");
	}

	parsed.duration = parsed.hours * 3600 + parsed.minutes * 60 + parsed.seconds;
	parsed.durationByMinutes =
		(parsed.hours * 3600 + parsed.minutes * 60 + parsed.seconds) / 60;
	parsed.durationByHours =
		(parsed.hours * 3600 + parsed.minutes * 60 + parsed.seconds) / 3600;
	return parsed;
};
