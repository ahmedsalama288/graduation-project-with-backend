interface props {
  text: string;
}

export default function SectionHeader({ text }: props) {
  return (
    <div
      className={` container p-5 mx-auto text-white rounded-lg bg-slate-400`}
    >
      <h4 className=" text-xl">{text}</h4>
    </div>
  );
}
