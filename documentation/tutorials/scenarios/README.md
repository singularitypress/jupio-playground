# Scenarios

## Description

Word problems designed to make you write JavaScript with a _purpose_. Doing things like fizzbuzz or whatever for an interview is fine, but it's good to understand _why_ you might actually do something.

## Questions

### Scenario 1 - Red Buttons

At work you're told that users appear to like buttons with a red background, but they can't change the HTML or CSS to make the buttons red right now. What someone tells you is that you should write some JavaScript that gets all `button` elements on the page and makes the `background-color` be `red`

### Scenario 2 - Making a table

At work, you have a .csv file with some interest rates in it. We want to turn it into an HTML table. We're going to break this scenario down into parts.

#### 2a. Get the file

Read the .csv file as a string variable and console log the value. It should look like this:

```bash
"2022,6.1
2021,5.4
2020,2
2019,1.1
2018,1.2"
```

#### 2b. Create an array of strings

Convert the string of the file contents to an array of lines, then console log it. It should look like this:

```bash
[
	"2022,6.1"
	"2021,5.4",
	"2020,2",
	"2019,1.1",
	"2018,1.2"
]
```

#### 2c. Convert the array of lines

Convert the array of strings into strings that look like table rows, and console log it. It should look like this:

```bash
[
	"<tr><td>2022</td><td>6.1</td></tr>",
	"<tr><td>2021</td><td>5.4</td></tr>",
	"<tr><td>2020</td><td>2</td></tr>",
	"<tr><td>2019</td><td>1.1</td></tr>",
	"<tr><td>2018</td><td>1.2</td></tr>"
]
```

#### 2d. Convert the array of lines back into a single string

Convert the array of strings (that look like table rows) into a single string that looks like an HTML table, then console log it. It should look like this:

```bash
"
<table>
	<tr><td>2022</td><td>6.1</td></tr>
	<tr><td>2021</td><td>5.4</td></tr>
	<tr><td>2020</td><td>2</td></tr>
	<tr><td>2019</td><td>1.1</td></tr>
	<tr><td>2018</td><td>1.2</td></tr>
</table>
"
```

#### 2e. Write a file

Write the string you made into an HTML file called `my-table.html`