import Link from "next/link";
import { ImgContainer, SucessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function success({ costumerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SucessContainer>
        <h1>Compra Efetuada</h1>

        <ImgContainer>
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </ImgContainer>

        <p>
          Uhuul <strong>{costumerName}</strong> sua camisa{" "}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href={"/"}>Voltar ao catalogo de produtos</Link>
      </SucessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  const sessionID = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionID, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
