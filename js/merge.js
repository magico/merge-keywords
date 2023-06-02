const button = document.getElementById("submit");

function print(message) {
	const outputDiv = document.getElementById('output');
	outputDiv.value = message;
};

function mergeLists(separator, arrayA, arrayB, arrayC){
	let list = [];
	for (let ia = 0; ia < arrayA.length; ia++){
		for (let ib = 0; ib < arrayB.length; ib++){
			for (let ic = 0; ic < arrayC.length; ic++){
				// Call function to merge words of each array
				if(document.getElementById("a").checked){list.push(arrayA[ia].trim());}
				if(document.getElementById("b").checked){list.push(arrayB[ib].trim());}
				if(document.getElementById("c").checked){list.push(arrayC[ic].trim());}

				if(document.getElementById("ab").checked){list.push(arrayA[ia].trim() + separator + arrayB[ib].trim());}
				if(document.getElementById("ba").checked){list.push(arrayB[ib].trim() + separator + arrayA[ia].trim());}

				if(document.getElementById("ac").checked){list.push(arrayA[ia].trim() + separator + arrayC[ic].trim());}
				if(document.getElementById("ca").checked){list.push(arrayC[ic].trim() + separator + arrayA[ia].trim());}

				if(document.getElementById("bc").checked){list.push(arrayB[ib].trim() + separator + arrayC[ic].trim());}
				if(document.getElementById("cb").checked){list.push(arrayC[ic].trim() + separator + arrayB[ib].trim());}

				if(document.getElementById("abc").checked){list.push(arrayA[ia].trim() + separator + arrayB[ib].trim() + separator + arrayC[ic].trim());}
				if(document.getElementById("acb").checked){list.push(arrayA[ia].trim() + separator + arrayC[ic].trim() + separator + arrayB[ib].trim());}
				if(document.getElementById("bac").checked){list.push(arrayB[ib].trim() + separator + arrayA[ia].trim() + separator + arrayC[ic].trim());}
				if(document.getElementById("bca").checked){list.push(arrayB[ib].trim() + separator + arrayC[ic].trim() + separator + arrayA[ia].trim());}
				if(document.getElementById("cab").checked){list.push(arrayC[ic].trim() + separator + arrayA[ia].trim() + separator + arrayB[ib].trim());}
				if(document.getElementById("cba").checked){list.push(arrayC[ic].trim() + separator + arrayB[ib].trim() + separator + arrayA[ia].trim());}
			}
		}
	}
	return list
}

function merge() {
	let separator = document.getElementById("separator").value;
	let arrayA = document.getElementById("textarea-a").value.split('\n');
	let arrayB = document.getElementById("textarea-b").value.split('\n');
	let arrayC = document.getElementById("textarea-c").value.split('\n');
	print(mergeLists(separator, arrayA, arrayB, arrayC).join("\n"));
}

button.addEventListener('click', () => {
	merge();
});