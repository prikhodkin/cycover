const mainElement = document.querySelector(`#calculator`);

const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

const INITIAL_STATE = {
  type : '',
  garantie: {
    'value' : 1000,
    'base' : 10,
    'prime' : 15,
    'selected' : true
  }
}

const state = {
  type: INITIAL_STATE.type,
  garantie: INITIAL_STATE.garantie
};

const garanties = [
  {
    'value' : 1000,
    'base' : 10,
    'prime' : 15,
    'selected' : true
  },
  {
    'value' : 10000,
    'base' : 14,
    'prime' : 20,
    'selected' : false
  },
  {
    'value' : 20000,
    'base' : 18,
    'prime' : 25,
    'selected' : false
  },
  {
    'value' : 40000,
    'base' : 21,
    'prime' : 28,
    'selected' : false
  },
  {
    'value' : 50000,
    'base' : 25,
    'prime' : 32,
    'selected' : false
  },
  {
    'value' : 80000,
    'base' : 30,
    'prime' : 36,
    'selected' : false
  },
  {
    'value' : 100000,
    'base' : 40,
    'prime' : 46,
    'selected' : false
  },
  {
    'value' : 120000,
    'base' : 45,
    'prime' : 50,
    'selected' : false
  },
  {
    'value' : 140000,
    'base' : 51,
    'prime' : 57,
    'selected' : false
  },
  {
    'value' : 200000,
    'base' : 65,
    'prime' : 70,
    'selected' : false
  }
]


export {render, changeScreen, state, garanties, INITIAL_STATE};
