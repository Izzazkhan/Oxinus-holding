
import Link from "next/link";

export default async function CommentPage() {
  type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body:string
  }

    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=3`)
    const data = await response.json()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {data.map((comment: CommentType) => (
          <li key={comment.id} className="mb-3">
            <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
          </li>
        ))}
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
