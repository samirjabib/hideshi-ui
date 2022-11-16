import { Provider } from 'react-redux'; 
import { store } from './store';
import { Layout } from './ui/layout/LayoutComponent';


function HideshiApp() {

  return (
    <Provider store={ store }>
      <Layout/>
    </Provider>
  )
}

export default HideshiApp
