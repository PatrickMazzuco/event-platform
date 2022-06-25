import { Header } from "@/components/Header";
import { Lesson } from "@/components/Lesson";
import { Sidebar } from "@/components/Sidebar";
import { Video } from "@/components/Video";
import { useParams } from "react-router-dom";

type EventParams = {
  slug: string;
};

export const Event = () => {
  const { slug } = useParams<EventParams>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
};
