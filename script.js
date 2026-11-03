function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1up= s1.toUpperCase();
	let s2up=s2.toUpperCase();

	return s1up.indexOf(s2up);
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));


