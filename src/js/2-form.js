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

  const email = feedbackFormEl.elements['email'].value.trim();
  const message = feedbackFormEl.elements['message'].value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);
