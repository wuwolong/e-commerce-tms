function checkPasswordRule(value: string): string {
  if (value.length < 6) {
    return 'The password contains a maximum of 6 characters'
  }
  return 'Check pass'
}
export const validatePassword = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('Please enter your password'))
  } else {
    const result: string = checkPasswordRule(value)
    if (result === 'Check pass') {
      callback()
    } else {
      callback(new Error(result))
    }
  }
}
