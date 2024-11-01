import { House,MapPin } from "@phosphor-icons/react";
import { ButtonAcess, ButtonSent, Card, CardContainer, ColocarDados, Contact, ContentContainer, Description, Destaque, HomeContainer, Imagem, ImagemHeader, MainContainer, Navbar, SpanContainer, Valor } from ".";
import casa from '../../assets/casa.jpg'
import casa01 from '../../assets/casa01.jpg'
import casa02 from '../../assets/casa02.jpg'
import casa03 from '../../assets/casa03.jpg'





export function Home(){
    return(
        
        <HomeContainer>
            <Navbar>
            <House size={28} weight="fill" />
                <h1>
                
                Imóveis Center</h1>
            </Navbar>
            <ContentContainer>
                <Description>
                    <h1>Encontre a casa dos seus sonhos</h1>
                    <p>Descubra o imovel com a Imóveis Center</p>
                    <ButtonAcess>Acessar</ButtonAcess>
                </Description>

                <ImagemHeader src={casa} alt="" />
            </ContentContainer>

            <MainContainer>
                <h1>Imóveis em Destaque</h1>
                <CardContainer>

                <Card>
                <h2>Apartamento moderno</h2>
                <Imagem src={casa01} alt="" />
                <p>Um belo apartamento morderno no centro da cidade</p>
                
                <span><MapPin size={18} weight="fill" />Centro</span>
                <SpanContainer>
                <Valor>R$250,00</Valor>
                <Destaque>Destaque</Destaque>
                </SpanContainer>
                </Card>

                
                <Card>
                <h2>Apartamento Moderno</h2>
                <Imagem src={casa02} alt="" />
                <p>Um belo apartamento morderno no centro da cidade</p>
                <span><MapPin size={18} weight="fill" />Centro</span>
                <SpanContainer>
                <Valor>R$250,00</Valor>
                <Destaque>Destaque</Destaque>
                </SpanContainer>
                </Card>

                <Card>
                <h2>Apartamento Moderno</h2>
                <Imagem src={casa03} alt="" />
                <p>Um belo apartamento morderno no centro da cidade</p>
                <span><MapPin size={18} weight="fill" />Centro</span>
                <SpanContainer>
                <Valor>R$250,00</Valor>
                <Destaque>Destaque</Destaque>
                </SpanContainer>
                </Card>

                </CardContainer>
            </MainContainer>


            <Contact>
                <h1>
                    Entre em Contato
                </h1>
                <ColocarDados>


                <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" title="Seu Nome" placeholder="Seu nome" />
                </div>

                <div>
                    
                <label htmlFor="email">E-mail</label>
                <input type="email" title="Seu Email" placeholder="Seu e-mail"/>
                </div>

               <div>
               <label htmlFor="mensagem">Mensagem</label>
               <textarea name="" id="" title="Escreva uma mensagem" placeholder="Sua mensagem"></textarea>
               </div>

                <ButtonSent>Enviar Mensagem</ButtonSent>
                </ColocarDados>
            </Contact>

        <footer>
            <Navbar>
            <House size={28} weight="fill" />
                <h1>Imóveis Center</h1>
            </Navbar>
        </footer>
       
        </HomeContainer>
        
    )
}