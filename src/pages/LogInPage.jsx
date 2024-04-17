import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { MainStyled } from "../components/GlobalStyles";
import { FormStyled } from "./LogInPage.styled";
import { useLogIn } from "../hooks/useLogIn";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email. For example user@gmail.com")
    .required(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required(),
});

const LogInPage = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { isPending, signUpMutation: logIn } = useLogIn();

  const handleSubmit = (values, { resetForm }) => {
    logIn(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
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
            Log In
          </button>
        </FormStyled>
      </section>
    </MainStyled>
  );
};

export default LogInPage;
