

const SectionTitle = ({heading ,subHeading}) => {
  return (
    <div className="text-center md:w-1/3 mx-auto mt-8 mb-12">
      <p className="text-green-600 mb-4 text-lg">--- {subHeading} ---</p>
      <h3 className="text-3xl border-y-2 py-4 font-semibold uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;