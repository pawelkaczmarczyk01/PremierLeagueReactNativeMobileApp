import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import PremierLeague from './src/screens/Premier League';
import Menu from "./src/screens/Menu";
import Tabela from "./src/screens/menuOptions/Tabela";
import Strzelcy from "./src/screens/menuOptions/Strzelcy";
import Historie from "./src/screens/menuOptions/Historie";
import TabelaSzczegóły from "./src/screens/menuOptionsDetails/TabelaSzczegóły";
import StrzelcySzczegóły from "./src/screens/menuOptionsDetails/StrzelcySzczegóły";
import Stadiony from "./src/screens/menuOptions/Stadiony";
import StadionySzczegóły from "./src/screens/menuOptionsDetails/StadionySzczegóły";
import HistorieSzczegóły from "./src/screens/menuOptionsDetails/HistorieSzczegóły";

const AppNavigator = createStackNavigator({
        PremierLeague: {screen: PremierLeague},
        Home: {screen: Home},
        Menu: {screen: Menu},
        Tabela: {screen: Tabela},
        Strzelcy: {screen: Strzelcy},
        Historie: {screen: Historie},
        TabelaSzczegóły: {screen: TabelaSzczegóły},
        StrzelcySzczegóły: {screen: StrzelcySzczegóły},
        Stadiony: {screen: Stadiony},
        StadionySzczegóły: {screen: StadionySzczegóły},
        HistorieSzczegóły: {screen: HistorieSzczegóły}
    },
    {
      initialRouteParams: 'PremierLeague',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
