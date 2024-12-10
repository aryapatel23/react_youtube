// import './Mainbar.css'
// import React,{useEffect,useState} from 'react'

// function Mainbar() {

//     const [video , setVideo] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");

//     const API_KEY = "AIzaSyCmTcbBHvE3bLirycwGrIJt85p1XjvuVo8";

//     useEffect(() => {
//         // Fetch data from the API
//         fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=Coke%20Studio&key=${API_KEY}' )
//             .then((response) => response.json())
//             .then((data) => setVideo(data))
//             .catch((error) => console.error('Error fetching deta: ' ,error));
//         },[]);

  
//     return (

//         <>
//             <div className="rightside">
//                 <div className="rightfirst">
//                     <div className="search"><input type="text" title='Search' value={searchQuery}  placeholder='Search'/><div className="searchimg"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" /></div></div>
//                     <div className="mic"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" /></div>
//                     <div className="rightbar">
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" className="create" />
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" className="create" />
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" className="create" />
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" className="create" />
//                     </div>
//                 </div>
//                 <hr className="firsthr" />
//                 <div className="allbar">
//                     <div className="all">All</div>
//                     <div className="flex1">
//                         <div className="flex1ele">Cook Studio</div>
//                         <div className="flex1ele">UX</div>
//                         <div className="flex1ele">Case Study</div>
//                         <div className="flex1ele">Music</div>
//                         <div className="flex1ele">Bnagla Lofi</div>
//                         <div className="flex1ele">Tour</div>
//                         <div className="flex1ele">Saintmartin</div>
//                         <div className="flex1ele">Tech</div>
//                         <div className="flex1ele">iPhone 13</div>
//                         <div className="flex1ele">User Interface Design</div>
//                         <div className="flex1ele">Com</div>
//                     </div>
//                 </div>
//                 <hr className="secondhr" />
//                 <div className="row1">
                    
//                     {video.map((i) => (
//                             <div className="poster" key={i}>
//                                 <img src={i.img} alt="" className='firstposter' />
//                                 <div className="posterflex"><img src={i.smallimg} alt="" /> <div className='postertitle'>{i.title}</div></div>
//                                 <div className="postersmalltxt">{i.subtitle1} <img src={i.subtitleimg} alt="" />{i.subtitle2}</div>
//                             </div>
//                     ))}

//                 </div>
//             </div>

//         </>
//     )
// }

// export default Mainbar



// import './Mainbar.css';
// import React, { useEffect, useState } from 'react';

// function Mainbar() {
//     const [video, setVideo] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredVideos, setFilteredVideos] = useState([]);
//     const API_KEY = "AIzaSyDfWCefxvLF9AiVsnoJ-z02ZnzxDY27QJc"; // Replace with your API key
//     const CHANNEL_ID = "UCBR8-60-B28hp2BmDPdntcQ"; // Example: Official YouTube Channel ID (replace with yours)

//     useEffect(() => {
//         // Fetch data from YouTube API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`
//                 );
//                 const data = await response.json();
//                 const videos = data.items.map(item => ({
//                     img: item.snippet.thumbnails.high.url,
//                     smallimg: item.snippet.thumbnails.default.url,
//                     title: item.snippet.title,
//                     subtitle1: item.snippet.channelTitle,
//                     subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                 }));
//                 setVideo(videos);
//                 setFilteredVideos(videos); // Initialize filtered videos
//             } catch (error) {
//                 console.error("Error fetching data: ", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleSearchSubmit = (e) => {
//         e.preventDefault(); // Prevent page reload
//         const results = video.filter(v =>
//             v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             v.subtitle1.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredVideos(results);
//     };

//     return (
//         <>
//             <div className="rightside">
//                 <div className="rightfirst">
//                     <form className="search" onSubmit={handleSearchSubmit}>
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="search-input"
//                         />
//                         <button type="submit" className="search-button">
//                             <img
//                                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//                                 alt="Search"
//                             />
//                         </button>
//                     </form>
//                     <div className="mic">
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
//                             alt="Mic"
//                         />
//                     </div>
//                     <div className="rightbar">
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
//                             alt="Create"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
//                             alt="More"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
//                             alt="Bell"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
//                             alt="User"
//                             className="create"
//                         />
//                     </div>
//                 </div>
//                 <hr className="firsthr" />
//                 <div className="allbar">
//                     <div className="all">All</div>
//                     <div className="flex1">
//                         <div className="flex1ele">Cook Studio</div>
//                         <div className="flex1ele">UX</div>
//                         <div className="flex1ele">Case Study</div>
//                         <div className="flex1ele">Music</div>
//                         <div className="flex1ele">Bangla Lofi</div>
//                         <div className="flex1ele">Tour</div>
//                         <div className="flex1ele">Saintmartin</div>
//                         <div className="flex1ele">Tech</div>
//                         <div className="flex1ele">iPhone 13</div>
//                         <div className="flex1ele">User Interface Design</div>
//                         <div className="flex1ele">Com</div>
//                     </div>
//                 </div>
//                 <hr className="secondhr" />
//                 <div className="row1">
//                     {filteredVideos.map((i, index) => (
//                         <div className="poster" key={index}>
//                             <img src={i.img} alt="Poster" className="firstposter" />
//                             <div className="posterflex">
//                                 <img src={i.smallimg} alt="Small Thumbnail" />
//                                 <div className="postertitle">{i.title}</div>
//                             </div>
//                             <div className="postersmalltxt">
//                                 {i.subtitle1} {i.subtitle2}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Mainbar;

// import './Mainbar.css';
// import React, { useEffect, useState } from 'react';

// function Mainbar() {
//     const [video, setVideo] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredVideos, setFilteredVideos] = useState([]);
//     const API_KEY = "AIzaSyDfWCefxvLF9AiVsnoJ-z02ZnzxDY27QJc"; // Replace with your API key
//     const CHANNEL_ID = "UCBR8-60-B28hp2BmDPdntcQ"; // Example: Official YouTube Channel ID (replace with yours)

//     useEffect(() => {
//         // Fetch data from YouTube API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`
//                 );
//                 const data = await response.json();
//                 const videos = data.items.map((item) => ({
//                     img: item.snippet.thumbnails.high.url,
//                     smallimg: item.snippet.thumbnails.default.url,
//                     title: item.snippet.title,
//                     subtitle1: item.snippet.channelTitle,
//                     subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                 }));
//                 setVideo(videos);
//                 setFilteredVideos(videos); // Initialize filtered videos
//             } catch (error) {
//                 console.error("Error fetching data: ", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleSearchSubmit = (e) => {
//         e.preventDefault(); // Prevent page reload
//         const results = video.filter((v) =>
//             v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             v.subtitle1.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredVideos(results);
//     };

//     return (
//         <>
//             <div className="rightside">
//                 <div className="rightfirst">
//                     <form className="search" onSubmit={handleSearchSubmit}>
//                         <input
//                             type="text"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             placeholder="Search"
//                             className="search-input"
//                         />
//                         <button type="submit" className="search-button">
//                             <img
//                                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//                                 alt="Search"
//                             />
//                         </button>
//                     </form>
//                     <div className="mic">
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
//                             alt="Mic"
//                         />
//                     </div>
//                     <div className="rightbar">
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
//                             alt="Create"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
//                             alt="More"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
//                             alt="Bell"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
//                             alt="User"
//                             className="create"
//                         />
//                     </div>
//                 </div>
//                 <hr className="firsthr" />
//                 <div className="allbar">
//                     <div className="all">All</div>
//                     <div className="flex1">
//                         <div className="flex1ele">Cook Studio</div>
//                         <div className="flex1ele">UX</div>
//                         <div className="flex1ele">Case Study</div>
//                         <div className="flex1ele">Music</div>
//                         <div className="flex1ele">Bangla Lofi</div>
//                         <div className="flex1ele">Tour</div>
//                         <div className="flex1ele">Saintmartin</div>
//                         <div className="flex1ele">Tech</div>
//                         <div className="flex1ele">iPhone 13</div>
//                         <div className="flex1ele">User Interface Design</div>
//                         <div className="flex1ele">Com</div>
//                     </div>
//                 </div>
//                 <hr className="secondhr" />
//                 <div className="row1">
//                     {filteredVideos.map((i, index) => (
//                         <div className="poster" key={index}>
//                             <img src={i.img} alt="Poster" className="firstposter" />
//                             <div className="posterflex">
//                                 <img src={i.smallimg} alt="Small Thumbnail" />
//                                 <div className="postertitle">{i.title}</div>
//                             </div>
//                             <div className="postersmalltxt">
//                                 {i.subtitle1} {i.subtitle2}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Mainbar;


// import './Mainbar.css';
// import React, { useEffect, useState } from 'react';

// function Mainbar() {
//     const [video, setVideo] = useState([]);  // All videos fetched from the API
//     const [searchTerm, setSearchTerm] = useState('');  // Search input term
//     const [filteredVideos, setFilteredVideos] = useState([]);  // Filtered videos based on search term
//     const API_KEY = "AIzaSyDfWCefxvLF9AiVsnoJ-z02ZnzxDY27QJc"; // Replace with your API key
//     const CHANNEL_ID = "UCBR8-60-B28hp2BmDPdntcQ"; // Example: Official YouTube Channel ID (replace with yours)

//     useEffect(() => {
//         // Fetch data from YouTube API on initial load (no search term)
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`
//                 );
//                 const data = await response.json();
//                 const videos = data.items.map((item) => ({
//                     img: item.snippet.thumbnails.high.url,
//                     smallimg: item.snippet.thumbnails.default.url,
//                     title: item.snippet.title,
//                     subtitle1: item.snippet.channelTitle,
//                     subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                 }));
//                 setVideo(videos);
//                 setFilteredVideos(videos); // Initialize filtered videos with all videos
//             } catch (error) {
//                 console.error("Error fetching data: ", error);
//             }
//         };

//         fetchData();
//     }, []);

//     // Handle search input change
//     const handleSearchChange = async (e) => {
//         const term = e.target.value;
//         setSearchTerm(term);

//         if (term.trim() === '') {
//             // If the search term is empty, reset to the full video list
//             setFilteredVideos(video);
//         } else {
//             // Otherwise, query the YouTube API with the search term
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&maxResults=10&type=video&key=${API_KEY}`
//                 );
//                 const data = await response.json();
//                 const videos = data.items.map((item) => ({
//                     img: item.snippet.thumbnails.high.url,
//                     smallimg: item.snippet.thumbnails.default.url,
//                     title: item.snippet.title,
//                     subtitle1: item.snippet.channelTitle,
//                     subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                 }));
//                 setFilteredVideos(videos);
//             } catch (error) {
//                 console.error("Error fetching search results: ", error);
//             }
//         }
//     };

//     return (
//         <div className="rightside">
//             <div className="rightfirst">
//                 <form className="search" onSubmit={(e) => e.preventDefault()}>
//                     <input
//                         type="text"
//                         value={searchTerm}
//                         onChange={handleSearchChange}
//                         placeholder="Search"
//                         className="search-input"
//                     />
//                     <button type="submit" className="search-button">
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//                             alt="Search"
//                         />
//                     </button>
//                 </form>
//                 <div className="mic">
//                     <img
//                         src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
//                         alt="Mic"
//                     />
//                 </div>
//                 <div className="rightbar">
//                     <img
//                         src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
//                         alt="Create"
//                         className="create"
//                     />
//                     <img
//                         src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
//                         alt="More"
//                         className="create"
//                     />
//                     <img
//                         src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
//                         alt="Bell"
//                         className="create"
//                     />
//                     <img
//                         src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
//                         alt="User"
//                         className="create"
//                     />
//                 </div>
//             </div>
//             <hr className="firsthr" />
//             <div className="allbar">
//                 <div className="all">All</div>
//                 <div className="flex1">
//                     <div className="flex1ele">Cook Studio</div>
//                     <div className="flex1ele">UX</div>
//                     <div className="flex1ele">Case Study</div>
//                     <div className="flex1ele">Music</div>
//                     <div className="flex1ele">Bangla Lofi</div>
//                     <div className="flex1ele">Tour</div>
//                     <div className="flex1ele">Saintmartin</div>
//                     <div className="flex1ele">Tech</div>
//                     <div className="flex1ele">iPhone 13</div>
//                     <div className="flex1ele">User Interface Design</div>
//                     <div className="flex1ele">Com</div>
//                 </div>
//             </div>
//             <hr className="secondhr" />
//             <div className="row1">
//                 {filteredVideos.map((i, index) => (
//                     <div className="poster" key={index}>
//                         <img src={i.img} alt="Poster" className="firstposter" />
//                         <div className="posterflex">
//                             <img src={i.smallimg} alt="Small Thumbnail" />
//                             <div className="postertitle">{i.title}</div>
//                         </div>
//                         <div className="postersmalltxt">
//                             {i.subtitle1} {i.subtitle2}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Mainbar;





import './Mainbar.css';
import React, { useEffect, useState, useRef } from 'react';

function Mainbar() {
    const [video, setVideo] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null); // for pagination
    const [cache, setCache] = useState({});
    const API_KEY = "AIzaSyDfWCefxvLF9AiVsnoJ-z02ZnzxDY27QJc"; // Replace with your API key
    const CHANNEL_ID = "UCBR8-60-B28hp2BmDPdntcQ"; // Example: Official YouTube Channel ID (replace with yours)
    
    const debounceTimeoutRef = useRef(null);

    useEffect(() => {
        // Fetch data from YouTube API on initial load
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${API_KEY}`
                );
                const data = await response.json();
                const videos = data.items.map((item) => ({
                    img: item.snippet.thumbnails.high.url,
                    smallimg: item.snippet.thumbnails.default.url,
                    title: item.snippet.title,
                    subtitle1: item.snippet.channelTitle,
                    subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
                }));
                setVideo(videos);
                setFilteredVideos(videos);
                if (data.nextPageToken) {
                    setNextPageToken(data.nextPageToken); // Save next page token
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.trim() === '') {
            setFilteredVideos(video);
            return;
        }

        if (cache[term]) {
            setFilteredVideos(cache[term]);
            return;
        }

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&maxResults=50&type=video&key=${API_KEY}`
                );
                const data = await response.json();
                const videos = data.items.map((item) => ({
                    img: item.snippet.thumbnails.high.url,
                    smallimg: item.snippet.thumbnails.default.url,
                    title: item.snippet.title,
                    subtitle1: item.snippet.channelTitle,
                    subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
                }));

                setCache((prevCache) => ({ ...prevCache, [term]: videos }));
                setFilteredVideos(videos);
                if (data.nextPageToken) {
                    setNextPageToken(data.nextPageToken); // Save next page token
                }
            } catch (error) {
                console.error("Error fetching search results: ", error);
            }
        }, 300); // Delay of 300ms after the user stops typing
    };

    // Function to load more videos by fetching the next page of results
    const loadMoreVideos = async () => {
        if (!nextPageToken) return; // If no next page token, stop loading more

        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&pageToken=${nextPageToken}&order=date&type=video&key=${API_KEY}`
            );
            const data = await response.json();
            const videos = data.items.map((item) => ({
                img: item.snippet.thumbnails.high.url,
                smallimg: item.snippet.thumbnails.default.url,
                title: item.snippet.title,
                subtitle1: item.snippet.channelTitle,
                subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
            }));

            setVideo((prevVideos) => [...prevVideos, ...videos]);
            setFilteredVideos((prevVideos) => [...prevVideos, ...videos]);

            if (data.nextPageToken) {
                setNextPageToken(data.nextPageToken); // Update next page token
            }
        } catch (error) {
            console.error("Error loading more videos: ", error);
        }
    };

    return (
        <div className="rightside">
            <div className="rightfirst">
                <form className="search" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search"
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt="Search"
                        />
                    </button>
                </form>
                <div className="mic">
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                        alt="Mic"
                    />
                </div>
            </div>
            <hr className="firsthr" />
            <div className="row1">
                {filteredVideos.map((i, index) => (
                    <div className="poster" key={index}>
                        <img src={i.img} alt="Poster" className="firstposter" />
                        <div className="posterflex">
                            <img src={i.smallimg} alt="Small Thumbnail" />
                            <div className="postertitle">{i.title}</div>
                        </div>
                        <div className="postersmalltxt">
                            {i.subtitle1} {i.subtitle2}
                        </div>
                    </div>
                ))}
            </div>
            {nextPageToken && (
                <button className="load-more" onClick={loadMoreVideos}>
                    Load More
                </button>
            )}
        </div>
    );
}

export default Mainbar;




// import './Mainbar.css';
// import React, { useEffect, useState } from 'react';

// function Mainbar() {
//     const [video, setVideo] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredVideos, setFilteredVideos] = useState([]);
//     const API_KEY = "YAIzaSyDfWCefxvLF9AiVsnoJ-z02ZnzxDY27QJc"; // Replace with your API key
//     const CHANNEL_ID = "UCBR8-60-B28hp2BmDPdntcQ"; // Example: Official YouTube Channel ID (replace with yours)

//     useEffect(() => {
//         // Fetch data from YouTube API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`
//                 );
//                 const data = await response.json();
//                 const videos = data.items.map((item) => ({
//                     img: item.snippet.thumbnails.high.url,
//                     smallimg: item.snippet.thumbnails.default.url,
//                     title: item.snippet.title,
//                     subtitle1: item.snippet.channelTitle,
//                     subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                 }));
//                 setVideo(videos);
//                 setFilteredVideos(videos); // Initialize filtered videos
//             } catch (error) {
//                 console.error("Error fetching data: ", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleSearch = () => {
//         const results = video.filter((v) =>
//             v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             v.subtitle1.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredVideos(results);
//     };

//     return (
//         <>
//             <div className="rightside">
//                 <div className="rightfirst">
//                     <div className="search">
//                         <input
//                             type="text"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             placeholder="Search"
//                             className="search-input"
//                         />
//                         <button type="button" className="search-button" onClick={handleSearch}>
//                             <img
//                                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//                                 alt="Search"
//                             />
//                         </button>
//                     </div>
//                     <div className="mic">
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
//                             alt="Mic"
//                         />
//                     </div>
//                     <div className="rightbar">
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
//                             alt="Create"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
//                             alt="More"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
//                             alt="Bell"
//                             className="create"
//                         />
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
//                             alt="User"
//                             className="create"
//                         />
//                     </div>
//                 </div>
//                 <hr className="firsthr" />
//                 <div className="allbar">
//                     <div className="all">All</div>
//                     <div className="flex1">
//                         <div className="flex1ele">Cook Studio</div>
//                         <div className="flex1ele">UX</div>
//                         <div className="flex1ele">Case Study</div>
//                         <div className="flex1ele">Music</div>
//                         <div className="flex1ele">Bangla Lofi</div>
//                         <div className="flex1ele">Tour</div>
//                         <div className="flex1ele">Saintmartin</div>
//                         <div className="flex1ele">Tech</div>
//                         <div className="flex1ele">iPhone 13</div>
//                         <div className="flex1ele">User Interface Design</div>
//                         <div className="flex1ele">Com</div>
//                     </div>
//                 </div>
//                 <hr className="secondhr" />
//                 <div className="row1">
//                     {filteredVideos.map((i, index) => (
//                         <div className="poster" key={index}>
//                             <img src={i.img} alt="Poster" className="firstposter" />
//                             <div className="posterflex">
//                                 <img src={i.smallimg} alt="Small Thumbnail" />
//                                 <div className="postertitle">{i.title}</div>
//                             </div>
//                             <div className="postersmalltxt">
//                                 {i.subtitle1} {i.subtitle2}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Mainbar;
