import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
	return (
		<div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
			<div className="w-48 h-auto flex items-center justify-center relative">
				<CircularText className={"fill-dark animate-spin-slow"} />

				<Link
					href="mailto:ndquang@gmail.com"
					className="flex items-center justify-center absolute left-1/2 -translate-x-1/2  bg-dark text-light  hover:bg-light hover:text-dark  shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold"
				>
					Hire Me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
