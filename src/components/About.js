import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const About = () => {
    const [text] = useTypewriter({
        words: ["Hello, my name is "],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

  return (
    <>
    <section class="text-gray-600 body-font my-20">
    <div class="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-5xl mb-4 font-medium">
            <span>{text}</span>
            <Cursor cursorStyle="<"/>
            <br class="hidden lg:inline-block"/>Vinh Bui
        </h1>
        <p class="mb-8 leading-relaxed text-lg">
            I'm in my final year at Cal State Fullerton and is currently pursuing a degree in Computer Science. Within Computer Science, I want to pursue a career in Software Engineer and/or Front End Web Development.
        </p>
        
        <div class="flex justify-center">
            <a href="https://github.com/VinnyBui?tab=repositories" class="inline-flex text-white bg-purple border-0 py-2 px-6 focus:outline-none hover:bg-light_purple rounded text-lg" target="_blank" rel="noopener noreferrer"><FaGithubSquare size='2rem'/></a>
            <a href="https://www.linkedin.com/in/vinh-bui-46b561220/" class="ml-4 inline-flex text-black bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-light_gray rounded text-lg" target="_blank" rel="noopener noreferrer"><FaLinkedin size='2rem'/></a>
        </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
        </div>
    </div>
    </section>
    </>
  )
}

export default About