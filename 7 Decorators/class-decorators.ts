function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
export class ProfileComponent {}
