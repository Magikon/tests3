import moment from 'moment';

export const humanReadableTime = (timestamp: number) => {
  const now = moment();

  const mTime = moment(timestamp);
  let timeString = mTime.format('M/DD/YYYY');
  if (moment(mTime).isSame(now, 'day')) {
    timeString = mTime.format('h:mm A');
  } else if (now.diff(mTime, 'days') < 7) {
    timeString = mTime.format('dddd');
  }
  return timeString;
};