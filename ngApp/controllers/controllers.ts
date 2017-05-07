namespace form_validation.Controllers {

    export class CarController {
        public model = "";
        public price = 0;

        public add() {
          console.log(`Model: ${this.model}`);
          console.log(`Price: ${this.price}`);
        }
    }


    angular.module('form_validation').controller('CarController', CarController);

}
