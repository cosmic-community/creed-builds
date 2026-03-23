const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© {year} Developer Portfolio Showcase</p>
        <p>Built with Cosmic</p>
      </div>
    </footer>
  )
}