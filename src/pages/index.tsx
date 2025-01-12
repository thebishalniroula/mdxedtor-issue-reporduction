import MDXEditor from "@/MdxEditor";
import { useState } from "react";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  return (
    <div className="bg-white min-h-screen flex items-center gap-3 justify-center flex-col">
      <button
        className="p-4 bg-red-200 text-black"
        onClick={() => setMarkdown("Hello world")}
      >
        Update state
      </button>
      <span className="text-2xl text-black">Markdown: {markdown}</span>
      <MDXEditor
        className="max-w-[800px]  w-full mx-auto"
        placeholder="Write your markdown here..."
        markdown={markdown}
        onChange={setMarkdown}
      />
    </div>
  );
}
