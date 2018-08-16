export default {
  formatToPubdate: date => {
    const day = new Date(date)
    return `${day.getFullYear()}年 ${day.getMonth()}月 ${day.getDate()}日`
  }
}
