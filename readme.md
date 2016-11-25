# jQuery RD Leads Form

[![Build Status](https://travis-ci.org/fccoelho7/rd-test.svg?branch=master)](https://travis-ci.org/fccoelho7/rd-test) [![Code Climate](https://codeclimate.com/github/fccoelho7/rd-test/badges/gpa.svg)](https://codeclimate.com/github/fccoelho7/rd-test)

> Permits you to converts users in leads, easily.

## Dependencies

It's necessary jQuery installed, you can download it [here](http://jquery.com/download/). :)

## How to install

### Step 1: Link required files

```html
<!-- jQuery library (served from Google) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!-- RD Leads Form Javascript file -->
<script src="jquery.rd-leads-form.js"></script>
<!-- RD Leads Form CSS file -->
<link href="jquery.rd-leads-form.css" rel="stylesheet" />
```

### Step 2: Create HTML markup

Create a `<div class="leads-box"></div>` element.

### Step 3: Call the RD Leads Form

Call `.RDLeadsForm()` on `<div class="leads-box">`. Note that the call must be made inside of a $(document).ready() call, or the plugin maybe will not work!

```html
<script type="text/javascript" charset="utf-8">
	$(document).ready(function() {
		$('.leads-box').RDLeadsForm(options);
	});
</script>
```

## Configuration options

### General

Example

```js
const options = {
	token: null,
	secret: null,
	fields: {
		states: [],
		levels: []
	},
	url: null,
	modal: false
};
```

**modal**
```
default: false
options: boolean (true / false)
```

**url**
will send data to
```
default: null
options: string
```

**token**
code
```
default: null
options: string
```

**secret**
code
```
default: null
options: string
```

### Fields

**states**
```
default: []
options: string
```

**levels**
```
default: []
options: string
```

## License

MIT LICENSE

Copyright 2016-2016 Fabio Carvalho fccoelho7@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
