import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";
//Compnente Image para carregar img no next - otimização formato webp
import Image from "next/image";

//estilos globais, colocar fora do App
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  //Criando o HTML ou componente dentro do APP, esse html será mostrado em todas as paginas como um style global da aplicação, no qual vai ser compartilhado em todas as pages

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
