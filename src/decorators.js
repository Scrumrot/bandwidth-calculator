import {
  updateNumberOfUsers,
  updateActive,
  updateQuality,
  updateBar,
} from './updators';
import createDecorator from 'final-form-calculate';

const getTotalMBPS = values => {
  return Object.keys(values)
    .filter(name => (name === 'calculatorBar' ? false : values[name].active))
    .reduce((total, name) => {
      const { users, quality, base } = values[name];
      const targetBase = quality ? base[quality] : base.sd;
      const usersValue = isNaN(users) ? 0 : users;
      const valueToAdd = targetBase * usersValue;
      return total + valueToAdd;
    }, 0);
};
const calculatorBar = (value, allValues) => {
  // console.log('calculatorBar updateNumberOfUsers ( value )', value);
  // console.log('calculatorBar updateNumberOfUsers ( allValues )', allValues);
  if (isNaN(value.users) || !value.active) {
    console.log('isNaN(value.users) || !value.active', value);
  }
  const newValue =
    isNaN(value.users) || !value.active
      ? allValues.calculatorBar
      : getTotalMBPS(allValues);
  // console.log('###### START ######');
  // console.log('### oldValue ###', allValues.calculatorBar);
  // console.log('### newValue ###', newValue);
  // console.log('###### END ######');
  return getTotalMBPS(allValues);
};
const decorators = createDecorator(
  // {
  //   field: 'calculatorBar', // when minimum changes...
  //   updates: { updateBar },
  // },
  {
    field: 'videoConferencing', // when minimum changes...
    updates: { calculatorBar },
  },
  {
    field: 'downloadingLargeFiles', // when minimum changes...
    updates: { calculatorBar },
  },
  {
    field: 'webAndEmail',
    updates: { calculatorBar },
  },
  {
    field: 'mediaFileSharing',
    updates: { calculatorBar },
  },
  {
    field: 'uploadingLargeFiles',
    updates: { calculatorBar },
  },
  {
    field: 'streamingMusic', // when minimum changes...
    updates: { calculatorBar },
  },
  {
    field: 'voip', // when minimum changes...
    updates: { calculatorBar },
  },
  {
    field: 'streamingVideo', // when minimum changes...
    updates: { calculatorBar },
  },
);

export default decorators;
