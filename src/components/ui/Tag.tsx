import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-muted rounded border px-2 py-0.5 font-mono text-xs">{children}</span>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="flex">
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
