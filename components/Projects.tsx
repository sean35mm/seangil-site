import ProjectCard from './ProjectCard';
import { projects } from '../assets/projects.js';

const Projects = () => {
	return (
		<section className='w-11/12'>
			<h1 className='text-white text-4xl xl:text-7xl md:ml-4 lg:ml-16'>
				Projects
			</h1>
			{projects.map((project) => {
				return (
					<ProjectCard
						key={project.title}
						photo={project.photo}
						title={project.title}
						description={project.description}
					/>
				);
			})}

			
		</section>
	);
};

export default Projects;
