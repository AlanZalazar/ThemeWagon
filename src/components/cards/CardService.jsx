import React from "react";

export default function CardService({ name, img, title, parrafo, link }) {
  return (
    <div className="border border-white w-[300px] flex flex-col p-10 gap-4 rounded-2xl backdrop-blur-lg">
      <img src={img} alt={name} className="p-10" />
      <h3 className="text-[#5A6980] font-bold">{title}</h3>
      <p className="text-gray-400 text-sm">{parrafo}</p>
      <a href={link} className="text-blue-400 font-semibold gap-3 py-5 flex">
        Learn More{" "}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_213_205)">
            <path
              d="M23.124 9.90711L19.245 6.02911C19.0575 5.84164 18.8032 5.73633 18.538 5.73633C18.2728 5.73633 18.0185 5.84164 17.831 6.02911C17.6435 6.21664 17.5382 6.47095 17.5382 6.73611C17.5382 7.00128 17.6435 7.25559 17.831 7.44311L21.386 11.0001H1C0.734784 11.0001 0.48043 11.1055 0.292893 11.293C0.105357 11.4805 0 11.7349 0 12.0001H0C0 12.2653 0.105357 12.5197 0.292893 12.7072C0.48043 12.8948 0.734784 13.0001 1 13.0001H21.447L17.831 16.6151C17.738 16.708 17.6643 16.8183 17.6139 16.9397C17.5636 17.0611 17.5377 17.1912 17.5377 17.3226C17.5377 17.454 17.5636 17.5842 17.6139 17.7056C17.6643 17.827 17.738 17.9372 17.831 18.0301C18.0185 18.2176 18.2728 18.3229 18.538 18.3229C18.8032 18.3229 19.0575 18.2176 19.245 18.0301L23.125 14.1511C23.6859 13.5873 24.0007 12.8242 24.0006 12.0289C24.0004 11.2336 23.6852 10.4707 23.124 9.90711Z"
              fill="#4E92F9"
            />
          </g>
          <defs>
            <clipPath id="clip0_213_205">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
}
