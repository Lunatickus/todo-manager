import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { MainStyled } from "../components/GlobalStyles";
import { FormStyled } from "./RegisterPage.styled";
import { useSignUp } from "../hooks/useSignUp";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  email: yup
    .string()
    .email("Enter valid email. For example user@gmail.com")
    .required(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required(),
});

const RegisterPage = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { isPending, signUpMutation: signUp } = useSignUp();

  const handleSubmit = (values, { resetForm }) => {
    signUp(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <MainStyled>
      <section className="section">
        {isPending && <h1>Loading...</h1>}
        <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="form-input-wrapper">
            <label className="form-label">
              <input
                type="text"
                name="name"
                className="form-input"
                style={
                  formik.touched.name &&
                  formik.errors.name && { borderColor: "#EF5050" }
                }
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                placeholder="Name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="register-form-input-error">
                  {formik.errors.name}
                </p>
              )}
            </label>

            <label className="form-label">
              <input
                type="email"
                name="email"
                className="form-input"
                style={
                  formik.touched.email &&
                  formik.errors.email && { borderColor: "#EF5050" }
                }
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="register-form-input-error">
                  {formik.errors.email}
                </p>
              )}
            </label>

            <label className="form-label">
              <input
                type={isPasswordShown ? "text" : "password"}
                name="password"
                className="form-input form-input-password"
                style={
                  formik.touched.password &&
                  formik.errors.password && { borderColor: "#EF5050" }
                }
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="register-form-input-error">
                  {formik.errors.password}
                </p>
              )}
              <button
                type="button"
                className="password-show-button"
                onClick={() => setIsPasswordShown(!isPasswordShown)}
              >
                {isPasswordShown ? <IoEye size={20} /> : <IoEyeOff size={20} />}
              </button>
            </label>
          </div>

          <button type="submit" className="form-submit" disabled={isPending}>
            Sign Up
          </button>
        </FormStyled>
      </section>
    </MainStyled>
  );
};

export default RegisterPage;
