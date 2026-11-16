export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
      <p className="text-muted">This page could not be found.</p>
      <a href="/" className="link-underline text-sm font-semibold">
        Back home
      </a>
    </main>
  );
}
