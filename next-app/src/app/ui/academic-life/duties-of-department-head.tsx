import { dutiesOfDepartmentHead } from "@/app/lib/constants";

export default function DutiesOfDepartmentHead() {
  return (
    <ul className=" list-disc pr-4">
      {dutiesOfDepartmentHead.map((duty, index) => (
        <li key={index}>{duty}</li>
      ))}
    </ul>
  );
}
