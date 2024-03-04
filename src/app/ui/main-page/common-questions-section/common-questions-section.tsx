import SectionHeader from "../../shared-ui/page-section-title";
import QuestionsList from "./questions-list";

export default function CommonQuestionsSection() {
  return (
    <section className="p-2 md:p-0">
      <div
        className="
        container sm:mx-auto p-0 sm:p-6 md:p-8
        border-[1px] border-slate-400 border-solid
        rounded-xl md:rounded-2xl
      "
      >
        <div className=" p-4">
          <div className=" mb-14 ">
            <SectionHeader text={"الأسئلة الشائعة"} />
          </div>
          <QuestionsList />
        </div>
      </div>
    </section>
  );
}
