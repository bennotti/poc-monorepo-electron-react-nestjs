import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `${process.env.DATABASE_CONNECTIONSTRING}`,
      {
        useNewUrlParser : true,
        useUnifiedTopology: true
      }
    ),
  ],
})
export class DatabaseModule {}
