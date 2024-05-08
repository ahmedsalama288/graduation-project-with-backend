import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

interface Props {
  pdfName: string;
  pdfHref: string;
}

export default function DownloadPdf({ pdfName, pdfHref }: Props) {
  return (
    <li
      className="
        transition-transform duration-300
        translate-y-0 hover:-translate-y-1
        max-w-full
      "
    >
      <div className="rounded-md bg-slate-600 p-5 max-w-full">
        <a
          className="
              flex flex-col justify-center items-center
              p-4 h-[190px] w-[190px] max-w-full
              border border-inherit
              border-solid rounded-full text-base
            "
          href={pdfHref}
          download={`${pdfName}.pdf`}
        >
          <span className="flex flex-col gap-2 justify-center items-center">
            <DocumentArrowDownIcon className=" h-10 w-10" />
            <span className=" font-bold">{pdfName}</span>
          </span>
        </a>
      </div>
    </li>
  );
}
