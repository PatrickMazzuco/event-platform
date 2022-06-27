import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Header/Logo";
import { useCreateSubscriberMutation } from "@/graphql/generated";

export const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("second");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleCreateSubscriber = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    await createSubscriber({ variables: { name, email } });

    navigate("/event");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur sm:px-4 lg:px-8">
      <div className=" flex flex-col justify-center items-center mx-8 mt-20 w-full max-w-[1216px] sm:flex-row lg:justify-between lg:mx-auto">
        <div className="flex flex-col items-center px-6 text-center sm:items-start sm:max-w-sm sm:text-left md:max-w-md lg:min-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[1.875rem] leading-tight  sm:text-[2.5rem] ">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-sm leading-relaxed  text-gray-200 sm:text-base">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="py-8 px-6 mt-8 w-full bg-gray-700 rounded border border-gray-500 sm:p-8 sm:mt-0 sm:w-auto">
          <strong className="block mb-6 text-2xl">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleCreateSubscriber}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="px-5 h-14  bg-gray-900 rounded"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="px-5 h-14  bg-gray-900 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="py-4 mt-4 text-sm font-bold uppercase bg-green-500 hover:bg-green-700 rounded disabled:opacity-50 transition-colors disabled:cursor-not-allowed"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" alt="" className="mt-4 sm:mt-10" />
    </div>
  );
};
