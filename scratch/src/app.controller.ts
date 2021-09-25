import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
  @Get('/testing')
  getRootRoute() {
    return 'hi there!'
  }

}