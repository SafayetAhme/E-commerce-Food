import { Link } from "react-router-dom";



const SignIn = () => {

        const handleLogin = e => {
            e.preventDefault();
            const form = e.target.value;
            const name = form.target.value;
            const email = form.target.value;
            console.log(name, email)
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
                            <button className="btn bg-red-600 text-white mt-3">Continue with Google</button>
                            <p className="pt-2">if you do not have accoutn <Link to="/signup" className="underline font-bold text-red-500">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;