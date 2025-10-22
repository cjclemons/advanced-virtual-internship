import InsideBookClient from "@/app/components/book-components/InsideBookClient";
import { getBookById } from "@/app/lib/getBookById"; // adjust path if needed


export default async function InsideBook({
  params,
}: {
  params: { id: string };
}) {
  const book = await getBookById(params.id);

  if (!book) return <div>Book not found</div>;

  return <InsideBookClient bookId={params.id} />;
}