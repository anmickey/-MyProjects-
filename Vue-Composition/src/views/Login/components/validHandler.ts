export function validHandler(v: any, name?: string) {
  function formFilter() {
    if (v.$dirty) {
      if (v.required.$invalid) {
        return { state: true, message: v.required.$message };
      } else if (v?.validpass?.$invalid) {
        return { state: true, message: v.validpass.$message };
      } else if (name === 'email' && v?.validemail?.$invalid && v.email.$invalid) {
        return { state: true, message: v.email.$message };
      } else if (name === 'number' && v.numeric.$invalid) {
        return { state: true, message: '' };
      } else if (v?.sameAsPass?.$invalid) {
        return { state: true, message: 'Passwords do not match' };
      } else if (v?.maxLength?.$invalid) {
        return { state: true, message: v.maxLength.$message };
      }
    }

    return { state: false, message: '' };
  }

  return formFilter();
}

export function checkEmail(value: string) {
  return /^[^@]*?@[^.]*?\.[0-9a-z-]{2,4}/.test(value);
}

export const validatePass = (value: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm.test(value);
};
