export const NavBar = (props: {}) => {
  return (
    <div className="bg-blue-300 flex space-x-10 p-10 justify-evenly">
      <a className="text-4xl " href="#home">Vooky</a>
      <form action="/search" method="get">
        <input type="search" id="site-search" name="q" placeholder="Enter your search term..." />
        <button type="submit">Search</button>
      </form>
      <a className="text-4xl " href="#home">Home</a>
      <a className="text-4xl " href="#home">Home</a>
      <a className="text-4xl " href="#home">Home</a>
    </div>
  )
}
