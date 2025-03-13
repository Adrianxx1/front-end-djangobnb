const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full justify-center hover:bg-gray-100 cursor-pointer">
            <p className="text-sm font-semibold">Where?</p>
            <p className="text-sm">Wanted Location</p>
          </div>
          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full justify-center hover:bg-gray-100 cursor-pointer">
            <p
              className="
          text-sm font-semibold"
            >
              Check In
            </p>
            <p className="text-sm">Add Dates</p>
          </div>
          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full justify-center hover:bg-gray-100 cursor-pointer">
            <p
              className="
          text-sm font-semibold"
            >
              Check Out
            </p>
            <p className="text-sm">Add Dates</p>
          </div>
          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full justify-center hover:bg-gray-100  cursor-pointer">
            <p
              className="
          text-sm font-semibold"
            >
              Who?
            </p>
            <p className="text-sm">Add Guest</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="lg:p-4 p-2 bg-airbnb  rounded-full text-white hover:bg-airbnbDark transition cursor-pointer">
          <svg
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentColor",
              strokeWidth: 4,
              overflow: "visible",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
