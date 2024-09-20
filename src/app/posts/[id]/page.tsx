
export default async function Page({ params }: { params: { id: string } }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await response.json()

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{data.title}</h1>
      <p className="max-w-[700px] mx-auto">{data.body}</p>
    </main>
  );
}