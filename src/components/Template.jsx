import frameImage from "../assets/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import { FcGoogle } from "react-icons/fc"


const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0">

            <div className="w-11/12 max-w-[450px] mx-0">

                <h1 className="text-slate-100 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-slate-100">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {formtype == "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-white"></div>
                    <p className="text-slate-700 font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-white"></div>
                </div>

                <button className="w-full text-slate-100 border-slate-600 flex justify-center items-center rounded-[8px] font-medium border px-[12px] py-[8px] gap-x-2 mt-6"><FcGoogle />Sign in with Google</button>

            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} alt="pattern" height={504} width={558} loading="lazy"></img>

                <img src={image} alt="Students" height={504} width={558} loading="lazy" className="absolute -top-4 right-4"></img>
            </div>

        </div>
    )
}

export default Template;