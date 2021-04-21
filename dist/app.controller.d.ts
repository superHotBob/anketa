import { AppService } from './app.service';
export declare class HelloController {
    private readonly appService;
    constructor(appService: AppService);
    findALL(): string;
}
