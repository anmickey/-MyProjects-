import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';
import { ToastTypes } from './toast.conf';

export function actionToast(text: string, type: ToastTypes) {
  toast(text, {
    autoClose: 2000,
    type: toast.TYPE[type],
  });
}
