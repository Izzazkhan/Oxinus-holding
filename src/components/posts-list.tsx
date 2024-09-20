
import Link from "next/link";



export default async function PostsList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  
    return (
      <ul>
        {/* {response.map((post) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))} */}
      </ul>
    );
  }