// las promesas tienen 3 estados

//estado  de pendiente pending

//estado de cumplido fulfilled

//estado de rechazado rejected

// las promesas manejan dos tipos de callback
// resolve y reject

// Promise();

// Estados: pending;
// fullfilled;
// Rejected;

// callbacks: resolve;
// reject;

//then se ejecuta cuando la promesa se cumple
// catch se ejecuta cuando la promesa se rechaza

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccesFul = true;

    if (operationSuccesFul) {
      resolve("Operacion exitosa");
    } else {
      reject("Operacion fallida");
    }
  }, 2000);
});

promise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
