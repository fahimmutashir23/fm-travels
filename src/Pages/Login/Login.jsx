import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import ReactCaptcha from 'modern-react-captcha';
import background from "../../assets/image/login-bg.jpg";
import SocialLogin from "../../Components/SocilaLogin/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password).then((result) => {
      if (result.user) {
        Swal.fire({
          title: "successfully Login",
          text: "text",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
        e.target.reset();
      }
    });
  };

    const handleSuccess = () => {
      setDisable(false)
    }
      const handleFailure = () => {

    }

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="hero px-28 py-10"
    >
      <div className="mt-10 bg-black text-white shadow-2xl bg-opacity-60 w-full">
        <div className="card max-w-2xl mx-auto">
          <h1 className="text-4xl font-semi-bold text-center text-white mt-4">
            Login now!
          </h1>

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input bg-black bg-opacity-50 input-bordered rounded-md w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input bg-black bg-opacity-50 input-bordered rounded-md"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="text-black">
              <ReactCaptcha
                  charset="uln"
                  length={6}
                  color="white"
                  bgColor="transparent"
                  reload={true}
                  handleSuccess={handleSuccess}
                  handleFailure={handleFailure}
                />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success rounded-md"
                disabled={disable}
              >
                Login
              </button>
            </div>
            <p className="text-orange-500 text-sm text-center mt-4">
              New here?
              <Link to="/registration" className="font-semibold">
                Create a New Account
              </Link>
            </p>
            <p className="font-semibold text-center text-sm">or Sign in with</p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
