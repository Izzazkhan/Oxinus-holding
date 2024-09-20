
import Link from "next/link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default async function PostPage() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=3`)
    const data = await response.json()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {data.map((post: any) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data.map((post: any) => (
            <li key={post.id} className="mb-3">
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>

                </ListItemAvatar>
                </ListItem>
                <Divider variant="inset" component="li" />
            </li>
            ))}
       </List>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
