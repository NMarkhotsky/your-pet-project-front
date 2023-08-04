import {
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  InfoWrapper,
  Info,
  CardFooter,
  Comments,
  MoreBtn,
} from './NoticeCardSkeleton.styled';
import { List } from '../../../../components/NoticeCard/NoticeCard.styled';

// eslint-disable-next-line react/prop-types
const NoticeCardSkeleton = ({ cards }) => {
  return (
    <List>
      {Array(cards)
        .fill(0)
        .map((card, i) => (
          <ListItem key={i}>
            <ImageWrapper>
              <Category inline={true} />
              <FavoriteBtn />
              <InfoWrapper>
                <Info inline={true} />
                <Info inline={true} />
                <Info inline={true} />
              </InfoWrapper>
            </ImageWrapper>
            <CardFooter>
              <Comments inline={true} />
              <MoreBtn inline={true} />
            </CardFooter>
          </ListItem>
        ))}
    </List>
  );
};

export default NoticeCardSkeleton;
