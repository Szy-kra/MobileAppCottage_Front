export const CottageImages: { [key: string]: any } = {
  // Wychodzimy z ImageScript (..) i wchodzimy do images
  'A1.jpg': require('../images/DataImage/A1.jpg'),
  'R3.jpg': require('../images/DataImage/R3.jpg'),
  
  // To samo dla ikony
  'maxPeopleIcon': require('../images/maxpeople.png'), 
  
  'placeholder': require('../images/DataImage/R5.jpg'),
};

export const getCottageImage = (imageName: string | undefined) => {
  if (!imageName || !CottageImages[imageName]) {
    return CottageImages['placeholder'];
  }
  return CottageImages[imageName];
};