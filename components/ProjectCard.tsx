import React from 'react';

type ProjectCardProps = {
  photo: string
  title: string
  description: string
};

const ProjectCard = (props: ProjectCardProps) => {
	return (
		<div className='text-white mt-14 md:ml-36 lg:ml-52'>
			<div className='flex flex-col md:flex-row justify-end items-center'>
				<div className='w-[336px] h-[357px] bg-secondary rounded-2xl text-black'>
					{props.photo}
				</div>
				<div className='m-4 md:ml-8 md:w-1/2'>
					<h3 className='text-4xl text-lime hover:text-white hover:underline mb-8'>
						{props.title}
					</h3>
					<p>
						{props.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
