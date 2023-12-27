import { View, Text, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '../../constants/styles'

function Input({ label, style, textInputConfig, invalid }) {
  const inputStyles = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput)
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: globalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: globalStyles.colors.primary700,
    backgroundColor: globalStyles.colors.primary100,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: globalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: globalStyles.colors.error50,
  },
})
