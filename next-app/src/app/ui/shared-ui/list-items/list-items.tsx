import { cn } from "@/app/lib/utils";

interface Props {
  listItems: string[];
  className?: string;
}

export default function ListItems({ listItems, className }: Props) {
  return (
    <ul className={cn("list-disc pr-4", className)}>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
