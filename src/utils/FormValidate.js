

const FormValidate = (email, password) => {
  const validemail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);

  const validpassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  
  if (!validemail) return "Enter a valid email";

  if (!validpassword) return "Enter a valid password";
  return null;
};

export default FormValidate;


