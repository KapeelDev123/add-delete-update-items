import { View, StyleSheet, Text } from 'react-native'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'
import { globalStyles } from '../../constants/styles'

function ExpensesOutPut({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  )
}

export default ExpensesOutPut

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: globalStyles.colors.primary700,
  },
  infoText: {
    marginTop: 32,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})
