import { RiRadioButtonLine } from 'react-icons/ri'
const Dashboard = () => {
	return (
		<div className="py-7">
			<h1 className="text-4xl font-semibold text-gray-600">
				Good Morning! User
			</h1>
			<div className="max-w-sm rounded-lg shadow-md overflow-hidden border border-gray-200 my-5">
				<div className="px-6 py-4 bg-[#FFE5B4]">
					<div className="relative w-full">
                        <h3 className="font-semibold">23 June 2023</h3>
                        <p className="text-sm text-gray-400">Thursday | 10am - 7pm</p>
                        <span className='absolute top-0 right-0'><RiRadioButtonLine className='text-green-700' /></span>
                    </div>
                    <h1 className='py-5 text-xl font-semibold'>12 : 37 : 45 PM</h1>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
