import ListItems from "../../shared-ui/list-items/list-items";
import ContentHeader from "../../shared-ui/pages-components/content-header";
import { CommonQuestionsSection as CommonQuestionsList } from "@/app/lib/definitions";

interface Props {
  commonQuestionsList: CommonQuestionsList[];
}

export default function QuestionsList({ commonQuestionsList }: Props) {
  const renderedCommonQuestionsList = commonQuestionsList.map(
    ({ questionName, questionAnswer }, index) => (
      <li
        key={index}
        className=" bg-slate-500 p-3 sm:p-4 rounded-md w-full max-w-full drop-shadow-md"
      >
        <div className=" mb-4">
          <ContentHeader text={questionName} />
        </div>

        <div className="  bg-slate-600 rounded-lg text-base sm:text-lg">
          <ListItems
            className="flex flex-col p-4 pr-8 gap-2 leading-[2] list-disc"
            listItems={questionAnswer}
          />
        </div>
      </li>
    )
  );

  return (
    <ul
      className=" 
        rounded-lg flex flex-col justify-between gap-y-10 flex-wrap mt-6
      "
    >
      {renderedCommonQuestionsList}
    </ul>
  );
}
