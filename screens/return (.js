import React, { useState } from "react";
import {View} from "react-native";
import NativeForms from "native-forms";
import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const App = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);

  return (
    <View /*style={{ flex: 1,alignItems: "center" }}*/>
    <Block flex={false} row center space="between" /*style={styles.header}*/>
      <Text h2 bold center>{"Templatka kontaktowa"}</Text>
    </Block>
    
    <Block flex={false} row center space="between" middle padding={[theme.sizes.base / 0.8, 97]} /*style={styles.header}*/>
      <Text h2 light center>templatka kontaktowa</Text>
      </Block>
        <Block middle padding={[theme.sizes.base / 0.2, 10]}>
        <Button
          gradient
          onPress={show}
        >
          <Text h4 center white>
             Skontaktuj się z nami !
          </Text>
        </Button>
      </Block>
      {hasForm && (
        <NativeForms
          form="https://my.nativeforms.com/N92MP1jZmcUTwcHSk1Db"
          onClose={hide}
        />
      )}
  </View>
  );
};


export default App;