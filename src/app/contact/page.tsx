// app/contact/page.tsx
"use client";
import { Interest } from "../../components/ui/interest";
import { Navbar} from "../../components/ui/navbar";

export default function HomePage() {
  return (
    <div className="bg-slate-950">
      <Navbar/>
      {/* <a href="/">
        <button className="mt-12 outline outline-1 outline-white rounded-2xl h-10 w-10 text-white absolute top-5 left-5 hover:text-blue-500 text-4xl">⇦</button>
      </a> */}
      <Interest />
    </div>
  );
}
