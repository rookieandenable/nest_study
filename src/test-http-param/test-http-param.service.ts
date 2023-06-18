import { Injectable } from '@nestjs/common';
import { CreateTestHttpParamDto, HttpParamTestDto } from './dto/create-test-http-param.dto';
import { UpdateTestHttpParamDto } from './dto/update-test-http-param.dto';

@Injectable()
export class TestHttpParamService {
  create(createTestHttpParamDto: CreateTestHttpParamDto) {
    return 'This action adds a new testHttpParam';
  }

  findAll() {
    return `This action returns all testHttpParam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testHttpParam`;
  }

  update(id: number, updateTestHttpParamDto: UpdateTestHttpParamDto) {
    return `This action updates a #${id} testHttpParam`;
  }

  remove(id: number) {
    return `This action removes a #${id} testHttpParam`;
  }
}

@Injectable()
export class HttpGetParam {
  urlParam(id: number) {
    return `get http url param id ${id}`
  }

  urlQuery(name: string, id: number) {
    return `get http query name=${name} id=${id}`
  }

  urlEncoded(obj: HttpParamTestDto) {
    return `get http url encoded name = ${JSON.stringify(obj)}`
  }

  urJson(obj: HttpParamTestDto) {
    return `json --- ${JSON.stringify(obj)}`
  }

  urlFormData(obj: HttpParamTestDto) {
    return `form data -- ${JSON.stringify(obj)}`
  }
}

@Injectable()
export class TestInject_1 {
  inject_1() {
    return 'inject 1'
  }
}

@Injectable()
export class TestInject_2 {
  inject_2() {
    return 'inject 2'
  }
}

@Injectable()
export class TestInject_5 {
  inject_5() {
    return 'inject 5'
  }
}
