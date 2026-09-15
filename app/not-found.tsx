import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#fafbfe]">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-[#8B5CF6] text-white font-bold rounded-xl hover:bg-[#7C3AED] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
