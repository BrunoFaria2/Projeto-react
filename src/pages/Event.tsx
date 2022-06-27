import { Header } from "../componentes/Header";
import { Video } from "../componentes/Video";
import { Sidebar } from "../componentes/Sidebar";
import { useParams } from "react-router-dom";




export function Event() {
    const {slug} = useParams<{ slug: string}>()


  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
          {slug ?
           <Video  lessonSlug={slug}/> 
           : <div className="flex-1"/>}
        <Sidebar />
      </main>
    </div>
  );
}
