import AnimatedSection from "../../shared-ui/pages-components/animated-section";

export default function FooterCopyWrite() {
  return (
    <div className="bg-[#014e79] flex flex-col justify-center p-3">
      <AnimatedSection
        startPosition="translate-y-10 opacity-0"
        endPosition="translate-y-0 opacity-100"
        threshold={0}
      >
        <div
          dir="ltr"
          className=" container mx-auto p-4 bg-[#013e60] rounded-lg"
        >
          <span className="flex flex-col sm:flex-row sm:gap-2 justify-center items-center">
            <span className=" flex justify-center items-center">
              <span className="pt-[4px] h-fit text-xl mr-[2px]">&copy;</span>
              <span>2024</span>
            </span>
            <span className=" text-center">
              delta higher institute for management & accounting information
              systems
            </span>
          </span>
        </div>
      </AnimatedSection>
    </div>
  );
}
