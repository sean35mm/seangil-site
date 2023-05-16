import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
	photo: string;
	title: string;
	description: string;
	skills: string[];
	url: string;
};

const ProjectCard = (props: ProjectCardProps) => {
	return (
		<div className='text-white mt-14 md:ml-36 lg:ml-52'>
			<div className='flex flex-col md:flex-row justify-end items-center'>
				<div className='w-[336px] h-[357px] bg-secondary rounded-2xl text-black'>
					<Image
						src={`/public/images/ca-logo-black.png`}
						layout='fill'
						alt='photo'
					/>
				</div>
				<div className='m-4 md:ml-8 md:w-1/2'>
					<Link href={props.url}>
						<h3 className='text-4xl text-lime hover:text-white hover:underline mb-8'>
							{props.title}
						</h3>
					</Link>
					<p className='my-2'>{props.description}</p>
					<h4>Relevant Skills:</h4>
					{props.skills.map((skill) => {
						return (
							<ul key={props.title}>
								<li>- {skill}</li>
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
