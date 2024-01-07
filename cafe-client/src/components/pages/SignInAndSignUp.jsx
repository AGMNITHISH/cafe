import { useState } from "react";
import CommonInput from "../common/fileds/CommonInput";
import PrimaryButton from "../common/fileds/PrimaryButton";

const SignInAndSignUp = () => {
  const [formValue, setFormValue] = useState([]);
  const [loginPageStatus, setLoginPageStatus] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleActivePage = () => {
    setFormValue([]);
    setLoginPageStatus(!loginPageStatus);
  };
  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <div>
      <h1 className=" text-5xl font-medium cursor-pointer mb-3">
        {loginPageStatus ? (
          <>
            <span className="text-indigo-600  ">Sign</span> in
          </>
        ) : (
          <>
            <span className="text-indigo-600  ">Sign</span> up
          </>
        )}
      </h1>
      <form className="min-w-32	">
        {loginPageStatus ? (
          <>
            <div className="mb-5 w-64">
              <CommonInput
                label="Email"
                name="email"
                handleInput={handleInput}
                value={formValue?.email}
                type="text"
              />
              <CommonInput
                label="Password"
                name="password"
                handleInput={handleInput}
                value={formValue.password}
                type="password"
              />
              <div className="flex flex-row my-3 ">
                <PrimaryButton label="Sign in" handleClick={handleSubmit} />
                <div className="mx-2 text-center text-xl">or</div>
                <PrimaryButton label="Sign up" handleClick={handleActivePage} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-5 w-64">
              <CommonInput
                label="User name"
                name="userName"
                handleInput={handleInput}
                value={formValue?.userName}
                type="text"
              />
              <CommonInput
                label="Email"
                name="email"
                handleInput={handleInput}
                value={formValue?.email}
                type="text"
              />
              <CommonInput
                label="Password"
                name="password"
                handleInput={handleInput}
                value={formValue.password}
                type="password"
              />
              <div className="flex flex-row my-3 ">
                <PrimaryButton label="Sign up" handleClick={handleSubmit} />
                <div className="mx-2 text-center text-xl">or</div>
                <PrimaryButton label="Sign in" handleClick={handleActivePage} />
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SignInAndSignUp;
