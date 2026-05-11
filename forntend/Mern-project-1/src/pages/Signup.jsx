import { useState } from "react";

import useSignup from "../hooks/useSingup";
import { useAuthContext } from "../hooks/useAuthContext";
const Signup = (() =>{
         const [email, setEmail] = useState('')
const [password, setPassword] = useState("")


const { signup, error, isLoading } = useSignup()
const handleSubmit = async (e) => {
e. preventDefault()
 await signup(email, password)
}
return (
    <div className="h-[92vh] bg-gray-200 flex justify-center items-center ">
        <form onSubmit={handleSubmit} className=" flex flex-col bg-white rounded-2xl w-[30%] p-5 gap-5"  >
<h4 className="font-bold text-3xl" > Sign Up</h4>
<label >Email: </label>
<input className="bg-gray-200 rounded-2xl w-[100%] h-10" type="email" onChange={(e) => setEmail (e. target.value)}  />
< label>Password: </label>
<input className="bg-gray-200 rounded-2xl w-[100%] h-10" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
<button disabled={isLoading} className=" w-[20%] h-15 rounded-2xl text-white bg-green-600">Sign Up</button>
{error && <div>{error}</div>}
</form>


    </div>
     
)
}
)

export default Signup


