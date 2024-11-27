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
import { t } from 'i18next';

const weekDays = [
  t('other_MN'),
  t('other_TU'),
  t('other_WE'),
  t('other_TH'),
  t('other_FR'),
  t('other_SA'),
  t('other_SU'),
];

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
                  <FriendInfoTime>{t('other_time')}:</FriendInfoTime>
                  <FriendInfoData>
                    {workDays
                      ? workDays[0]?.isOpen
                        ? `${workDays[0].from} - ${workDays[0].to}`
                        : t('other_close')
                      : t('friends_friendItem_workTime')}
                  </FriendInfoData>
                </FriendInfo>
                <FriendInfo>
                  <FriendInfoTitle>{t('other_address')}:</FriendInfoTitle>
                  <FriendInfoData
                    href={addressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address === null ? 'Website only' : address}
                  </FriendInfoData>
                </FriendInfo>
                <FriendInfo>
                  <FriendInfoTitle>{t('other_email')}:</FriendInfoTitle>
                  <FriendInfoData href={`mailto:${email}`}>
                    {email === null ? t('friends_friendItem_phoneOnly') : email}
                  </FriendInfoData>
                </FriendInfo>
                <FriendInfo>
                  <FriendInfoTitle>{t('other_phone')}:</FriendInfoTitle>
                  <FriendInfoData href={`tel:${phone}`}>
                    {phone === null ? t('friends_friendItem_emailOnly') : phone}
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
                                : t('other_closed')}
                            </WorkTime>
                          </WorkDayItem>
                        )
                    )
                  : t('friends_friendItem_workTime')}
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
