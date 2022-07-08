//bg-gradient-to-r from-[#020024] via-[#360eba] to-[#00d4ff]

import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
		const [email, setEmail ]  = useState('')
		const [password, setPassword ]  = useState('')
		const router = useRouter()

		const userLogin =async (e)=>{
			e.preventDefault()
			const res = await fetch('http://localhost:3000/api/login',{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify({
					email,
					password
				})
			})
			const data = await res.json()
			console.log(data.token)
			if(data.error){
				console.log(data.error)
			}else{
				localStorage.setItem('token', data.token)
				router.push('/')
			}
		}
	return (
		<div className="flex justify-center gradient-form bg-gray-200 md:h-screen">
			<div className="container py-12 px-6 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="xl:w-10/12">
						<div className="block bg-white shadow-lg rounded-lg">
							<div className="lg:flex lg:flex-wrap g-0">
								<div className="lg:w-6/12 px-4 md:px-0">
									<div className="md:p-12 md:mx-6">
										<div className="text-center">
											<img
												className="mx-auto w-48"
												src="https://www.pinterest.com/pin/722405596472239475/"
												alt="logo"
											/>
											<h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
												We are The Lotus Team
											</h4>
										</div>
										<form onSubmit={(e)=> userLogin(e)}>
											<p className="mb-4">Please login to your account</p>
											<div className="mb-4">
												<input
													type="email"
													className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
													id="exampleFormControlInput1"
													placeholder="Username"
													value={email}
													onChange={(e)=>setEmail(e.target.value)}
												/>
											</div>
											<div className="mb-4">
												<input
													type="password"
													className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
													id="exampleFormControlInput1"
													placeholder="Password"
													value={password}
													onChange={(e)=>setPassword(e.target.value)}
												/>
											</div>
											<div className="text-center pt-1 mb-12 pb-1">
												<button
													className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-pink-600"
													type="submit"
													data-mdb-ripple="true"
													data-mdb-ripple-color="light"
												>
													Log in
												</button>
												<a className="text-gray-500" href="#!">
													Forgot password?
												</a>
											</div>
										</form>
									</div>
								</div>
								<div
									className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-[#07025c] via-[#360eba] to-[#00d4ff]"
									// style="
									//   background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
									// "
								>
									<div className="text-white px-4 py-6 md:p-12 md:mx-6">
										<h4 className="text-xl font-semibold mb-6">
											We are more than just a company
										</h4>
										<p className="text-sm">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
