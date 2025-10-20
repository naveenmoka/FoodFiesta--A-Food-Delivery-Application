const Shimmer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      {/* This grid layout perfectly mirrors your restaurant list, 
        preventing content from jumping around when the data loads.
      */}
      <div className="flex flex-wrap justify-center gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="m-4 w-72 h-[420px] bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden"
          >
            <div className="animate-pulse flex flex-col h-full">
              <div className="h-48 bg-slate-200"></div>

              <div className="p-4 space-y-4 flex-grow">
                <div className="h-6 w-3/4 bg-slate-200 rounded"></div>

                <div className="h-4 w-full bg-slate-200 rounded"></div>

                <div className="flex justify-between pt-4 mt-auto">
                  <div className="h-4 w-1/4 bg-slate-200 rounded"></div>
                  <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
