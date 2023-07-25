/* eslint-disable react/prop-types */
import { Icon } from '../Icon/Icon';
import {
  Modal,
  ModalLayout,
  ModalCardWrapper,
  ButtonClose,
  ModalCard,
  ModalCardInfo,
  ModalCardImage,
  Image,
  SpanStatus,
  ModalCardText,
  Title,
  Table,
  Tbody,
  Tr,
  TdName,
  TdValue,
  Link,
  Text,
  Comments,
  ButtonsWrapper,
  Button,
  ButtonTextAdd,
  ButtonLinkContact,
  ButtonTextContact,
} from './NoticeCardDetail.styled';

export const NoticeCardDetail = ({ item }) => {
  return (
    <>
      <Modal>
        <ModalLayout>
          <ModalCardWrapper>
            <ButtonClose>
              <Icon
                iconName={'icon-cross'}
                width={'24px'}
                height={'24px'}
                stroke={'#54ADFF'}
                fill={'#54ADFF'}
              />
            </ButtonClose>
            <ModalCard>
              <ModalCardInfo>
                <ModalCardImage>
                  <Image src={item.url} alt="pet" loading="lazy"></Image>
                  <SpanStatus>{item.status}</SpanStatus>
                </ModalCardImage>
                <ModalCardText>
                  <Title>Cute dog looking for a home</Title>
                  <Table>
                    <Tbody>
                      <Tr>
                        <TdName>Name: </TdName>
                        <TdValue>{item.name}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Birthday: </TdName>
                        <TdValue>{item.birthday}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Breed: </TdName>
                        <TdValue>{item.breed}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Place: </TdName>
                        <TdValue>{item.place}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>The sex: </TdName>
                        <TdValue>{item.sex}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Email: </TdName>
                        <TdValue>
                          <Link href={'mailto:' + item.email}>
                            {item.email}
                          </Link>
                        </TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Phone: </TdName>
                        <TdValue>
                          <Link href={'tel:' + item.phone}>{item.phone}</Link>
                        </TdValue>
                      </Tr>
                    </Tbody>
                  </Table>
                </ModalCardText>
              </ModalCardInfo>
              <Text>
                <Comments>Comments:</Comments> {item.comments}
              </Text>
              <ButtonsWrapper>
                <Button>
                  <ButtonTextAdd>Add to</ButtonTextAdd>
                  <Icon
                    iconName={'icon-heart'}
                    width={'24px'}
                    height={'24px'}
                    stroke={'#fff'}
                  />
                </Button>
                <ButtonLinkContact>
                  <ButtonTextContact>Contact</ButtonTextContact>
                </ButtonLinkContact>
              </ButtonsWrapper>
            </ModalCard>
          </ModalCardWrapper>
        </ModalLayout>
      </Modal>
    </>
  );
};
