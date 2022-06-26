import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

export type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
};

export const Lesson = ({ title, slug, type, availableAt }: LessonProps) => {
  const { slug: urlSlug } = useParams();

  const isLessonAvailable = isPast(availableAt);
  const formattedDate = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  const isActiveLesson = urlSlug === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{formattedDate}</span>
      <div
        className={classnames(
          "p-4 mt-2 rounded border border-gray-500 group-hover:border-green-500 transition-colors",
          {
            "bg-green-500": isActiveLesson,
          },
        )}
      >
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span
              className={classnames(
                "flex  gap-2 items-center text-sm font-medium",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": isActiveLesson,
                },
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex gap-2 items-center text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classnames(
              "py-[0.125rem] px-2 text-xs font-bold text-white rounded border",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson,
              },
            )}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={classnames("block mt-5", {
            "text-white": isActiveLesson,
            "text-gray-200 ": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
