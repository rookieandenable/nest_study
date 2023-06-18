import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestHttpParamModule } from './test-http-param/test-http-param.module';

@Module({
  imports: [TestHttpParamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
