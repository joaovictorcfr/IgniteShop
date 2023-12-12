import { styled } from "..";

export const SucessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,
  gap: "3rem",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
  },

  a: {
    textDecoration: "none",
    cursor: "pointer",
    padding: "0.5rem 0.5rem",
    borderRadius: 8,
    border: 0,
    color: "$gray100",
    backgroundColor: "$green500",
    transition: ".3s all",
    fontSize: "$md",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "$green300",
      letterSpacing: 2,
    },
  },
});

export const ImgContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "linear-Gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
