import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import backgroundImg from '../img/background.png'


export function Event() {
  const { slug } = useParams<{ slug: string }>()
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug ? ( 
          <>
            <Video lessonSlug={slug} /> 
            <Sidebar /> 
          </>
        ) : (
          <>
            <div className="flex items-center justify-center">
            <img src={backgroundImg} className="h-full w-full max-w-[1250px] max-h-[220vh]"/>
            </div>
            <Sidebar /> 
          </>
        )}
        
      </main>
    </div>
  )
}