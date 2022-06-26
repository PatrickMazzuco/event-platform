import { useGetLessonsQuery } from "@/graphql/generated";
import { Lesson } from "../Lesson";

export const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="p-6 w-[348px] bg-gray-700 border-l border-gray-600">
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
      </div>
    </aside>
  );
};
