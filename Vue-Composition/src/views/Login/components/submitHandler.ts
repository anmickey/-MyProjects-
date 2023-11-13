export async function submitHandler<T>({ landing, body, v$, handler }: SubmitConf<T>) {
  if (landing) {
    return;
  }

  const result = await v$.$validate();
  if (!result) {
    return;
  }
  handler({ ...body });
}

interface SubmitConf<T> {
  landing: boolean;
  body: T;
  v$: any;
  handler: (body: T) => void;
}
