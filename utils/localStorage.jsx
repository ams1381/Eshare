export const saveDataToLocalStorage = async () => {
    try {
        await AsyncStorage.setItem('myKey', 'Hello, this is my data!');
        console.log('Data saved to local storage.');
    } catch (error) {
        console.error('Error saving data to local storage:', error);
    }
  };
export const getDataFromLocalStorage = async (ItemName) => {
    try {
        const data = await AsyncStorage.getItem(ItemName); 
        if (data !== null) {
            console.log('Data retrieved from local storage:', data);
        } else {
            console.log('Data not found in local storage.');
        }
    } catch (error) {
        console.error('Error retrieving data from local storage:', error);
    }
};