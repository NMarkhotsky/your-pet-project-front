import { Link } from 'react-router-dom';
import {
  FooterStyle,
  Title,
  Wrapper,
  Pulsingheart,
  Person,
  Container,
  ContainerInner,
  Circle,
  Divider,
  Name,
  TitlePosition,
  ImageOne,
  MainContainer,
  MainTitle,
  ImageTwo,
  ImageThree,
} from './Footer.styled';
import { Icon } from '../Icon/Icon';
import bgImg1 from '../../assets/images/photoTeam/1.jpg';
import bgImg2 from '../../assets/images/photoTeam/2.jpg';
import bgImg3 from '../../assets/images/photoTeam/3.jpg';
import bgImg4 from '../../assets/images/photoTeam/4.jpg';
import bgImg5 from '../../assets/images/photoTeam/5.jpg';
import bgImg6 from '../../assets/images/photoTeam/6.jpg';
import bgImg7 from '../../assets/images/photoTeam/7.jpg';
import bgImg8 from '../../assets/images/photoTeam/8.jpg';
import bgImg9 from '../../assets/images/photoTeam/9.jpg';
import bgImg11 from '../../assets/images/photoTeam/11.jpg';
import bgImg12 from '../../assets/images/photoTeam/12.jpg';
import photoAlb from '../../assets/images/photoTeam/Albina.png';
import phoroMyk from '../../assets/images/photoTeam/Kolya.png';
import photoArtT from '../../assets/images/photoTeam/Artem.png';
import photoNata from '../../assets/images/photoTeam/Natalia.png';
import photoAnton from '../../assets/images/photoTeam/Anton.png';
import photoMar from '../../assets/images/photoTeam/Maria.png';
import photoAlla from '../../assets/images/photoTeam/Alla.png';
import photoLarinA from '../../assets/images/photoTeam/Larin.png';
import photoKate from '../../assets/images/photoTeam/Kate.png';
import photoBodya from '../../assets/images/photoTeam/Bodya.png';
import photoDima from '../../assets/images/photoTeam/Dima.png';

export const Footer = () => {
  return (
    <FooterStyle>
      <MainTitle>Our team</MainTitle>
      <MainContainer>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg6} />
              <ImageOne src={phoroMyk} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Mykola Markhotskyi</Name>
            <TitlePosition>Team lead</TitlePosition>
            <TitlePosition>Frontend developer</TitlePosition>
            <Link
              style={{ marginTop: 5 }}
              target="_blank"
              to="https://github.com/NMarkhotsky"
            >
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg9} />
              <ImageOne src={photoLarinA} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Anton Larin</Name>
            <TitlePosition>Team lead</TitlePosition>
            <TitlePosition>Backend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/yogurtfirst">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg2} />
              <ImageTwo src={photoAlla} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Alla Basanko</Name>
            <TitlePosition>Scrum master</TitlePosition>
            <TitlePosition>Backend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/AllaGrey">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg1} />
              <ImageOne src={photoAlb} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Albina Anistratenko</Name>
            <TitlePosition>Frontend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/albuska">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg8} />
              <ImageOne src={photoArtT} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Artem Terzi</Name>
            <TitlePosition>Backend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/ArtemTerzi">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg5} />
              <ImageOne src={photoKate} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Kateryna Panchenko</Name>
            <TitlePosition>Frontend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/Kate-Panchenko">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg3} />
              <ImageOne src={photoNata} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Nataliia Kalynovska</Name>
            <TitlePosition>Frontend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/TaleQ">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg12} />
              <ImageOne src={photoDima} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Dmytro Kobets</Name>
            <TitlePosition>Backend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/Dmytro-Kobets">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg11} />
              <ImageThree src={photoAnton} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Anton Shadura</Name>
            <TitlePosition>Frontend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/AntonAnatoliyovich">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg7} />
              <ImageOne src={photoBodya} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Bohdan Ryzhko</Name>
            <TitlePosition>Frontend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/bohdan-ryzhko">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg4} />
              <ImageOne src={photoMar} />
            </ContainerInner>
          </Container>
          <Divider>
            <Name>Maria Popova</Name>
            <TitlePosition>Frontend developer</TitlePosition>
            <Link target="_blank" to="https://github.com/mashapopov">
              <Icon
                iconName={'icon-icon-github'}
                width={'20px'}
                height={'20px'}
                fill={'#404245'}
              />
            </Link>
          </Divider>
        </Person>
      </MainContainer>
      <Title>
        &#xa9; 2023 | Developed with
        <Wrapper>
          <Pulsingheart></Pulsingheart>
        </Wrapper>
        <Wrapper>
          <Pulsingheart></Pulsingheart>
        </Wrapper>
      </Title>
    </FooterStyle>
  );
};
