export const sounds: any = {
  blue: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
  red: 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
  yellow: 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
  green: 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
};

export const sleep = time => new Promise(resolve => setTimeout(resolve, time));
