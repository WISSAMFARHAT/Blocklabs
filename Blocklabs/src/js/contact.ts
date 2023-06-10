const submit = document.querySelector("#submit") as HTMLButtonElement;
const fullname = document.querySelector("input[name='name']") as HTMLInputElement;
const email = document.querySelector("input[name='email']") as HTMLInputElement;
const phone = document.querySelector("input[name='phone']") as HTMLInputElement;
const company = document.querySelector("input[name='comapny']") as HTMLInputElement;
const subject = document.querySelector("textarea[name='message']") as HTMLTextAreaElement;
const form = document.querySelector(".contact") as HTMLDivElement;
const message = document.querySelector(".error") as HTMLSpanElement;

submit.addEventListener("click", async () => {

    fullname.classList.remove("_invalid");
    email.classList.remove("_invalid");
    phone.classList.remove("_invalid");
    subject.classList.remove("_invalid");

    if (fullname.value === "" || email.value === "" || phone.value === "" || subject.value === "") {

        if (fullname.value === "")
            fullname.classList.add("_invalid");

        if (email.value === "")
            email.classList.add("_invalid");


        if (phone.value === "")
            phone.classList.add("_invalid");

        if (subject.value === "") 
            subject.classList.add("_invalid");

        message.innerHTML = "Please fill in all required fields.";

        return;

    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.classList.add("_invalid");

        message.innerHTML = "Please enter a valid email address.";
        return;
    }

    const data = await fetch("/sendMail", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: fullname.value,
            Mail: email.value,
            Subject: subject.value,
            Phone: phone.value,
            ComanyName: company.value
        })
    });

    var result = await data.text();

    if (result === "Done")
        form.classList.add("_done");
    else
        message.innerHTML = "Error : " + result;


});