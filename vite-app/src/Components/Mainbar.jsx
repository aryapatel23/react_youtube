// import React,  { useEffect,useState } from 'react';
// import './Playcontrols.css'



// function Playcontrols(){

//     // const grid=[
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: '1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true", title:'Infinix Note 12:             AMOLED    HelloG88 Soc!' , subtitle1: 'ATC Android ToTo C..',subtitle2: ' 4.2M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true", title:'My first UX Design case study - This got me my first job.' , subtitle1: 'Saptrashi prakash',subtitle2: ' 4.8k views . 1 year ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'My mix' , subtitle1: 'Lopamudra Mitra  ',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true", title:'UX Design-What is it?(From AJ&Smart)' , subtitle1: 'AJ&Smar',subtitle2: ' 150kM views . 3 years ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Mix-Mombati|Mohon Sharif | Dhakaiya Dose|Mahib Ahsan' , subtitle1: 'Mohon Sharif, Odd Signature,Shayan',subtitle2: ' ' , subtitleimg:""},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true", title:'48 Visa Free' , subtitle1: 'Nadir On the Go',subtitle2: ' 1.7M views . 1 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true", title:'14 Advanced Tip To Design FASTER in Figma' , subtitle1: 'Mizko',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
//     // ]


//     const [images,setimages]=useState([]);



//     useEffect(() => {

//         fetch('https://api-2-woql.onrender.com/grid')
//         .then((response) =>response.json())
//         .then((data) => setimages(data))

//         .catch ((error) => console.log(error))
//     });


//     const [searchTerm,setSearchTerm]=useState([]);


//     return(
//         <>


//         <div className="rightside">
//                 <div className="rightfirst">
//                     <div className="search">

//                     <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search"
//     />

//                     <div className="searchimg"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" /></div></div>
//                     <div className="mic"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" /></div>
//                     <div className="rightbar">
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" className="create" />
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" className="create" />
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" className="create" />
//                         {/* <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" className="create" /> */}
//                         <div className="photo" >
//                         </div>

//                         </div>
//                 </div>

//                 <hr className="hr4"/>
//                 <div className="li">

//                    <p className="libar1">All</p> 
//                    <p className="libar2">Cook Studio</p> 
//                    <p className="libar3">UX</p> 
//                    <p className="libar2">Case Study</p> 
//                    <p className="libar4">music</p> 
//                    <p className="libar2">Bnagla Lofi</p> 
//                    <p className="libar4">Tour</p> 
//                    <p className="libar2">Saintmartin</p> 
//                    <p className="libar4">Tech</p> 
//                    <p className="libar5">iphone 13</p>
//                    <p className="libar6">User interface Design</p>  


//                 </div>

//                 <hr className="hr5"/>


//                 <div className="main">

//                 {images.map((i) => (
//                             <div className="card" key={i}>
//                                 <img src={i.img} alt="" className='firstcard' />
//                                 <div className="cardflex"><img src={i.smallimg} alt="" /> <div className='cardtitle'>{i.title}</div></div>
//                                 <div className="cardtxt">{i.subtitle1} <img src={i.subtitleimg} alt="" />{i.subtitle2}</div>
//                             </div>
//                     ))}

//                     </div>
//               </div>













//         </>
//     )
// }

// export default Playcontrols





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





// import './Mainbar.css';
// import React, { useEffect, useState, useRef } from 'react';

// function Mainbar() {
//     const [video, setVideo] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredVideos, setFilteredVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null); // for pagination
//     const [cache, setCache] = useState({});
//     const API_KEY = "AIzaSyDfWCefxvLF9AiVsnoJ-z02ZnzxDY27QJc"; // Replace with your API key
//     const CHANNEL_ID = "UCBR8-60-B28hp2BmDPdntcQ"; // Example: Official YouTube Channel ID (replace with yours)

//     const debounceTimeoutRef = useRef(null);

//     useEffect(() => {
//         // Fetch data from YouTube API on initial load
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${API_KEY}`
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
//                 setFilteredVideos(videos);
//                 if (data.nextPageToken) {
//                     setNextPageToken(data.nextPageToken); // Save next page token
//                 }
//             } catch (error) {
//                 console.error("Error fetching data: ", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleSearchChange = (e) => {
//         const term = e.target.value;
//         setSearchTerm(term);

//         if (term.trim() === '') {
//             setFilteredVideos(video);
//             return;
//         }

//         if (cache[term]) {
//             setFilteredVideos(cache[term]);
//             return;
//         }

//         if (debounceTimeoutRef.current) {
//             clearTimeout(debounceTimeoutRef.current);
//         }

//         debounceTimeoutRef.current = setTimeout(async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&maxResults=50&type=video&key=${API_KEY}`
//                 );
//                 const data = await response.json();
//                 const videos = data.items.map((item) => ({
//                     img: item.snippet.thumbnails.high.url,
//                     smallimg: item.snippet.thumbnails.default.url,
//                     title: item.snippet.title,
//                     subtitle1: item.snippet.channelTitle,
//                     subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                 }));

//                 setCache((prevCache) => ({ ...prevCache, [term]: videos }));
//                 setFilteredVideos(videos);
//                 if (data.nextPageToken) {
//                     setNextPageToken(data.nextPageToken); // Save next page token
//                 }
//             } catch (error) {
//                 console.error("Error fetching search results: ", error);
//             }
//         }, 300); // Delay of 300ms after the user stops typing
//     };

//     // Function to load more videos by fetching the next page of results
//     const loadMoreVideos = async () => {
//         if (!nextPageToken) return; // If no next page token, stop loading more

//         try {
//             const response = await fetch(
//                 `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&pageToken=${nextPageToken}&order=date&type=video&key=${API_KEY}`
//             );
//             const data = await response.json();
//             const videos = data.items.map((item) => ({
//                 img: item.snippet.thumbnails.high.url,
//                 smallimg: item.snippet.thumbnails.default.url,
//                 title: item.snippet.title,
//                 subtitle1: item.snippet.channelTitle,
//                 subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//             }));

//             setVideo((prevVideos) => [...prevVideos, ...videos]);
//             setFilteredVideos((prevVideos) => [...prevVideos, ...videos]);

//             if (data.nextPageToken) {
//                 setNextPageToken(data.nextPageToken); // Update next page token
//             }
//         } catch (error) {
//             console.error("Error loading more videos: ", error);
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
//             </div>
//             <hr className="firsthr" />
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
//             {nextPageToken && (
//                 <button className="load-more" onClick={loadMoreVideos}>
//                     Load More
//                 </button>
//             )}
//         </div>
//     );
// }

// export default Mainbar;




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


// import './Mainbar.css';
// import React, { useEffect, useState, useRef } from 'react';

// function Mainbar() {
//     const [video, setVideo] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredVideos, setFilteredVideos] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [cache, setCache] = useState({});
//     const API_KEY = "AIzaSyC-_0wurknfOCdICpMWWD57ZjeY9qiizYI"; // Replace with your API key
//     // const CHANNEL_ID = "UCBR8-60-B28hp2BmDPdntcQ"; // Replace with your channel ID

//     const debounceTimeoutRef = useRef(null);

//     useEffect(() => {
//         // Fetch initial videos from YouTube API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=react&key=AIzaSyC-_0wurknfOCdICpMWWD57ZjeY9qiizYI&type=video&maxResults=1`
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
//                 setFilteredVideos(videos);
//                 if (data.nextPageToken) {
//                     setNextPageToken(data.nextPageToken);
//                 }
//             } catch (error) {
//                 console.error("Error fetching data: ", error);
//             }
//         };

//         fetchData();
//     }, [2]);

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const performSearch = async () => {
//         if (searchTerm.trim() === '') {
//             setFilteredVideos(video);
//             return;
//         }

//         if (cache[searchTerm]) {
//             setFilteredVideos(cache[searchTerm]);
//             return;
//         }

//         try {
//             const response = await fetch(
//                 `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&maxResults=50&type=video&key=${API_KEY}`
//             );
//             const data = await response.json();
//             const videos = data.items.map((item) => ({
//                 img: item.snippet.thumbnails.high.url,
//                 smallimg: item.snippet.thumbnails.default.url,
//                 title: item.snippet.title,
//                 subtitle1: item.snippet.channelTitle,
//                 subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//             }));

//             setCache((prevCache) => ({ ...prevCache, [searchTerm]: videos }));
//             setFilteredVideos(videos);

//             if (data.nextPageToken) {
//                 setNextPageToken(data.nextPageToken);
//             }
//         } catch (error) {
//             console.error("Error fetching search results: ", error);
//         }
//     };

//     const loadMoreVideos = async () => {
//         if (!nextPageToken) return;

//         try {
//             const response = await fetch(
//                 `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&pageToken=${nextPageToken}&order=date&type=video&key=${API_KEY}`
//             );
//             const data = await response.json();
//             const videos = data.items.map((item) => ({
//                 img: item.snippet.thumbnails.high.url,
//                 smallimg: item.snippet.thumbnails.default.url,
//                 title: item.snippet.title,
//                 subtitle1: item.snippet.channelTitle,
//                 subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
//             }));

//             setVideo((prevVideos) => [...prevVideos, ...videos]);
//             setFilteredVideos((prevVideos) => [...prevVideos, ...videos]);

//             if (data.nextPageToken) {
//                 setNextPageToken(data.nextPageToken);
//             }
//         } catch (error) {
//             console.error("Error loading more videos: ", error);
//         }
//     };



//     const [showvideo, setShowvideo] = useState(null);


//     useEffect(() => {
//         fetch(
//             'https://www.googleapis.com/youtube/v3/search?part=snippet&q=react&key=AIzaSyC-_0wurknfOCdICpMWWD57ZjeY9qiizYI&type=video&maxResults=5'
//         )
//             .then(response => response.json())
//             .then(data => {
//                 setShowvideo(data.items.id.videoId);
//             })
//             .catch(error => console.error("Error fetching videos:", error));
//     }, []);




//     return (
//         <div className="rightside">
//             <div className="rightfirst">
//                 <form
//                     className="search"
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         performSearch();
//                     }}
//                 >
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
//             </div>
//             <hr className="firsthr" />


//             <div className="row1" onClick={ivideo}>
//                 {showvideo &&
//                     (
//                         <iframe
//                             src="https://www.youtube.com/embed/3B0rYACI9wg"
//                             style={{
//                                 width: '290px',
//                                 height: '500px',
//                                 marginTop: '20px',
//                             }}
//                             title="iframe"
//                         ></iframe>
//                     )

//                 }
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
//             {nextPageToken && (
//                 <button className="load-more" onClick={loadMoreVideos}>
//                     Load More
//                 </button>
//             )}
//         </div>
//     );
// }

// export default Mainbar;










import './Mainbar.css';
import React, { useEffect, useState, useRef } from 'react';
import Sidebar from './Sidebar';

function Mainbar() {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [cache, setCache] = useState({});
    const [selectedVideo, setSelectedVideo] = useState(null); // Store selected video for modal
    const API_KEY = "AIzaSyAr9Bf_hipafxYoUMroQ0-mI3YLIBhghYc"; // Replace with your API key


    const defaultsearch = 'music';

    const fetchData = async (userQuery = "react") => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${userQuery}&key=AIzaSyAr9Bf_hipafxYoUMroQ0-mI3YLIBhghYc&type=video&maxResults=5`
            );
            const data = await response.json();
            const videos = data.items.map((item) => ({
                videoId: item.id.videoId,
                img: item.snippet.thumbnails.high.url,
                smallimg: item.snippet.thumbnails.default.url,
                title: item.snippet.title,
                subtitle1: item.snippet.channelTitle,
                subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
            }));
            setVideos(videos);
            setFilteredVideos(videos);
            if (data.nextPageToken) {
                setNextPageToken(data.nextPageToken);
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const performSearch = async () => {
        if (searchTerm.trim() === '') {
            setFilteredVideos(videos);
            return;
        }

        if (cache[searchTerm]) {
            setFilteredVideos(cache[searchTerm]);
            return;
        }

        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&maxResults=5&type=video&key=${API_KEY}`
            );
            const data = await response.json();
            const videos = data.items.map((item) => ({
                videoId: item.id.videoId,
                img: item.snippet.thumbnails.high.url,
                smallimg: item.snippet.thumbnails.default.url,
                title: item.snippet.title,
                subtitle1: item.snippet.channelTitle,
                subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
            }));

            setCache((prevCache) => ({ ...prevCache, [searchTerm]: videos }));
            setFilteredVideos(videos);

            if (data.nextPageToken) {
                setNextPageToken(data.nextPageToken);
            }
        } catch (error) {
            console.error("Error fetching search results: ", error);
        }
    };

    const loadMoreVideos = async () => {
        if (!nextPageToken) return;

        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&pageToken=${nextPageToken}&maxResults=5&type=video&key=${API_KEY}`
            );
            const data = await response.json();
            const videos = data.items.map((item) => ({
                videoId: item.id.videoId,
                img: item.snippet.thumbnails.high.url,
                smallimg: item.snippet.thumbnails.default.url,
                title: item.snippet.title,
                subtitle1: item.snippet.channelTitle,
                subtitle2: new Date(item.snippet.publishedAt).toLocaleDateString(),
            }));

            setVideos((prevVideos) => [...prevVideos, ...videos]);
            setFilteredVideos((prevVideos) => [...prevVideos, ...videos]);

            if (data.nextPageToken) {
                setNextPageToken(data.nextPageToken);
            }
        } catch (error) {
            console.error("Error loading more videos: ", error);
        }
    };

    const handleVideoClick = (videoId) => {
        setSelectedVideo(videoId); // Set the clicked video for the modal
    };

    const closeModal = () => {
        setSelectedVideo(null); // Close the modal
    };


    const handleall = (allbar) => {
        setSearchTerm(allbar);
        fetchData(allbar);
    }


    useEffect(() => {
        fetchData(defaultsearch);
    }, [2]);


    return (
        <>

            <div className='' style={{ display: "flex" }}>
                <Sidebar dataset={fetchData} />
                <div className="rightside">
                    <div className="rightfirst">
                        <form
                            className="search"
                            onSubmit={(e) => {
                                e.preventDefault();
                                performSearch();
                            }}
                        >
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

                    <div className="allbar">
                        <div className="flex1">
                            <div className="all">All</div>

                            <div className="flex1ele" onClick={() => handleall('Coke Studio')}>Coke Studio</div>
                            <div className="flex1ele" onClick={() => handleall('UX')}>UX</div>
                            <div className="flex1ele" onClick={() => handleall('case study')}>Case Study</div>
                            <div className="flex1ele" onClick={() => handleall('Music')}>Music</div>
                            <div className="flex1ele" onClick={() => handleall('Bangla lofi')}>Bangla Lofi</div>
                            <div className="flex1ele" onClick={() => handleall('Tour')}>Tour</div>
                            <div className="flex1ele" onClick={() => handleall('Saintmartin')}>Saintmartin</div>
                            <div className="flex1ele" onClick={() => handleall('Tech')}>Tech</div>
                            <div className="flex1ele" onClick={() => handleall('iphone 13')}>iPhone 13</div>
                            <div className="flex1ele" onClick={() => handleall('user interface design')}>User Interface Design</div>
                            <div className="flex1ele" onClick={() => handleall('computer')}>Com</div>
                        </div>
                    </div>
                    <hr className="secondhr" />
                    <div className="row1">
                        {filteredVideos.map((video, index) => (
                            <div
                                className="poster"
                                key={index}
                                onClick={() => handleVideoClick(video.videoId)}
                            >
                                <img src={video.img} alt="Poster" className="firstposter" />
                                <div className="posterflex">
                                    <img src={video.smallimg} alt="Small Thumbnail" />
                                    <div className="postertitle">{video.title}</div>
                                </div>
                                <div className="postersmalltxt">
                                    {video.subtitle1} {video.subtitle2}
                                </div>
                            </div>
                        ))}
                    </div>
                    {nextPageToken && (
                        <button className="load-more" onClick={loadMoreVideos}>
                                More <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" />
                        </button>
                    )}

                    {/* Modal */}
                    {selectedVideo && (
                        <div className="modal">
                            <div className="modal-content">
                                <button className="close-button" onClick={closeModal}>
                                    &times;
                                </button>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                                    title="YouTube video player"

                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default Mainbar;

