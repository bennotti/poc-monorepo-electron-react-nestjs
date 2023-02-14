/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { DataResponseApiDto } from '../dtos/data-response-api.dto';

export const ApiDataResponseApiResponse = <DataDto extends Type<unknown>>(model: DataDto): any => {
  return applyDecorators(
    ApiExtraModels(DataResponseApiDto, model),
    ApiOkResponse({
      schema: {
        properties: {
          result: {
            type: 'boolean',
          },
          message: {
            type: 'string',
          },
          data: { $ref: getSchemaPath(model) },
        },
      },
    }),
  );
};
