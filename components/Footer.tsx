export function Footer() {
  return (
    <footer className="mt-20 border-t bg-white/60 backdrop-blur">
      <div className="container py-6 text-sm text-gray-600 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p>© {new Date().getFullYear()} Rida Basit</p>
        <p>
          Built with <span className="font-semibold">Next.js</span>, Tailwind & 💜
        </p>
      </div>
    </footer>
  );
}
