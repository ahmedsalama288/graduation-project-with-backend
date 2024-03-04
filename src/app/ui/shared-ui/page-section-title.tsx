interface props {
  text: string;
}

export default function PageSectionTitle({ text }: props) {
  return (
    <div
      className={` container p-5 mx-auto text-white rounded-lg bg-slate-400 drop-shadow-md`}
    >
      <h2 className=" text-xl">{text}</h2>
    </div>
  );
}
