import { StyleSheet} from 'react-native';
import { NavigationComponent } from './Navigation/NavigationComponent';
import { ContextoContainer} from './Context/ContextoContainer';
import { RNSScreen } from 'react-native-screens';



export default function App() {
  return (
    <ContextoContainer>
      <NavigationComponent/>
    </ContextoContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
