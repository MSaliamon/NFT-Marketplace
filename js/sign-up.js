// JavaScript: Обробка та валідація форми
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
 
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
 
    let isValid = true;
 
    if (name === '') {
        document.getElementById('nameError').textContent = 'Введіть ваше ім’я';
        isValid = false;
    }
 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Введіть вашу електронну пошту';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Неправильний формат електронної пошти';
        isValid = false;
    }


    if (password === '') {
        document.getElementById('passwordError').textContent = 'Введіть ваш пароль';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Пароль має бути не менше 8 символів';
        isValid = false;
        this.style.color = 'black';
    }
 
    // const confirmPassword = document.getElementById('confirmPassword').value;
 
    // if (confirmPassword === '') {
    //     document.getElementById('confirmPasswordError').textContent = 'Потвердіть ваш пароль';
    //     isValid = false;
    // } else if (password !== confirmPassword) {
    //     document.getElementById('confirmPasswordError').textContent = 'Паролі не співпадають';
    //     isValid = false;
    // }
 
 
    // Якщо форма пройшла валідацію
    if (isValid) {
        console.log('Форма успішно відправлена');
        console.log({ name, email, password });
 
        // Можна очистити поля форми або відправити дані на сервер
        document.getElementById('form').reset();
    }
 });