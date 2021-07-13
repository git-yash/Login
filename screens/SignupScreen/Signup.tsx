import React from "react";
import { Container, Root, View, Text, Form, Item, Label, Input, Button } from "native-base";
import { Image, Pressable } from "react-native";

function Signup({navigation}) {
  return (
    <Root>
      <Container>
        <View
          style={{
            backgroundColor: '#CFF6FF',
            height: 160,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 7,
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 30,
            }}
            source={require('../../assets/images/img.png')}
          />
        </View>
        <Form style={{paddingTop: 20}}>
          <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
            <Label>Confirm Password</Label>
            <Input />
          </Item>
        </Form>
        <Button
          rounded
          style={{
            alignSelf: 'center',
            marginTop: 50,
            backgroundColor: '#3dbc73',
          }}>
          <Text> Log In </Text>
        </Button>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{marginTop: 30}}>Already have an account?</Text>
          <Pressable
            style={{marginTop: 30}}
            onPress={() => navigation.navigate('Log In')}>
            <Text style={{color: '#3dbc73'}}> Log In</Text>
          </Pressable>
        </View>
      </Container>
    </Root>
  );
}

export default Signup;
