# Phone Screen

## General Questions

- _Question:_ Tell me an interesting front-end project you've delivered recently. This can be in reference to work, or a technical project outside of work.
  - _Follow-up:_ Why was this interesting to you?
  - _Follow-up:_ What obstacles did you have to overcome?
  - _Follow-up:_ Who do you think of as your customer for this? What was the customer feedback?
  - _Follow-up:_ What was the result of the project?
  - _Follow-up:_ How did you measure success?
  - _Follow-up:_ If you could do it again, what would you change?

## Acid Tests

### Coding

1. Write a function to reverse a string.

```javascript
const reverse = ( str ) => {
	const { length } = str;
	const last = length - 1;
	const chars = str.split("");

	for ( int i = 0; i < length/2; i++ ) { // loop to the halfway point
		const c = chars[i]; // c is the current first character in the string array
		chars[i] = chars[last - i]; // make the first item in the array the last character
		chars[last - i] = c; // make the last character, the current first character
	}
	return chars.join("");
}

// OR

const reverse = (str) => {
	return str.split("").reverse("").join(""); // split the string into an array of letters, reverse their order, then rejoin them into a string
}

```

2. Write function to print the odd numbers from 1 to 99

```javascript
for (i = 1; i <= 100; i += 2) {
  console.log(i);
}
```
