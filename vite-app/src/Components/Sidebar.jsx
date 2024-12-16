import './Sidebar.css'

function Sidebar({dataset}) {

    const index =[
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",title:'Nadir On The Go'},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",title:'Coke Studio Bangla'},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",title:'MKBHD'},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",title:'Figma'},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",title:'ATC Android ToTo c...'},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true",title:'Alux.com'},
    ]


    return (

        <>
            <div className="sidebar">
                <div className="logosection"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" className="threedesh" /><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" className="logo" /></div>
                <div className="homesection">
                    <div className="home"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" className="homimg" />Home</div>
                    <div className="home" onClick={()=>dataset("Explores")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt="" className="homimg" />Explores</div>
                    <div className="home" onClick={()=>dataset("Shorts")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt="" className="homimg" />Shorts</div>
                    <div className="home" onClick={()=>dataset("Subscription")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt="" className="homimg" />Subscription</div>
                </div>
                <hr className='nevhr' />
                <div className="lib">
                    <div className="library" onClick={()=>dataset("games")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="" />GAME</div>
                    <div className="library" onClick={()=>dataset("Music")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt="" />History</div>
                    <div className="library" onClick={()=>dataset("Movies")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt="" />Your videos</div>
                    <div className="library" onClick={()=>dataset("Trending")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt="" />Watch later</div>
                    <div className="library" onClick={()=>dataset("Like")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt="" />Liked videos</div>
                    <div className="library" onClick={()=>dataset("games")}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" />Show more</div>
                </div>
                <hr className="libhr" />
                <div className="sub">SUBSCRIPTION</div>
                <div className="subscription">
                    {/* <div className="subscriber"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" className="circle" />Nadir On The Go</div>
                    <div className="subscriber"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" className="circle" />Coke Studio Bangla</div>
                    <div className="subscriber"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" className="circle" />MKBHD</div>
                    <div className="subscriber"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt="" className="circle" />Figma</div>
                    <div className="subscriber"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" className="circle" />ATC Android ToTo c...</div>
                    <div className="subscriber"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true" alt="" className="circle" />Alux.com</div> */}
                    {index.map((j) => (
                        <div className="subscriber" key={j}><img src={j.img} alt="" className='circle' />{j.title}</div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Sidebar