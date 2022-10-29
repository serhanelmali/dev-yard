import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-1 px-3 flex justify-between items-center rounded-md h-12 text-base backdrop-blur-md bg-white/30 border-neutral-500/10 border light:bg-lime-900 grey-900 uppercase">
      <Link href="/" className="opacity-100 hover:opacity-60">
        Dev~Yard
      </Link>
      <div className="flex gap-6">
        {["wiki", "about", "contact", "search"].map((page, index) => (
          <Link
            key={index}
            className="mr-2 opacity-100 hover:opacity-60"
            href={`/${page}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
