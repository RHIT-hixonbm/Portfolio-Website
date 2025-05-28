export default function Spacer({ height = "1rem" }: { height?: string }) {
  return (
    <div
      style={{ height }}
      className="w-full"
      aria-hidden="true"
    />
  );
}