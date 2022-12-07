import { ProfileComponent } from "./7 Decorators/class-decorators";
import { Person } from "./7 Decorators/method-decorators";
import { User } from "./7 Decorators/property-decorators";

import { calculateTax } from "./8 Integration-with-JS/tax";

import * as _ from "lodash";

console.log(ProfileComponent);
console.log(Person);
console.log(User);

let tax = calculateTax(100);
console.log(tax);

_.clone([1, 2, 3]);
