//Software related to vision processing
//10 Feb 2023 
//Authors: Michael Dunne & Parker Drouillard
//Michael.Dunne@mytools2go.ca - Parker@PepCorp.ca

const ocv = require('opencv4nodejs');


ocv.readImage('./tests/test1.jpg', function (err, img) {
    if (err) {
      throw err;
    }
  
    const width = im.width();
    const height = im.height();
  
    if (width < 1 || height < 1) {
      throw new Error('Image has no size');
    }
  
    // do some cool stuff with img
  
    // save img
    img.save('./tests/test1mod.jpg');
});

//All april tags are of the 16h5 family type
