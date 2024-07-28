import StudentNameInput from "./form-inputs/student-name-input";
import StudentCodeNumberInput from "./form-inputs/student-code-number-input";
import StudentComplaintMessage from "./form-inputs/student-complaint-message";
import Button from "./form-inputs/button";

export default function StudentComplaintsForm() {
  return (
    <form className=" flex flex-col gap-5">
      <StudentNameInput />
      <StudentCodeNumberInput />
      <StudentComplaintMessage />
      <Button />
    </form>
  );
}
