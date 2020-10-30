

const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const changeScreen = (element) => {
  const mainElement = document.querySelector(`#calculator`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

const INITIAL_STATE = {
  type : '',
  garantie: {
    'value' : 50000,
    'text' : '50 000 &#8364;',
    'base' : 239,
    'prime' : 263,
    'selected' : true
  }
}

const state = {
  type: INITIAL_STATE.type,
  garantie: INITIAL_STATE.garantie
};

const garanties = [
  {
    'value' : 50000,
    'text' : '50 000 &#8364;',
    'base' : 239,
    'prime' : 263,
    'selected' : true
  },
  {
    'value' : 100000,
    'text' : '100 000 &#8364;',
    'base' : 420,
    'prime' : 462,
    'selected' : false
  },
  {
    'value' : 250000,
    'text' : '250 000 &#8364;',
    'base' : 600,
    'prime' : 660,
    'selected' : false
  },
  {
    'value' : 500000,
    'text' : '500 000 &#8364;',
    'base' : 900,
    'prime' : 990,
    'selected' : false
  },
  {
    'value' : 750000,
    'text' : '750 000 &#8364;',
    'base' : 1200,
    'prime' : 1320,
    'selected' : false
  },
  {
    'value' : 1000000,
    'text' : '1 000 000 &#8364;',
    'base' : 1368,
    'prime' : 1505,
    'selected' : false
  },
  {
    'value' : 1500000,
    'text' : '1 500 000 &#8364;',
    'base' : 1740,
    'prime' : 1914,
    'selected' : false
  },
  {
    'value' : 2000000,
    'text' : '2 000 000 &#8364;',
    'base' : 1944,
    'prime' : 2138,
    'selected' : false
  },
  {
    'value' : 2500000,
    'text' : '2 500 000 &#8364;',
    'base' : 2346,
    'prime' : 2581,
    'selected' : false
  },
  {
    'value' : 3000000,
    'text' : '3 000 000 &#8364;',
    'base' : 2574,
    'prime' : 2831,
    'selected' : false
  }
]


export {render, changeScreen, state, garanties, INITIAL_STATE};
