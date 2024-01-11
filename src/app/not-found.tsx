import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex gap-4 flex-col">
      <p className="text-center text-xl">Not found page</p>
      <Link className="text-underline text-center" href="/">
        Home
      </Link>
    </div>
  );
}
