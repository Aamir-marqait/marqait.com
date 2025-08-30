import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020103] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/blog" 
          className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}