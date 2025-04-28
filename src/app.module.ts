import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { UserService } from './user/user.service';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  controllers: [],
  providers: [UserService],
})
export class AppModule {}
