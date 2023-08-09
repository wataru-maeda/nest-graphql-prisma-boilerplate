import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [PostService],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
