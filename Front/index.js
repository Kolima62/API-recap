// fetch('http://localhost:3000/test', {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     const titrePost = document.querySelector('#titre-post');
//     titrePost.innerText = data.titre;
//   });

let user = {
  toto: 'Gérard',
  lastName: 'Gérard',
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const data = new FormData(form);
  e.preventDefault();
  const newFirstname = data.get('firstName');
  console.log(newFirstname);
  const newUser = { ...user, toto: newFirstname };
  //   console.log(newUser);
  //   form.submit();
  postUser(newUser);
  //   form.submit();
});

function postUser(user) {
  fetch('http://localhost:3000/test', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// const inputFirstName = document.querySelector('#firstName');
// const inputPassword = document.querySelector('#password');

// inputPassword.addEventListener('input', (e) => {
//   const password = e.currentTarget.value;
//   const spanPassword = document.querySelector('#divPassword');
//   c;
//   spanPassword.classList.add('error');
//   if (password.length < 6) {
//     spanPassword.innerText = '6 caractères minimum';
//   } else if (password.length >= 6) {
//     spanPassword.innerText = '';
//   }
// });

// const lis = document.querySelectorAll('li');
// console.log(Array.from(lis));
// // Array.from(lis).map((lien) => {
// //   lien.addEventListener('click', (e) => {
// //     console.log(lien);
// //   });
// // });

// const monSelect = document.querySelector('#monSelect');
// console.log(monSelect);
// monSelect.addEventListener('change', (e) => {
//   const listOptions = e.currentTarget.selectedOptions;
//   const tabOptions = [];
//   Array.from(listOptions).map((option) => {
//     tabOptions.push(option.value);
//   });
//   console.log(tabOptions);
// });

// const monButton = document.querySelector('button');
// const maDiv = document.querySelector('div');

// monButton.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log(e.pageX);
//   console.log('mon bouton');
// });

// maDiv.addEventListener('click', () => {
//   console.log('ma div');
// });
