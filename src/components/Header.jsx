import ThemeToggle from "./ThemeToggle";


export function Header() {
	return (
		<header className="header">
			<h1>aqui ira el logo</h1>
      <nav>
        <ul className="flex flex-row gap-4 text-xl">
          <li><a href="/" className="navLink">inicio</a> </li>
          <li><a href="/about/" className="navLink">sobre mi</a></li>
          <li><a href="/proyectos" className="navLink">proyectos</a></li>
          <li><a href="/tags" className="navLink">Tags</a></li>
        </ul>
      </nav>
      <div>
        <ThemeToggle />
      </div>
		</header>
	)
}