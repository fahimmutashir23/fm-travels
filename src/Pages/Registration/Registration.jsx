import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocilaLogin/SocialLogin";
import background from "../../assets/image/registration-bg.jpg"
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";




const Registration = () => {

    const { signUp, logOut } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const image = e.target.image.files[0];
        // const imageFile = { image: image };
    
        signUp(email, password).then((result) => {
          if (result.user) {
            console.log(result);
            Swal.fire({
              title: "successfully Register",
              text: "Please login",
              icon: "success",
              confirmButtonText: "Cool",
            });
    
            // updateUser({
            //   displayName: name,
            //   photoURL: profile,
            // });
            logOut();
            navigate("/login");
          }
        });
      };

    return (
        <div
        style={{ backgroundImage: `url(${background})` }}
        className="hero px-28 py-10"
      >
        <div className="mt-10 bg-black text-white shadow-2xl bg-opacity-60 w-full rounded-2xl">
          <div className="card max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mt-4">Sign Up now!</h1>

            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input bg-black bg-opacity-50 input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input bg-black bg-opacity-50 input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Profile Photo</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="input bg-black bg-opacity-50 input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input bg-black bg-opacity-50 input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary rounded-md">
                  Sign Up
                </button>
              </div>
              <p className="text-orange-500 text-sm text-center mt-4">
                Already Registered?
                <Link to="/login" className="font-semibold">
                  Go to Login
                </Link>
              </p>
              <p className="font-semibold text-center text-sm">
                or Sign Up with
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;