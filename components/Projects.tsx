import ProjectCard from './ProjectCard';
import { projects } from '../assets/projects.js';

const Projects = () => {
	return (
		<section className='w-11/12 tracking-wider my-10'>
			<h1 className='text-white text-4xl xl:text-6xl md:ml-4 lg:ml-16'>
				Projects
			</h1>
			{projects.map((project) => {
				return (
					<ProjectCard
						key={project.title}
						photo={project.photo}
						title={project.title}
						description={project.description}
						skills={project.skills}
						url={project.url}
					/>
				);
			})}
		</section>
	);
};

export default Projects;
