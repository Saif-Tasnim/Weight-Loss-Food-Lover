import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-white">
            <div className="b">
                <div className="custom-shape-divider-top-1699755066 bg-[#4298B4]">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill text-white fill-white"></path>
                    </svg>
                </div>
                <div className="w-full bg-[#4298B4] py-10">
                        <h1 className="text-5xl text-center font-bold text-white">“It’s so incredible to finally be understood.”</h1>
                        <p className="text-white text-center w-1/2 mt-5 mx-auto text-xl font-semibold">Only 10 minutes to get a “freakishly accurate” description of who you are and why you do things the way you do.</p>
                        <div className="flex justify-center mt-10">
                        <Link to="/free-test" className="px-10 flex items-center gap-2 py-4 rounded-full bg-[#6C4D7B] text-white text-4xl mx-auto font-bold">Take The test <FaArrowRight/></Link>
                        </div>
                </div>
                <img src="https://www.16personalities.com/static/images/homepage/header-mountains-desktop.svg" alt="" />
            </div>
        </div>
    );
};

export default Home;