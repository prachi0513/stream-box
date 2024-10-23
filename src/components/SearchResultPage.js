// import React, { useEffect, useState } from "react";
// import { api_key } from "../utils/constant";
// import { Link, useSearchParams } from "react-router-dom";
// import { VideoCard } from "./VideoCard";

// const SearchResultPage = () => {
//   const [searchParams] = useSearchParams();
//   const searchQuery = searchParams.get("search_query");

//   const [resultVideos, setResultVideo] = useState([]);

//   useEffect(() => {
//     if (searchQuery) {
//       fetchSearchVideo();
//     }
//   }, [searchQuery]);

//   const fetchSearchVideo = async () => {
//     const data = await fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${api_key}`
//     );
//     const json = await data.json();
//     console.log("searched results", json.items);
//     setResultVideo(json.items);
//   };

//   if (!resultVideos) return;

//   return (
//     <div className="text-white mt-20 w-full">
//       {resultVideos.map((element) => {
//         return (
//           <div className="grid grid-cols-2">
//             <div className="bg-green-800 justify-self-end">
//               <img
//                 className="rounded-2xl"
//                 src={element?.snippet?.thumbnails?.high?.url}
//                 alt={element?.snippet?.title}
//               />
//             </div>

//             <div className="bg-red-400">
//               <h1 className="">{element?.snippet?.title}</h1>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SearchResultPage;
