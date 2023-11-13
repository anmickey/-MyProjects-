export type CollapsibleConf = {
  arr?: ArrayType[];
  first?: string;
  className?: string;
  title: React.ReactNode;
};

export type ArrayType = {
  id: string | number;
  ru: string;
  en: string;
  handler?: (item: any) => void;
};
