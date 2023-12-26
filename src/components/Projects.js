import p1logo from '../images/lib.PNG'
import p2logo from '../images/Online-Tic-Tac-Toe.PNG'

const Projects = () => {
  return (
    <>
    <section class="body-font">
    <div class="container px-5 py-28 mx-auto ">
        <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">Projects</h1>
                <div class="h-1 w-20 rounded"></div>
            </div>
        </div>
        <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-light_gray p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src={p1logo} alt="content"/>
            <h3 class="tracking-widest text-black text-s title-font font-bold">Digital Library</h3>
            <a href="https://github.com/VinnyBui/Library" target="_blank" rel="noopener noreferrer" class="text-lg text-light_purple font-medium title-font mb-4">Learn More</a>
            <p class="leading-relaxed text-base">Users are able to document their readings and store their data. Used Firebase to store data and login informations.</p>
            </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-light_gray p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src={p2logo} alt="content"/>
            <h3 class="tracking-widest text-black text-s title-font font-bold">Online Tic-Tac-Toe</h3>
            <a href="https://github.com/jasonw-at-csuf/CPSC-349-Project-4" target="_blank" rel="noopener noreferrer" class="text-lg text-light_purple font-medium title-font mb-4">Learn More</a>
            <p class="leading-relaxed text-base">A game of Tic-Tac-Toe where two users are able join to a lobby with each other and compete against one another. Used Pocketbase to store room key and player's data.</p>
            </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-light_gray p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
            <h3 class="tracking-widest text-black text-s title-font font-bold">Pokedex</h3>
            <a href="https://github.com/jasonw-at-csuf/CPSC-349-Project-4" target="_blank" rel="noopener noreferrer" class="text-lg text-light_purple font-medium title-font mb-4">Learn More</a>
            <p class="leading-relaxed text-base">A working pokedex that allows users to search for their favorite pokemon and see their stats. Works with an API.</p>
            </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-light_gray p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
            <h3 class="tracking-widest text-black text-s title-font font-bold">Rock-Paper-Scissors</h3>
            <a href="https://github.com/VinnyBui/Rock-Paper-Scissors" target="_blank" rel="noopener noreferrer" class="text-lg text-light_purple font-medium title-font mb-4">Learn More</a>
            <p class="leading-relaxed text-base">A working Rock-Paper-Scissors game against a bot.</p>
            </div>
        </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Projects