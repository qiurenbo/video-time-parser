const parser = require(".");

test("duration parsed should work as expected", () => {
	time = parser("1:23:24");
	expect(time.hours).toBe(1);
	expect(time.minutes).toBe(23);
	expect(time.seconds).toBe(24);
	expect(time.duration).toBe(5004);
	expect(time.durationByMinutes).toBe(83.4);
	expect(time.durationByHours).toBe(1.39);
});

test("only string should be passed", () => {
	expect(() => {
		parser(2121);
	}).toThrow("time must be string");
});
