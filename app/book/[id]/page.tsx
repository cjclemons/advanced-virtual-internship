import InsideBookClient from "@/app/components/book-components/InsideBookClient";
import { notFound } from "next/navigation";
import { getBookById } from "../../lib/getBookById";

interface PageProps {
  params: { id: string };
}

async function InsideBook({ params }: PageProps) {
  const book = await getBookById(params.id);

  if (!book) return <div>Book not found</div>;

  return <InsideBookClient bookId={params.id} />;
}

export default InsideBook;
