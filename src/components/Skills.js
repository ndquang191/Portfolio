import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute "
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}
		>
			{name}
		</motion.div>
	);
};
const Skills = () => {
	return (
		<>
			<h2 className="font-bold text-8xl mt-64 w-full  text-center">Skills</h2>

			<div className="rounded-full w-full h-screen relative flex items-center justify-center bg-circularLight">
				<Skill name={"Web"} x={"0"} y={"0"} />
				<Skill name={"CSS"} x={"-8vw"} y={"-10vw"} />
				<Skill name={"HTML"} x={"-20vw"} y={"-2vw"} />
				<Skill name={"ReactJS"} x={"0vw"} y={"12vw"} />
				<Skill name={"MySQL"} x={"-20vw"} y={"-15vw"} />
				<Skill name={"Tailwind"} x={"18vw"} y={"-12vw"} />
				<Skill name={"Bootstrap"} x={"28vw"} y={"-18vw"} />
			</div>
		</>
	);
};

export default Skills;
