const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export const getMonth = (date) => monthNames[date.getMonth()]

export const getDayMonth = (date) => `${date.getDate()}/${date.getMonth() + 1}`
