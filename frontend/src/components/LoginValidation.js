function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "")
        error.email = "Email should not be empty"
    else if (!email_pattern.test(values.email))
        error.email = "email is not in proper format"
    else
        error.email = ""

    if (values.password === "")
        error.password = "password should not be empty"
    else if (values.password.length < 3)
        error.password = "password should be of minimum three chacter.."
     else if(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@]/g.test(values.password))           
        error.password='password should not have special chacters'; 

    else {
        console.log('correct password..')
        error.password = ""
    }




    return error;

}
export default validation