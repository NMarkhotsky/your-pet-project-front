import PropTypes from 'prop-types';
import {
  FriendImgThumb,
  FriendInfo,
  FriendInfoData,
  FriendInfoThumb,
  FriendInfoTime,
  FriendInfoTitle,
  FriendItem,
  FriendTitle,
  FriendWrapper,
  Img,
  WorkDayItem,
  WorkDays,
  WorkDaysList,
  WorkTime,
} from './OurFriendItem.styled';

const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

export const OurFriendItem = ({ items, handleTimeHover, hoveredTime }) => {
  return (
    <>
      {items.map(
        ({
          imageUrl,
          url,
          title,
          workDays,
          address,
          email,
          phone,
          addressUrl,
        }) => (
          <FriendItem key={imageUrl}>
            <FriendTitle href={`${url}`} target="_blank">
              {title}
            </FriendTitle>
            <FriendWrapper>
              <FriendImgThumb>
                <Img src={imageUrl} />
              </FriendImgThumb>
              <FriendInfoThumb>
                <FriendInfo
                  onMouseEnter={() => handleTimeHover(imageUrl)}
                  onMouseLeave={() => handleTimeHover('')}
                >
                  <FriendInfoTime>Time:</FriendInfoTime>
                  <FriendInfoData>
                    {workDays
                      ? workDays[0].isOpen
                        ? `${workDays[0].from} - ${workDays[0].to}`
                        : 'Close'
                      : 'Day and Night'}
                  </FriendInfoData>
                </FriendInfo>
                <FriendInfo>
                  <FriendInfoTitle>Address:</FriendInfoTitle>
                  <FriendInfoData
                    href={addressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address === null ? 'Website only' : address}
                  </FriendInfoData>
                </FriendInfo>
                <FriendInfo>
                  <FriendInfoTitle>Email:</FriendInfoTitle>
                  <FriendInfoData href={`mailto:${email}`}>
                    {email === null ? 'Telephone only' : email}
                  </FriendInfoData>
                </FriendInfo>
                <FriendInfo>
                  <FriendInfoTitle>Phone:</FriendInfoTitle>
                  <FriendInfoData href={`tel:${phone}`}>
                    {phone === null ? 'Email only' : phone}
                  </FriendInfoData>
                </FriendInfo>
              </FriendInfoThumb>
            </FriendWrapper>
            {hoveredTime === imageUrl && (
              <WorkDaysList>
                {workDays
                  ? workDays.map(
                      (workDay, index) =>
                        workDay && (
                          <WorkDayItem key={index}>
                            <WorkDays>{weekDays[index]}: </WorkDays>
                            <WorkTime>
                              {workDay.isOpen
                                ? `${workDay.from} - ${workDay.to}`
                                : 'Closed'}
                            </WorkTime>
                          </WorkDayItem>
                        )
                    )
                  : 'Day and Night'}
              </WorkDaysList>
            )}
          </FriendItem>
        )
      )}
    </>
  );
};

OurFriendItem.propTypes = {
  items: PropTypes.array.isRequired,
  handleTimeHover: PropTypes.func.isRequired,
  hoveredTime: PropTypes.string.isRequired,
};

// href={'tel:' + friend.phone}
// href={'mailto:' + friend.email}
