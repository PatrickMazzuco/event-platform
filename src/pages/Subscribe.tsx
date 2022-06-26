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
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <div className=" flex justify-between items-center mx-auto mt-20 w-full max-w-[1100px]">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700  rounded border border-gray-500">
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
      <img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  );
};
