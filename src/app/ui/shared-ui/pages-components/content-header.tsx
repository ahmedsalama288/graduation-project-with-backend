interface props {
  text: string;
  className?: string;
}

export default function ContentHeader({ text, className }: props) {
  return (
    <div className=" bg-slate-600 w-fit rounded-md p-[10px] sm:p-4">
      <h3 className={`text-base sm:text-lg font-semibold ${className} `}>{text}</h3>
    </div>
  );
}
