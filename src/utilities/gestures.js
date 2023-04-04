import * as fp from 'fingerpose';

export function thumbsDown() {
  const thumbsDownSign = new fp.GestureDescription('thumbs_down');
  thumbsDownSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
  thumbsDownSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalDown,
    1.0
  );
  thumbsDownSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalDownLeft,
    0.9
  );
  thumbsDownSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalDownRight,
    0.9
  );

  for (let finger of [
    fp.Finger.Index,
    fp.Finger.Middle,
    fp.Finger.Ring,
    fp.Finger.Pinky,
  ]) {
    thumbsDownSign.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    thumbsDownSign.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }

  return thumbsDownSign;
}

export function openPalm() {
  const openPalmSign = new fp.GestureDescription('open_palm');
  for (let finger of [
    fp.Finger.Thumb,
    fp.Finger.Index,
    fp.Finger.Middle,
    fp.Finger.Ring,
    fp.Finger.Pinky,
  ]) {
    openPalmSign.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    openPalmSign.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
    openPalmSign.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
    openPalmSign.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 0.9);
    openPalmSign.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 0.9);
  }
  return openPalmSign;
}

export function okay() {
  const okaySign = new fp.GestureDescription('okay');
  okaySign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl);
  okaySign.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.9);
  okaySign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  okaySign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  //okSign index
  okaySign.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl);
  okaySign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.9);
  okaySign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  okaySign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpLeft,
    1.0
  );
  //okSign middle
  okaySign.addDirection(fp.Finger.Middle, fp.FingerCurl.NoCurl);
  okaySign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
  okaySign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  okaySign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //okaySign ring
  okaySign.addDirection(fp.Finger.Ring, fp.FingerCurl.NoCurl);
  okaySign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
  okaySign.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.9);
  okaySign.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //okaySign pinky
  okaySign.addDirection(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  okaySign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
  okaySign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  okaySign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  return okaySign;
}

export function iLoveYou() {
  const iLoveYouSign = new fp.GestureDescription('i_love_you');
  iLoveYouSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
  iLoveYouSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  iLoveYouSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  iLoveYouSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //ILY index
  iLoveYouSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
  iLoveYouSign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  iLoveYouSign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  iLoveYouSign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //ILY middle
  iLoveYouSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  iLoveYouSign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  iLoveYouSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  iLoveYouSign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  iLoveYouSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  iLoveYouSign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  //ILY ring
  iLoveYouSign.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl);
  iLoveYouSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
  iLoveYouSign.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  iLoveYouSign.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //ILY pinky
  iLoveYouSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  iLoveYouSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  iLoveYouSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  iLoveYouSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );

  return iLoveYouSign;
}

export function rockAndRoll() {
  const rockAndRollSign = new fp.GestureDescription('rock_and_roll');

  rockAndRollSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);
  rockAndRollSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  rockAndRollSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  rockAndRollSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  rockAndRollSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  rockAndRollSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  rockAndRollSign.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  //rr index
  rockAndRollSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
  rockAndRollSign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  rockAndRollSign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  rockAndRollSign.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //rr middleFinger
  rockAndRollSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  rockAndRollSign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  rockAndRollSign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  rockAndRollSign.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  // rr ringFinger
  rockAndRollSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
  rockAndRollSign.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  rockAndRollSign.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  rockAndRollSign.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //rr pinkyFinger
  rockAndRollSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  rockAndRollSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  rockAndRollSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  rockAndRollSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  rockAndRollSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  rockAndRollSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  rockAndRollSign.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  return rockAndRollSign;
}

export function telephone() {
  const telephoneSign = new fp.GestureDescription('telephone');
  telephoneSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
  //telephone pinkyFinger
  telephoneSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  //telephone index, middle, ring
  for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    telephoneSign.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    telephoneSign.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }
}
