import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { FallbackController } from './fallback.controller';
import { FallbackService } from './fallback.service';

describe('FallbackController', () => {
  let fallbackController: FallbackController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FallbackController],
      providers: [FallbackService],
    }).compile();

    fallbackController = app.get<FallbackController>(FallbackController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fallbackController.handleFallbackCallback()).toBe('Hello World!');
    });
  });
});
