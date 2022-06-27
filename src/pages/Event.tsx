import { useParams } from "react-router-dom";
import { useState } from "react";
import { List, X } from "phosphor-react";
import { Sidebar } from "@/components/Sidebar";
import { Video } from "@/components/Video";
import { Logo } from "@/components/Header/Logo";

type EventParams = {
  slug: string;
};

export const Event = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { slug } = useParams<EventParams>();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center py-4 px-6 w-full bg-gray-700 border-b border-gray-600 lg:justify-center lg:py-5">
        <header>
          <Logo width={167} height={24} />
        </header>
        <div className="flex gap-2 justify-center items-center lg:hidden">
          <span className="block">Aulas</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-all"
          >
            {isMenuOpen ? (
              <List className="text-blue-500" size={32} />
            ) : (
              <X className="text-blue-500" size={32} />
            )}
          </button>
        </div>
      </div>
      <main className="flex flex-1">
        {slug ? (
          <Video
            lessonSlug={slug}
            className={`${isMenuOpen && "hidden lg:block"}`}
          />
        ) : (
          <div className={`flex-1 ${isMenuOpen && "hidden lg:block"}`} />
        )}
        <Sidebar className={`${!isMenuOpen && "hidden lg:block"}`} />
      </main>
    </div>
  );
};
