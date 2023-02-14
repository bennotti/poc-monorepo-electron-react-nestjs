import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Sample } from "../entities/sample.entity";
import { BaseRepository } from "./base.repository";


@Injectable()
export class SampleRepository extends BaseRepository<Sample>{

    constructor(
        @InjectModel(Sample.name) sampleModel: Model<Sample>
    ) {
      super(sampleModel);
    }
}
