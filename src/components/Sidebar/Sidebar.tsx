import { useGetLessonsQuery } from "@/graphql/generated";
import { Lesson } from "../Lesson";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={`absolute p-6 w-screen h-screen bg-gray-700 border-l border-gray-600 md:py-16 md:px-32 lg:p-6 lg:relative lg:w-[348px] ${className}`}
    >
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
        Cronogram de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
};
