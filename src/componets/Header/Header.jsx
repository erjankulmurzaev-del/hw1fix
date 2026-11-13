import './header.css';

export default function Header() {
  return (
    <header className="container main_header">
      <a className="logo" href="#home" aria-label="Rivo home">Rivo</a>

      <nav aria-label="Main navigation">
        <ul className="navigate">
          <li>Home</li>
          <li>Shop</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </nav>

      <button className="login">Login</button>
    </header>
  )
}
