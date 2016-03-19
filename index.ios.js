var React = require('react-native');
var Main = require('./src/main');


var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
} = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class githubNotetaker extends React.Component{
  render() {
    return (
      <Navigator
      style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker',
          component: Main
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
        />
    );
  }
};


AppRegistry.registerComponent('AwesomeProject', () => githubNotetaker);
