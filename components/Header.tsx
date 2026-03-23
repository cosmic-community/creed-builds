export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-gray-900">
          Dev Portfolio
        </a>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
          <a href="#projects" className="transition hover:text-gray-900">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-gray-900">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-gray-900">
            Experience
          </a>
          <a href="#testimonials" className="transition hover:text-gray-900">
            Testimonials
          </a>
        </nav>
      </div>
    </header>
  )
}