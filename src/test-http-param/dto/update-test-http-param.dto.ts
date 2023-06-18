import { PartialType } from '@nestjs/mapped-types';
import { CreateTestHttpParamDto } from './create-test-http-param.dto';

export class UpdateTestHttpParamDto extends PartialType(CreateTestHttpParamDto) {}
