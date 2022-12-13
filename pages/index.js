import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
	return (
		<main className="bg-black min-h-screen w-full">
			<div className="flex justify-center">
				<Hero />
			</div>
			<div>
				<About />
			</div>
			
		</main>
	);
}
