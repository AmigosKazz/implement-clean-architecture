import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
} from '@nestjs/common';  
import { IFormatExceptionMessage } from 'src/domain/IFormatExceptionMessage';
@Injectable()
export class ExceptionsService {
    badRequestException(data: IFormatExceptionMessage): void {
        throw new BadRequestException(data);
    }

    internalServerErrorException(data?: IFormatExceptionMessage): void {
        throw new InternalServerErrorException(data);
    }
    
    forbiddenException(data?: IFormatExceptionMessage): void {
        throw new ForbiddenException(data);
    }
    
    UnauthorizedException(data?: IFormatExceptionMessage): void {
        throw new UnauthorizedException(data);
    }
}
