import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className="flex item-center justify-center mt-2">
			<MotionLink
				href={"./"}
				className="flex items-center justify-center w-16 h-16 text-2xl font-bold bg-dark text-light rounded-full"
				whileHover={{
					backgroundColor: [
						"#121212",
						"rgba(131,58,180,1)",
						"rgba(253,29,29,1)",
						"rgba(252,176,69,1)",
						"rgba(131,58,180,1)",
						"#121212",
					],

                         transition : {repeat : Infinity , duration : 1.5}
				}}
			>
				Q
			</MotionLink>
		</div>
	);
};

export default Logo;
