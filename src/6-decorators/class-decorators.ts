// # Decorator Factory
type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called.");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM.");
    };
    constructor.prototype.options = options;
  };
}

@Component({ selector: "#id-componentToSelect" })
class ProfileComponent {
  constructor(public name: string) {}
}

export let profileComponent = new ProfileComponent("Rei");
