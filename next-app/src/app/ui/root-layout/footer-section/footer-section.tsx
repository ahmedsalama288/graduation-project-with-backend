import FooterConnectUs from "./footer-connect-us";
import FooterCopyWrite from "./footer-copy-write";
import FooterInstituteWord from "./footer-institute-word";

export default function FooterSection() {
  return (
    <footer className=" bg-light-blue overflow-hidden mt-8">
      <div
        className="
          container m-auto 
          flex flex-col gap-7
          lg:gap-0 lg:flex-row
          justify-around mt-7 
          px-6 sm:px-8 py-9
        "
      >
        <FooterConnectUs />
        <FooterInstituteWord />
      </div>
      <FooterCopyWrite />
    </footer>
  );
}
