export const valid = (item: string, select: string) => {
  const config: any = {};
  if (item == 'email') {
    config.value = /[a-z0-9%^$#_]*@[a-z\-0-9]*\.[a-z]{2,4}/gi;
    config.message = select.includes('Ru')
      ? 'Неверный адрес электронной почты'
      : 'Incorrect E-Mail Address';
  }
  if (item == 'tel') {
    config.value = /^\d{9,10}$/gi;
    config.message = select.includes('Ru')
      ? 'Неверный номер телефона'
      : 'Wrong phone number';
  }
  if (item == 'password') {
    config.value =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;
    config.message = config.message = select.includes('Ru')
      ? 'Минимум восемь символов, минимум одна заглавная буква и одна цифра'
      : 'At least eight characters, at least one capital letter and one number';
  }
  return config;
};
