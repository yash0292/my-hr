import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { VscServerEnvironment } from "react-icons/vsc";
import { Menu } from "../data/menu";

const Sidebar = () => {
	const [toggleCollapse, setToggleCollapse] = useState(true);
	const [submenuOpen, setSubmenuOpen] = useState(false);

	return (
		<div
			className={`bg-[#1F4690] rounded-2xl  p-5 relative hidden md:block ${
				toggleCollapse ? "w-72" : "w-20"
			} duration-300`}
		>
			<BsArrowLeftShort
				className={`bg-white rounded-full text-purple-900 text-3xl absolute -right-3 top-6 border border-blue-800 cursor-pointer ${
					!toggleCollapse && "rotate-180"
				}`}
				onClick={() => setToggleCollapse(!toggleCollapse)}
			/>
			<div className="inline-flex">
				<VscServerEnvironment
					className={`bg-[#FFE5B4] text-4xl text-black rounded p-1 cursor-pointer block float-left mr-2 duration-500 ${
						toggleCollapse && "rotate-[360deg]"
					}`}
				/>
				<h1
					className={`text-white text-2xl duration-300 ${
						!toggleCollapse && "scale-0"
					}`}
				>
					Administration
				</h1>
			</div>
			<div
				className={`flex items-center rounded-md bg-white bg-opacity-10 mt-6 ${
					!toggleCollapse ? "px-2.5" : "px-4"
				} py-2`}
			>
				<BsSearch
					className={`text-white text-lg block float-left cursor-pointer ${
						toggleCollapse && "mr-2"
					}`}
				/>
				<input
					type={"search"}
					placeholder="Search"
					className={`bg-transparent text-base w-full text-white focus:outline-none ${
						!toggleCollapse && "hidden"
					}`}
				/>
			</div>
			<ul className="pt-2">
				{Menu.map((menu, index) => (
					<>
						<li
							key={index}
							className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#3A5BA0] rounded-md mt-2"
						>
							<span className="text-2xl block float-left">{menu.icon}</span>
							<span
								className={`text-base font-medium flex-1 ${
									!toggleCollapse && "hidden"
								}`}
							>
								{menu.title}
							</span>
							{menu.submenu && toggleCollapse && (
								<BsChevronDown
									className={`${submenuOpen && 'rotate-180'} duration-300`}
									onClick={() => setSubmenuOpen(!submenuOpen)}
								/>
							)}
						</li>
						{menu.submenu && submenuOpen && toggleCollapse && (
							<ul>
								{menu.submenuItems.map((submenuItems, index) => (
									<li
										key={index}
										className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#3A5BA0] rounded-md mt-2 mx-10"
									>
										{submenuItems.title}
									</li>
								))}
							</ul>
						)}
					</>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
