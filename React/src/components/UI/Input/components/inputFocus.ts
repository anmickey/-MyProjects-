const focus = (e: React.FocusEvent<HTMLInputElement>) => {
	e.target.removeAttribute('readOnly');
	const target = e.target
		?.closest('.inputFiled__block')
		?.querySelector('.inputFiled__text');

	if (e.type != 'blur') {
		target?.classList.add('focus');
		target?.closest('.inputFiled')?.classList.add('focus');
	} else {
		if (e.target?.value == '') {
			target?.classList.remove('focus');
			target?.classList.add('old');
			target?.closest('.inputFiled')?.classList.remove('focus');
		}
	}
};

const focusinput = (e: React.MouseEvent<HTMLElement>) => {
	const tartget = e.target as HTMLElement;
	if (!tartget?.closest('.inputFiled__eye')) {
		tartget
			?.closest('.inputFiled__background')
			?.querySelector('input')
			?.focus();
	}
};

const renderInput = () => {
	const arr = Array.from(document.querySelectorAll('.inputFiled__text'));
	for (const item of arr) {
		if ((item.nextElementSibling as HTMLInputElement)?.value) {
			item?.classList.add('focus');
		}
	}
};


export { focus, focusinput, renderInput }