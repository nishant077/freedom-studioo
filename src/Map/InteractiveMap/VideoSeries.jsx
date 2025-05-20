import { React } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../../Navigation/Navbar';
import Footer from '../../component/Footer';

const VideoSeries = () => {
    const videodata = [
        {
            title: "Trapped in Debt: The Haruwa-Charuwa Struggle",
            movementName: "Haruwa/Charuwa Liberation Movement",
            movementUrl: "https://www.youtube.com/watch?v=E9lRhwt96fk"
        },
        {
            title: "Learning and Dissemination - PAVE project_Short Documetary",
            movementName: "Community Safety Network (CSN)",
            movementUrl: "https://www.youtube.com/watch?v=0EJ8hYR5M0o"
        },
        {
            title: "Bhaktapur Land Rights Movement | Artivism Workshop | MRC",
            movementName: "Deko-Miba-Itapake-Land Integration Movement",
            movementUrl: "https://www.youtube.com/watch?v=FaPrV_iXyNc"
        },
        {
            title: "Crisis of Chure | Movement Resource Center | Save Chure Range",
            movementName: "Chure Conservation Movement",
            movementUrl: "https://www.youtube.com/watch?v=-ETOSvL3O2Q"
        },
        {
            title: "प्रतापपुरमा मिटर ब्याजको जालो | MRC",
            movementName: "Anti Meter Byaj Movement",
            movementUrl: "https://www.youtube.com/watch?v=FdT2xOujmkI"
        },
        {
            title: "Art as a Decent Profession | Exploring the Role of Creativity | Binaya Rimal and Archana Karki",
            movementName: "The Artivist Network",
            movementUrl: "https://www.youtube.com/watch?v=OKNnu_IiRTA"
        },
        {
            title: "Haliya Liberation: A Promise Unfulfilled",
            movementName: "Haliya Resocialization Movement",
            movementUrl: "https://www.youtube.com/watch?v=rFhDyAYTOMU"
        },
        {
            title: "Whats is happening in Nepal?",
            movementName: "Justice for Nirmala Kurmi",
            movementUrl: "https://www.youtube.com/watch?v=mP8Zd8fVrww"
        },
        {
            title: "Lumbini Rainbow Journey | MRC",
            movementName: "LGBTQI+ Movement",
            movementUrl: "https://www.youtube.com/watch?v=7ep5TO8TSAA"
        },
        {
            title: "Baba lai Binti | Poem ft. Krishnaraj Sarbahari & Bhumika Tharu | Media Artivism Fellowship 2023",
            movementName: "Kamlari Liberation and Rehabilitation Movement",
            movementUrl: "https://www.youtube.com/watch?v=3WcEEOQAHu0&t=1s"
        },
        {
            title: "ANUPAM BUS YATRA | देशब्यापी महिलावादी अनुपम अभियान | FREEDOM STUDIO | IGFF |",
            movementName: "Anupam Movement",
            movementUrl: "https://www.youtube.com/watch?v=H0n_GWc105U"
        },
        {
            title: "Netuwa Community | In search for their identity | Bikash Thapa | Media Artivism Fellowship 2023",
            movementName: "Netuwa Recognition Movement",
            movementUrl: "https://www.youtube.com/watch?v=bazjUT5vGpo"
        },
        {
            title: "Swargadwari Guthi Pidit Movement | MRC",
            movementName: "Swargadwari Mohi Farmers' Movement",
            movementUrl: "https://www.youtube.com/watch?v=4-9Z8e1Fw6A"
        },
        {
            title: "Save Mukkumlung | A Fight for Ancestral Land",
            movementName: "Save Mukkumlung",
            movementUrl: "https://www.youtube.com/watch?v=_1jXymdMWd4"
        }
    ];

    return (
        <div className="min-h-screen bg-[#4a4a4a] text-white">
            <Navbar />
            
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-droid mb-4 text-white">
                        VOICES OF FRONTLINERS
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Stories of resilience and change from grassroots movements across Nepal
                    </p>
                </div>
                
                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videodata.map((video, index) => (
                        <div 
                            key={index} 
                            className="bg-[#333333] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <ReactPlayer
                                    url={video.movementUrl}
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                    light={true}
                                    style={{ aspectRatio: '16/9' }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{video.title}</h3>
                                <p className="text-gray-400 mb-4">{video.movementName}</p>
                                <a
                                    href={video.movementUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-[#9a1d20] hover:bg-red-700 rounded-md transition-colors duration-300"
                                >
                                    Watch on YouTube
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to Action */}
                {/* <div className="mt-20 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Support These Movements</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        These videos showcase the struggles and triumphs of grassroots movements. 
                        Share them to amplify these important voices.
                    </p>
                 
                </div> */}
            </div>
            
            <Footer />
        </div>
    );
};

export default VideoSeries;