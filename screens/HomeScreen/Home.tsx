import React from 'react';
import {Text, Button, Container, Root, View} from 'native-base';

const Home = ({navigation}) => {
  return (
    <Root>
      <Container>
        <View>
          <Text>Hello!</Text>
          <Button rounded onPress={() => navigation.navigate('Back')}>
            <Text>Log Out</Text>
          </Button>
        </View>
      </Container>
    </Root>
  );
};

export default Home;
