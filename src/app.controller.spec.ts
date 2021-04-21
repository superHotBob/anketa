import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<HelloController>(HelloController);
      expect(appController.findALL()).toBe('Hello World!');
    });
  });
});
