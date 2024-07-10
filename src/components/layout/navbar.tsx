const navbar = [
  {
    to: "/",
    text: "Home",
  },
];

export function Navbar() {
  return (
    <div className="w-full flex items-center justify-center border-b py-6">
      <nav className="max-w-7xl flex w-full items-center justify-between font-semibold px-4">
        <h1 className="md:text-2xl text-base hover:text-muted-foreground">
          Kerjoo Blog
        </h1>
        <ul className="flex items-center justify-center gap-6 md:text-base text-sm">
          {navbar.map((nav) => {
            return (
              <li key={nav.text} className="hover:text-muted-foreground">
                <span>{nav.text}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
