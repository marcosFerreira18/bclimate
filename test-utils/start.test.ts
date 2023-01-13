import AsyncStorage from '@react-native-async-storage/async-storage';

it('checks if Async Storage is used', async () => {
   const asyncOperationOnAsyncStorage = async () => {
      await AsyncStorage.setItem('myKey', 'data');
   };

   await asyncOperationOnAsyncStorage();

   expect(await AsyncStorage.getItem('myKey')).toEqual('data');
});
