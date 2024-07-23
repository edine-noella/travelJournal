/* eslint-disable react/prop-types */

function Card(props) {
  return (
    <div className="flex gap-10 mt-14 ">
      <img
        src={props.item.image}
        alt={props.item.country}
        className="w-2/12  rounded-md"
      />

      <div className="w-6/12">
        <div className="flex gap-8 mt-5">
        <div className="flex gap-2">
          <svg
            className="w-6 h-6 text-[#F55A5A]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
              clipRule="evenodd"
            />
          </svg>
          <p className=" text-gray-700"> {props.item.country}</p>
          </div>

          <a href="#" className="text-gray-500 underline decoration-solid decoration-gray-500 ">View on Google Maps</a>
        </div>

        <h1 className='mt-8 text-4xl font-bold ml-5 '>{props.item.place}</h1>
        <h1 className="text-md font-semibold ml-5 mt-10">{props.item.startDate} - {props.item.endDate}</h1>
        <p className="mt-8 ml-5">{props.item.description}</p>
      </div>
  
    </div>
  );
}

export default Card;
