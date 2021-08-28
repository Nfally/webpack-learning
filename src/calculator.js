export default function (a, b, op) {
	switch (op) {
		case 'add':
			return a + b

		case 'subs':
			return a - b

		case 'mult':
			return a * b

		default:
			return a / b
	}
}
