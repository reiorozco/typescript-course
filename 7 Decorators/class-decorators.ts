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

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component({ selector: "#my-selector" })
@Pipe
// Multiple decorators are applied in reverse order.
// Pipe followed by Component.  f(g(x))
export class ProfileComponent {}
