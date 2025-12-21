export function DigitNumber({ value }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {String(value).split("").map((digit, i) => (
        <span
          key={i}
          className="inline-flex items-center justify-center
                     rounded-lg bg-gray-700 font-mono text-5xl md:text-6xl font-bold
                     px-3 py-2
                     text-white"
        >
          {digit}
        </span>
      ))}
      <span className="ml-2 text-emerald-700">+</span>
    </div>
  );
}
