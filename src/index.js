import './style';
import { version } from '../package.json';

export default function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <div>{`v${version}`}</div>
    </div>
  );
}
