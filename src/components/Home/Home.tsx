import { FaGithub } from "react-icons/fa";
import AnimatedIconButton from "../asset/AnimatedIconButton";
import ProjectsList from "../Projects/ProjectsList";
import ParticleBackground from "../asset/ParticleBg/ParticleBackground";
import CertificatesList from "../Certificates/CertificatesList";

const Home = () => {
  return (

    <div className="w-full min-h-screen flex flex-col">
        
        <div id="home" className="w-full h-[calc(100vh-16px)] flex">
                
            <ParticleBackground />
            <div className="h-full w-full flex flex-col items-center justify-center space-y-4 absolute bg-gradient-to-t from-slate-50">
                
                <div className="font-bold text-5xl text-center">
                    Hi, I'm <span className="bg-gradient-to-r from-sky-400 to-violet-400 text-transparent bg-clip-text">Sorawit Kamphoi</span>
                </div> 
                <div className="text-lg text-center">
                    Third-year student in computer engineering at Chulalongkorn University
                </div>
                <div className="text-lg text-center">
                    Experienced and interested in full-stack web development, and seeking for challenges in this field
                </div>
                <div>
                <a
                    href="https://github.com/creampiney"
                    target="_blank"
                    className="bg-[#333] hover:bg-gray-700 flex items-center rounded-md px-6 py-2.5 text-sm font-medium text-white transition duration-150 ease-in-out space-x-2"
                    >
                    <FaGithub className="w-[16px] h-[16px]" />
                    <div className="leading-4">GitHub</div>
                </a>
                </div>
            </div>
            
        </div>
        <div id="projects" className="px-5 md:px-10 py-10 w-full flex flex-col justify-center">
            <div className="w-full font-bold text-2xl text-center my-6">
                Projects
            </div>
            
            <div className="w-full flex justify-center">
                <ProjectsList />
            </div>
        </div>
        <div id="certificates" className="px-5 md:px-10 py-10 w-full flex flex-col justify-center">
            <div className="w-full font-bold text-2xl text-center my-6">
                Certificates (Coursera)
            </div>
            
            <div className="w-full flex justify-center">
                <CertificatesList />
            </div>
            
        </div>
        
        

    </div>
  )
}

export default Home