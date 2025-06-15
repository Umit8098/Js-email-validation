document.getElementById("validate").addEventListener("click", (e) => {
    
    e.preventDefault(); // 🔥 Sayfa yenilenmesini engeller. button type submit olarak kullanılırsa..

    const mail = document.querySelector('#mail');
    const output = document.querySelector("#output");
    const email = mail.value.trim().toLowerCase();

    console.log(email);

    const regexPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (regexPattern.test(email)) {
        output.textContent = "✅ Valid email address!";
        output.style.color = "green";
        document.body.style.backgroundColor = "#d4edda";
        
        console.log("True");

    } else {
        output.textContent = "❌ Invalid email address!";
        output.style.color = "crimson";
        document.body.style.backgroundColor = "#f8d7da";

        console.log("False");
    }
});