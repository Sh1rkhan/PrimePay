import Banner from "../../common/banner";

const Changelog = () => {
  return (
    <>
      <Banner />
      <div className="mt-28 container w-min p-8 rounded-xl flex  items-center gap-4 bg-gray-200">
        <p className="bg-indigo-950 text-white px-8 py-6 text-4xl rounded-xl font-bold">V.1</p>
        <p className="text-indigo-950 w-max text-2xl font-semibold text-center">The template has been released! 🎉</p>
      </div>
    </>
  );
};

export default Changelog;
