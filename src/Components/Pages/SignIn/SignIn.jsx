import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.init";



const SignIn = () => {
    const auth = getAuth(app);
    const { createUser } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();


    const handleLoginGoogle = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user)
            alert("nice man")
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                alert("good")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 text-white">Login</button>
                            <button onClick={handleLoginGoogle} className="btn bg-red-600 text-white mt-3">Continue with Google</button>
                            <p className="pt-2">if you do not have accoutn <Link to="/signup" className="underline font-bold text-red-500">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;