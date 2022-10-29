export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve([longitude, latitude]);
      },
      (error) => {
        alert("Please enable location services");
        console.log(error);
        reject(error);
      }
    );
  });
};
