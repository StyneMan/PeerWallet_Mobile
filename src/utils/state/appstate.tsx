// import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeObservable, observable} from 'mobx';
// import {makePersistable} from 'mobx-persist-store';

class AppStore {
  count = 0;
  isLoading: boolean = false;
  isLoggedIn: boolean = false;
  isPinSet: boolean = false;
  pin = '';
  confirmPin = '';
  phoneCode = 'ng';
  constructor() {
    makeObservable(
      this,
      {
        increment: action,
        decrement: action,
        setLoading: action,
        count: observable,
        isLoading: observable,
        pin: observable,
        confirmPin: observable,
        isLoggedIn: observable,
        isPinSet: observable,
        phoneCode: observable,
        setLoggedIn: action,
        setPin: action,
        setConfirmPin: action,
        setIsPinSet: action,
        setPhoneCode: action,
      },
      {autoBind: true},
    );
    // makePersistable(this, {
    //   name: 'CounterPersistStore',
    //   properties: ['count'],
    //   storage: AsyncStorage,
    // });
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }
  setPhoneCode(code: string) {
    this.phoneCode = code;
  }
  setLoggedIn(loggedIn: boolean) {
    this.isLoggedIn = loggedIn;
  }
  increment() {
    this.count += 1;
  }
  decrement() {
    this.count -= 1;
  }
  setPin(pin: string) {
    this.pin = pin;
  }
  setIsPinSet(isSet: boolean) {
    this.isPinSet = isSet;
  }
  setConfirmPin(pin: string) {
    this.confirmPin = pin;
  }
}

const appStore = new AppStore();

export default appStore;
