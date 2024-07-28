import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";

export default function StudentComplaintMessage() {
  return (
    <ContentWrapper className=" gap-2 text-lg sm:text-xl">
      <label htmlFor="student name" className=" pr-1">
        شكوة الطالب
      </label>
      <textarea
        className="
              transition-all ease-in-out duration-100
              w-full h-56 rounded p-1 sm:p-2 text-slate-700
              outline-2 outline-transparent bg-slate-50
              focus-visible:outline focus-visible:outline-slate-700
            "
        name="studentComplaint"
      />
    </ContentWrapper>
  );
}
