import Headline from "@/components/Headline";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4">
      <Headline level={1}>404</Headline>
      <p className="text-light/65">This page could not be found.</p>
    </main>
  );
}
