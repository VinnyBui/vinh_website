const Header = () => {
  return (
    <>
    <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="!#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            <span class="ml-3 text-2xl text-purple">Vinh Bui</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href="!#" class="header-child">Home</a>
            <a href="!#" class="header-child">Projects</a>
            <a href="!#" class="header-child">Skills</a>
            <a href="!#" class="header-child">Contact</a>
        </nav>
        <button class="inline-flex items-center bg-purple text-white border-0 py-1 px-3 focus:outline-none hover:bg-light_purple rounded text-xl mt-4 md:mt-0">Resume
        </button>
        </div>
    </header>
    </>
  )
}

export default Header