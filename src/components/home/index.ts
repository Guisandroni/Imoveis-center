import styled from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme["esmeralda"]};
  padding: 0.5rem;
  flex: 1;
  text-align: start;
  color: ${(props) => props.theme["text-color"]};
`;

export const Navbar = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme["esmeralda"]};
  padding: 0.5rem;
  flex: 1;
  text-align: start;
  color: ${(props) => props.theme["text-color"]};
  align-items:center;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
`;

export const ImagemHeader = styled.img`
  height: 100%;
  width: 30rem;
  min-width: 1rem;
  margin: 1rem 0;
  border-radius: 12px;
`;
export const Imagem = styled.img`
  border-radius: 12px;
  height: 12rem;
  width: 100%;
  object-fit: cover;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.87rem;
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["background-header"]};
  padding: 1rem;
  cursor:pointer;
  border-radius: 8px;

  border-top: 3.5px solid #10b981;
  gap: 0.7rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  span{
    display:flex;
    gap:0.5rem;
    align-items:center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Destaque = styled.span`
  background-color: ${(props) => props.theme["Span"]};
  padding: 0 1rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  font-size: 0.8rem;
  color: ${(props) => props.theme["text-color-span"]};
`;

export const Valor = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme["esmeralda"]};
  font-size: 1.5rem;
`;


export const Contact = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    margin-bottom:2rem;
`

export const ColocarDados = styled.div`
        background-color:${props=>props.theme['background-header']};
        width:20rem;
        padding:1rem;
        border-radius:12px;
        border-top:4px solid purple;

        display:flex;
        flex-direction:column;


        div{
            display:flex;
            flex-direction:column;
            gap:0.5rem;

            margin-bottom:1rem;
        }

        input{
            height:2rem;
            border-radius:4px;
            border:1px solid ${props=>props.theme['cinza']};
            text-align:start;
            padding:1rem;

        }

        textarea{
            height:10rem;
            border-radius:4px;
            border:1px solid ${props=>props.theme['cinza']};
            text-align:start;
            padding:0.5rem;
            font-family: serif;
        }

        
`

export const BaseButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme["button-color"]};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: ${(props) => props.theme["text-color"]};
  font-size: 1rem;
  font-weight: bold;
  cursor:pointer;

  
`

export const ButtonAcess = styled(BaseButton)`
  &:hover{
    background-color:${props=>props.theme['button-hover-green']}

  }
`;

export const ButtonSent = styled(BaseButton)`
      background-color: ${props=>props.theme['button-Message']};

      &:hover{
    background-color:${props=>props.theme['button-hover-purple']}

  }

`


