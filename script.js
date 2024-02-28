function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = new Map();

	// Count occurrences of each character
	for (const char of str) {
		if (charCount.has(char)) {
			charCount.set(char, charCount.get(char) + 1);
		} else {
			charCount.set(char, 1);
		}
	}
	
	// Find the first non-repeated character
	for (const char of str) {
		if (charCount.get(char) === 1) {
			  return char;
		}
	}
	
	// If no non-repeated character found, return null
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
