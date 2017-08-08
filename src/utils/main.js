import { css } from 'styled-components'

const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}

const userFriendlyString = (step) => {
	return step.toLowerCase().replace(/_/g, ' ');
}

const trimAll = (step) => {
	return step.replace(/\s+/g, '').replace(/\+/g, ' + ');
}

const trimOne = (step) => {
	return step.replace(/\s+/, '');
}

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export {
	userFriendlyString,
	trimAll,
	trimOne,
	media,
	capitalize
};
