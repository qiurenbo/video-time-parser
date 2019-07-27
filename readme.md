# video-time-parser [![npm version](https://badge.fury.io/js/video-time-parser.svg)](https://badge.fury.io/js/video-time-parser)[![Build Status](https://travis-ci.com/qiurenbo/video-time-parser.svg?branch=master)](https://travis-ci.com/qiurenbo/video-time-parser)

## Install

```
$ npm install video-time-parser
```

## Usage

```js
const parser = require("video-time-parser");

time = parser("1:23:24");

//time.hours == 1
//time.minutes == 23
//time.seconds == 24
//time.duration == 5004
```

## API

### parser(input, options?)

#### input

Type: `string`

#### options

Type: `object`

##### return

Type: `object`

```
{
	hours: <number>
	minutes:<number>
	seconds:<number>
	duration:<number>
}
```
