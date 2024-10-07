/*loginpage*/
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 假设的用户名和密码 (可以根据需要进行更改)
    const validUsername = "admin";
    const validPassword = "123";

    if (username === validUsername && password === validPassword) {
        // 登录成功，跳转到主页
        window.location.href = "index.html";
    } else {
        // 显示错误信息
        const errorMessage = document.getElementById('error');
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    }
}
/*loginpage*/