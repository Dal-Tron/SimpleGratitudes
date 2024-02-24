export const Loading = () => (
  <div className="flex space-x-2">
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className="w-2 h-2 bg-current rounded-full animate-loading-bounce"
        style={{ animationDelay: `${index * 0.2}s` }}
      />
    ))}
  </div>
);
