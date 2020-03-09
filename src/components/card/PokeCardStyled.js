import styled from "styled-components";

import { Link } from "react-router-dom";

const Sprite = styled.img`
  width: 6em;
  height: 6em;
  display: none;
`;

const BoxCard = styled.div`
  margin-bottom: 10px;
`;

const Card = styled.div`
  background-color: #f1f3f6;
  padding: 40px;
  box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #dfe4ea !important;
  border-radius: 30px;
  max-width: 300px;
  border: 0;
`;

const CardFooter = styled.div`
  background-color: transparent;
  width: 100%;
`;

const CardTitleFooter = styled.div`
  color: "#9DABC0";
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0.75rem 0;

  h5,
  h6 {
    font-size: 1.2rem;
  }

  h5 {
    display: flex-inline;
    justify-content: flex-end;
  }

  h6 {
    display: flex-inline;
    justify-content: flex-start;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: "#9DABC0";
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export { Sprite, BoxCard, Card, CardFooter, CardTitleFooter, StyledLink };
