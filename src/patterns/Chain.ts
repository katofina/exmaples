const ADMIN = "admin",
  USER = "user";

class Query {
  priority: string;
  constructor(priority: string) {
    this.priority = priority;
  }
}

class Handler {
  handlerRequest(request: Query) {
    console.log(request);
  }
  setNextHandler(handler: Handler) {
    console.log(handler);
  }
}

class HandlerUser extends Handler {
  nextHandler: Handler;
  setNextHandler(handler: Handler) {
    this.nextHandler = handler;
  }

  handlerRequest(request: Query) {
    if (request.priority === USER) {
      console.log("Handle request by userHandler");
    } else if (this.nextHandler !== null) {
      this.nextHandler.handlerRequest(request);
      console.log()
    } else console.log("Request can not be handled");
  }
}

class HandlerAdmin extends Handler {
  handlerRequest(request: Query) {
    if (request.priority === ADMIN) {
      console.log("Handle request by adminHandler");
    } else console.log("Request can not be handled");
  }
}

const handlerUser = new HandlerUser();
const handlerAdmin = new HandlerAdmin();
const request = new Query(USER);
const request2 = new Query(ADMIN);
handlerUser.setNextHandler(handlerAdmin);
console.log('user, user');
handlerUser.handlerRequest(request);
console.log('user, admin');
handlerUser.handlerRequest(request2);
console.log('admin, user');
handlerAdmin.handlerRequest(request);
console.log('admin, admin');
handlerAdmin.handlerRequest(request2);
