import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "@/graphql/generated";

type VideoProps = {
  lessonSlug: string;
  className?: string;
};

export const Video = ({ lessonSlug, className }: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: { slug: lessonSlug },
  });

  if (!data || !data.lesson) {
    return (
      <div className={`flex-1 ${className}`}>
        <p>Carregando...</p>
      </div>
    );
  }

  const { lesson } = data;

  return (
    <div className={`flex-1 ${className}`}>
      <div className="flex justify-center bg-black">
        <div className="aspect-video w-full max-w-[1100px] h-full max-h-[60vh]">
          <Player>
            <Youtube videoId={lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-6 items-start w-full md:flex-row md:gap-10 lg:gap-16">
          <div className="flex-1">
            <h1 className="text-lg font-bold md:text-2xl">{lesson.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-200 md:text-base">
              {lesson.description}
            </p>

            {lesson.teacher && (
              <div className="flex gap-4 items-center mt-6">
                <img
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                  src={lesson.teacher.avatarURL}
                  alt="lesson teacher"
                />

                <div className="leading-relaxed">
                  <strong className="block text-lg font-bold md:text-2xl">
                    {lesson.teacher.name}
                  </strong>
                  <span className="block text-sm text-gray-200 ">
                    {lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <a
              href="#"
              className="flex gap-2 justify-center items-center p-4 text-sm font-bold uppercase bg-green-500 hover:bg-green-700 rounded transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href="#"
              className="flex gap-2 justify-center items-center p-4 text-sm font-bold text-blue-500 hover:text-gray-900 uppercase hover:bg-blue-500 rounded border border-blue-500 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-20 md:gap-8 xl:grid-cols-2">
          <a
            href="#"
            className="flex overflow-hidden gap-6 items-stretch bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          >
            <div className="flex items-center p-6 h-full bg-green-700">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6  leading-relaxed sm:max-w-none">
              <strong className="text-lg md:text-2xl ">
                Material Complementar
              </strong>
              <p className="mt-2 text-sm text-gray-200">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="flex items-center pr-4 ml-auto h-full md:p-6 xl:ml-0">
              <CaretRight size={20} />
            </div>
          </a>
          <a
            href="#"
            className="flex overflow-hidden gap-6 items-stretch bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          >
            <div className="flex items-center p-6 h-full bg-green-700">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6  leading-relaxed sm:max-w-none">
              <strong className="text-lg md:text-2xl">Wallpapers</strong>
              <p className="mt-2 text-sm text-gray-200">
                Baixe wallpapers exclusivos da Maratona Explorer e personalize a
                sua máquina
              </p>
            </div>
            <div className="flex items-center pr-4 ml-auto h-full md:p-6 xl:ml-0">
              <CaretRight size={20} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
