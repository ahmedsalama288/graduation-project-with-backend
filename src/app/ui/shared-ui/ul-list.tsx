export default function UlList({ list }: { list: string[] }) {
  return (
    <ul className=" list-disc pr-4">
      {list.map((content, index) => (
        <li key={index}>{content}</li>
      ))}
    </ul>
  );
}
