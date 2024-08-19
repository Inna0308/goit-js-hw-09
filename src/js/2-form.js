const feedbackFormEl = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

//^ ЗАПОВНЕННЯ ФОРМИ

const fillFormField = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  console.log(formDataFromLS);

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormField();

//^ ЗБЕРЕЖЕННЯ ДАНИХ У ЛОКАЛСТОРЕДЖ

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);
