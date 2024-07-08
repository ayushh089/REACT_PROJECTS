const ProgressBar = ({ value = 0 }) => {
  return (
    <>
      <div className="flex items-center mx-auto mt-2 bg-slate-400 h-6 w-1/3 rounded-3xl relative overflow-hidden">
        <span className="absolute left-0 right-0 text-center ">
          {value.toFixed()}%
        </span>
        <div
          className="h-full bg-green-300 rounded-3xl "
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div
        className={`${
          value == 100 ? "  mx-auto mt-2 h-6 w-1/3 text-center" : "hidden"
        }`}
      >
        Completed !!
      </div>
    </>
  );
};

export default ProgressBar;
