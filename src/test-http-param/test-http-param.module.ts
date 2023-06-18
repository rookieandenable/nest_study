import { Module } from '@nestjs/common';
import { TestHttpParamService, HttpGetParam, TestInject_1, TestInject_2, TestInject_5 } from './test-http-param.service';
import { TestHttpParamController, HttpUrlTestController, TestInjectController } from './test-http-param.controller';

@Module({
  controllers: [
    TestHttpParamController,
    HttpUrlTestController,
    TestInjectController
  ],
  providers: [
    TestHttpParamService, 
    HttpGetParam,
    TestInject_5,
    {
      provide: 'TestInject_1',
      useClass: TestInject_1
    },
    {
      provide: TestInject_2,
      useClass: TestInject_2
    },
    {
      provide: 'testInject_3',
      useExisting: 'test_inject_3',
      useValue: {
        name: 'jack',
        age: '27'
      }
    },
    {
      provide: 'person',
      useValue: {
        name: '张三',
        alias: 'lucky'
      }
    },
    {
      provide: 'testInject_4',
      useFactory(person: {name: string, alias: string}, test_5: TestInject_5) {
        return {
          name: person.name,
          info: test_5.inject_5()
        }
      },
      inject: ['person', TestInject_5]
    }
  ]
})
export class TestHttpParamModule {}
