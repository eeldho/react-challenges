export default function Color({ hex, name, setBackgroundColor }) {
  return (
    <button
      className="color-square"
      onClick={() => setBackgroundColor(hex)}
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  );
}
