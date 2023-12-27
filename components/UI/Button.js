import { Pressable, View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../constants/styles'

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: globalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: globalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: globalStyles.colors.primary100,
    borderRadius: 4,
  },
})
