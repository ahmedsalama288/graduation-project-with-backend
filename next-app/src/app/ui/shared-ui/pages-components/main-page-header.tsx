interface props {
  text: string;
}

export default function MainPageHeader({ text }: props) {
  return (
    <div className=" bg-slate-400 drop-shadow-md">
      <div className={` container p-5 mx-auto text-white`}>
        <h1 className=" text-xl">{text}</h1>
      </div>
    </div>
  );
}
