type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = options;
    constructor.prototype.insertDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

@Component({ selector: "#my-selector" })
export class ProfileComponent {}
