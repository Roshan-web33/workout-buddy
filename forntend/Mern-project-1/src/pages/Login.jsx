import { useState } from "react";
import { usestate } from "react";

const Login = (() =>{
         const [email, setEmail] = useState('')
const [password, setPassword] = useState("")
const handleSubmit = async (e) => {
e. preventDefault()
console. log(email, password)}
return (
   <div className="h-[92vh] bg-gray-200 flex justify-center items-center ">
        <form className=" flex flex-col bg-white rounded-2xl w-[30%] p-5 gap-5"  onSubmit={handleSubmit}>
<h4 className="font-bold text-3xl" >Login</h4>
<label >Email: </label>
<input className="bg-gray-200 rounded-2xl w-[100%] h-10" type="email" onChange={(e) => setEmail (e. target.value)} value={email} />
< label>Password: </label>
<input className="bg-gray-200 rounded-2xl w-[100%] h-10" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
<button  className=" w-[20%] h-15 rounded-2xl text-white bg-green-600">Login</button>
</form>


    </div>
)
}
)

export default Login

