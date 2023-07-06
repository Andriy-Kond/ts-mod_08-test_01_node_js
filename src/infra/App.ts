import { Tcp } from './Tcp';
import { IService } from '../types/serves';

export class App implements IService {
  private static instance: App; // щоби App не запускався декілька разів. Робить з нього singleTone

  private tcp: IService = new Tcp();

  // Якщо App вже запущений, то він буде посилатись на самого себе.
  constructor() {
    if (!App.instance) {
      App.instance = this;
    }

    return App.instance;
  }

  async init() {
    const { tcp } = this;
    console.log('App started');

    await tcp.init();

    return true;
  }
}
