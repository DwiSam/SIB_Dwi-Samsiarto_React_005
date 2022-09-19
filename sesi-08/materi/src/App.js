import ExternalCSS from './components/externalCSS';
import ExternalModuleCSS from './components/externalModuleCSS';
import ExternalObjectVariableCSS from './components/externalObjectVariableCSS';
import InlineCSS from './components/inlineCSS';
import ObjectVariableCSS from './components/objectVariableCSS';
import StyledComponents from './components/styledComponents';

const App = () => {
  return (
    <div className="App">
      <InlineCSS />
      <ObjectVariableCSS />
      <ExternalCSS />
      <ExternalModuleCSS />
      <ExternalObjectVariableCSS />
      <StyledComponents />
    </div>
  );
}

export default App;