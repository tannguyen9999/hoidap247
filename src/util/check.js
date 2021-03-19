import fp from 'fingerprintjs2';

// We re-write the callback into a Promise style,
// so it plays nice with React Hooks
export const getFingerprint = () =>
  new Promise(resolve => {
    fp.get(components => {
      resolve(components);
    });
  });
  
export async function checkUser(listValueDetect) {
  try {
    const dataUserCurrent = await getFingerprint();
    const valueUserCurrent = dataUserCurrent[18].value[1];
    let check = false;

    check = listValueDetect.find(val => {
      if (val === valueUserCurrent) {
        return true;
      }
    });

    return check;
  } catch (error) {}
}

export async function checkUserdata(listValueDetect) {
  try {
    const dataUserCurrent = await getFingerprint();
    const valueUserCurrent = dataUserCurrent[18].value[1];

    return dataUserCurrent;
  } catch (error) {}}