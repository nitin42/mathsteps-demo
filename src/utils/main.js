const normalize = (step) => {
	return step.toLowerCase().replace(/_/g, ' ');
}

const trimAll = (step) => {
	return step.replace(/\s+/g, '').replace(/\+/g, ' + ');
}

const trimOne = (step) => {
	return step.replace(/\s+/, '');
}

export {
	normalize,
	trimAll,
	trimOne,
};