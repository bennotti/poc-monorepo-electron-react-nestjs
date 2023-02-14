import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Sample } from "../entities/sample.entity";


@Injectable()
export class BaseRepository<T> {

    constructor(
        private readonly model: Model<T>
    ) { }
    async save<TDto>(newDto: TDto): Promise<T> {
        const createdBudget = new this.model(newDto);
        return await createdBudget.save() as T;
    }
    async getAll(): Promise<T[]> {
        return await this.model.find({}, { __v: false }).sort({ name: +1 }).exec();
    }
    async getByID(id: string): Promise<T> {
        return this.model.findById({ _id: id });
    }
    async deleteByID(id: string): Promise<T> {
        return this.model.findOneAndDelete({ _id: id });
    }
    async updateByID<TDto>(id: string, newDto: TDto): Promise<T> {
        return await this.model.replaceOne({ _id: id }, newDto) as T;
    }

}
