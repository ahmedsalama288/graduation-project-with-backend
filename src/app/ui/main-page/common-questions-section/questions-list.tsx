import ContentHeader from "../../shared-ui/pages-components/content-header";

interface props {
  commonQuestions: any[];
}

export default function QuestionsList({ commonQuestions }: props) {
  const renderedCommonQuestions = commonQuestions.map(
    ({ id, question, answers }) => {
      const answersArray: string[] = Object.values(answers);
      return (
        <li
          key={id}
          className=" bg-slate-500 p-3 sm:p-4 rounded-md w-full max-w-full drop-shadow-md"
        >
          <div className=" mb-4">
            <ContentHeader text={question} />
          </div>

          <div className="  bg-slate-600 rounded-md text-base sm:text-lg">
            <ul className="flex flex-col p-4 pr-8 gap-2 leading-[2] list-disc">
              {answersArray.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </div>
        </li>
      );
    }
  );

  return (
    <ul
      className=" 
        rounded-lg flex flex-col justify-between gap-y-10 flex-wrap mt-6
      "
    >
      {renderedCommonQuestions}
    </ul>
  );
}
