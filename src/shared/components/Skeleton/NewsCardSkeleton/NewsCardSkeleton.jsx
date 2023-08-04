import { List } from '../../../../components/NewsList/NewsList.styled';
import {
  Item,
  NewsBody,
  NewsTitle,
  TextContent,
  BottomInfoWrapper,
  NewsDate,
  NewsLink,
  ImageWrapper,
  Wrapper,
} from './NewsCardSkeleton.styled';

// eslint-disable-next-line react/prop-types
const NewsCardSkeleton = ({ cards }) => {
  return (
    <List>
      {Array(cards)
        .fill(0)
        .map((card, index) => (
          <Item key={index}>
            <ImageWrapper></ImageWrapper>
            <TextContent>
              <NewsTitle count={2} inline={true} />
              <Wrapper>
                <NewsBody inline={true} />
              </Wrapper>
              <BottomInfoWrapper>
                <NewsDate inline={true} />
                <NewsLink inline={true} />
              </BottomInfoWrapper>
            </TextContent>
          </Item>
        ))}
    </List>
  );
};

export default NewsCardSkeleton;
