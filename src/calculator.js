export default function (a, b, op) {
	switch (op) {
		case 'add':
			console.log(a + b)
			return a + b

		case 'subs':
			console.log(a - b)

			return a - b

		case 'mult':
			console.log(a * b)
			return a * b

		default:
			return a / b
	}
}
