export function getTime() {
  const time = new Date()
  const hour = time.getHours()
  if (hour < 12 && hour > 5) {
    return 'Good Morning'
  } else if (hour < 18) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}
