import Notiflix from "notiflix";

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const form = document.querySelector('form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (shouldResolve) {
        resolve({position: position, delay: delay});
      } else {
        reject({position: position, delay: delay});
      }

    }, delay);
  });
}

form.addEventListener('submit', function(event){
  event.preventDefault();
  
  window.setTimeout(()=>{
    for (let n = 0; n < parseInt(amount.value); n++) {

      createPromise(n, parseInt(delay.value) + parseInt(step.value) * n)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }, parseInt(delay.value));
});
