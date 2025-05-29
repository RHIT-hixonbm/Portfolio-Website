export default function Spacer({ height = "1rem" }: { height?: string }) {
  return (
    <div
      style={{ height, backgroundColor: "transparent" }}
      className={"w-full"}
      aria-hidden="true"
    />
  );
}