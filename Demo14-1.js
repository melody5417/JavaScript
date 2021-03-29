invoke(print, 500, 3000, 10000);

function print() {
	console.log('print');
}

function invoke(f, start = 0, interval, end) {
	if (arguments.length <= 2) {
		setTimeout(f, start);
		return;
	}
	setTimeout(repeat, start);

	function repeat() {
		f();
		const intervalPointer = setInterval(f, interval);
		if (end) {
			setTimeout(() => {
				clearInterval(intervalPointer);
			}, end);
		}
	}
}