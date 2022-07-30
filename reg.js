const openReg = document.querySelector(".cabinet");
const registration = document.querySelector(".pop__reg");
const popupBg = document.querySelector(".popup__bg");



openReg.addEventListener('click', (e) => {
    e.preventDefault();
    registration.classList.add("active");
    popupBg.classList.add("active");

});

const bgClosePopup = (pop) => {
    document.addEventListener("click", (e) => {
        if (e.target === popupBg) {
          popupBg.classList.remove("active");
          pop.classList.remove("active"); 
        }
      });
};


bgClosePopup(registration);





const inputName = document.querySelector(".reg__name");
const inputPass = document.querySelector(".reg__pass");
const btnReg = document.querySelector(".btn__reg");

btnReg.addEventListener('click', (e) => {
    
    users.push(new User(inputName.value, inputPass.value));
    updateLocal();
    inputName.value = '';
    inputPass.value = '';
    console.log(users);

    // users.forEach(element => {
    //     if (element.name == inputName.value && element.password == inputPass.value) {
    //         alert(`Hello ${user.name}`)
    //     };
    // });

    popupBg.classList.remove("active");
    registration.classList.remove("active"); 

});

let users;
!localStorage.users ? users = [] : users = JSON.parse(localStorage.getItem('users'));

const updateLocal = () => {
    localStorage.setItem('users', JSON.stringify(users));    
};


function User (name, password) {
    this.name = name;
    this.password = password;
};

users.forEach(element => {
    if (element.name == inputName.value && element.password == inputPass.value) {
        alert(`Hello ${user.name}`)
    };
});
