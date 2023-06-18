import { Get, Post, Body, Patch, Param, Delete, Query, Controller, Inject } from '@nestjs/common';
import { TestHttpParamService, HttpGetParam, TestInject_1, TestInject_2 } from './test-http-param.service';
import { CreateTestHttpParamDto, HttpParamTestDto } from './dto/create-test-http-param.dto';
import { UpdateTestHttpParamDto } from './dto/update-test-http-param.dto';

@Controller('test-http-param')
export class TestHttpParamController {
  constructor(private readonly testHttpParamService: TestHttpParamService) {}

  @Post()
  create(@Body() createTestHttpParamDto: CreateTestHttpParamDto) {
    return this.testHttpParamService.create(createTestHttpParamDto);
  }

  @Get()
  findAll() {
    return this.testHttpParamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testHttpParamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestHttpParamDto: UpdateTestHttpParamDto) {
    return this.testHttpParamService.update(+id, updateTestHttpParamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testHttpParamService.remove(+id);
  }
}

// 处理请求参数的五种方式
@Controller('api/url')
export class HttpUrlTestController {
  constructor(private readonly httpGetParam: HttpGetParam) {}

  @Get('query')
  urlQuery(@Query('name') name: string, @Query('age') age: string) {
    return this.httpGetParam.urlQuery(name, +age)
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return this.httpGetParam.urlParam(+id)
  }


  @Post()
  urlEncoded(@Body() obj: HttpParamTestDto) {
    return this.httpGetParam.urlEncoded(obj)
  }

  @Post('json')
  urlJson(@Body() obj: HttpParamTestDto) {
    return this.httpGetParam.urJson(obj)
  }

  @Post('formData')
  urlFormData(obj: HttpParamTestDto) {
    return this.httpGetParam.urlFormData(obj)
  }
}

@Controller('inject')
export class TestInjectController {
  constructor(
    private readonly test_2: TestInject_2
  ) {}

  // 注入 字符串 写法
  @Inject('TestInject_1')
  private readonly test_1: TestInject_1

  @Inject('testInject_3')
  private readonly test_3: { name: string, age: string }

  @Inject('testInject_4')
  private readonly test_5: { name: string, info: string }

  @Get('inject_1')
  t_1() {
    return this.test_1.inject_1()
  }

  @Get('inject_2')
  t_2() {
    return this.test_2.inject_2()
  }

  @Get('inject_3')
  t_3() {
    return this.test_3
  }

  @Get('inject_5')
  t_5() {
    return this.test_5.name + this.test_5.info
  }
}
