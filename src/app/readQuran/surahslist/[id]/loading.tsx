export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      
      <div className="h-6 w-40 bg-gray-700 animate-pulse rounded"></div>

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-24 bg-[#111] rounded-xl animate-pulse"
        ></div>
      ))}
    </div>
  );
}