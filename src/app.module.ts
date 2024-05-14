import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Producto } from './productos/entities/producto.entity';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3306,
      username:'root',
      password: '',
      database:'crud',
      entities: {Producto},
      synchronize:true
    }),
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
