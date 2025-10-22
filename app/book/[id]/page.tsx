import InsideBookClient from "@/app/components/book-components/InsideBookClient";
import { getBookById } from "@/app/lib/getBookById";
import type { Metadata } from "next";

// ✅ Shared type for both the page and metadata generator
interface PageProps {
  params: {
    id: string;
  };
}

// ✅ Generate dynamic metadata (title, description, etc.)
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const book = await getBookById(params.id);

//   if (!book) {
//     return {
//       title: "Book Not Found | Summarist",
//       description: "This book could not be found.",
//     };
//   }

//   return {
//     title: `${book.title} | Summarist`,
//     description: book.subTitle || book.author || "Book summary and details.",
//   };
// }

// ✅ Default page export
export default async function InsideBook({ params }: PageProps) {
  const book = await getBookById(params.id);

  if (!book) return <div>Book not found</div>;

  return <InsideBookClient bookId={params.id} />;


}









export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  
  // 1. Fetch the book data (you need the title/description here!)
  const book = await getBookById(params.id);

  if (!book) {
    // Return a default or empty Metadata object if the book isn't found
    return { title: 'Book Not Found' };
  }
  
  // 2. Return an object that follows the Metadata structure
  // This is what will satisfy the 'Metadata' type requirement.
  return {
    // Core SEO tags
    title: book.title,
    description: `Read details about ${book.title}.`,
    
    // Optional: Social media sharing tags (Open Graph)
    openGraph: {
      title: book.title,
      description: `Details for the book: ${book.title}`,
      url: `/book/${book.id}`, // the page URL
    },
    
    // ... other optional fields like keywords, authors, etc.
  };
}