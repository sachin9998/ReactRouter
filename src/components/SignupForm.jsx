
import { useState } from "react"
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }

    function submitHandler(event) {
        event.preventDefault();

        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not Match");
        }

        setIsLoggedIn(true);
        toast.success("Account Created!")

        const accountData = { ...formData };
        console.log(accountData);

        navigate("/dashboard");
        
    }


    return (
        <div>

            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>

                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input
                            type="text"
                            required
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            name="firstName"
                            value={formData.firstName}
                        ></input>

                    </label>

                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input
                            type="text"
                            required
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={formData.lastName}
                        ></input>

                    </label>
                </div>

                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input
                        type="email"
                        required
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        name="email"
                        value={formData.email}
                    ></input>

                </label>

                {/* Create Password and Confirm Passowrd */}

                <div>
                    <label>
                        <p>Create Password <sup>*</sup></p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            required
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            name="password"
                            value={formData.password}
                        ></input>

                        <span
                            onClick={() => setShowPassword((prev) => !prev)} >
                            {showPassword ? (<FaEyeSlash />) : (<FaEye />)}
                        </span>

                    </label>

                    <label>
                        <p>Confirm Password <sup>*</sup></p>
                        <input
                            type={ showConfirmPassword ? ("text") : ("password")}
                            required
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                        ></input>

                        <span
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            { showConfirmPassword ? (<FaEyeSlash />) : (<FaEye />)}
                        </span>

                    </label>

                </div>

                <button>Create Account</button>

            </form>

        </div>
    )
}

export default SignupForm