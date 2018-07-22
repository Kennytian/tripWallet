export default function iiHOC(WrappedComponent, pageName) {
  return class Enhancer extends WrappedComponent {
    componentDidMount() {
      console.log('Enhancer componentDidMount Logged', pageName);
    }

    render() {
      return super.render();
    }
  };
}
