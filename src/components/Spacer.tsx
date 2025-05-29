export default function Spacer({ height = "1rem", backgroundColor = "white" }: { height?: string, backgroundColor?: string }) {
  return (
    <div
      style={{ height, backgroundColor }}
      className={"w-full"}
      aria-hidden="true"
    />
  );
}