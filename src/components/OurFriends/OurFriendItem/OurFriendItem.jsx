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

export const OurFriendItem = ({ items, handleTimeHover, hoveredTime }) => {
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map(day => t(`other_${day}`));
  const today = (new Date().getDay() + 6) % 7;
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
          <FriendItem key={url || imageUrl}>
            <FriendTitle href={`${url}`} target="_blank" rel="noopener noreferrer">
              {title}
            </FriendTitle>
            <FriendWrapper>
              <FriendImgThumb>
                <Img src={imageUrl} alt={title} loading="lazy" />
              </FriendImgThumb>
              <FriendInfoThumb>
                <FriendInfo
                  onMouseEnter={() => handleTimeHover(imageUrl)}
                  onMouseLeave={() => handleTimeHover('')}
                >
                  <FriendInfoTime>{t('other_time')}:</FriendInfoTime>
                  <FriendInfoData>
                    {workDays
                      ? workDays[today]?.isOpen
                        ? `${workDays[today].from} - ${workDays[today].to}`
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
