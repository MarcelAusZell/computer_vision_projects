export default function NavBar() {
  return <>
    <nav className="navbar lg:hidden sticky top-0 w-full bg-base-100/40 backdrop-blur-sm border-b border-white/10">
      <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
        <svg viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-5">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <span className="ml-2 font-bold">Computer Vision Classics</span>
    </nav>
  </>
}